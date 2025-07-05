import React from 'react';

function Tabs({ activeTab, setActiveTab }) {
  const tabs = ['About Me', 'Education', 'Experience', 'Certifications', 'Projects'];

  return (
    <div className="mt-8 px-4 md:px-6 border-b border-gray-300">
      {/* Use max-w and mx-auto to follow the main container */}
      <div className="max-w-7xl mx-auto flex justify-start space-x-9 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 font-medium whitespace-nowrap ${activeTab === tab ? 'text-blue-600 border-b-4 border-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
