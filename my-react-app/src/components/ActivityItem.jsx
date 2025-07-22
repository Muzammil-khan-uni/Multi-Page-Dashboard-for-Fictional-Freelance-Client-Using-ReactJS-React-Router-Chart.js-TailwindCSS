const ActivityItem = ({ message, time }) => {
  return (
    <div className="px-4 py-3 hover:bg-gray-50">
      <p className="text-sm text-gray-800">{message}</p>
      <p className="text-xs text-gray-500 mt-1">{time}</p>
    </div>
  );
};

export default ActivityItem;