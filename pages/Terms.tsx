import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms: React.FC = () => {
    return (
        <div className="font-sans min-h-screen bg-white">
            <Navbar />

            <main className="pt-32 pb-24 px-4 md:px-8">
                <div className="max-w-4xl mx-auto font-body text-gray-700">
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-4">SMS Terms and Conditions</h1>

                    <p className="text-sm text-gray-500 mb-8">
                        Effective Date: July 8, 2026<br />
                        Last Updated: July 8, 2026
                    </p>

                    <div className="space-y-8">
                        <p>
                            These SMS Terms and Conditions ("SMS Terms") govern the Five Star Assistants text messaging program. By providing your mobile phone number and affirmatively opting in, you agree to these SMS Terms and to our Privacy Policy.
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">1. Program Description</h2>
                            <p className="mb-4">
                                Five Star Assistants operates a customer care SMS program for existing clients. Messages sent under this program are account and service related, and may include:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Onboarding and appointment confirmations and reminders</li>
                                <li>Account, service, and status notifications</li>
                                <li>Billing and invoice notifications</li>
                                <li>Responses to support requests you initiate</li>
                                <li>Updates related to your active engagement with Five Star Assistants</li>
                            </ul>
                            <p>
                                Program name: Five Star Assistants
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">2. Consent and Opt-In</h2>
                            <p className="mb-4">
                                You consent to receive SMS messages from Five Star Assistants by entering your mobile phone number and affirmatively checking the opt-in box presented on our website or in our client portal. The opt-in box is unchecked by default.
                            </p>
                            <p className="mb-4">
                                Consent is not a condition of purchase. You are not required to agree to receive text messages in order to purchase any product or receive any service from Five Star Assistants.
                            </p>
                            <p className="mb-4">
                                You represent that you are the subscriber of, or the customary user of, the mobile phone number you provide, and that you are authorized to consent to receive messages at that number. If you change or relinquish that number, you agree to notify us promptly.
                            </p>
                            <p>
                                You must be at least 18 years old to enroll.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">3. Message Frequency</h2>
                            <p>
                                Message frequency varies based on your account activity and the support requests you initiate.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">4. Message and Data Rates</h2>
                            <p>
                                Message and data rates may apply. Your mobile carrier may charge you for sending and receiving text messages. Five Star Assistants does not charge for participation in this program. Contact your wireless provider for details about your plan.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">5. How to Opt Out</h2>
                            <p className="mb-4">
                                You may cancel at any time by replying STOP to any message you receive from us. We also honor the keywords STOPALL, UNSUBSCRIBE, CANCEL, END, and QUIT.
                            </p>
                            <p className="mb-4">
                                After you send one of these keywords, you will receive one final confirmation message stating that you have been unsubscribed, and you will receive no further SMS messages from this program. Opt-out is processed through the same phone number that sent you the message.
                            </p>
                            <p className="mb-4">
                                To rejoin, reply START or opt in again through our website or client portal.
                            </p>
                            <p>
                                Opting out of SMS messages does not opt you out of other communications, such as email, or affect your account or services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">6. How to Get Help</h2>
                            <p className="mb-4">
                                Reply HELP to any message for assistance, or contact us directly:
                            </p>
                            <p>
                                Email: <a href="mailto:support@fivestarassistants.com" className="text-navy hover:text-gold transition-colors">support@fivestarassistants.com</a><br />
                                Phone: <a href="tel:+17247576179" className="text-navy hover:text-gold transition-colors">(724) 757-6179</a>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">7. Supported Carriers and Carrier Liability</h2>
                            <p>
                                Delivery is supported on major U.S. wireless carriers. Carriers are not liable for delayed or undelivered messages. Message delivery is subject to effective transmission by your wireless provider and is not guaranteed by Five Star Assistants.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">8. Privacy</h2>
                            <p>
                                Information collected in connection with this SMS program is handled according to our Privacy Policy, available at <a href="https://www.fivestarassistants.com/privacy" className="text-navy hover:text-gold transition-colors">https://www.fivestarassistants.com/privacy</a>. Mobile information collected for SMS purposes, including your phone number and opt-in consent, will not be shared with or sold to third parties or affiliates for marketing or promotional purposes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">9. Changes to These Terms</h2>
                            <p>
                                We may modify these SMS Terms at any time. Continued participation in the program after changes take effect constitutes acceptance of the revised terms. Material changes will be communicated to subscribers before taking effect.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">10. Contact</h2>
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

export default Terms;
