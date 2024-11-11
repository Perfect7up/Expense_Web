import React from 'react';
import { Button, Input, Card } from 'antd';
import { GoogleOutlined, CheckOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

interface GoalCardProps {
  title: string;
  description?: string;
  icon: string;
}

const MainSection: React.FC = () => {
  return (
    <div className="bg-emerald-500 text-white font-sans">
      {/* Header */}
      <div className="max-w-screen-xl w-11/12 m-auto">
        <header className="flex justify-between items-center mb-16">
          <h1 className="text-4xl font-bold mt-5">Expense App</h1>
          <Button
            type="default"
            className="bg-emerald-600 text-white hover:bg-emerald-700 border-none rounded-full h-auto px-6 py-2 mt-5"
          >
            <Link to='/sign-in'>Sign In</Link>
          </Button>
        </header>

        {/* Hero Section */}
        <div className="mb-12">
          <h2 className="text-6xl font-bold mb-12 max-w-2xl leading-tight">
            The expense management app that does it all.
          </h2>

          <ul className="space-y-4 text-lg mb-16">
            <li className="flex items-start gap-2">
              <CheckOutlined className="text-2xl mt-1" />
              <span>
                All inclusive. Manage expenses, track receipts, reimburse employees, create expense
                reports, and send invoices.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckOutlined className="text-2xl mt-1" />
              <span>Corporate card. Cash back on all US purchases. Fraud protection.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckOutlined className="text-2xl mt-1" />
              <span>
                45+ integrations. Quickbooks, NetSuite, Sage Intacct, Xero, Workday, Gusto, and so
                much more.
              </span>
            </li>
          </ul>
        </div>

        {/* Goal Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">I want to:</h3>
          <div className="grid grid-cols-3 gap-6">
            <GoalCard title="Organize my own expenses" icon="🐷" />
            <GoalCard
              title="Manage expenses for a small team"
              description="(1-9 employees)"
              icon="📈"
            />
            <GoalCard
              title="Control expenses for a larger organization"
              description="(10+ employees)"
              icon="🏢"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="mb-24">
          <div className="flex gap-4 mb-4">
            <Input
              placeholder="Enter your email"
              size="large"
              className="bg-white text-black rounded-md py-6 text-lg w-96"
            />
            <Button
              type="primary"
              size="large"
              className="bg-emerald-700 hover:bg-emerald-800 border-none h-auto px-8 py-6 text-lg"
            >
              Get Started
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <span>Or get started with</span>
            <Button
              icon={<GoogleOutlined />}
              type="default"
              size="large"
              className="bg-white hover:bg-gray-100 text-black flex items-center"
            >
              Google
            </Button>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mb-16">
          <h4 className="text-xl mb-8">Join 12 million+ users who trust Expense App</h4>
          <div className="flex justify-center items-center space-x-4 size-16">
            <img
              src="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/logo_xero.svg"
              alt="Xero"
              className="opacity-90"
            />
            <img
              src="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/logo_tribeca.svg"
              alt="Tribeca Film Festival"
              className="opacity-90"
            />
            <img
              src="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/logo_warby.svg"
              alt="Warby Parker"
              className="opacity-90"
            />
            <img
              src="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/logo_swatch.svg"
              alt="Swatch Group"
              className="opacity-90"
            />
            <img
              src="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/logo_pinterest.svg"
              alt="Pinterest"
              className="opacity-90"
            />
            <img
              src="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/logo_uk.svg"
              alt="University of Kentucky"
              className="opacity-90"
            />
            <img
              src="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/logo_github.svg"
              alt="GitHub"
              className="opacity-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const GoalCard: React.FC<GoalCardProps> = ({ title, description, icon }) => (
  <Card
    hoverable
    className="bg-emerald-100 rounded-2xl border-none cursor-pointer transition-colors hover:bg-emerald-200"
    bodyStyle={{ padding: '2rem' }}
  >
    <div className="text-left">
      <span className="text-4xl mb-4 block">{icon}</span>
      <h4 className="text-emerald-950 text-xl font-semibold mb-1">{title}</h4>
      {description && <p className="text-emerald-700 text-sm">{description}</p>}
    </div>
  </Card>
);

export default MainSection;
