import React from 'react';
import MainSection from './components/MainSection';
import FeaturesSection from './components/FeaturesSection';
import TrialSection from './components/TrialSection';
import ReviewSection from './components/ReviewSection';
import IntegrationSection from './components/IntegrationSection';
import FAQSection from './components/FAQSection';
import BottomSignup from './components/BottomSignup';
import Footer from './components/Footer';

const WebsiteHome: React.FC = () => {
  return (
    <div className="">
      <MainSection />
      <FeaturesSection />
      <TrialSection />
      <ReviewSection />
      <IntegrationSection />
      <FAQSection />
      <BottomSignup />
      <Footer />
    </div>
  );
};

export default WebsiteHome;
