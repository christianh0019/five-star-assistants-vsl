import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, Users, Award,
    MessageSquare, Target, BookOpen, CornerUpRight,
    ChevronDown, Check,
    FileX, BadgeDollarSign, RefreshCw, CreditCard, Timer,
    TrendingUp, Briefcase, Building,
    Zap, Globe,
} from 'lucide-react';
import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SurveyModal from '../../components/SurveyModal';
import ScrollReveal from '../../components/ScrollReveal';
import Button from '../../components/Button';
import SEO from '../../components/SEO';

// ─── Data ──────────────────────────────────────────────────────────────────

const socialProofStats = [
    { icon: Clock,      value: '7 Days',  label: 'Average Time to First Candidate' },
    { icon: DollarSign, value: '$5/hr',   label: 'Starting Rate' },
    { icon: Users,      value: '1,000+',  label: 'Businesses Served' },
    { icon: Award,      value: 'Top 1%',  label: 'Of Applicants Placed' },
];

const taskCategories = [
    {
        icon: MessageSquare,
        title: 'Real-Time Chat Response',
        desc: 'Every visitor who starts a chat gets a fast, helpful response — so no conversation goes unanswered and no potential customer walks away.',
        items: [
            'Monitor and respond to all incoming live chat conversations in real time',
            'Answer product and service questions accurately using your knowledge base',
            'Greet visitors proactively and initiate conversations on key pages',
            'Handle multiple concurrent chats without sacrificing response quality',
            'Maintain a professional, on-brand tone across every chat interaction',
            'Log all chat conversations for quality review and trend analysis',
        ],
    },
    {
        icon: Target,
        title: 'Lead Qualification & Routing',
        desc: 'Visitors sorted into buyers, prospects, and support tickets — with qualified leads handed off immediately to your sales team.',
        items: [
            'Qualify website visitors by asking the right questions early in the conversation',
            'Identify high-intent buyers and route them directly to sales or booking',
            'Collect contact information from interested prospects before ending chats',
            'Filter support requests from sales conversations and route accordingly',
            'Tag and log qualified leads in your CRM immediately after chat ends',
            'Book discovery calls or demos directly from the chat for high-intent visitors',
        ],
    },
    {
        icon: BookOpen,
        title: 'FAQ & Knowledge Base Handling',
        desc: 'Common questions answered instantly using your documentation — so visitors get accurate answers without waiting or getting transferred.',
        items: [
            'Handle frequently asked questions using your existing FAQ docs and resources',
            'Navigate and search knowledge base articles to find accurate answers quickly',
            'Identify knowledge gaps and flag missing FAQ topics to your team',
            'Guide customers through self-service resources when appropriate',
            'Keep common responses updated as your products, pricing, or policies change',
            'Develop and suggest new FAQ content based on repeat question patterns',
        ],
    },
    {
        icon: CornerUpRight,
        title: 'Escalation & Ticket Creation',
        desc: 'Complex issues handled properly — escalated with full context so nothing is dropped and the customer never has to repeat themselves.',
        items: [
            'Identify conversations that require specialist or manager involvement',
            'Create support tickets with full chat context before escalating to your team',
            'Transfer live conversations with handoff notes so customers never repeat themselves',
            'Flag urgent or high-priority issues for immediate escalation',
            'Follow up with customers after escalation to confirm resolution',
            'Document recurring escalation types to identify training or FAQ opportunities',
        ],
    },
];

const advantages = [
    {
        icon: FileX,
        title: 'No Lock-In Contracts',
        desc: 'Work with us month to month. No long-term commitments, ever.',
    },
    {
        icon: BadgeDollarSign,
        title: 'No Setup Fees',
        desc: 'Recruiting is completely free. You only pay once your chat agent starts.',
    },
    {
        icon: RefreshCw,
        title: 'Free Replacement',
        desc: "If someone isn't the right fit, we replace them at no extra cost.",
    },
    {
        icon: CreditCard,
        title: 'One Simple Hourly Rate',
        desc: 'Your rate covers everything — equipment, internet, and all associated costs.',
    },
    {
        icon: MessageSquare,
        title: 'Dedicated — Not Shared',
        desc: 'Your chat agent works exclusively on your website — not splitting attention across chat queues for multiple businesses.',
    },
    {
        icon: Timer,
        title: 'Full Activity Tracking',
        desc: 'Every assistant uses full-screen tracking software monitored by our in-house HR team.',
    },
];

