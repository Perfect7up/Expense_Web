import React from 'react';
import { Button, Form, Input, Typography, Checkbox, message } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { signupAsync } from '../../store/actions/auth';

const { Text, Title, Link } = Typography;

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [messageApi, contextHolder] = message.useMessage();

  const showMessage = (type: 'success' | 'error', content: string) => {
    messageApi[type](content);
  };

  const onFinish = async (values: {
    email: string;
    password: string;
    full_name: string;
    password_confirmation: string;
  }) => {
    try {
      // Check if passwords match
      if (values.password !== values.password_confirmation) {
        showMessage('error', 'Password and confirmation password do not match');
        return;
      }

      const resultAction = await dispatch(signupAsync(values));

      if (signupAsync.fulfilled.match(resultAction)) {
        showMessage('success', 'Signup successful! Redirecting to dashboard...');
        // Add a slight delay before navigation
        setTimeout(() => {
          navigate('/login');
        }, 1500);
      } else if (signupAsync.rejected.match(resultAction)) {
        if ('payload' in resultAction) {
          const error = resultAction.payload;
          if (error) {
            if (Array.isArray(error)) {
              error.forEach((err) => {
                showMessage('error', err.message || 'Signup failed. Please try again.');
              });
            } else {
              showMessage('error', 'Signup failed. Please try again.');
            }
          } else {
            const errorMessage =
              'response' in resultAction.error
                ? (resultAction.error as any).response?.data?.errors[0]?.message ||
                  'Signup failed. Please try again.'
                : 'Signup failed. Please try again.';
            showMessage('error', errorMessage);
          }
        } else {
          showMessage('error', resultAction || 'Signup failed. Please try again.');
        }
      }
    } catch (error) {
      showMessage('error', 'An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <>
      {contextHolder}
      <section className="flex items-center bg-gray-50 min-h-screen sm:h-auto p-0 md:p-16">
        <div className="w-full max-w-sm mx-auto p-4 md:px-8 md:py-10 bg-white shadow-lg rounded-lg">
          <div className="mb-8 text-center">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto mb-4"
            >
              <rect x="0.464294" width="24" height="24" rx="4.8" fill="#1890FF" />
              <path d="M14.8643 3.6001H20.8643V9.6001H14.8643V3.6001Z" fill="white" />
              <path d="M10.0643 9.6001H14.8643V14.4001H10.0643V9.6001Z" fill="white" />
              <path d="M4.06427 13.2001H11.2643V20.4001H4.06427V13.2001Z" fill="white" />
            </svg>

            <Title level={3} className="text-2xl md:text-3xl font-bold">
              Sign up
            </Title>
            <Text className="text-gray-500">
              Welcome back to Expense Tracker App! <br />
              Please enter your details below to sign up.
            </Text>
          </div>

          <Form
            name="normal_login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout="vertical"
            requiredMark="optional"
            className="space-y-4"
          >
            <Form.Item
              name="email"
              rules={[
                {
                  type: 'email',
                  required: true,
                  message: 'Please input your Email!'
                }
              ]}
            >
              <Input
                prefix={<MailOutlined className="text-gray-400" />}
                placeholder="Email"
                className="p-2 border rounded-md"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!'
                }
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="text-gray-400" />}
                type="password"
                placeholder="Password"
                className="p-2 border rounded-md"
              />
            </Form.Item>

            <Form.Item
              name="full_name"
              rules={[
                {
                  required: true,
                  message: 'Please input your Full Name!'
                }
              ]}
            >
              <Input
                prefix={<MailOutlined className="text-gray-400" />}
                placeholder="Full Name"
                className="p-2 border rounded-md"
              />
            </Form.Item>

            <Form.Item
              name="password_confirmation"
              rules={[
                {
                  required: true,
                  message: 'Please confirm your Password!'
                }
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="text-gray-400" />}
                type="password"
                placeholder="Confirm Password"
                className="p-2 border rounded-md"
              />
            </Form.Item>

            <Form.Item className="flex items-center justify-between">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a href="#" className="text-blue-500 hover:text-blue-700 text-sm">
                Forgot password?
              </a>
            </Form.Item>

            <Form.Item className="mb-0">
              <Button block={true} type="primary" htmlType="submit" className="w-full">
                Sign Up
              </Button>
              <div className="mt-4 text-center">
                <Text className="text-gray-500">Already have an account?</Text>{' '}
                <Link href="/auth/login" className="text-blue-500 hover:text-blue-700">
                  Login now
                </Link>
              </div>
            </Form.Item>
          </Form>
        </div>
      </section>
    </>
  );
};

export default Signup;
