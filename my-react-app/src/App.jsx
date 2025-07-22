import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Overview from './pages/Overview';
import Projects from './pages/Projects';
import Profile from './pages/Profile';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <div className="flex h-screen bg-gray-100 overflow-hidden">
        <Sidebar 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen}
          isMobile={isMobile}
        />
        
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <Header 
            sidebarOpen={sidebarOpen} 
            setSidebarOpen={setSidebarOpen}
            isMobile={isMobile}
          />
          
          <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
            <div className="max-w-7xl mx-auto w-full">
              <Routes>
                <Route path="/" element={<Overview isMobile={isMobile} />} />
                <Route path="/projects" element={<Projects isMobile={isMobile} />} />
                <Route path="/profile" element={<Profile isMobile={isMobile} />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;