import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  HomeOutlined,
  WalletOutlined,
  GlobalOutlined,
  CheckCircleOutlined,
  SettingOutlined,
  UserOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { useTheme } from '../context/ThemeContext';
import { Button, Dropdown, Menu, Avatar } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAsync } from '../store/actions/auth';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state: { auth: { user: any } }) => state.auth.user);

  const userDetail = {
    name: user?.full_name,
    email: user?.email,
    avatarUrl: user?.dp
  };

  const handleLogout = async () => {
    try {
      await dispatch(logoutAsync() as any).unwrap();
      navigate('/sign-in');
    } catch (error) {
      console.log('Logout error:', error);
    }
  };

  const menu = (
    <Menu>
      <Menu.Item disabled>
        <div className="flex items-center space-x-2 p-2">
          <Avatar src={userDetail.avatarUrl} size="small" />
          <div>
            <div>{userDetail.name}</div>
            <div className="text-xs text-gray-500">{userDetail.email}</div>
          </div>
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="profile" icon={<UserOutlined />}>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        <Link to="/setting">Settings</Link>
      </Menu.Item>
      <Menu.Item key="theme">
        <Button onClick={toggleTheme} className="mr-4">
          {theme === 'light' ? 'Dark' : 'Light'}
        </Button>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        <Button onClick={handleLogout} type="text">
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="fixed top-0 left-0 right-0 bg-primary text-textPrimary flex items-center justify-between px-6 py-3 shadow-md">
      <div>Logo</div>
      <div className="flex items-center space-x-4">
        <Link to="/dashboard" className="p-2 flex items-center">
          <HomeOutlined className="mr-1" /> Dashboard
        </Link>
        <Link to="/transactions" className="p-2 flex items-center">
          <WalletOutlined className="mr-1" /> Transactions
        </Link>
        <Link to="/categories" className="p-2 flex items-center">
          <GlobalOutlined className="mr-1" /> Categories
        </Link>
        <Link to="/ledgers" className="p-2 flex items-center">
          <CheckCircleOutlined className="mr-1" /> Ledger
        </Link>
      </div>
      <Dropdown overlay={menu} trigger={['click']}>
        <div className="flex items-center cursor-pointer">
          <Avatar src={userDetail.avatarUrl} size="small" className="mr-2" />
          <span>{userDetail.name}</span>
        </div>
      </Dropdown>
    </div>
  );
};

export default Navbar;
