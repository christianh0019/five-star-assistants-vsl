/**
 * Daily Blog Post Generator
 * Calls the Claude API to generate a new blog post and appends it to data/blogPosts.json.
 * Also updates public/sitemap.xml with the new post URL.
 * Optionally generates 2 inline images via Google Gemini image API.
 *
 * Usage: node scripts/generate-blog-post.mjs
 * Requires: ANTHROPIC_API_KEY environment variable
 * Optional: GOOGLE_IMAGEN_API_KEY environment variable (enables inline images)
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BLOG_POSTS_PATH = resolve(__dirname, '../data/blogPosts.json');
const SITEMAP_PATH = resolve(__dirname, '../public/sitemap.xml');
const IMAGES_DIR = resolve(__dirname, '../public/images/blog');

const COVER_IMAGES = [
    'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
];

// Brand context injected as system prompt on every API call
const SYSTEM_PROMPT = `You write blog content for Five Star Assistants (FSA), a B2B offshore staffing company founded by Christian Hostetler. FSA sources, vets, places, and manages overseas talent for U.S. businesses. Clients pay one hourly rate. FSA handles HR, compliance, payroll routing, replacements, and account management underneath. No placement fees ever.

COMPANY: FSA is not a job board or freelancer marketplace. FSA employs the talent under its own contractor agreements. Core value prop: "We find, vet, place, and manage overseas talent so you can build the team you need at 60-70% less than domestic hiring, without doing any of the recruiting, HR, or compliance yourself."

WHO WE'RE WRITING FOR: U.S. business owners at $2M+ revenue who need to build teams, not plug one gap. Many are hitting a growth plateau. They work in agencies, home services, real estate, e-commerce, and professional services. The blog also reaches Stage 1 buyers who search for "virtual assistant" content. "Virtual assistant" is acceptable in titles and SEO meta for discoverability.

CONTENT PILLARS (rotate through these):
1. Operational Pain: Names problems the reader lives with. Founder fatigue, revenue plateaus, scaling bottlenecks, the CEO doing admin work.
2. Offshore Staffing Education: Teaches how offshore hiring works. Roles to offshore vs. keep in-house, timezone management, SOP building, the real economics.
3. Industry Insight and Opinion: Takes a position. What agencies get wrong about offshore hiring, why "VA" undersells what these people do, what breaks when you scale DIY.
4. Proof and Numbers: Cost comparison math, role-specific breakdowns, what clients save, what a bad hire actually costs.

VOICE RULES:
- Write like a 21-year-old founder talking to another business owner over coffee. Direct, plain, conversational.
- Eighth-grade reading level. Short sentences. Use contractions. Fragments are fine.
- Paragraphs are 1-3 sentences max. Assume the reader is on their phone.
- Lead with the pain or the insight. Not with a definition or background.
- Be specific. Numbers beat adjectives.
- Honest about offshore industry problems. Acknowledging quality variance builds credibility.

NEVER USE (these are hard rules, zero exceptions):
- Em dashes. The character looks like this: — (Unicode U+2014). It is completely banned. Every time you want to use one, use a period or a comma instead. Never type this character.
- Emojis or exclamation marks (one max per post).
- leverage (as verb), synergy, ecosystem, disrupt, unlock, game-changer, revolutionary, cutting-edge, world-class
- "in today's fast-paced world," "here's the thing," "it's not about X it's about Y," "full stop," "journey" in business context
- Any sentence starting with "imagine," hollow openers like "Running a business is hard"
- guru, ninja, rockstar, unicorn for talent descriptions

QUALITY TEST before finalizing:
1. Could any generic staffing company have written this? If yes, add specifics.
2. Does it sound like a founder who has done the work, not a content agency?
3. Does any sentence exist only to sound smart or fill space? Cut it.
4. Are all banned words absent? Scan specifically for the em dash character (—) and remove every instance.`;

// ─── Image Generation ──────────────────────────────────────────────────────────

async function generateSingleImage(prompt, slug, index, apiKey) {
    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-preview-image-generation:generateContent?key=${apiKey}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { responseModalities: ['IMAGE'] },
            }),
        }
    );

    if (!response.ok) {
        const err = await response.text();
        throw new Error(`Gemini image API ${response.status}: ${err}`);
    }

    const data = await response.json();
    const parts = data.candidates?.[0]?.content?.parts ?? [];
    const imagePart = parts.find((p) => p.inlineData?.data);

    if (!imagePart) throw new Error('No image data in Gemini response.');

    const mimeType = imagePart.inlineData.mimeType ?? 'image/jpeg';
    const ext = mimeType.includes('png') ? 'png' : 'jpg';
    const filename = `${slug}-${index}.${ext}`;

    mkdirSync(IMAGES_DIR, { recursive: true });
    writeFileSync(resolve(IMAGES_DIR, filename), Buffer.from(imagePart.inlineData.data, 'base64'));

    return filename;
}

function extractH2Headings(html) {
    const results = [];
    const regex = /<h2[^>]*>(.*?)<\/h2>/g;
    let match;
    while ((match = regex.exec(html)) !== null) {
        results.push(match[1].replace(/<[^>]+>/g, '').trim());
    }
    return results;
}

async function generateBlogImages(slug, htmlContent, apiKey) {
    const headings = extractH2Headings(htmlContent);
    if (!headings.length) return [];

    // Target the 2nd and 4th h2 sections (index 1 and 3)
    const targets = [];
    if (headings.length >= 2) targets.push({ heading: headings[1], position: 2 });
    if (headings.length >= 4) targets.push({ heading: headings[3], position: 4 });
    if (headings.length === 1) targets.push({ heading: headings[0], position: 1 });

    const results = [];
    for (let i = 0; i < targets.length; i++) {
        const { heading, position } = targets[i];
        const prompt = `Professional business photograph illustrating: "${heading}". No text, no logos, no watermarks. Clean modern office. Two or three professionals working together. Warm natural lighting. Trustworthy and documentary in style. High quality stock photo.`;

        try {
            const filename = await generateSingleImage(prompt, slug, i + 1, apiKey);
            results.push({ filename, heading, position });
            console.log(`Generated image ${i + 1}: ${filename}`);
        } catch (err) {
            console.warn(`Image ${i + 1} failed (skipping): ${err.message}`);
        }
    }

    return results;
}

function injectImagesIntoHTML(html, images) {
    if (!images.length) return html;

    const positionMap = {};
    for (const img of images) {
        positionMap[img.position] = img;
    }

    let count = 0;
    return html.replace(/<\/h2>/g, (match) => {
        count++;
        const img = positionMap[count];
        if (img) {
            const figure = `<figure class="my-8 not-prose"><img src="/images/blog/${img.filename}" alt="${img.heading}" class="rounded-xl w-full shadow-md" loading="lazy" /></figure>`;
            return `</h2>\n${figure}`;
        }
        return match;
    });
}

// ─── Blog Post Generation ──────────────────────────────────────────────────────

async function generatePost(existingTitles, existingSlugs, nextId) {
    const today = new Date().toISOString().split('T')[0];
    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey) throw new Error('ANTHROPIC_API_KEY environment variable is not set.');

    const avoidList = existingTitles.slice(0, 30).join('\n- ');

    const userPrompt = `Write a new blog post for fivestarassistants.com. Pick a topic NOT already covered:
- ${avoidList}

Choose from one of the content pillars (Operational Pain, Offshore Education, Industry Insight, Proof/Numbers). Rotate pillars.

Good angles: what offshore roles are most underused, the real cost of a bad hire, how to write a job description for an offshore role, what breaks when you scale without systems, industry-specific use cases (agencies, home services, real estate), how to manage a remote team you have never met, why most delegation fails, what to offshore vs. keep in-house.

Return ONLY a valid JSON object (no markdown, no code fences) with exactly these fields:
{
  "id": "${nextId}",
  "slug": "url-friendly-slug",
  "title": "Post title (clear, specific, searchable)",
  "excerpt": "2 sentences max. States the problem and what the post delivers.",
  "content": "<h2>First Section</h2><p>Content...</p>",
  "category": "one of: Delegation | Remote Teams | Business Growth | Productivity | Hiring & Staffing",
  "tags": ["tag1", "tag2", "tag3", "tag4"],
  "publishedAt": "${today}",
  "readTime": "X min read",
  "metaTitle": "SEO title under 60 chars including | Five Star Assistants",
  "metaDescription": "150-160 chars, includes primary keyword",
  "coverImage": ""
}

Content requirements:
- 700-1000 words of HTML
- At least 4 <h2> sections, <h3> for subsections if needed
- Use <p>, <ul>, <li>, <strong>. Short paragraphs, 1-3 sentences each.
- No <html>, <body>, <head>, <br> tags
- Open with the pain or the hook. Not a definition or "in this post we will cover"
- Be specific. Use numbers. Give real examples.
- End with a clear takeaway.

ABSOLUTE HARD RULES FOR THIS POST:
- Zero em dashes (the — character, U+2014). Use a period or comma every single time instead.
- No exclamation marks.`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
            'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
            model: 'claude-opus-4-6',
            max_tokens: 4096,
            system: SYSTEM_PROMPT,
            messages: [{ role: 'user', content: userPrompt }],
        }),
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Claude API error ${response.status}: ${error}`);
    }

    const data = await response.json();
    const text = data.content[0].text.trim();

    let post;
    try {
        post = JSON.parse(text);
    } catch {
        const match = text.match(/\{[\s\S]*\}/);
        if (!match) throw new Error('Could not parse JSON from Claude response.');
        post = JSON.parse(match[0]);
    }

    const required = ['slug', 'title', 'excerpt', 'content', 'category', 'publishedAt', 'readTime', 'metaTitle', 'metaDescription'];
    for (const field of required) {
        if (!post[field]) throw new Error(`Missing required field: ${field}`);
    }

    // Safety net: strip any em dashes that slipped through
    post.content = post.content.replace(/\u2014/g, ',');
    post.title = post.title.replace(/\u2014/g, ',');
    post.excerpt = post.excerpt.replace(/\u2014/g, ',');

    post.coverImage = COVER_IMAGES[existingTitles.length % COVER_IMAGES.length];
    post.id = String(nextId);

    if (existingSlugs.includes(post.slug)) {
        post.slug = `${post.slug}-${today}`;
    }

    // Generate inline images if API key is available
    const googleApiKey = process.env.GOOGLE_IMAGEN_API_KEY;
    if (googleApiKey) {
        console.log('Generating inline images via Gemini...');
        const images = await generateBlogImages(post.slug, post.content, googleApiKey);
        if (images.length) {
            post.content = injectImagesIntoHTML(post.content, images);
            console.log(`Injected ${images.length} image(s) into post content.`);
        }
    } else {
        console.log('GOOGLE_IMAGEN_API_KEY not set, skipping inline images.');
    }

    return post;
}

// ─── Sitemap ───────────────────────────────────────────────────────────────────

function updateSitemap(slug, date) {
    const sitemap = readFileSync(SITEMAP_PATH, 'utf-8');
    const newEntry = `  <url>
    <loc>https://www.fivestarassistants.com/blog/${slug}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;

    const updated = sitemap.replace('</urlset>', `${newEntry}\n\n</urlset>`);
    writeFileSync(SITEMAP_PATH, updated, 'utf-8');
    console.log(`Sitemap updated with /blog/${slug}`);
}

// ─── Main ──────────────────────────────────────────────────────────────────────

async function main() {
    console.log('Reading existing blog posts...');
    const posts = JSON.parse(readFileSync(BLOG_POSTS_PATH, 'utf-8'));
    const existingTitles = posts.map((p) => p.title);
    const existingSlugs = posts.map((p) => p.slug);
    const nextId = posts.length + 1;

    console.log(`Found ${posts.length} existing posts. Generating post #${nextId}...`);

    const newPost = await generatePost(existingTitles, existingSlugs, nextId);
    console.log(`Generated: "${newPost.title}"`);

    posts.unshift(newPost);
    writeFileSync(BLOG_POSTS_PATH, JSON.stringify(posts, null, 2), 'utf-8');
    console.log('Saved to blogPosts.json.');

    updateSitemap(newPost.slug, newPost.publishedAt);
    console.log('Done.');
}

main().catch((err) => {
    console.error('Error generating blog post:', err.message);
    process.exit(1);
});
