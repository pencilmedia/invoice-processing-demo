import React from 'react';

const SolutionsLab: React.FC = () => {
  return (
    <div className="flex-1 bg-white p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Solutions Lab</h1>
      <p className="text-gray-600 mb-8">Explore and discover new AI-powered solutions for your business.</p>
      
      {/* Grid of solution cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Invoice Processing",
            description: "Automate your invoice processing workflow with AI",
            status: "Live"
          },
          {
            title: "Customer Support",
            description: "AI-powered customer service automation",
            status: "Coming Soon"
          },
          {
            title: "Data Analysis",
            description: "Intelligent data analysis and reporting",
            status: "Beta"
          },
          {
            title: "Document Management",
            description: "Smart document organization and retrieval",
            status: "Coming Soon"
          },
          {
            title: "Process Automation",
            description: "End-to-end business process automation",
            status: "Coming Soon"
          },
          {
            title: "Compliance Monitoring",
            description: "Automated compliance checking and reporting",
            status: "Coming Soon"
          }
        ].map((solution, index) => (
          <div 
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{solution.title}</h3>
              <span className={`px-2 py-1 text-xs rounded-full ${
                solution.status === 'Live' 
                  ? 'bg-green-100 text-green-800'
                  : solution.status === 'Beta'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {solution.status}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{solution.description}</p>
            <button 
              className={`w-full px-4 py-2 rounded-lg text-sm font-medium ${
                solution.status === 'Live'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
              disabled={solution.status !== 'Live'}
            >
              {solution.status === 'Live' ? 'Launch Solution' : 'Coming Soon'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionsLab; 