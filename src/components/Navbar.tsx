import { useState } from 'react';
import { Menu } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { logoutAsync } from '../store/actions/auth';
import { Button, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [messageApi, contextHolder] = message.useMessage();

  const showMessage = (type: 'success' | 'error', content: string) => {
    messageApi[type](content);
  };

  const menuItems = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard', to: '/dashboard' },
    { id: 'transactions', icon: '💳', label: 'Transactions', to: '/transactions' },
    { id: 'categories', icon: '🏷️', label: 'Categories', to: '/categories' },
    { id: 'ledger', icon: '📒', label: 'Ledger', to: '/ledger' }
  ];

  const userDetail = {
    name: "John Doe",
    email: "john@example.com",
    avatarUrl: "/api/placeholder/40/40"
  };

  const handleLogout = async () => {
    try {
      const response = await dispatch(logoutAsync() as any)
      if (logoutAsync.fulfilled.match(response)) {
        showMessage('success', 'Logout successful! Redirecting to Website...');
        setTimeout(() => {
          navigate('/');
        }, 1500);
      } else if (logoutAsync.rejected.match(response)) {
        showMessage('error', 'Error while loging out. Please try again.');
        console.log("logout error :", response)
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    }
  }

  return (
    <>
    {contextHolder}
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              Logo
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeItem === item.id
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <Link to={item.to}>
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                  </Link>
                </span>
              </button>
            ))}
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative group">
              <button className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200">
                <img
                  src={userDetail.avatarUrl}
                  alt="User"
                  className="w-8 h-8 rounded-full ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-gray-900"
                />
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {userDetail.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {userDetail.email}
                  </p>
                </div>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                <div className="py-1">
                  <a href="#profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">Profile</a>
                  <a href="#settings" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">Settings</a>
                  <Button className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <Link to='/' onClick={handleLogout}>Sign out</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveItem(item.id);
                setIsOpen(false);
              }}
              className={`w-full px-3 py-2 rounded-lg text-sm font-medium ${
                activeItem === item.id
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <span className="flex items-center space-x-2">
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;