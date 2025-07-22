import { useState } from 'react';
import { Link } from 'react-router-dom';
import ActivityItem from './ActivityItem';

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  
  const notifications = [
    { id: 1, message: 'Project "Website Redesign" completed', time: '2 hours ago' },
    { id: 2, message: 'New message from client "Acme Corp"', time: '5 hours ago' },
    { id: 3, message: 'Invoice #1234 was paid', time: '1 day ago' },
  ];

  return (
    <header className="bg-white shadow-sm z-10">
      <div className="flex items-center justify-between px-3 py-2 sm:px-4 sm:py-3">
        {/* Mobile menu button */}
        <button 
          className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        <div className="flex-1 flex justify-between items-center">
          <div className="ml-2 sm:ml-4 lg:ml-0">
            <h1 className="text-lg sm:text-xl font-semibold text-gray-800">Dashboard</h1>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Notifications */}
            <div className="relative">
              <button 
                className="p-2 rounded-full hover:bg-gray-100 focus:outline-none"
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                aria-label="Notifications"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </button>
              
              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg overflow-hidden z-20">
                  <div className="py-2">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <h3 className="font-medium text-gray-800">Notifications</h3>
                    </div>
                    {notifications.map(notification => (
                      <ActivityItem 
                        key={notification.id}
                        message={notification.message}
                        time={notification.time}
                      />
                    ))}
                    <Link 
                      to="#" 
                      className="block px-4 py-2 text-sm text-center text-indigo-600 hover:bg-gray-50"
                    >
                      View all notifications
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            {/* User profile */}
            <div className="flex items-center">
              <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-indigo-500 flex items-center justify-center text-white font-medium">
                JD
              </div>
              <span className="ml-2 hidden sm:inline text-sm font-medium">John Doe</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;