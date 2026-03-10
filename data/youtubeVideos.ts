export interface YouTubeVideoPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string; // HTML content
    thumbnail: string;
    youtubeUrl: string;
    duration: string;
    date: string;
    readTime: string;
}

export const youtubeVideos: YouTubeVideoPost[] = [
    {
        id: '1',
        slug: 'how-to-hire-first-virtual-assistant',
        title: 'How to Hire Your First Virtual Assistant',
        excerpt: 'Discover the step-by-step process of finding, vetting, and hiring your first virtual assistant to help scale your business.',
        content: `
            <h2>The Secret to Scaling: Delegation</h2>
            <p>If you find yourself working <i>in</i> your business rather than <i>on</i> it, it’s time to delegate. The first step is acknowledging that you cannot do everything yourself.</p>
            <h3>1. Identify Replicable Tasks</h3>
            <p>Start by auditing your week. Every task that doesn't strictly require your expertise (like responding to basic customer inquiries, scheduling, or data entry) goes on the delegation list.</p>
            <h3>2. Define the Role</h3>
            <p>Clarity is key. Before interviewing candidates, write down exactly what success looks like for this role.</p>
            <p>Watch the video above for our full breakdown on effectively onboarding your first VA and setting them up for long-term success with Five Star Assistants.</p>
        `,
        thumbnail: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800',
        youtubeUrl: 'https://youtube.com/watch?v=dQw4w9WgXcQ', // Using dummy video for now
        duration: '12:45',
        date: 'Oct 15, 2023',
        readTime: '4 min read'
    },
    {
        id: '2',
        slug: 'top-tasks-to-delegate-overseas',
        title: 'Top 5 Tasks to Delegate to an Overseas Team',
        excerpt: 'Not sure what to hand off first? Here are the top five tasks that are perfect for delegating to a remote overseas professional.',
        content: `
            <h2>Maximize Your Time ROI</h2>
            <p>Effective delegation is the difference between a stressed business owner and a growing enterprise.</p>
            <h3>1. Inbox Management & Customer Service</h3>
            <p>Free up hours every day by having an assistant handle tier-1 support tickets and email triage.</p>
            <h3>2. Data Entry & CRM Management</h3>
            <p>Keep your databases pristine without spending your own hours doing it.</p>
            <h3>3. Social Media Scheduling</h3>
            <p>Have someone else handle the execution of your content strategy.</p>
            <h3>4. Calendar Management</h3>
            <p>Stop playing email ping-pong to schedule meetings.</p>
            <h3>5. Basic Bookkeeping & Invoicing</h3>
            <p>Ensure you get paid on time without the administrative headache.</p>
            <p>Check the video to learn how to build SOPs (Standard Operating Procedures) around these key tasks.</p>
        `,
        thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
        youtubeUrl: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
        duration: '08:20',
        date: 'Oct 22, 2023',
        readTime: '3 min read'
    },
    {
        id: '3',
        slug: 'why-traditional-hiring-costs-money',
        title: 'Why Traditional Hiring is Costing You Money',
        excerpt: 'Breaking down the hidden costs of local, traditional hiring versus building a remote team.',
        content: `
            <h2>The Hidden Costs of Local Talent</h2>
            <p>When you hire locally, the salary is just the beginning. You also have to factor in payroll taxes, benefits, office space, and equipment.</p>
            <h3>The Global Talent Arbitrage</h3>
            <p>By leveraging global talent pools, you can find incredibly skilled professionals for a fraction of the cost of a local hire.</p>
            <ul>
                <li>No payroll tax complexity</li>
                <li>No health insurance overhead</li>
                <li>No office space requirements</li>
            </ul>
            <p>In this video, we break down the exact math showing how hiring one local employee often equals the cost of an entire remote team.</p>
        `,
        thumbnail: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800',
        youtubeUrl: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
        duration: '15:10',
        date: 'Nov 02, 2023',
        readTime: '5 min read'
    }
];
