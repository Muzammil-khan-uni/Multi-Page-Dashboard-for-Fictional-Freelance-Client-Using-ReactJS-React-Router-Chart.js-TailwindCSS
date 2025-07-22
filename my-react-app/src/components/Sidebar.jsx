import { NavLink } from 'react-router-dom';

const Sidebar = ({ sidebarOpen, setSidebarOpen, isMobile }) => {
  const navItems = [
    { path: '/', icon: '📊', label: 'Overview' },
    { path: '/projects', icon: '📂', label: 'Projects' },
    { path: '/profile', icon: '👤', label: 'Profile' },
  ];

  return (
    <>
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <aside 
        className={`fixed lg:relative inset-y-0 left-0 z-20 w-56 bg-indigo-700 text-white transform ${
          sidebarOpen || !isMobile ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 sidebar-transition`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 flex items-center">
            <span className="text-xl font-bold">FreelanceDash</span>
          </div>
          
          <nav className="flex-1 overflow-y-auto">
            <ul className="space-y-1 px-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => 
                      `flex items-center p-3 rounded-lg text-sm md:text-base ${
                        isActive ? 'bg-indigo-800' : 'hover:bg-indigo-600'
                      }`
                    }
                    onClick={() => isMobile && setSidebarOpen(false)}
                  >
                    <span className="mr-3 text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="p-4 text-xs text-indigo-200">
            © {new Date().getFullYear()} FreelanceDash
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;