const whoIsThisFor = [
    {
        icon: Building,
        title: 'E-Commerce Sites',
        desc: "Shoppers have questions before they buy — about sizing, shipping, returns, and compatibility. A dedicated chat agent answers them in real time so hesitation doesn't turn into an abandoned cart.",
    },
    {
        icon: Briefcase,
        title: 'SaaS & Tech Companies',
        desc: "New users need real-time help during onboarding and troubleshooting. A dedicated chat agent reduces churn by ensuring users get answers immediately instead of waiting hours for an email reply.",
    },
    {
        icon: TrendingUp,
        title: 'Service Businesses & Agencies',
        desc: "Website visitors convert better when there's a real person to talk to. A dedicated chat agent turns traffic into conversations, conversations into leads, and leads into booked calls — without you being available 24/7.",
    },
];

const pillars = [
    {
        icon: Zap,
        title: 'Visitors Who Get Answers Convert',
        desc: "Most website visitors who have a question will leave if they can't get an immediate answer. Live chat keeps them engaged, answers their objections in real time, and guides them toward a purchase or booking before they bounce. A dedicated agent ensures someone is always there to have that conversation.",
    },
    {
        icon: DollarSign,
        title: 'Save $40k+ vs. a US-Based Chat Agent',
        desc: "Live chat support agents in the US cost $35,000–$50,000/year. Our dedicated specialists start at $5/hr — full-time chat coverage, lead qualification, and escalation handling — without the full-time overhead.",
    },
    {
        icon: Globe,
        title: 'Real-Time Support Is a Competitive Advantage',
        desc: "Most businesses still make customers wait hours for email replies or navigate through automated chatbots. A real person in live chat — who responds within seconds — stands out immediately. It signals that your business is responsive and trustworthy in a way that bots and slow email support never can.",
    },
];

const faqs = [
    {
        question: 'What chat platforms do they work in?',
        answer: "Intercom, Drift, Zendesk Chat, HubSpot Chat, LiveChat, Freshchat, Tidio, Crisp, and most other live chat platforms. We'll match you with an agent experienced in your specific tool.",
    },
    {
        question: 'How fast do they respond to chats?',
        answer: "Response times depend on chat volume and the agent's workload. For dedicated agents handling one website, most clients see sub-60-second first responses during staffed hours. Proactive chat initiation can also be configured to start conversations before visitors reach out.",
    },
    {
        question: 'Can they handle multiple chats at once?',
        answer: "Yes — experienced chat agents typically handle 3–5 simultaneous conversations without a drop in quality. Volume expectations are set during onboarding so you can match the right agent to your traffic levels.",
    },
    {
        question: 'What hours can they cover?',
        answer: "We match agents to your required coverage window — standard US business hours across any time zone. For evening or weekend coverage, we can discuss shift arrangements. For 24/7 coverage, we can help you build a rotation with multiple agents.",
    },
    {
        question: 'Can they book calls or demos directly from chat?',
        answer: "Yes. Many clients have their chat agent book discovery calls or product demos directly using Calendly, HubSpot Meetings, or your booking tool of choice. This is one of the highest-converting use cases — turning a live visitor into a booked appointment without them ever leaving the website.",
    },
    {
        question: 'How do they handle questions they can't answer?',
        answer: "They escalate properly — creating a ticket with full chat context and handing off to the right person. During onboarding, you'll build their knowledge base and establish clear escalation paths so they know exactly when and how to transfer.",
    },
    {
        question: 'Can they also handle email support alongside live chat?',
        answer: "Yes. Many clients have their chat agent handle both live chat and email support. If you want broader coverage, we can discuss combining roles during onboarding and match you with an agent experienced in both channels.",
    },
    {
        question: 'How do I monitor chat quality?',
        answer: "You can review full chat transcripts through your platform at any time. Many clients review a random sample of chats weekly and use CSAT scores to track quality. Full-screen activity tracking gives additional visibility into what the agent is doing throughout their shift.",
    },
];

// ─── Component ─────────────────────────────────────────────────────────────

