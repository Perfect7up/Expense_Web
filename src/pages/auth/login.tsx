import React from "react";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

const { Text, Title, Link } = Typography;

const Login: React.FC = () => {
  const onFinish = (values: { email: string; password: string; remember: boolean }) => {
    console.log("Received values of form: ", values);
  };

  return (
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

          <Title level={3} className="text-2xl md:text-3xl font-bold">Sign in</Title>
          <Text className="text-gray-500">Welcome back to Expense Tracker App! <br />Please enter your details below to sign in.</Text>
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
                type: "email",
                required: true,
                message: "Please input your Email!",
              },
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
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-400" />}
              type="password"
              placeholder="Password"
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
              Log in
            </Button>
            <div className="mt-4 text-center">
              <Text className="text-gray-500">Don't have an account?</Text>{" "}
              <Link href="/signup" className="text-blue-500 hover:text-blue-700">Sign up now</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default Login;
