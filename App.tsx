import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LocalServiceLanding from './pages/LocalServiceLanding';
import LocalStorefrontLanding from './pages/LocalStorefrontLanding';
import OnlineServiceLanding from './pages/OnlineServiceLanding';
import OnlineBusinessLanding from './pages/OnlineBusinessLanding';
import RealEstateLanding from './pages/RealEstateLanding';
import SDRLanding from './pages/SDRLanding';
import VALanding from './pages/VALanding';
import SMMLanding from './pages/SMMLanding';
import Booking from './pages/Booking';
import ThankYou from './pages/ThankYou';
import ScrollToTop from './components/ScrollToTop';
import OnboardingWelcome from './pages/onboarding/Welcome';
import OnboardingIntake from './pages/onboarding/Intake';
import OnboardingBooking from './pages/onboarding/OnboardingBooking';
import OnboardingComplete from './pages/onboarding/Complete';
import LocalServiceBusinesses from './pages/LocalServiceBusinesses';
import DigitalAgencies from './pages/DigitalAgencies';
import RealEstateAgents from './pages/RealEstateAgents';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Results from './pages/Results';
import CaseStudyDetail from './pages/CaseStudyDetail';
import HowItWorks from './pages/HowItWorks';
import ReferralProgram from './pages/ReferralProgram';
import YouTubeVideos from './pages/YouTubeVideos';
import YouTubeVideoDetail from './pages/YouTubeVideoDetail';
import ForEmployeesLanding from './pages/ForEmployeesLanding';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import ECommerce from './pages/ECommerce';
import Healthcare from './pages/Healthcare';
import RealEstateIndustry from './pages/RealEstateIndustry';
import Legal from './pages/Legal';
import Insurance from './pages/Insurance';
import Logistics from './pages/Logistics';
import FinancialServices from './pages/FinancialServices';
import HomeServices from './pages/HomeServices';
import Education from './pages/Education';
import Travel from './pages/Travel';
import Telecommunications from './pages/Telecommunications';
import Energy from './pages/Energy';

