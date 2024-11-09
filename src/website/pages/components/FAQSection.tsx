import { Collapse } from 'antd';
const { Panel } = Collapse;

const FAQSection = () => {
  const faqData = [
    {
      question: 'What is Expense App?',
      answer:
        'Expense App is an all-in-one expense management platform. You can track every receipt, manage expenses, and handle reimbursement, all with a couple of clicks.'
    },
    {
      question: 'Who is Expense App for?',
      answer: (
        <div>
          <p>Expense App is the perfect expense management tool for your entire team:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Employees: Scan receipts, auto-generate reports, and get reimbursed in seconds.</li>
            <li>
              Employers: View expense reports at a glance, automatically approve requests, and send
              payments in a couple of clicks.
            </li>
            <li>
              Accounting: View expense requests on one dashboard. Reimburse instantly and
              auto-import entries into your preferred accounting software.
            </li>
          </ul>
        </div>
      )
    },
    {
      question: 'What kind of expenses can I track?',
      answer:
        'With Expense App, you can scan receipts, track mileage, and upload travel. You can also use it to pay bills and generate invoices.'
    },
    {
      question: "Can I use Expense App if my company doesn't use it?",
      answer:
        "Yes! Employees and contractors can use Expense App to track and manage their expenses even if their company doesn't use Expense App. You can submit your expenses to your employer electronically or create a PDF that you can email."
    },
    {
      question: 'How quickly can I get set up?',
      answer:
        'Expense App is ready to use in seconds! Just sign up with your email or phone number to open your account, and you can upload receipts right away!'
    },
    {
      question: 'What does Expense App integrate with?',
      answer:
        'Expense App integrates with QuickBooks, Xero, Oracle Netsuite, Sage Intacct, ADP, and Gusto, and 45+ more apps. Choose from accounting, finance, ERP, travel, tax, and many more software.'
    },
    {
      question: 'Can Expense App help with compliance?',
      answer:
        'Yes! Expense App allows you to streamline the auditing process by detecting duplicate receipts, ensuring correct exchange rates, and automatically checking transactions against company policies.'
    },
    {
      question: 'How do I upload expenses?',
      answer:
        'To upload expenses simply scan receipts via mobile app or swipe with your Expense App card. Expense App will automatically capture the amount, date, merchant, and more. You can also enter your payment information manually in a few seconds.'
    },
    {
      question: 'How much does it cost?',
      answer:
        'Expense App is completely free to use as an individual. For companies, plans start at $5 per member, but you can offset that cost with cash back from the Expense App Card.'
    },
    {
      question: 'How do I get started?',
      answer:
        'Getting started with Expense App is easy! Just sign up with your email or phone number, and you can start uploading receipts and tracking expenses right away.'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">FAQ</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Collapse bordered={false} className="bg-transparent" expandIconPosition="end">
              {faqData.slice(0, 5).map((faq, index) => (
                <Panel
                  header={<span className="font-semibold">{faq.question}</span>}
                  key={index}
                  className="mb-4 bg-white rounded-lg overflow-hidden"
                >
                  <div className="text-gray-600">{faq.answer}</div>
                </Panel>
              ))}
            </Collapse>
          </div>

          <div>
            <Collapse bordered={false} className="bg-transparent" expandIconPosition="end">
              {faqData.slice(5).map((faq, index) => (
                <Panel
                  header={<span className="font-semibold">{faq.question}</span>}
                  key={index + 5}
                  className="mb-4 bg-white rounded-lg overflow-hidden"
                >
                  <div className="text-gray-600">{faq.answer}</div>
                </Panel>
              ))}
            </Collapse>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
