import postsData from './blogPosts.json';

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    tags: string[];
    publishedAt: string; // "2026-04-08"
    readTime: string;    // "4 min read"
    metaTitle: string;
    metaDescription: string;
    coverImage: string;
}

export const blogPosts: BlogPost[] = postsData as BlogPost[];
