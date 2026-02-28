import React from 'react';
import { UserCheck } from 'lucide-react';

interface NicheRolesProps {
    niche: string;
    roles: string[];
}

const NicheRoles: React.FC<NicheRolesProps> = ({ niche, roles }) => {
    return (
        <section className="py-20 md:py-32 bg-white px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                        Remote Roles We Place for {niche}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {roles.map((role, idx) => (
                        <div key={idx} className="bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 rounded-2xl flex flex-col items-center text-center group cursor-default">
                            <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                                <UserCheck className="text-navy group-hover:text-gold w-8 h-8 transition-colors" />
                            </div>
                            <h3 className="font-heading font-bold text-xl text-navy">{role}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NicheRoles;
