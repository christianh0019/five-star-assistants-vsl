import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy: React.FC = () => {
    return (
        <div className="font-sans min-h-screen bg-white">
            <Navbar />

            <main className="pt-32 pb-24 px-4 md:px-8">
                <div className="max-w-4xl mx-auto font-body text-gray-700">
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-4">Privacy Policy</h1>

                    <p className="text-sm text-gray-500 mb-8">
                        Effective Date: July 8, 2026<br />
                        Last Updated: July 8, 2026
                    </p>

                    <div className="space-y-8">
                        <p>
                            Five Star Assistants ("Five Star Assistants," "we," "us," or "our") operates the website fivestarassistants.com and the Five Star Assistants client portal (together, the "Services"). This Privacy Policy explains what information we collect, how we use it, how we share it, and the choices you have.
                        </p>
                        <p>
                            By using the Services, you agree to this Privacy Policy.
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">1. Information We Collect</h2>
                            <p className="mb-4">
                                <strong>Information you provide directly.</strong> When you create an account, request information, or communicate with us, we may collect your name, business name, email address, mobile phone number, billing information, and any information you submit through forms, support requests, or messages.
                            </p>
                            <p className="mb-4">
                                <strong>Information collected automatically.</strong> When you use the Services, we may collect your IP address, browser type, device identifiers, pages visited, and timestamps, using cookies and similar technologies.
                            </p>
                            <p>
                                <strong>Information from your use of the client portal.</strong> This may include time tracking records, end-of-day reports, invoices, support tickets, and communications between you and your assigned team members.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">2. How We Use Your Information</h2>
                            <p className="mb-4">We use the information we collect to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Provide, operate, and maintain the Services</li>
                                <li>Create and manage your account</li>
                                <li>Deliver customer care, account notifications, billing notices, and service updates</li>
                                <li>Respond to your support requests and communications</li>
                                <li>Send SMS text messages you have consented to receive (see Section 4)</li>
                                <li>Process payments and send invoices</li>
                                <li>Detect, prevent, and address fraud, abuse, or technical issues</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">3. How We Share Your Information</h2>
                            <p className="mb-4">We share personal information only as described below:</p>
                            <p className="mb-4">
                                <strong>Service providers.</strong> We share information with vendors who perform services on our behalf, such as payment processing, cloud hosting, customer support software, and communications infrastructure. These providers are contractually restricted to using the information only to perform services for us.
                            </p>
                            <p className="mb-4">
                                <strong>Legal requirements.</strong> We may disclose information if required by law, subpoena, or other legal process, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
                            </p>
                            <p className="mb-4">
                                <strong>Business transfers.</strong> If Five Star Assistants is involved in a merger, acquisition, or sale of assets, information may be transferred as part of that transaction. We will provide notice before your information becomes subject to a different privacy policy.
                            </p>
                            <p>
                                <strong>We do not sell your personal information.</strong> We do not sell, rent, or trade your personal information to third parties.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">4. SMS / Text Messaging Privacy</h2>
                            <p className="mb-4">
                                This section governs information collected in connection with our SMS program. It controls over any conflicting language elsewhere in this policy.
                            </p>
                            <p className="mb-4">
                                <strong>No sharing or selling of SMS data.</strong> All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with, or sold to, any third parties or affiliates.
                            </p>
                            <p className="mb-4">
                                <strong>Mobile phone numbers.</strong> Mobile information collected for SMS purposes, including your phone number and your opt-in consent, will not be shared with or sold to third parties or affiliates for marketing or promotional purposes. No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.
                            </p>
                            <p className="mb-4">
                                <strong>Limited exception for service delivery.</strong> Phone numbers may be shared only with the communications service providers and subcontractors strictly necessary to transmit the messages you have requested (for example, our SMS platform provider and the wireless carriers delivering the message). These parties are prohibited from using your information for any other purpose, including marketing, promotion, lead generation, or resale.
                            </p>
                            <p className="mb-4">
                                <strong>How consent is collected.</strong> We collect SMS consent when you affirmatively check an unchecked opt-in box next to a phone number field on our website or in our client portal. Consent is stored with a timestamp. Consent to receive SMS messages is not a condition of purchasing any product or receiving any service from Five Star Assistants.
                            </p>
                            <p>
                                <strong>Withdrawing consent.</strong> You may withdraw your consent at any time by replying STOP to any message you receive from us. See our SMS Terms and Conditions for full details.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">5. Data Retention</h2>
                            <p>
                                We retain personal information for as long as your account is active, and thereafter as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements. SMS opt-in and opt-out records are retained as required to demonstrate compliance with applicable messaging regulations.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">6. Data Security</h2>
                            <p>
                                We use commercially reasonable administrative, technical, and physical safeguards to protect personal information. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">7. Your Choices and Rights</h2>
                            <p className="mb-4">You may:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Access, correct, or update your account information through the client portal</li>
                                <li>Request deletion of your personal information, subject to legal retention obligations</li>
                                <li>Opt out of marketing emails by using the unsubscribe link in any email</li>
                                <li>Opt out of SMS messages at any time by replying STOP</li>
                            </ul>
                            <p>
                                Depending on where you live, you may have additional rights under state or national privacy laws. To exercise any right, contact us using the details in Section 10.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">8. Children's Privacy</h2>
                            <p>
                                The Services are intended for business use by individuals aged 18 and older. We do not knowingly collect personal information from anyone under 18. If we learn we have collected such information, we will delete it.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">9. Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. We will post the revised version with an updated "Last Updated" date. Material changes affecting the SMS program will be communicated to subscribers before taking effect.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">10. Contact Us</h2>
                            <p>
                                Five Star Assistants<br />
                                50 Brattleboro Dr, Greensburg, PA 15601<br />
                                Email: <a href="mailto:support@fivestarassistants.com" className="text-navy hover:text-gold transition-colors">support@fivestarassistants.com</a><br />
                                Phone: <a href="tel:+17247576179" className="text-navy hover:text-gold transition-colors">(724) 757-6179</a>
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Privacy;
