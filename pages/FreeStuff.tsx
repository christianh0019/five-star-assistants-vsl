import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, BarChart2, BookOpen, Users, Megaphone, DollarSign, Briefcase } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';

// ─── Resource Library Data ────────────────────────────────────────────────────
// To add a new resource: add an entry to this array. That's it.

const categoryIcons: Record<string, React.ElementType> = {
    'Hiring & Onboarding': Users,
    'Sales': BarChart2,
    'Marketing': Megaphone,
    'Operations': Briefcase,
    'Finance': DollarSign,
    'Management': BookOpen,
};

interface Resource {
    slug: string;
    title: string;
    description: string;
    category: string;
    tags: string[];
    isNew?: boolean;
}

const resources: Resource[] = [
    {
        slug: 'sop-guide',
        title: 'The Complete SOP System for Remote Roles',
        description: 'Document any role in your business, set crystal-clear expectations, and hold remote workers accountable from the moment they start. Includes three fully built role examples.',
        category: 'Hiring & Onboarding',
        tags: ['SOPs', 'Remote Teams', 'Accountability'],
        isNew: true,
    },
    // Add more resources here — they'll appear automatically in the grid
];

// ─── Resource Card ────────────────────────────────────────────────────────────

const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => {
    const CategoryIcon = categoryIcons[resource.category] ?? FileText;

    return (
        <Link
            to={`/free-stuff/${resource.slug}`}
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
        >
            {/* Card top band */}
            <div className="h-2 bg-navy w-full" />

            <div className="p-6 flex flex-col flex-1">
                {/* Category + New badge */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-navy/[0.07] flex items-center justify-center">
                            <CategoryIcon size={13} className="text-navy" />
                        </div>
                        <span className="font-body text-xs font-semibold text-gray-500 uppercase tracking-wider">{resource.category}</span>
                    </div>
                    {resource.isNew && (
                        <span className="px-2.5 py-0.5 rounded-full bg-gold/15 text-gold text-xs font-body font-bold uppercase tracking-wider">New</span>
                    )}
                </div>

                {/* Title */}
                <h3 className="font-heading text-navy text-xl font-bold leading-snug mb-3 group-hover:text-gold transition-colors duration-200">
                    {resource.title}
                </h3>

                {/* Description */}
                <p className="font-body text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                    {resource.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {resource.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-body font-medium">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-1.5 text-gold font-body font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                    Get Free Access
                    <ArrowRight size={15} />
                </div>
            </div>
        </Link>
    );
};

// ─── Coming Soon Card ─────────────────────────────────────────────────────────

const ComingSoonCard: React.FC<{ title: string; category: string }> = ({ title, category }) => {
    const CategoryIcon = categoryIcons[category] ?? FileText;
    return (
        <div className="bg-gray-50 border border-dashed border-gray-200 rounded-2xl overflow-hidden flex flex-col opacity-60">
            <div className="h-2 bg-gray-200 w-full" />
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-7 h-7 rounded-lg bg-gray-200 flex items-center justify-center">
                        <CategoryIcon size={13} className="text-gray-400" />
                    </div>
                    <span className="font-body text-xs font-semibold text-gray-400 uppercase tracking-wider">{category}</span>
                </div>
                <h3 className="font-heading text-gray-400 text-xl font-bold leading-snug mb-3">{title}</h3>
                <div className="mt-auto">
                    <span className="px-3 py-1.5 rounded-full bg-gray-200 text-gray-400 text-xs font-body font-bold uppercase tracking-wider">Coming Soon</span>
                </div>
            </div>
        </div>
    );
};

// ─── Page ─────────────────────────────────────────────────────────────────────

const FreeStuff: React.FC = () => (
    <>
        <SEO
            title="Free Resources | Five Star Assistants"
            description="Free guides, templates, and playbooks for hiring and managing remote workers. Built from the systems we use with 1,000+ businesses."
            keywords="free virtual assistant resources, remote hiring templates, SOP templates, team management guides"
            canonical="https://www.fivestarassistants.com/free-stuff"
        />
        <Navbar alwaysWhite />

        <div className="w-full bg-white pt-24 pb-24 px-4">

            {/* Hero */}
            <div className="w-full bg-navy py-16 px-4" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw' }}>
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/30 text-gold font-body text-sm font-semibold mb-6">
                        <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                        100% Free — No Strings
                    </div>
                    <h1 className="font-heading text-white text-4xl md:text-5xl font-bold leading-tight mb-5">
                        Free Stuff
                    </h1>
                    <p className="font-body text-white/75 text-lg max-w-xl mx-auto">
                        Guides, templates, and playbooks built from the systems we use with over 1,000 businesses. Take what's useful. Use it today.
                    </p>
                </div>
            </div>

            {/* Resource Grid */}
            <div className="max-w-5xl mx-auto mt-14">
                <ScrollReveal>
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <p className="font-body text-gold font-bold tracking-widest uppercase text-xs mb-1">Resource Library</p>
                            <h2 className="font-heading text-navy text-2xl font-bold">
                                {resources.length} {resources.length === 1 ? 'Resource' : 'Resources'} Available
                            </h2>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {resources.map((resource) => (
                            <ResourceCard key={resource.slug} resource={resource} />
                        ))}
                        <ComingSoonCard title="The Hiring Checklist: From Job Post to Day One" category="Hiring & Onboarding" />
                        <ComingSoonCard title="The 30-Day VA Onboarding Playbook" category="Management" />
                    </div>
                </ScrollReveal>
            </div>

        </div>

        <Footer />
    </>
);

export default FreeStuff;
