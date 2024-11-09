import React, { useState } from 'react';
import { Button } from 'antd';

interface FeatureCardProps {
    icon: string,
    title: string,
    description: string,
    learnMoreUrl: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, learnMoreUrl }) => (
  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-start gap-3 mb-4">
      <img src={icon} alt="" className="w-8 h-8" />
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4 min-h-[3rem]">{description}</p>
    <a 
      href={learnMoreUrl} 
      target="_blank" 
      rel="noreferrer noopener"
      className="text-blue-600 hover:text-blue-700 font-medium"
    >
      Learn More
    </a>
  </div>
);

const FeaturesSection = () => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const features = [
    {
      icon: "https://d2k5nsl2zxldvw.cloudfront.net/images/illustrations/simple-illustration__coins.svg",
      title: "Spend management",
      description: "Manage expenses, vendors, and invoices. Analyze spending trends and forecast budgets.",
      learnMoreUrl: "https://use.Expense App.com/spend-management"
    },
    {
      icon: "https://d2k5nsl2zxldvw.cloudfront.net/images/illustrations/simple-illustration__smartscan.svg",
      title: "Receipt tracking",
      description: "Scan receipts via mobile app and auto-record vendor, date, and amount.",
      learnMoreUrl: "https://use.Expense App.com/receipt-scanning-app"
    },
    {
      icon: "https://d2k5nsl2zxldvw.cloudfront.net/images/illustrations/simple-illustration__handcard.svg",
      title: "Expense App Card",
      description: "Pay with an Expense App corporate card and capture transactions in expense reports automatically.",
      learnMoreUrl: "https://use.Expense App.com/company-credit-card"
    },
    {
      icon: "https://d2k5nsl2zxldvw.cloudfront.net/images/illustrations/simple-illustration__invoice.svg",
      title: "Invoices",
      description: "Create invoices in seconds. Auto-calculate taxes, discounts, and other fees.",
      learnMoreUrl: "https://use.Expense App.com/invoicing-software"
    },
    {
      icon: "https://d2k5nsl2zxldvw.cloudfront.net/images/illustrations/simple-illustration__bill.svg",
      title: "Bill pay",
      description: "Automate approvals and payments. Track what's paid, what's due, and what's late.",
      learnMoreUrl: "https://use.Expense App.com/bill-pay-app"
    },
    {
      icon: "https://d2k5nsl2zxldvw.cloudfront.net/images/illustrations/simple-illustration__money-receipt.svg",
      title: "Expense reports",
      description: "View all expenses submitted for reimbursement in one place. Approve with a single click.",
      learnMoreUrl: "https://use.Expense App.com/expense-reports"
    },
    {
      icon: "https://d2k5nsl2zxldvw.cloudfront.net/images/illustrations/simple-illustration__commentbubbles.svg",
      title: "Chat",
      description: "Message your team, clients, customers, and more in one place -- by chat, email, or phone.",
      learnMoreUrl: "https://use.Expense App.com/Expense App-business-chat-app"
    },
    {
      icon: "https://d2k5nsl2zxldvw.cloudfront.net/images/illustrations/simple-illustration__virtualcard.svg",
      title: "Virtual cards",
      description: "Make purchases without a physical card. Instantly send virtual cards to employees.",
      learnMoreUrl: "https://use.Expense App.com/card"
    },
    {
      icon: "https://d2k5nsl2zxldvw.cloudfront.net/images/illustrations/simple-illustration__luggage.svg",
      title: "Travel management",
      description: "Schedule flights and book accommodations. Easily import trip expenses.",
      learnMoreUrl: "https://use.Expense App.com/travel"
    },
    // Hidden features
    {
      icon: "https://d2k5nsl2zxldvw.cloudfront.net/images/illustrations/simple-illustration__piggybank.svg",
      title: "Personal expenses",
      description: "Manage personal expenses. Track receipts, request and send money, and more.",
      learnMoreUrl: "https://use.Expense App.com/track-expenses",
      hidden: true
    },
    {
      icon: "https://d2k5nsl2zxldvw.cloudfront.net/images/illustrations/simple-illustration__handearth.svg",
      title: "Global reimbursements",
      description: "Reimburse employees in their local currency. 190+ countries.",
      learnMoreUrl: "https://use.Expense App.com/global-reimbursements",
      hidden: true
    },
    {
      icon: "https://d2k5nsl2zxldvw.cloudfront.net/images/illustrations/simple-illustration__monitorsync.svg",
      title: "Integrations",
      description: "Integrates with Quickbooks, NetSuite, Sage Intacct, Xero, Workday, Gusto, and 45+ more.",
      learnMoreUrl: "https://use.Expense App.com/all-integrations",
      hidden: true
    }
  ];

  const visibleFeatures = showAllFeatures 
    ? features 
    : features.filter(feature => !feature.hidden);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-screen-xl w-11/12 m-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-16 text-gray-900">Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {visibleFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              learnMoreUrl={feature.learnMoreUrl}
            />
          ))}
        </div>

        <div className="text-center">
          <Button
            type="default"
            size="large"
            onClick={() => setShowAllFeatures(!showAllFeatures)}
            className="px-8 h-12 rounded-full bg-gray-100 hover:bg-gray-200 border-none"
          >
            {showAllFeatures ? 'See Less Features' : 'See All Features'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;