// Hire pages
import SocialMediaManager from './pages/hire/SocialMediaManager';
import PaidAdsManager from './pages/hire/PaidAdsManager';
import SEOSpecialist from './pages/hire/SEOSpecialist';
import ContentWriter from './pages/hire/ContentWriter';
import GraphicDesigner from './pages/hire/GraphicDesigner';
import VideoEditor from './pages/hire/VideoEditor';
import EmailMarketingSpecialist from './pages/hire/EmailMarketingSpecialist';
import VirtualAssistant from './pages/hire/VirtualAssistant';
import ExecutiveAssistant from './pages/hire/ExecutiveAssistant';
import CalendarEmailManagement from './pages/hire/CalendarEmailManagement';
import DataEntryResearch from './pages/hire/DataEntryResearch';
import ProjectCoordinator from './pages/hire/ProjectCoordinator';
import TravelLogistics from './pages/hire/TravelLogistics';
import DocumentManagement from './pages/hire/DocumentManagement';
import SDR from './pages/hire/SDR';
import AppointmentSetter from './pages/hire/AppointmentSetter';
import LeadListBuilding from './pages/hire/LeadListBuilding';
import CRMManagement from './pages/hire/CRMManagement';
import PipelineManagement from './pages/hire/PipelineManagement';
import CustomerServiceRep from './pages/hire/CustomerServiceRep';
import LiveChatSupport from './pages/hire/LiveChatSupport';
import EmailTicketSupport from './pages/hire/EmailTicketSupport';
import CallHandling from './pages/hire/CallHandling';
import ClientOnboarding from './pages/hire/ClientOnboarding';
import Bookkeeper from './pages/hire/Bookkeeper';
import AccountsPayableReceivable from './pages/hire/AccountsPayableReceivable';
import InvoicingBilling from './pages/hire/InvoicingBilling';
import ExpenseTracking from './pages/hire/ExpenseTracking';
import PayrollSupport from './pages/hire/PayrollSupport';
import FreeStuff from './pages/FreeStuff';
import FreeStuffSOPGuide from './pages/FreeStuffSOPGuide';
import FreeStuffDelegationAudit from './pages/FreeStuffDelegationAudit';

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Main funnel */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/local-service" element={<LocalServiceLanding />} />
        <Route path="/local-storefront" element={<LocalStorefrontLanding />} />
        <Route path="/online-service" element={<OnlineServiceLanding />} />
        <Route path="/online-business" element={<OnlineBusinessLanding />} />
        <Route path="/real-estate" element={<RealEstateLanding />} />
        <Route path="/sdr" element={<SDRLanding />} />
        <Route path="/va" element={<VALanding />} />
        <Route path="/smm" element={<SMMLanding />} />
        <Route path="/local-service-businesses" element={<LocalServiceBusinesses />} />
        <Route path="/digital-agencies" element={<DigitalAgencies />} />
        <Route path="/real-estate-agents" element={<RealEstateAgents />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/results" element={<Results />} />
        <Route path="/results/:slug" element={<CaseStudyDetail />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/referral-program" element={<ReferralProgram />} />
        <Route path="/youtube-videos" element={<YouTubeVideos />} />
        <Route path="/youtube-videos/:slug" element={<YouTubeVideoDetail />} />
        <Route path="/for-employees" element={<ForEmployeesLanding />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/free-stuff" element={<FreeStuff />} />
        <Route path="/free-stuff/sop-guide" element={<FreeStuffSOPGuide />} />
        <Route path="/free-stuff/delegation-audit" element={<FreeStuffDelegationAudit />} />

        {/* Industry pages */}
        <Route path="/industries/e-commerce" element={<ECommerce />} />
        <Route path="/industries/healthcare" element={<Healthcare />} />
        <Route path="/industries/real-estate" element={<RealEstateIndustry />} />
        <Route path="/industries/legal" element={<Legal />} />
        <Route path="/industries/insurance" element={<Insurance />} />
        <Route path="/industries/logistics" element={<Logistics />} />
        <Route path="/industries/financial-services" element={<FinancialServices />} />
        <Route path="/industries/home-services" element={<HomeServices />} />
        <Route path="/industries/education" element={<Education />} />
        <Route path="/industries/travel" element={<Travel />} />
        <Route path="/industries/telecommunications" element={<Telecommunications />} />
        <Route path="/industries/energy" element={<Energy />} />

        {/* Hire pages */}
        <Route path="/hire/social-media-manager" element={<SocialMediaManager />} />
        <Route path="/hire/paid-ads-manager" element={<PaidAdsManager />} />
        <Route path="/hire/seo-specialist" element={<SEOSpecialist />} />
        <Route path="/hire/content-writer" element={<ContentWriter />} />
        <Route path="/hire/graphic-designer" element={<GraphicDesigner />} />
        <Route path="/hire/video-editor" element={<VideoEditor />} />
        <Route path="/hire/email-marketing-specialist" element={<EmailMarketingSpecialist />} />
        <Route path="/hire/virtual-assistant" element={<VirtualAssistant />} />
        <Route path="/hire/executive-assistant" element={<ExecutiveAssistant />} />
        <Route path="/hire/calendar-email-management" element={<CalendarEmailManagement />} />
        <Route path="/hire/data-entry" element={<DataEntryResearch />} />
        <Route path="/hire/project-coordinator" element={<ProjectCoordinator />} />
        <Route path="/hire/travel-logistics" element={<TravelLogistics />} />
        <Route path="/hire/document-management" element={<DocumentManagement />} />
        <Route path="/hire/sdr" element={<SDR />} />
        <Route path="/hire/appointment-setter" element={<AppointmentSetter />} />
        <Route path="/hire/lead-list-building" element={<LeadListBuilding />} />
        <Route path="/hire/crm-management" element={<CRMManagement />} />
        <Route path="/hire/pipeline-management" element={<PipelineManagement />} />
        <Route path="/hire/customer-service" element={<CustomerServiceRep />} />
        <Route path="/hire/live-chat-support" element={<LiveChatSupport />} />
        <Route path="/hire/email-support" element={<EmailTicketSupport />} />
        <Route path="/hire/call-handling" element={<CallHandling />} />
        <Route path="/hire/client-onboarding" element={<ClientOnboarding />} />
        <Route path="/hire/bookkeeper" element={<Bookkeeper />} />
        <Route path="/hire/accounts-payable-receivable" element={<AccountsPayableReceivable />} />
        <Route path="/hire/invoicing" element={<InvoicingBilling />} />
        <Route path="/hire/expense-tracking" element={<ExpenseTracking />} />
        <Route path="/hire/payroll-support" element={<PayrollSupport />} />

        {/* Onboarding funnel */}
        <Route path="/onboarding/welcome" element={<OnboardingWelcome />} />
        <Route path="/onboarding/intake" element={<OnboardingIntake />} />
        <Route path="/onboarding/booking" element={<OnboardingBooking />} />
        <Route path="/onboarding/complete" element={<OnboardingComplete />} />
      </Routes>
    </>
  );
};

export default App;