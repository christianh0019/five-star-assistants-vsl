import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MasterServicesAgreement: React.FC = () => {
    return (
        <div className="font-sans min-h-screen bg-white">
            <Navbar />

            <main className="pt-32 pb-24 px-4 md:px-8">
                <div className="max-w-4xl mx-auto font-body text-gray-700">
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-8">Master Services Agreement</h1>

                    <div className="space-y-8">

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">1. Definitions</h2>
                            <p className="mb-4">
                                In this Agreement, "Company," "we," "us," or "our" refers to Five Star Assistants LLC, a Pennsylvania limited liability company. "Client," "you," or "your" refers to the client identified in any executed Order Form. The "MSA" or "Agreement" refers to this document. The MSA, together with each Order Form executed under it, governs the engagement of offshore talent placed by Company.
                            </p>
                            <p className="mb-4">The following defined terms have the meanings assigned to them throughout this Agreement:</p>
                            <p className="mb-4">
                                "Hire" means the offshore talent contracted to Company and provided to Client under an executed Order Form. The Hire is a resident of the country specified in their contractor agreement with Company and is engaged by Company as an independent contractor.
                            </p>
                            <p className="mb-4">
                                "Order Form" means the deal-specific document executed by Client and Company that incorporates this MSA by reference and sets forth the Hire details, rate, schedule, scope of work, and other engagement-specific terms.
                            </p>
                            <p className="mb-4">
                                "Engagement" means the working arrangement between Client and the Hire that is governed by an Order Form and this MSA.
                            </p>
                            <p className="mb-4">
                                "Engagement Deposit" means the refundable deposit paid by Client at the start of an Engagement, equal to the first two-week billing period as calculated in the Order Form.
                            </p>
                            <p className="mb-4">
                                "Hourly Rate" means the rate per hour specified in the Order Form, billed in U.S. dollars.
                            </p>
                            <p className="mb-4">
                                "Preferred Schedule" means the working hours and days specified in the Order Form during which the Hire is expected to be available for work.
                            </p>
                            <p className="mb-4">
                                "Verified Productive Hours" means hours during the Preferred Schedule in which the Hire is actively performing work, as confirmed through productivity tracking software and reviewed by the Hire's assigned HR manager prior to invoicing.
                            </p>
                            <p className="mb-4">
                                "Hire Unavailability" means any period during the Preferred Schedule in which the Hire is not available to work due to illness, personal circumstances, public holidays, approved leave, or other absences. Client is not billed for periods of Hire Unavailability.
                            </p>
                            <p className="mb-4">
                                "Fees" means the amounts owed by Client to Company under an Order Form, including hourly fees for Verified Productive Hours, paid leave when used, and any approved third-party expenses.
                            </p>
                            <p className="mb-4">
                                "Confidential Information" has the meaning set forth in Section 14.
                            </p>
                            <p className="mb-4">
                                "Valid Termination" means termination by Client through 14 days' written notice to Company via email, in accordance with Section 12.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">2. Engagement Structure & Independent Contractor Status</h2>

                            <h3 className="text-xl font-semibold text-navy mb-3">2.1 The Three-Party Relationship</h3>
                            <p className="mb-4">This Agreement clarifies the legal relationship between Company, the Hire, and Client.</p>
                            <p className="mb-4">
                                <strong>The Hire is contracted to Company.</strong> The Hire is engaged as an independent contractor of Company under a separate contractor agreement between Company and the Hire. Company holds the contractual relationship with the Hire, pays the Hire, manages the Hire at the structural level, and is the entity through which the Hire's services are provided.
                            </p>
                            <p className="mb-4">
                                <strong>The Hire's services are provided to Client through Company.</strong> Through this Agreement and the applicable Order Form, Company makes the Hire's services available to Client for the duration of the Engagement. Client directs the day-to-day work and receives the output of the Hire's labor.
                            </p>
                            <p className="mb-4">
                                <strong>No direct employment relationship.</strong> Nothing in this Agreement creates an employer-employee relationship between Client and the Hire, between Client and Company, or between Company and Client. The Hire is not Client's employee, contractor, or agent. The Hire is Company's contractor providing services to Client through Company's service structure.
                            </p>
                            <p className="mb-4">
                                <strong>Practical effect.</strong> Client does not handle the Hire's payroll, taxes, benefits, or compliance. Client does not carry employer liability for the Hire. Commercial terms of the Hire's engagement (rate, scope, hours) are set between Company and the Hire, with Client contracting separately with Company for the Hire's services.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">2.2 No Authority to Bind</h3>
                            <p className="mb-4">
                                Neither party, nor their respective employees, contractors, or agents, has authority to bind the other party to any obligation. Each party operates independently and is responsible for its own business decisions, employees, and contractors.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">3. Sourcing, Vetting & Placement</h2>

                            <h3 className="text-xl font-semibold text-navy mb-3">3.1 Sourcing Process</h3>
                            <p className="mb-4">
                                Company sources candidates from a network of qualified offshore talent across multiple countries. Each candidate is screened for skills, English fluency, work history, and cultural fit prior to being presented to Client.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">3.2 Flash Interview Process</h3>
                            <p className="mb-4">
                                Company will present qualified candidates to Client for review through a structured interview process. Client retains sole discretion to select the candidate they wish to engage. If Client does not see a fit among presented candidates, Company will source additional candidates at no additional cost.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">3.3 No Placement Fee</h3>
                            <p className="mb-4">
                                Company does not charge a placement fee, sourcing fee, or recruiting fee for the standard Engagement model. Client pays only for Verified Productive Hours worked once the Engagement begins, plus the Engagement Deposit collected at the start of each Engagement.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">4. Engagement Deposit</h2>

                            <h3 className="text-xl font-semibold text-navy mb-3">4.1 Deposit Required Before Start</h3>
                            <p className="mb-4">
                                Before the Hire's first day of work, Client shall pay the Engagement Deposit specified in the Order Form. The Engagement Deposit equals the first two-week billing period (Hourly Rate × Weekly Hours × 2). The Hire will not commence work until the Engagement Deposit is received.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">4.2 Refundability</h3>
                            <p className="mb-4">
                                The Engagement Deposit is fully refundable upon termination of the Engagement, less any unpaid invoices and other amounts owed by Client to Company under this Agreement. Refunds are issued within seven (7) days of final settlement of all outstanding amounts.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">4.3 Forfeiture Conditions</h3>
                            <p className="mb-4">The Engagement Deposit is forfeited in full, and not refunded, in any of the following circumstances:</p>
                            <p className="mb-4">(a) Client terminates the Engagement without providing the required 14 days' written notice as defined in Section 12;</p>
                            <p className="mb-4">(b) Client breaches the Non-Solicitation provisions in Section 13;</p>
                            <p className="mb-4">(c) Client engages the Hire directly outside of Company's service structure without paying the Direct Hire Transition fee in Section 13;</p>
                            <p className="mb-4">(d) Termination for cause as defined in Section 11 (Professional Conduct).</p>

                            <h3 className="text-xl font-semibold text-navy mb-3">4.4 Application Against Unpaid Invoices</h3>
                            <p className="mb-4">
                                Company may apply the Engagement Deposit against any unpaid invoices, late fees, or other amounts owed by Client at any time during or after the Engagement. If the deposit is partially applied during an active Engagement, Client must replenish the deposit to its full amount within five (5) business days. Failure to replenish may result in pause of services as set forth in Section 6.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">4.5 Annual Adjustment</h3>
                            <p className="mb-4">
                                The Engagement Deposit is adjusted annually by the same percentage as the Hourly Rate increase under Section 7, with the difference invoiced alongside the next regular billing cycle.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">5. Billing & Payment</h2>

                            <h3 className="text-xl font-semibold text-navy mb-3">5.1 Bi-Weekly Invoicing</h3>
                            <p className="mb-4">
                                Company invoices Client bi-weekly on the 1st and 15th of each calendar month for Verified Productive Hours worked during the preceding billing period. Each invoice is supported by a timesheet summary detailing hours worked.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">5.2 Payment Terms</h3>
                            <p className="mb-4">Invoices are due within five (5) business days of the invoice date.</p>

                            <h3 className="text-xl font-semibold text-navy mb-3">5.3 Late Fees</h3>
                            <p className="mb-4">
                                Overdue balances accrue a one-time late charge of five percent (5%) of the outstanding balance after the five-business-day grace period, plus zero point five percent (0.5%) per week thereafter until the balance is settled.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">5.4 Service Suspension for Non-Payment</h3>
                            <p className="mb-4">
                                Company may pause the Hire's services for any account more than five (5) business days past due. Service interruptions caused by Client's non-payment are not Company's responsibility, and Company is not liable for any business losses, missed deadlines, or operational disruptions resulting from suspension.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">5.5 What Hours Are Billed</h3>
                            <p className="mb-4">
                                Client is billed only for Verified Productive Hours during the Preferred Schedule. Client is not charged for Hire Unavailability, absenteeism, or hours not worked due to public holidays in the Hire's country of residence.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">5.6 Third-Party Costs</h3>
                            <p className="mb-4">
                                Where applicable, Client is responsible for paying third-party costs directly, including software subscriptions, telephony, dialer access, and other tools required for the Hire to perform their work. See Section 8 for further detail on Client responsibilities for equipment and tools.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">6. Annual Rate Increase</h2>
                            <p className="mb-4">
                                The Hourly Rate specified in each Order Form increases by five percent (5%) annually on the anniversary of the Hire's Start Date. The Engagement Deposit is adjusted by the same five percent (5%) to reflect the new rate, with the difference invoiced alongside the next regular billing cycle following the anniversary date. Company will provide written notice of the rate increase no less than thirty (30) days before it takes effect.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">7. Scope of Services & Service Inclusions</h2>

                            <h3 className="text-xl font-semibold text-navy mb-3">7.1 What Company Provides</h3>
                            <p className="mb-4">Under each Engagement, Company provides the following services as part of the Hourly Rate:</p>
                            <p className="mb-4">(a) Sourcing, vetting, and presentation of qualified candidates;</p>
                            <p className="mb-4">(b) International payroll, including currency conversion, payment processing, and contractor compliance in the Hire's country of residence;</p>
                            <p className="mb-4">(c) A dedicated HR manager assigned to each Hire to handle onboarding, time-off requests, performance check-ins, productivity oversight, and the human side of the engagement;</p>
                            <p className="mb-4">(d) Productivity tracking and Verified Productive Hour reporting on every invoice;</p>
                            <p className="mb-4">(e) Replacement candidates as set forth in Section 9;</p>
                            <p className="mb-4">(f) Indemnification against contractor misclassification claims as set forth in Section 17.</p>

                            <h3 className="text-xl font-semibold text-navy mb-3">7.2 What Company Does Not Provide</h3>
                            <p className="mb-4">
                                Company does not guarantee specific business outcomes, revenue targets, productivity benchmarks, or performance results. Company provides qualified talent and a service structure; outcomes from the Hire's work depend on factors within Client's control, including direction, training, and management.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">8. Client Responsibilities</h2>

                            <h3 className="text-xl font-semibold text-navy mb-3">8.1 Equipment & Software</h3>
                            <p className="mb-4">
                                Unless otherwise agreed in writing, Client is responsible for providing access to all software, tools, accounts, subscriptions, telephony, dialer, VOIP, messaging systems, and any other applications required for the Hire to perform their tasks.
                            </p>
                            <p className="mb-4">Computer hardware and home internet connection are provided by the Hire.</p>
                            <p className="mb-4">On request and where feasible, Company may provide setup support to help the Hire access Client-provided tools.</p>

                            <h3 className="text-xl font-semibold text-navy mb-3">8.2 Direction & Training</h3>
                            <p className="mb-4">Client is responsible for:</p>
                            <p className="mb-4">(a) Directing the Hire's day-to-day work and setting priorities;</p>
                            <p className="mb-4">(b) Providing training materials, written task direction, and access to the systems necessary for the Hire to perform their role;</p>
                            <p className="mb-4">(c) Giving feedback on performance and addressing issues in a timely manner;</p>
                            <p className="mb-4">(d) Maintaining a working environment free from the conduct issues described in Section 11.</p>

                            <h3 className="text-xl font-semibold text-navy mb-3">8.3 Limitation on Company's Responsibility</h3>
                            <p className="mb-4">
                                Company is not responsible for outcomes resulting from unclear direction, lack of training, insufficient access to required tools, or Client's internal management decisions. Company's role is to provide qualified talent and the operational structure described in Section 7; execution of work product depends on Client's exercise of its responsibilities under this Section 8.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">8.4 Prompt Communication</h3>
                            <p className="mb-4">
                                Client agrees to respond promptly to reasonable requests from Company that are necessary for Company to deliver its obligations under this Agreement, including requests related to scope changes, scheduling, or replacement processes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">9. Replacements</h2>

                            <h3 className="text-xl font-semibold text-navy mb-3">9.1 First 90 Days — Fit-Based Replacements</h3>
                            <p className="mb-4">
                                During the first ninety (90) days of an Engagement, Client may request replacement of the Hire for any reason, including general fit, with no questions asked.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">9.2 After 90 Days — Performance-Based Replacements</h3>
                            <p className="mb-4">
                                After the initial ninety (90) day window, Company will provide replacement candidates at no additional cost when the issue is on the Hire's side, including but not limited to: performance, attendance, conduct, persistent unavailability, or any breakdown in the working relationship caused by the Hire. There is no cap on the number of replacements provided under these conditions.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">9.3 Eligibility Conditions</h3>
                            <p className="mb-4">To be eligible for a free replacement, Client must have:</p>
                            <p className="mb-4">(a) Provided the Hire with written task direction;</p>
                            <p className="mb-4">(b) Provided access to the systems necessary for the Hire to perform their role;</p>
                            <p className="mb-4">(c) Maintained a working environment free from the conduct issues described in Section 11.</p>

                            <h3 className="text-xl font-semibold text-navy mb-3">9.4 Replacement Process</h3>
                            <p className="mb-4">
                                Upon receipt of a replacement request, Company will source and present qualified replacement candidates within five (5) business days. The Engagement Deposit transfers to the replacement Hire and is not refunded between Hires during an active Engagement.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">9.5 Multiple Replacements</h3>
                            <p className="mb-4">
                                If Client repeatedly rejects qualified candidates without good faith engagement in the replacement process, Company may, at its sole discretion, decline to offer additional replacements under this Section 9 and require Client to either accept a presented candidate or terminate the Engagement.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">10. Time Off, Holidays & Leave</h2>

                            <h3 className="text-xl font-semibold text-navy mb-3">10.1 Public Holidays</h3>
                            <p className="mb-4">
                                The Hire may be unavailable to work on certain public holidays in their country of residence (such as Christmas, New Year's Day, and other nationally observed holidays). Client is not charged for hours not worked on these holidays.
                            </p>
                            <p className="mb-4">
                                Client may request that the Hire work on public holidays. If the Hire agrees, those hours are billed at the standard Hourly Rate. Optional bonuses for working public holidays may be provided at Client's discretion through Company.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">10.2 Paid Leave Accrual</h3>
                            <p className="mb-4">
                                After the Hire's first three (3) months of an Engagement, the Hire accrues eight (8) hours of paid leave per month. Paid leave hours are available for the Hire to use as time off and are billed to Client at the standard Hourly Rate when used.
                            </p>
                            <p className="mb-4">
                                Paid leave does not accrue beyond a maximum balance of forty (40) hours. Paid leave is forfeited if the Engagement ends before the leave is used and is not paid out as cash to Client or to the Hire.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">10.3 Hire Unavailability</h3>
                            <p className="mb-4">
                                Client is not charged for hours not worked due to Hire Unavailability or absenteeism. Persistent unavailability that materially affects the Hire's performance may trigger the replacement provisions in Section 9.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">11. Professional Conduct</h2>

                            <h3 className="text-xl font-semibold text-navy mb-3">11.1 Standard of Conduct</h3>
                            <p className="mb-4">
                                Company maintains a zero-tolerance policy for hostile, abusive, harassing, or otherwise unprofessional conduct directed at the Hire. Client and its employees, contractors, and agents shall treat the Hire with the same professionalism extended to any contractor or service provider.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">11.2 Termination for Cause</h3>
                            <p className="mb-4">
                                Credible reports of mistreatment, harassment, abuse, or other violations of Section 11.1 may result in immediate removal of the Hire and termination of services without notice.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">11.3 Consequences of Termination for Cause</h3>
                            <p className="mb-4">In the event of termination under Section 11.2:</p>
                            <p className="mb-4">(a) The Engagement Deposit is forfeited in full;</p>
                            <p className="mb-4">(b) All outstanding invoices for hours worked become immediately due and payable;</p>
                            <p className="mb-4">(c) No refund of any kind, including any deposit balance, will be issued.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">12. Cancellation & Termination</h2>

                            <h3 className="text-xl font-semibold text-navy mb-3">12.1 Termination by Either Party</h3>
                            <p className="mb-4">
                                Either party may terminate an Engagement with fourteen (14) days' written notice via email to the other party. Termination by Client must be sent to Client's assigned HR manager or to a Company-designated email address communicated to Client during the Engagement.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">12.2 Outstanding Amounts</h3>
                            <p className="mb-4">
                                Upon termination, all invoices for Verified Productive Hours worked through the termination date remain due and payable. Failure to provide the required 14-day notice results in forfeiture of the Engagement Deposit under Section 4.3.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">12.3 Termination by Company</h3>
                            <p className="mb-4">Company may terminate an Engagement immediately upon written notice in the event of:</p>
                            <p className="mb-4">(a) Client's material breach of this Agreement;</p>
                            <p className="mb-4">(b) Non-payment of invoices more than fifteen (15) business days past due;</p>
                            <p className="mb-4">(c) Termination for cause under Section 11.2;</p>
                            <p className="mb-4">(d) Client's breach of the Non-Solicitation provisions in Section 13.</p>

                            <h3 className="text-xl font-semibold text-navy mb-3">12.4 Survival</h3>
                            <p className="mb-4">
                                The following sections survive termination of this Agreement: Section 4 (to the extent of forfeiture and refund obligations), Section 13, Section 14, Section 15, Section 16, Section 17, Section 18, and any other provisions that by their nature should survive.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">13. Non-Solicitation & Direct Hire Transition</h2>

                            <h3 className="text-xl font-semibold text-navy mb-3">13.1 Non-Solicitation</h3>
                            <p className="mb-4">
                                During the term of any Engagement and for a period of twelve (12) months after the Engagement terminates, Client agrees not to directly or indirectly, whether individually or through any third party, entity, affiliate, subcontractor, or other intermediary, solicit, hire, contract with, employ, or otherwise engage any Hire introduced through Company outside of Company's service structure, without prior written consent from Company or payment of the Direct Hire Transition fee in Section 13.2.
                            </p>
                            <p className="mb-4">
                                This restriction applies regardless of which party initiates the contact (Client or Hire) and regardless of whether the new arrangement is structured as employment, contracting, freelance work, consultancy, or any other form of engagement.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">13.2 Direct Hire Transition</h3>
                            <p className="mb-4">
                                If Client wishes to engage the Hire directly outside Company's service structure during the Non-Solicitation period, Client may do so by paying the Direct Hire Transition fee. The fee is calculated as twenty-five percent (25%) of the Hire's projected annual compensation at full-time equivalent (40 hours per week × 52 weeks at the current Hourly Rate).
                            </p>
                            <p className="mb-4">
                                The Direct Hire Transition fee must be paid in full prior to the start of the direct engagement. Once paid, the Hire is released from Company's service structure for purposes of working with Client, and Company's service relationship with respect to that Hire ends cleanly.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">13.3 Liquidated Damages</h3>
                            <p className="mb-4">
                                The parties acknowledge that Company has invested significant time and resources into sourcing, vetting, onboarding, and managing each Hire, and that any breach of Section 13.1 would cause irreparable harm to Company that is difficult to quantify. The Direct Hire Transition fee represents a reasonable estimate of liquidated damages for such breach and is not a penalty.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">13.4 Acknowledgment of Reasonableness</h3>
                            <p className="mb-4">
                                Client acknowledges that the restrictions in this Section 13 are reasonable in scope, duration, and geography given Company's business model and the value of Company's investment in each Hire.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">14. Confidentiality</h2>

                            <h3 className="text-xl font-semibold text-navy mb-3">14.1 Definition</h3>
                            <p className="mb-4">
                                "Confidential Information" means non-public business information disclosed by either party to the other in connection with the Engagement, including but not limited to: pricing structures, operational workflows, sourcing methods, candidate information, business strategies, marketing methods, financial data, customer lists, and any other proprietary information disclosed verbally, electronically, in writing, or visually.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">14.2 Mutual Obligations</h3>
                            <p className="mb-4">Each party agrees to:</p>
                            <p className="mb-4">(a) Protect the other party's Confidential Information with at least the same degree of care it uses to protect its own confidential information, but in no event less than reasonable care;</p>
                            <p className="mb-4">(b) Use Confidential Information solely for the purpose of performing under this Agreement;</p>
                            <p className="mb-4">(c) Not disclose Confidential Information to any third party without prior written consent.</p>

                            <h3 className="text-xl font-semibold text-navy mb-3">14.3 Exclusions</h3>
                            <p className="mb-4">Confidential Information does not include information that:</p>
                            <p className="mb-4">(a) Is or becomes public knowledge through no fault of the receiving party;</p>
                            <p className="mb-4">(b) Was lawfully known to the receiving party prior to disclosure;</p>
                            <p className="mb-4">(c) Is independently developed without use of the disclosing party's Confidential Information;</p>
                            <p className="mb-4">(d) Is required to be disclosed by law, regulation, or valid court order, provided the receiving party gives prompt notice to the disclosing party where legally permissible.</p>

                            <h3 className="text-xl font-semibold text-navy mb-3">14.4 Trade Secrets</h3>
                            <p className="mb-4">
                                Notwithstanding the term of this Agreement, trade secrets disclosed under this Agreement remain protected for as long as they qualify as trade secrets under applicable law.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">14.5 Survival</h3>
                            <p className="mb-4">
                                The obligations of confidentiality and non-use under this Section 14 survive termination of this Agreement for a period of twenty-four (24) months, except as to trade secrets, which survive indefinitely as set forth in Section 14.4.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">15. Data Access, Security & Platform Risk</h2>

                            <h3 className="text-xl font-semibold text-navy mb-3">15.1 Client's Responsibility for Data</h3>
                            <p className="mb-4">Client is solely responsible for:</p>
                            <p className="mb-4">(a) Account permissions and access controls within Client's own systems;</p>
                            <p className="mb-4">(b) Data backups, security settings, and information security practices;</p>
                            <p className="mb-4">(c) The decision to grant the Hire access to Client's systems and the scope of that access.</p>

                            <h3 className="text-xl font-semibold text-navy mb-3">15.2 No Liability for Third-Party Platforms</h3>
                            <p className="mb-4">
                                Company is not liable for issues arising from third-party platforms, software failures, data breaches within Client's systems, or any incident caused by Client's own security practices or decisions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">16. Limitation of Liability</h2>

                            <h3 className="text-xl font-semibold text-navy mb-3">16.1 No Indirect or Consequential Damages</h3>
                            <p className="mb-4">
                                To the maximum extent permitted by law, Company is not liable for any indirect, incidental, special, consequential, exemplary, or punitive damages arising out of or related to this Agreement or the Hire's work, including but not limited to: lost profits, lost revenue, loss of goodwill, loss of business reputation, business interruption, or any other intangible loss, regardless of the theory of liability and even if Company has been advised of the possibility of such damages.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">16.2 Liability Cap</h3>
                            <p className="mb-4">
                                Company's total aggregate liability under this Agreement, regardless of the form of action or theory of liability, shall not exceed the total Fees paid by Client to Company in the ninety (90) days preceding the event giving rise to the claim.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">16.3 As-Is Basis</h3>
                            <p className="mb-4">
                                The services provided under this Agreement are provided on an "as is" and "as available" basis. Company disclaims all express and implied warranties to the maximum extent permitted by law, including without limitation any warranties of merchantability, fitness for a particular purpose, or non-infringement, except as expressly set forth in this Agreement.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">16.4 Replacement as Sole Remedy for Performance Issues</h3>
                            <p className="mb-4">
                                Client's sole and exclusive remedy for performance issues with a Hire is the replacement process set forth in Section 9.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">17. Indemnification</h2>

                            <h3 className="text-xl font-semibold text-navy mb-3">17.1 Company's Indemnification of Client</h3>
                            <p className="mb-4">
                                Company shall defend, indemnify, and hold harmless Client and its officers, directors, and employees from and against any third-party claim, action, or proceeding arising from:
                            </p>
                            <p className="mb-4">(a) Misclassification of the Hire as an employee of Client under Company's contractor structure;</p>
                            <p className="mb-4">(b) Company's failure to comply with applicable contractor regulations in the Hire's country of residence.</p>
                            <p className="mb-4">
                                This indemnification covers reasonable attorneys' fees, court costs, and any settlements or judgments tied directly to such claims, provided that Client gives Company prompt written notice of the claim, allows Company to control the defense and settlement, and provides reasonable cooperation at Company's expense.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">17.2 Client's Indemnification of Company</h3>
                            <p className="mb-4">
                                Client shall indemnify, defend, and hold harmless Company and its officers, directors, employees, and the Hire from and against any third-party claim, action, or proceeding arising from:
                            </p>
                            <p className="mb-4">(a) Client's direction of the Hire's work, including any work product produced under Client's instruction;</p>
                            <p className="mb-4">(b) Client's breach of this Agreement;</p>
                            <p className="mb-4">(c) Client's violation of applicable laws in connection with the Engagement;</p>
                            <p className="mb-4">(d) Client's mistreatment of the Hire under Section 11.</p>

                            <h3 className="text-xl font-semibold text-navy mb-3">17.3 Insurance</h3>
                            <p className="mb-4">
                                Company maintains Errors & Omissions and Cyber Liability insurance covering its operations under this Agreement and will provide a Certificate of Insurance to Client upon request.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">18. Governing Law, Jurisdiction & Disputes</h2>

                            <h3 className="text-xl font-semibold text-navy mb-3">18.1 Governing Law</h3>
                            <p className="mb-4">
                                This Agreement is governed by and construed in accordance with the laws of the Commonwealth of Pennsylvania, without regard to its conflict of laws principles.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">18.2 Jurisdiction</h3>
                            <p className="mb-4">
                                Both parties irrevocably submit to the exclusive jurisdiction of the state and federal courts located in Allegheny County, Pennsylvania, for any action or proceeding arising out of or related to this Agreement.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">18.3 Attorneys' Fees</h3>
                            <p className="mb-4">
                                The prevailing party in any dispute arising out of or related to this Agreement is entitled to recover reasonable attorneys' fees, court costs, and expenses.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">18.4 Equitable Relief</h3>
                            <p className="mb-4">
                                Each party acknowledges that breach of Section 13 or Section 14 may cause irreparable harm for which monetary damages would be inadequate, and that the non-breaching party is entitled to seek injunctive relief and other equitable remedies in addition to any other relief available at law.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">19. General Provisions</h2>

                            <h3 className="text-xl font-semibold text-navy mb-3">19.1 Order Form Controls in Conflict</h3>
                            <p className="mb-4">
                                In the event of conflict between this MSA and an executed Order Form, this MSA controls except where the Order Form expressly states an intent to modify a specific provision of this MSA.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">19.2 Each Engagement Requires a New Order Form</h3>
                            <p className="mb-4">
                                Each additional Hire engaged under this MSA requires a separate executed Order Form. This MSA governs all Order Forms executed during its term and does not need to be re-executed for each Order Form.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">19.3 Modifications</h3>
                            <p className="mb-4">
                                Modifications to this MSA must be in writing and signed by an authorized representative of each party. Company may update the version of this MSA published at the URL where it is hosted, and any such updates apply to Order Forms executed after the effective date of the update. Order Forms already in effect remain governed by the version of the MSA in effect at the time the Order Form was executed.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">19.4 Assignment</h3>
                            <p className="mb-4">
                                Neither party may assign its rights or obligations under this Agreement without the prior written consent of the other party, except that Company may assign this Agreement to a successor entity in connection with a merger, acquisition, or sale of substantially all of its assets, with written notice to Client.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">19.5 Notices</h3>
                            <p className="mb-4">
                                All notices required under this Agreement shall be sent via email to the addresses specified in the applicable Order Form, with delivery confirmed by reply or read receipt where reasonably possible. Notices to Company shall additionally be sent to legal@fivestarassistants.com or such other address as Company designates in writing.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">19.6 Force Majeure</h3>
                            <p className="mb-4">
                                Neither party is liable for any failure or delay in performance caused by events beyond its reasonable control, including natural disasters, acts of war, governmental actions, pandemic restrictions, or widespread infrastructure failures, provided that the affected party gives prompt notice and uses reasonable efforts to resume performance.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">19.7 Severability</h3>
                            <p className="mb-4">
                                If any provision of this Agreement is held invalid, void, or unenforceable, the remaining provisions remain in full force and effect. The unenforceable provision shall be modified to the minimum extent necessary to make it enforceable while preserving the original intent of the parties.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">19.8 Waiver</h3>
                            <p className="mb-4">
                                The failure of either party to enforce any provision of this Agreement, or to exercise any right under it, does not constitute a waiver of that provision or right. Waivers are effective only when in writing and signed by the waiving party.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">19.9 Counterparts & Electronic Signatures</h3>
                            <p className="mb-4">
                                This Agreement and any Order Form may be executed in counterparts and delivered by electronic signature, each of which is deemed an original and together constitute one agreement.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">19.10 Entire Agreement</h3>
                            <p className="mb-4">
                                This MSA, together with the applicable Order Form and any written addenda agreed to in writing by both parties, constitutes the entire agreement between the parties with respect to the Engagement and supersedes all prior discussions, representations, proposals, and agreements, whether written or oral.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">19.11 Headings</h3>
                            <p className="mb-4">
                                Section headings are for convenience of reference only and do not affect the interpretation of this Agreement.
                            </p>

                            <h3 className="text-xl font-semibold text-navy mb-3">19.12 Independent Drafting</h3>
                            <p className="mb-4">
                                Each party has had the opportunity to review this Agreement with counsel of its own choosing. This Agreement shall be construed as if drafted jointly by the parties, and no presumption or burden of proof shall arise favoring or disfavoring either party because of authorship.
                            </p>
                        </section>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default MasterServicesAgreement;
