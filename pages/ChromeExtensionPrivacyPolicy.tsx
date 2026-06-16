import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ChromeExtensionPrivacyPolicy: React.FC = () => {
    const effectiveDate = 'June 16, 2026';

    return (
        <div className="font-sans min-h-screen bg-white">
            <Navbar />

            <main className="pt-32 pb-24 px-4 md:px-8">
                <div className="max-w-4xl mx-auto font-body text-gray-700">
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-4">
                        FSA Tracker — Privacy Policy
                    </h1>
                    <p className="text-gray-500 mb-10">Effective date: {effectiveDate}</p>

                    <div className="space-y-8">

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">1. Overview</h2>
                            <p className="mb-4">
                                FSA Tracker ("the Extension") is a Chrome browser extension developed and operated by Five Star Assistants ("we," "us," or "our"). It is an internal tool provided exclusively to Five Star Assistants employees and contractors for the purpose of time tracking, screenshot capture, and productivity monitoring during work hours.
                            </p>
                            <p>
                                This Privacy Policy explains what data the Extension collects, how it is used, who can access it, and how long it is retained. By installing and using the Extension, you agree to the practices described in this policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">2. Data We Collect</h2>
                            <p className="mb-4">The Extension collects the following categories of data:</p>

                            <h3 className="text-lg font-semibold text-navy mb-2">a. Authentication Information</h3>
                            <p className="mb-4">
                                Your email address and password are used to authenticate you against the Five Star Assistants platform. A session token is stored locally in Chrome's storage to keep you signed in between browser sessions. Passwords are never stored by the Extension — only the session token issued by our authentication provider (Supabase) is retained.
                            </p>

                            <h3 className="text-lg font-semibold text-navy mb-2">b. Time Tracking Data</h3>
                            <p className="mb-4">
                                When you clock in, the Extension records the start time of your session. When you clock out, the end time is recorded. These timestamps are stored in the Five Star Assistants database and used to calculate hours worked for payroll purposes.
                            </p>

                            <h3 className="text-lg font-semibold text-navy mb-2">c. Screenshots</h3>
                            <p className="mb-4">
                                While you are clocked in, the Extension captures a screenshot of the currently visible browser tab every 10 minutes using Chrome's <code>tabs.captureVisibleTab</code> API. Screenshots are uploaded to private, access-controlled storage (Supabase Storage) and are accessible only to you and authorized Five Star Assistants team members. Screenshots are captured automatically and without additional notification at each interval.
                            </p>

                            <h3 className="text-lg font-semibold text-navy mb-2">d. User Activity Data</h3>
                            <p className="mb-4">
                                The Extension counts keyboard keystrokes and mouse click events within your browser while you are clocked in. These counts are aggregated (not recorded individually) and used solely to calculate an activity percentage that indicates how actively you were using your computer during each screenshot interval. Individual keystrokes and their content are never stored or transmitted.
                            </p>

                            <h3 className="text-lg font-semibold text-navy mb-2">e. Idle State</h3>
                            <p>
                                The Extension uses Chrome's <code>idle</code> API to detect periods when you are away from your keyboard. This information is used to improve the accuracy of your activity percentage and to distinguish active work time from idle time.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">3. How We Use This Data</h2>
                            <p className="mb-4">All data collected by the Extension is used exclusively for the following purposes:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Calculating hours worked for payroll processing</li>
                                <li>Monitoring work activity and productivity on behalf of Five Star Assistants</li>
                                <li>Providing you with a record of your own clock-in history and hours</li>
                                <li>Ensuring accountability and transparency between contractors and clients</li>
                            </ul>
                            <p className="mt-4">
                                We do not use this data for advertising, profiling, or any purpose unrelated to employment and time tracking.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">4. Data Storage and Security</h2>
                            <p className="mb-4">
                                All data is stored in Five Star Assistants' private Supabase database and storage, hosted on secure cloud infrastructure. Access is protected by row-level security policies that ensure each employee can only access their own data. Session tokens are stored locally in Chrome's <code>chrome.storage.local</code> and are never exposed to third-party websites or scripts.
                            </p>
                            <p>
                                Screenshots are stored in a private storage bucket and are not publicly accessible. Access requires authentication as either the employee whose screenshot it is, or an authorized Five Star Assistants team member.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">5. Who Can Access Your Data</h2>
                            <p className="mb-4">The following parties may access data collected by the Extension:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>You</strong> — you can view your own time entries and hours through the Five Star Assistants assistant portal.</li>
                                <li><strong>Five Star Assistants team members</strong> — HR managers and supervisors have access to time entry records and screenshots for the purpose of payroll processing and performance review.</li>
                            </ul>
                            <p className="mt-4">
                                We do not sell, share, or transfer your data to any third parties outside of Five Star Assistants. We do not share data with advertising networks, data brokers, or any external services other than the infrastructure providers (Supabase) used to operate the platform.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">6. Data Retention</h2>
                            <p>
                                Time entry records and activity data are retained for a minimum of 12 months for payroll and compliance purposes. Screenshots are retained for 90 days and then deleted. Upon termination of your employment or contractor relationship with Five Star Assistants, your data will be retained for the legally required period and then deleted upon request.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">7. Remote Code</h2>
                            <p>
                                The Extension does not load or execute any remote code. All JavaScript executed by the Extension is included in the extension package itself. The Extension communicates with the Five Star Assistants backend (Supabase) exclusively through standard REST API calls to store and retrieve data.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">8. Your Rights</h2>
                            <p className="mb-4">As a user of the Extension, you have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Request a copy of the data collected about you</li>
                                <li>Request deletion of your data upon termination of your working relationship with Five Star Assistants</li>
                                <li>Uninstall the Extension at any time — uninstalling stops all data collection immediately</li>
                            </ul>
                            <p className="mt-4">
                                Please note that because this Extension is a condition of employment with Five Star Assistants, opting out of data collection may affect your ability to fulfill your role.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">9. Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. When we do, we will update the effective date at the top of this page. Continued use of the Extension after changes are posted constitutes your acceptance of the updated policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">10. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy or how your data is handled, please contact us at{' '}
                                <a href="mailto:christian@fivestarassistants.com" className="text-blue-600 underline">
                                    christian@fivestarassistants.com
                                </a>.
                            </p>
                        </section>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ChromeExtensionPrivacyPolicy;
