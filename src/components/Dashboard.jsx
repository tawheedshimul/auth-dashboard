import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { 
  FiHome, 
  FiTrendingUp, 
  FiUsers, 
  FiSettings, 
  FiLogOut,
  FiBell,
  FiPieChart,
  FiFileText,
  FiShoppingCart
} from 'react-icons/fi';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notifications] = useState(3);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gradient-to-b from-purple-900 to-purple-800 text-white transition-all duration-300 flex flex-col`}>
        <div className="p-4 flex items-center justify-between border-b border-purple-700">
          {sidebarOpen ? (
            <h1 className="text-xl font-bold">AdminPanel</h1>
          ) : (
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="font-bold">AP</span>
            </div>
          )}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 rounded-full hover:bg-purple-700"
          >
            {sidebarOpen ? '«' : '»'}
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            <li>
              <Link
                to="/"
                className="flex items-center p-3 rounded-lg transition-colors hover:bg-purple-700"
              >
                <FiHome size={20} />
                {sidebarOpen && <span className="ml-3">Dashboard</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/analytics"
                className="flex items-center p-3 rounded-lg transition-colors hover:bg-purple-700"
              >
                <FiTrendingUp size={20} />
                {sidebarOpen && <span className="ml-3">Analytics</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/customers"
                className="flex items-center p-3 rounded-lg transition-colors hover:bg-purple-700"
              >
                <FiUsers size={20} />
                {sidebarOpen && <span className="ml-3">Customers</span>}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-purple-700">
          <button className="flex items-center w-full p-3 text-purple-200 hover:bg-purple-700 rounded-lg transition-colors">
            <FiLogOut size={20} />
            {sidebarOpen && <span className="ml-3">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex items-center justify-between px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Dashboard
            </h2>
            
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
                <FiBell size={20} />
                {notifications > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold">
                  JD
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;