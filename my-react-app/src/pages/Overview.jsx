import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import SummaryCard from '../components/SummaryCard';
import ActivityItem from '../components/ActivityItem';

// Register ChartJS components
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const Overview = () => {
  // Chart data
  const earningsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Earnings ($)',
        data: [4000, 3000, 5000, 2780, 1890, 2390],
        backgroundColor: '#6366F1',
        borderColor: '#4F46E5',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return '$' + value;
          }
        }
      }
    }
  };

  // Recent activities
  const activities = [
    { id: 1, message: 'Started new project "E-commerce Site"', time: '30 minutes ago' },
    { id: 2, message: 'Completed milestone for "Mobile App"', time: '2 hours ago' },
    { id: 3, message: 'Received payment for "Logo Design"', time: '1 day ago' },
    { id: 4, message: 'Client meeting scheduled for Friday', time: '2 days ago' },
  ];

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Overview</h2>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
        <SummaryCard 
          title="Total Projects" 
          value="12" 
          icon="📂" 
          trend="+2 this month" 
        />
        <SummaryCard 
          title="Earnings" 
          value="$8,450" 
          icon="💰" 
          trend="+15% from last month" 
        />
        <SummaryCard 
          title="Tasks Due" 
          value="5" 
          icon="⏰" 
          trendColor="text-red-500" 
          trend="+1 overdue" 
        />
        <SummaryCard 
          title="Satisfaction" 
          value="94%" 
          icon="⭐" 
          trend="+2% from last quarter" 
        />
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
          <h3 className="font-medium text-gray-700 mb-3 sm:mb-4">Monthly Earnings</h3>
          <div className="h-48 sm:h-64">
            <Bar data={earningsData} options={chartOptions} />
          </div>
        </div>
        
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
          <h3 className="font-medium text-gray-700 mb-3 sm:mb-4">Project Types</h3>
          <div className="h-48 sm:h-64 flex items-center justify-center">
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
              Web: 60%
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-3 sm:p-4 border-b border-gray-100">
          <h3 className="font-medium text-gray-700">Recent Activity</h3>
        </div>
        <div>
          {activities.map(activity => (
            <ActivityItem 
              key={activity.id}
              message={activity.message}
              time={activity.time}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;