import { useState } from 'react';

interface Step {
  icon: string;
  title: string;
  description: string;
}

interface StepsContent {
  employees: Step[];
  owners: Step[];
  accounting: Step[];
}

const TrialSection = () => {
  const [activeTab, setActiveTab] = useState<string>('employees');

  const tabs = [
    { id: 'employees', label: 'For Employees' },
    { id: 'owners', label: 'For Business Owners' },
    { id: 'accounting', label: 'For Finance/Accounting' }
  ];

  const stepsContent: StepsContent = {
    employees: [
      {
        icon: '📱',
        title: '1. Add Expense',
        description: 'Upload your first receipt with the mobile app, drag-and-drop on the web, or forward it to receipts@Expense App.com.'
      },
      {
        icon: '📄',
        title: '2. Create Report',
        description: 'Automatically generate expense reports for reimbursement or reconciliation. Add categories, tags, and comments, then submit.'
      },
      {
        icon: '💸',
        title: '3. Get Reimbursed',
        description: 'Once approved, get reimbursed directly to your bank account in as little as one business day.'
      }
    ],
    owners: [
      {
        icon: '📋',
        title: '1. Set Expense Rules',
        description: 'Set category limits and/or expense rules. Let employees submit expenses by scanning receipts or entering costs manually.'
      },
      {
        icon: '✅',
        title: '2. Approve Reports',
        description: 'Review expense reports in one place, collect missing information directly, and approve expenses with a single click.'
      },
      {
        icon: '🏦',
        title: '3. Reimburse',
        description: 'Reimburse employees directly via ACH with just a few clicks.'
      }
    ],
    accounting: [
      {
        icon: '📨',
        title: '1. Receive Expenses',
        description: 'Set category limits and/or expense rules. Let employees submit expenses by scanning receipts or entering costs manually.'
      },
      {
        icon: '✅',
        title: '2. Approve Reports',
        description: 'Review expense reports in one place, collect missing information directly, and approve expenses with a single click.'
      },
      {
        icon: '💻',
        title: '3. Export to Accounting Software',
        description: 'Spend 75% less time on expenses by reconciling expense data and automatically exporting entries into QuickBooks, NetSuite, Xero, and more.'
      }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">How Expense App's free trial works</h2>
      </div>

      <div className="flex justify-center gap-4 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
              ${activeTab === tab.id
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:bg-gray-50'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {stepsContent[activeTab as keyof typeof stepsContent].map((step, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg text-center transition-all duration-300 hover:shadow-lg"
          >
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-emerald-500 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-600 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default TrialSection;