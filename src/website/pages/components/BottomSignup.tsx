import { GoogleOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';

const BottomSignup = () => {
  return (
    <section className="bg-green-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">
              Ready to simplify your receipt and expense management process?
            </h1>
            <p className="text-lg opacity-90">
              Enter your email or phone number to make your company's money go further with Expense
              App's time-saving spend management tools.
            </p>
          </div>

          {/* Right Column - Signup Form */}
          <div className="space-y-6">
            {/* Input and Button Group */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                placeholder="Enter your email or phone number"
                size="large"
                className="flex-grow"
                style={{
                  height: '44px',
                  borderRadius: '8px'
                }}
              />
              <Button
                type="primary"
                size="large"
                className="bg-green-500 hover:bg-green-600 w-full sm:w-auto"
                style={{
                  height: '44px',
                  borderRadius: '8px'
                }}
              >
                Get Started
              </Button>
            </div>

            {/* Error Message Container */}
            <div className="h-6">{/* Error message will appear here */}</div>

            {/* Google Sign In */}
            <div className="flex items-center justify-center gap-4">
              <span className="text-white opacity-90">Or get started with</span>
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
        </div>
      </div>
    </section>
  );
};

export default BottomSignup;
