import React from 'react';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  WalletOutlined,
  GlobalOutlined,
  CheckCircleOutlined,
  SettingOutlined,
  PhoneFilled
} from '@ant-design/icons';
import { useTheme } from '../../context/ThemeContext';
import { Button } from 'antd';

const Sidebar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-4 bg-primary text-textPrimary h-screen">
      <Button onClick={toggleTheme} className="mb-6">
        Switch to {theme === 'light' ? 'Light' : 'Dark'} Theme
      </Button>
      <nav className="w-6 fixed top-12 left-0 flex flex-col p-5 bg-secondary h-full">
        <div className="">
          <ul>
            <li className="mb-4">
              <Link to="/dashboard" className="p-2 rounded-xl flex items-center">
                <HomeOutlined className="mr-2" /> Dashboard
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/expense" className="p-2 rounded-xl flex items-center">
                <WalletOutlined className="mr-2" /> Expense
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/trips" className="p-2 rounded-xl flex items-center">
                <GlobalOutlined className="mr-2" /> Trips
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/approvals" className="p-2 rounded-xl flex items-center">
                <CheckCircleOutlined className="mr-2" /> Approvals
              </Link>
            </li>
            <li className="mb-4">
              <a href="#" className="p-2 rounded-xl flex items-center">
                <SettingOutlined className="mr-2" /> Settings
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="p-2 rounded-xl  flex items-center">
                <PhoneFilled className="mr-2" /> Support
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
