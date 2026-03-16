import React from 'react';

function StatCards() {
  const stats = [
    { title: 'Total Employees', value: 150, color: 'bg-blue-500' },
    { title: 'Active Tasks', value: 25, color: 'bg-green-500' },
    { title: 'Completed Projects', value: 12, color: 'bg-yellow-500' },
    { title: 'Revenue', value: '$50,000', color: 'bg-purple-500' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {stats.map((stat, index) => (
        <div key={index} className={`p-6 rounded-lg shadow-md text-white ${stat.color}`}>
          <h3 className="text-lg font-semibold">{stat.title}</h3>
          <p className="text-2xl font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

export default StatCards;
