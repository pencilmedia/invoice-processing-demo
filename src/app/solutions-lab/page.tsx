'use client';

import React from 'react';

const SolutionsLab = () => {
  const categories = [
    "Accounts Payable",
    "Accounts Receivable",
    "Category",
    "Category",
    "Category",
    "Category"
  ];

  const solutions = Array(12).fill({
    category: "Accounts Payable",
    title: "Invoice Processing",
    description: "Lorem ipsum dolor sit amet consectetur. Sed dui vitae semper fermentum purus."
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Solutions Lab</h1>
              <p className="mt-1 text-lg text-gray-500">Find your next AI Solution.</p>
            </div>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              View My Solutions
            </button>
          </div>
          
          {/* Search */}
          <div className="mt-6 relative">
            <input
              type="text"
              placeholder="Search applications..."
              className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Categories */}
          <div className="mt-6 flex space-x-4 overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 whitespace-nowrap"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Solutions Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-200 hover:border-transparent cursor-pointer">
              <div className="inline-block px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-full mb-4">
                {solution.category}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{solution.title}</h3>
              <p className="text-gray-600 text-sm">{solution.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SolutionsLab; 