const LiveChatSupport: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);
    const handleSurveyComplete = () => { closeSurvey(); navigate('/booking'); };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <SEO
                title="Hire a Live Chat Support Agent | Real-Time Website Chat & Lead Qualification | Five Star Assistants"
                description="Hire a dedicated live chat support agent for real-time visitor engagement, lead qualification, FAQ handling, and escalation. Answer every chat, convert more visitors. Free placement. Starting at $5/hr."
                keywords="hire live chat agent, live chat support virtual assistant, outsource live chat, website chat support VA, live chat lead qualification, dedicated chat agent, real-time chat support"
                canonical="https://www.fivestarassistants.com/hire/live-chat-support"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* ── Hero ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Live Chat Support Agents"
                        headline={
                            <>
                                Hire A Dedicated Live Chat Agent.{' '}
                                <span className="text-gold italic">Starting at $5/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Real-time chat response, lead qualification, FAQ handling, and escalation —
                                so every visitor gets an immediate answer and no conversation goes unanswered.{' '}
                                <span className="font-bold text-navy">Free placement. Matched in 7 days.</span>
                            </>
                        }
                    />
                </ScrollReveal>

                {/* ── Social Proof Stats ────────────────────────────────── */}
                <ScrollReveal delay={0.1}>
                    <section className="border-y border-gray-100 bg-gray-50/60 py-8 px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-gray-200">
                                {socialProofStats.map(({ icon: Icon, value, label }) => (
                                    <div key={label} className="flex flex-col items-center text-center px-6">
                                        <div className="w-10 h-10 rounded-full bg-navy/[0.06] flex items-center justify-center mb-3">
                                            <Icon size={18} className="text-navy/70" />
                                        </div>
                                        <p className="font-heading font-bold text-2xl text-navy mb-1">{value}</p>
                                        <p className="font-body text-xs text-gray-500 leading-snug">{label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* ── What They Handle ──────────────────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    WHAT THEY HANDLE
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    Everything a Live Chat Agent Takes Off Your Plate
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    One dedicated agent who owns your live chat — real-time responses, lead qualification, FAQ handling, and proper escalation — so every conversation is covered.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {taskCategories.map(({ icon: Icon, title, desc, items }, idx) => (
                                    <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                                        <div className="w-12 h-12 rounded-xl bg-navy/[0.06] flex items-center justify-center mb-5">
                                            <Icon size={22} className="text-navy/70" />
                                        </div>
                                        <h3 className="font-heading font-bold text-navy text-xl mb-2">{title}</h3>
                                        <p className="font-body text-gray-500 text-sm mb-5 leading-relaxed">{desc}</p>
                                        <ul className="space-y-2">
                                            {items.map((item) => (
                                                <li key={item} className="flex items-start gap-2.5">
                                                    <span className="text-gold font-bold mt-0.5 shrink-0">—</span>
                                                    <span className="font-body text-sm text-gray-700 font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-14 text-center">
                                <Button onClick={openSurvey} variant="primary">
                                    Find My Live Chat Agent
                                </Button>
                                <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* ── Why FSA — Navy Advantages ─────────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-navy px-4 border-t-8 border-gold">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    WHY FIVE STAR ASSISTANTS
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
                                    Everything Included. Zero Hassle.
                                </h2>
                                <p className="font-body text-lg text-blue-100/70 max-w-xl mx-auto">
                                    We've removed every friction point from hiring a dedicated live chat agent so your website visitors get real answers from a real person — starting fast.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
                                {advantages.map(({ icon: Icon, title, desc }, idx) => (
                                    <div key={idx} className="bg-white/[0.05] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] transition-colors duration-200">
                                        <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                                            <Icon size={22} className="text-gold" />
                                        </div>
                                        <h3 className="font-heading font-bold text-white text-lg mb-2 leading-snug">{title}</h3>
                                        <p className="font-body text-sm text-blue-100/60 leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="text-center">
                                <Button onClick={openSurvey} variant="primary">Get Started — It's Free</Button>
                                <p className="font-heading italic text-white/30 text-sm mt-3">No setup fees. No lock-in contracts.</p>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* ── Who Is This For ───────────────────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-white px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    WHO THIS IS FOR
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    Built For Businesses That Want To Convert More Visitors
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    If your website gets traffic but visitors are leaving without converting — or your chat widget is going unanswered — a dedicated live chat agent changes that immediately.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {whoIsThisFor.map(({ icon: Icon, title, desc }, idx) => (
                                    <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                                        <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-5">
                                            <Icon size={22} className="text-gold" />
                                        </div>
                                        <h3 className="font-heading font-bold text-navy text-xl mb-3 leading-snug">{title}</h3>
                                        <p className="font-body text-gray-600 text-sm leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* ── Built Around Your Website Visitors ────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">

                            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                        WHY FSA FOR LIVE CHAT
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Your Website Visitors
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Most businesses install a chat widget and then either ignore it, hand it off to someone who's too busy to respond properly, or rely on a bot that frustrates more visitors than it helps. The result is a tool that makes the business look less responsive, not more.</p>
                                        <p>At Five Star Assistants, we match you with a dedicated live chat agent who monitors your chat daily — responding in real time, qualifying leads, and handling support — so every visitor who reaches out gets a helpful answer from a real person.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">Book A Discovery Call</Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>
                                <div>
                                    <img src="/images/va-2.png" alt="Live chat agent responding to website visitors" className="w-full rounded-[2rem] shadow-xl object-cover" />
                                </div>
                            </div>

                            <div className="text-center mb-12">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    THREE REASONS TO CHOOSE FSA
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy">
                                    Why Businesses Trust Five Star Assistants
                                </h2>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                                <div className="flex flex-col gap-6">
                                    {pillars.map(({ icon: Icon, title, desc }, idx) => (
                                        <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex gap-5 items-start">
                                            <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center flex-shrink-0">
                                                <Icon size={22} className="text-gold" />
                                            </div>
                                            <div>
                                                <h3 className="font-heading font-bold text-navy text-lg mb-2 leading-snug">{title}</h3>
                                                <p className="font-body text-gray-600 text-sm leading-relaxed">{desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <img src="/images/va-3.png" alt="Five Star Assistant at work" className="w-full rounded-[2rem] shadow-xl object-cover" />
                                </div>
                            </div>

                            <div className="mt-14 text-center">
                                <Button onClick={openSurvey} variant="primary">Start Building Your Team</Button>
                                <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                            </div>

                        </div>
                    </section>
                </ScrollReveal>

                {/* ── FAQ ───────────────────────────────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-white px-4 border-t border-gray-100">
                        <div className="max-w-3xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <div className="flex items-center justify-center gap-4 mb-6">
                                    <span className="w-12 h-[1px] bg-gold" />
                                    <span className="font-body text-gold font-bold tracking-[0.2em] uppercase text-xs">FAQ</span>
                                    <span className="w-12 h-[1px] bg-gold" />
                                </div>
                                <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy">Common Questions</h2>
                            </div>
                            <div className="flex flex-col gap-3">
                                {faqs.map((faq, idx) => (
                                    <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <button
                                            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-navy/[0.02] transition-colors duration-200"
                                        >
                                            <span className="font-heading font-bold text-lg text-navy leading-snug">{faq.question}</span>
                                            <ChevronDown size={20} className={`text-gold flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                                            <div className="px-6 pb-5 pt-1 border-t border-gray-100">
                                                <p className="font-body text-gray-500 leading-relaxed">{faq.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* ── Final CTA ─────────────────────────────────────────── */}
                <ScrollReveal>
                    <section className="bg-navy py-24 md:py-36 px-4 relative overflow-hidden border-t-8 border-gold">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
                        <div className="max-w-4xl mx-auto text-center relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-body text-sm font-semibold mb-8">
                                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                                READY TO GET STARTED?
                            </div>
                            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                                Answer Every Chat.{' '}
                                <span className="text-gold italic">Close More Customers.</span>
                            </h2>
                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us about your website and chat volume and we'll match you with a dedicated live chat agent — in as little as 7 days. No setup fees, no long-term contracts.
                            </p>
                            <div className="flex flex-wrap justify-center gap-3 mb-12">
                                {['No setup fees', 'No lock-in contracts', 'Dedicated — not shared', 'Free placement'].map((item) => (
                                    <div key={item} className="flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-5 py-2.5">
                                        <Check size={14} className="text-gold flex-shrink-0" strokeWidth={3} />
                                        <span className="font-body text-white font-medium text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Button onClick={openSurvey} variant="primary" className="w-full sm:w-auto min-w-[320px] text-xl shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] py-5">
                                Book A Free Discovery Call
                            </Button>
                            <p className="font-heading italic text-white/30 text-sm mt-4">100% Free. No Obligation.</p>
                        </div>
                    </section>
                </ScrollReveal>

            </main>

            <Footer />
            <SurveyModal isOpen={isSurveyOpen} onClose={closeSurvey} onComplete={handleSurveyComplete} source="Live Chat Support" />
        </div>
    );
};

export default LiveChatSupport;
