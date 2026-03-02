export interface CaseStudy {
    id: string;
    slug: string;
    clientName: string;
    industry: string;
    title: string;
    summary: string;
    fullDescription: string;
    videoUrl: string; // Add YouTube or Vimeo URL here
    thumbnailUrl: string; // Placeholder for video thumbnail
    metrics: {
        label: string;
        value: string;
    }[];
    challenge: string;
    solution: string;
    result: string;
}

export const caseStudies: CaseStudy[] = [
    {
        id: "1",
        slug: "builderproject-fulfillment-team",
        clientName: "BuilderProject",
        industry: "Digital Agency",
        title: "BuilderProject Hires Entire Fulfillment Team",
        summary: "How a Marketing Agency Founder Scaled His Business with Overseas Talent",
        fullDescription: "", // Left blank intentionally, as custom rendering will handle the long-form copy.
        videoUrl: "https://assets.cdn.filesafe.space/Vfs1lM3WjyR7NO8AgZeL/media/69a57652b617a7289a80c2f4.mp4",
        thumbnailUrl: "/images/builderproject-thumbnail.png",
        metrics: [
            { label: "Roles Filled", value: "3" },
            { label: "Primary Need", value: "Fulfillment" },
            { label: "Growth Focus", value: "Sales" }
        ],
        challenge: "",
        solution: "",
        result: ""
    },
    {
        id: "2",
        slug: "local-plumbing-dispatch",
        clientName: "FlowRite Plumbing",
        industry: "Local Service",
        title: "Streamlining Dispatch and Customer Follow-Up for a 24/7 Plumbing Service",
        summary: "FlowRite eliminated missed calls and improved customer satisfaction scores by 35% with a dedicated remote dispatch team.",
        fullDescription: "Local service businesses live and die by the phone. FlowRite was losing jobs because their technicians were trying to answer calls while under the sink. We built them a dedicated, 24/7 remote dispatch team.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
        thumbnailUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000",
        metrics: [
            { label: "Missed Calls", value: "Reduced to 0%" },
            { label: "CSAT Score", value: "+35%" },
            { label: "New Revenue", value: "$45k/mo" }
        ],
        challenge: "Technicians were distracted by administrative tasks, leading to poor customer service and lost leads.",
        solution: "Hired and trained two remote dispatchers to handle inbound calls, scheduling, and customer follow-up.",
        result: "Technicians increased their billable hours by 25%, and the company captured $45k/month in previously lost revenue."
    },
    {
        id: "3",
        slug: "real-estate-transaction-coordination",
        clientName: "Apex Realty Group",
        industry: "Real Estate",
        title: "Accelerating Closing Times with Remote Transaction Coordination",
        summary: "Apex Realty dropped their average closing time by 5 days and allowed their top agents to double their deal volume.",
        fullDescription: "Paperwork is the enemy of a high-performing real estate agent. Apex was struggling to manage the sheer volume of compliance and coordination required for their growing pipeline.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
        thumbnailUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000",
        metrics: [
            { label: "Closing Time", value: "-5 Days" },
            { label: "Agent Deal Volume", value: "x2" },
            { label: "Compliance Errors", value: "Zero" }
        ],
        challenge: "Top-producing agents were spending up to 15 hours a week managing emails, chasing signatures, and organizing files.",
        solution: "Placed a highly organized remote Transaction Coordinator to manage the entire process from escrow to close.",
        result: "Agents were freed up to focus entirely on prospecting and client relationships, resulting in a record-breaking sales quarter."
    }
];
