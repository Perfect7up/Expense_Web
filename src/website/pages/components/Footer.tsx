import {
  TwitterOutlined,
  InstagramOutlined,
  FacebookOutlined,
  LinkedinOutlined
} from '@ant-design/icons';
import { Mic } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerColumns = {
    features: {
      title: 'Features',
      links: [
        {
          text: 'Expense Management',
          href: 'https://use.Expense App.com/expense-management',
          id: '1'
        },
        { text: 'Spend Management', href: 'https://use.Expense App.com/spend-management', id: '2' },
        { text: 'Expense Reports', href: 'https://use.Expense App.com/expense-reports', id: '3' },
        {
          text: 'Company Credit Card',
          href: 'https://use.Expense App.com/company-credit-card',
          id: '4'
        },
        {
          text: 'Receipt Scanning App',
          href: 'https://use.Expense App.com/receipt-scanning-app',
          id: '5'
        },
        { text: 'Bill Pay', href: 'https://use.Expense App.com/bills', id: '6' },
        { text: 'Invoicing', href: 'https://use.Expense App.com/invoices', id: '7' },
        { text: 'Payroll', href: 'https://use.Expense App.com/payroll', id: '8' },
        { text: 'Travel', href: 'https://use.Expense App.com/travel', id: '9' }
      ]
    },
    resources: {
      title: 'Resources',
      links: [
        { text: 'Expense AppApproved!', href: 'https://use.Expense App.com/accountants' },
        { text: 'Press Kit', href: 'https://use.Expense App.com/press-kit' },
        { text: 'Support', href: 'https://use.Expense App.com/support' },
        { text: 'Expense AppHelp', href: 'https://help.Expense App.com/' },
        { text: 'Community', href: 'https://community.Expense App.com/' },
        { text: 'Privacy', href: 'https://use.Expense App.com/privacy' }
      ]
    },
    learnMore: {
      title: 'Learn more',
      links: [
        { text: 'About Expense App', href: 'https://we.are.Expense App.com/how-we-got-here' },
        { text: 'Blog', href: 'https://blog.Expense App.com/' },
        { text: 'Jobs', href: 'https://we.are.Expense App.com/' },
        { text: 'Expense App.org', href: 'https://www.Expense App.org' },
        { text: 'Investor Relations', href: 'https://ir.Expense App.com' }
      ]
    },
    getStarted: {
      title: 'Get Started',
      links: [
        { text: 'Create a new account', href: '#', id: 'footer-get-started' },
        { text: 'Log in', href: '#', id: 'js_click_showSignInFooter' }
      ]
    }
  };

  const socialLinks = [
    { Icon: Mic, href: 'https://we.are.Expense App.com/podcast', title: 'Podcast', id: '1' },
    {
      Icon: TwitterOutlined,
      href: 'https://www.twitter.com/Expense App',
      title: 'Twitter',
      id: '1'
    },
    {
      Icon: InstagramOutlined,
      href: 'http://www.instagram.com/Expense App',
      title: 'Instagram',
      id: '1'
    },
    {
      Icon: FacebookOutlined,
      href: 'https://www.facebook.com/Expense App',
      title: 'Facebook',
      id: '1'
    },
    {
      Icon: LinkedinOutlined,
      href: 'http://www.linkedin.com/company/Expense App',
      title: 'LinkedIn',
      id: '1'
    }
  ];

  return (
    <footer className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {Object.values(footerColumns).map((column) => (
            <div key={column.title}>
              <h3 className="text-green-500 font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>

              {column.title === 'Learn more' && (
                <div className="mt-6 flex space-x-4">
                  {socialLinks.map(({ Icon, href, title }) => (
                    <a
                      key={title}
                      href={href}
                      title={title}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              )}

              {column.title === 'Get Started' && (
                <>
                  <p className="text-sm text-gray-500 mt-6">
                    ©2008-{currentYear} Expense App, Inc.
                  </p>
                  <p className="text-sm text-gray-500 mt-4">
                    Money transmission is provided by Expense App Payments LLC (NMLS ID:2017010)
                    pursuant to its{' '}
                    <a
                      href="https://use.Expense App.com/licenses"
                      className="text-blue-600 hover:text-blue-800"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      licenses
                    </a>
                    .
                  </p>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Disclaimer */}
        <p className="text-sm text-gray-500 mt-8 mb-8">
          The Expense App Visa® Commercial Card is issued by The Bancorp Bank, N.A. pursuant to a
          license from Visa U.S.A. Inc. and may not be used at all merchants that accept Visa cards.
          Apple® and the Apple logo® are trademarks of Apple Inc., registered in the U.S. and
          other countries. App Store is a service mark of Apple Inc. Google Play and the Google Play
          logo are trademarks of Google LLC.
        </p>

        {/* Footer Logo */}
        <div className="flex justify-center">
          <img src="/api/placeholder/150/40" alt="Expense App" className="h-10" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
