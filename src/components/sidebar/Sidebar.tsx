import React from "react";
import { Link } from "react-router-dom";
import { HomeOutlined, WalletOutlined, GlobalOutlined, CheckCircleOutlined, SettingOutlined, PhoneFilled } from '@ant-design/icons';

const Sidebar: React.FC = () => {
  return (
    <nav className="text-white h-screen w-64 fixed top-0 left-0 flex flex-col p-5" style={{ backgroundColor: '#1b1c1c' }}>
      <div className="flex-1 flex flex-col p-4">
        <ul>
          <li className="mb-4">
            <Link to="/" className="hover:bg-gray-700 hover:text-cyan-400 p-2 rounded-xl block flex items-center">
              <HomeOutlined className="mr-2" /> Home
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/expense" className="hover:bg-gray-700 p-2 rounded-xl hover:text-cyan-400 block flex items-center">
              <WalletOutlined className="mr-2" /> Expense
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/trips" className="hover:bg-gray-700 p-2 rounded-xl hover:text-cyan-400 block flex items-center">
              <GlobalOutlined className="mr-2" /> Trips
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/approvals" className="hover:bg-gray-700 p-2 rounded-xl hover:text-cyan-400 block flex items-center">
              <CheckCircleOutlined className="mr-2" /> Approvals
            </Link>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:bg-gray-700 p-2 rounded-xl hover:text-cyan-400 block flex items-center">
              <SettingOutlined className="mr-2" /> Settings
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:bg-gray-700 p-2 rounded-xl hover:text-cyan-400 block flex items-center">
              <PhoneFilled className="mr-2" /> Support
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;