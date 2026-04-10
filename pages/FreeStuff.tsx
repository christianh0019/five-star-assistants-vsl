import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, BarChart2, BookOpen, Users, Megaphone, DollarSign, Briefcase } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

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
    {
        slug: 'delegation-audit',
        title: 'Cost of Delegation Reality Check',
        description: 'Map every task you spent time on last week, price it at your hourly rate, and see exactly what staying in the weeds is costing you — with a prioritized roadmap to fix it.',
        category: 'Operations',
        tags: ['Delegation', 'Cost Analysis', 'ROI'],
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
            className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
            <div className="flex flex-col flex-grow p-7">
                <div className="flex items-center justify-between mb-4">
                    <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gold">
                        <CategoryIcon size={12} />
                        {resource.category}
                    </span>
                    {resource.isNew && (
                        <span className="px-2.5 py-0.5 rounded-full bg-gold/15 text-gold text-xs font-body font-bold uppercase tracking-wider">New</span>
                    )}
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-3 leading-tight group-hover:text-gold transition-colors">
                    {resource.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">{resource.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                    {resource.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-medium">{tag}</span>
                    ))}
                </div>
                <span className="inline-flex items-center font-bold text-navy group-hover:text-gold group-hover:gap-2 transition-all">
                    Get Free Access <ArrowRight size={16} className="ml-1" />
                </span>
            </div>
        </Link>
    );
};

// ─── Coming Soon Card ─────────────────────────────────────────────────────────

const ComingSoonCard: React.FC<{ title: string; category: string }> = ({ title, category }) => {
    const CategoryIcon = categoryIcons[category] ?? FileText;
    return (
        <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 opacity-50">
            <div className="flex flex-col flex-grow p-7">
                <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                    <CategoryIcon size={12} />
                    {category}
                </span>
                <h3 className="font-heading text-xl font-bold text-gray-400 leading-tight mb-auto">{title}</h3>
                <div className="mt-6">
                    <span className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-400 text-xs font-bold uppercase tracking-wider">Coming Soon</span>
                </div>
            </div>
        </div>
    );
};

// ─── Page ─────────────────────────────────────────────────────────────────────

const FreeStuff: React.FC = () => (
    <div className="min-h-screen bg-gray-50 flex flex-col font-body">
        <SEO
            title="Free Resources | Five Star Assistants"
            description="Free guides, templates, and playbooks for hiring and managing remote workers. Built from the systems we use with 1,000+ businesses."
            keywords="free virtual assistant resources, remote hiring templates, SOP templates, team management guides"
            canonical="https://www.fivestarassistants.com/free-stuff"
        />
        <Navbar alwaysWhite />

        <main className="flex-grow pt-36 md:pt-48 pb-20 px-4 md:px-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-gray-50 to-gray-50 text-navy">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 text-navy font-body text-sm font-semibold mb-6 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                        100% Free — No Strings
                    </div>
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-sm text-navy">
                        Free <span className="text-gold">Resources</span>
                    </h1>
                    <p className="font-subheading text-navy/80 text-xl font-medium tracking-wider leading-relaxed max-w-2xl mx-auto">
                        Guides, templates, and playbooks built from the systems we use with over 1,000 businesses. Take what's useful. Use it today.
                    </p>
                </div>

                {/* Resource Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resources.map((resource) => (
                        <ResourceCard key={resource.slug} resource={resource} />
                    ))}
                    <ComingSoonCard title="The Hiring Checklist: From Job Post to Day One" category="Hiring & Onboarding" />
                    <ComingSoonCard title="The 30-Day VA Onboarding Playbook" category="Management" />
                </div>

            </div>
        </main>

        <Footer />
    </div>
);

export default FreeStuff;
