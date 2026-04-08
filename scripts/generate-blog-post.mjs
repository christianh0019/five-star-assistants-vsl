/**
 * Daily Blog Post Generator
 * Calls the Claude API to generate a new blog post and appends it to data/blogPosts.json.
 * Also updates public/sitemap.xml with the new post URL.
 *
 * Usage: node scripts/generate-blog-post.mjs
 * Requires: ANTHROPIC_API_KEY environment variable
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BLOG_POSTS_PATH = resolve(__dirname, '../data/blogPosts.json');
const SITEMAP_PATH = resolve(__dirname, '../public/sitemap.xml');

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

async function generatePost(existingTitles, existingSlugs, nextId) {
    const today = new Date().toISOString().split('T')[0];
    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey) {
        throw new Error('ANTHROPIC_API_KEY environment variable is not set.');
    }

    const avoidList = existingTitles.slice(0, 20).join('\n- ');

    const prompt = `You are writing a blog post for Five Star Assistants (fivestarassistants.com), a B2B virtual assistant agency. They place trained, managed remote assistants with small and medium-sized businesses. Key facts:
- Placements start at $4/hr
- No lock-in contracts
- Free placement (clients pay nothing to get matched)
- Target audience: small business owners, entrepreneurs, real estate agents, agency owners, service businesses

Write a complete, SEO-optimized blog post that would be genuinely useful to a small business owner. Choose a topic that is NOT already covered by these existing posts:
- ${avoidList}

Good topic ideas: delegation tactics, specific VA use cases (bookkeeping, customer service, social media, etc.), hiring mistakes, scaling tips, productivity systems, remote team management, cost savings, industry-specific VA guides.

Write at a clear, simple level — assume the reader is a busy business owner, not a business consultant. Use short paragraphs and avoid jargon.

Return ONLY a valid JSON object (no markdown, no code fences, just raw JSON) with exactly these fields:
{
  "id": "${nextId}",
  "slug": "url-friendly-slug-here",
  "title": "Blog Post Title Here",
  "excerpt": "1-2 sentence summary used as the meta description and post preview. Should make someone want to click.",
  "content": "<h2>Section Title</h2><p>Paragraph text...</p>",
  "category": "one of: Delegation | Remote Teams | Business Growth | Productivity | Hiring & Staffing",
  "tags": ["tag1", "tag2", "tag3", "tag4"],
  "publishedAt": "${today}",
  "readTime": "X min read",
  "metaTitle": "Post Title | Five Star Assistants (under 60 chars total)",
  "metaDescription": "155-160 character meta description with primary keyword",
  "coverImage": ""
}

Requirements for the content field:
- 600–900 words of HTML
- Use <h2> for main sections, <h3> for subsections
- Use <p>, <ul>, <li>, <strong> tags
- No <html>, <body>, <head>, or <br> tags
- At least 4 sections with H2 headings
- Practical, actionable content — not fluff`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
            'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
            model: 'claude-opus-4-6',
            max_tokens: 4000,
            messages: [{ role: 'user', content: prompt }],
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
        // Try to extract JSON if Claude wrapped it in anything
        const match = text.match(/\{[\s\S]*\}/);
        if (!match) throw new Error('Could not parse JSON from Claude response.');
        post = JSON.parse(match[0]);
    }

    // Validate required fields
    const required = ['slug', 'title', 'excerpt', 'content', 'category', 'publishedAt', 'readTime', 'metaTitle', 'metaDescription'];
    for (const field of required) {
        if (!post[field]) throw new Error(`Missing required field: ${field}`);
    }

    // Assign cover image (rotate through pool based on post count)
    const imageIndex = (existingTitles.length) % COVER_IMAGES.length;
    post.coverImage = COVER_IMAGES[imageIndex];
    post.id = String(nextId);

    // Ensure slug is unique
    if (existingSlugs.includes(post.slug)) {
        post.slug = `${post.slug}-${today}`;
    }

    return post;
}

function updateSitemap(slug, date) {
    const sitemap = readFileSync(SITEMAP_PATH, 'utf-8');
    const newEntry = `  <url>
    <loc>https://www.fivestarassistants.com/blog/${slug}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;

    // Insert before the closing </urlset>
    const updated = sitemap.replace('</urlset>', `${newEntry}\n\n</urlset>`);
    writeFileSync(SITEMAP_PATH, updated, 'utf-8');
    console.log(`Sitemap updated with /blog/${slug}`);
}

async function main() {
    console.log('Reading existing blog posts...');
    const posts = JSON.parse(readFileSync(BLOG_POSTS_PATH, 'utf-8'));
    const existingTitles = posts.map((p) => p.title);
    const existingSlugs = posts.map((p) => p.slug);
    const nextId = posts.length + 1;

    console.log(`Found ${posts.length} existing posts. Generating post #${nextId}...`);

    const newPost = await generatePost(existingTitles, existingSlugs, nextId);
    console.log(`Generated: "${newPost.title}"`);

    // Add to front (newest first)
    posts.unshift(newPost);
    writeFileSync(BLOG_POSTS_PATH, JSON.stringify(posts, null, 2), 'utf-8');
    console.log(`Saved to blogPosts.json`);

    updateSitemap(newPost.slug, newPost.publishedAt);
    console.log('Done.');
}

main().catch((err) => {
    console.error('Error generating blog post:', err.message);
    process.exit(1);
});
