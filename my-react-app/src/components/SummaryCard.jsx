const SummaryCard = ({ title, value, icon, trend, trendColor }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex items-start">
      <div className="p-3 rounded-full bg-indigo-100 text-indigo-600 mr-4">
        <span className="text-xl">{icon}</span>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="text-2xl font-semibold mt-1">{value}</p>
        {trend && (
          <p className={`text-sm mt-1 ${trendColor || 'text-green-500'}`}>
            {trend}
          </p>
        )}
      </div>
    </div>
  );
};

export default SummaryCard;