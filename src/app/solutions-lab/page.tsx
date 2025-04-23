'use client';

import React, { useState, useMemo } from 'react';
import { MessageSquare, Bell, Users, MonitorPlay, ChevronDown, Flame } from 'lucide-react';

const SolutionsLab = () => {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    "Accounts Payable",
    "Accounts Receivable",
    "Record to Report",
    "Risk Management",
    "Project Management"
  ];

  const moreCategories = [
    "Supply Chain Management",
    "Human Resources",
    "Customer Service",
    "Legal & Compliance",
    "IT Operations"
  ];

  const solutions = [
    {
      title: "Invoice Processing",
      description: "Automate invoice processing with AI-powered data extraction and validation.",
      category: "Accounts Payable",
      status: ""
    },
    {
      title: "Billing",
      description: "Streamline billing operations with intelligent automation and validation.",
      category: "Accounts Receivable",
      status: "Coming soon"
    },
    {
      title: "Collections",
      description: "Optimize collections workflow with predictive analytics and automation.",
      category: "Accounts Receivable",
      status: "Coming soon"
    },
    {
      title: "Customer Setup",
      description: "Automate customer onboarding and verification processes.",
      category: "Accounts Receivable",
      status: "Coming soon"
    },
    {
      title: "Monthly Close",
      description: "Accelerate month-end closing with automated reconciliation and reporting.",
      category: "Record to Report",
      status: ""
    },
    {
      title: "Financial Reporting",
      description: "Generate accurate financial reports with AI-assisted data analysis.",
      category: "Record to Report",
      status: ""
    },
    {
      title: "Treasury and Tax",
      description: "Optimize treasury operations and tax compliance with intelligent automation.",
      category: "Record to Report",
      status: ""
    },
    {
      title: "Internal Controls",
      description: "Enhance internal controls with AI-powered risk detection.",
      category: "Risk Management",
      status: ""
    },
    {
      title: "Audit Issues",
      description: "Track and resolve audit issues with automated workflow management.",
      category: "Risk Management",
      status: ""
    },
    {
      title: "Accounting Standards",
      description: "Ensure compliance with automated accounting standards verification.",
      category: "Risk Management",
      status: ""
    },
    {
      title: "Financial Reporting",
      description: "Streamline financial reporting with automated data consolidation.",
      category: "Record to Report",
      status: ""
    },
    {
      title: "Application Development",
      description: "Accelerate application development with AI-assisted coding.",
      category: "Project Management",
      status: ""
    },
    {
      title: "Vendor Management",
      description: "Optimize vendor relationships with automated performance tracking.",
      category: "Supply Chain Management",
      status: "Coming soon"
    },
    {
      title: "Purchase Order Processing",
      description: "Automate purchase order creation and approval workflows.",
      category: "Supply Chain Management",
      status: ""
    },
    {
      title: "Inventory Optimization",
      description: "AI-powered inventory management and forecasting.",
      category: "Supply Chain Management",
      status: "Coming soon"
    },
    {
      title: "Employee Onboarding",
      description: "Streamline employee onboarding with automated document processing.",
      category: "Human Resources",
      status: ""
    },
    {
      title: "Payroll Processing",
      description: "Automate payroll calculations and compliance checks.",
      category: "Human Resources",
      status: ""
    },
    {
      title: "Performance Reviews",
      description: "AI-assisted performance evaluation and feedback management.",
      category: "Human Resources",
      status: "Coming soon"
    },
    {
      title: "Help Desk Automation",
      description: "AI-powered ticket routing and resolution suggestions.",
      category: "Customer Service",
      status: ""
    },
    {
      title: "Customer Feedback Analysis",
      description: "Analyze customer feedback with natural language processing.",
      category: "Customer Service",
      status: ""
    },
    {
      title: "Chat Support Optimization",
      description: "Enhance chat support with AI-powered response suggestions.",
      category: "Customer Service",
      status: "Coming soon"
    },
    {
      title: "Contract Review",
      description: "Automate contract review and risk assessment.",
      category: "Legal & Compliance",
      status: ""
    },
    {
      title: "Compliance Monitoring",
      description: "Real-time compliance monitoring and violation detection.",
      category: "Legal & Compliance",
      status: ""
    },
    {
      title: "Policy Management",
      description: "Streamline policy creation and distribution workflows.",
      category: "Legal & Compliance",
      status: "Coming soon"
    },
    {
      title: "Infrastructure Monitoring",
      description: "AI-powered infrastructure performance monitoring.",
      category: "IT Operations",
      status: ""
    },
    {
      title: "Security Incident Response",
      description: "Automated security incident detection and response.",
      category: "IT Operations",
      status: ""
    },
    {
      title: "Change Management",
      description: "Streamline IT change management processes.",
      category: "IT Operations",
      status: "Coming soon"
    },
    {
      title: "Budget Planning",
      description: "AI-assisted budget forecasting and planning.",
      category: "Project Management",
      status: ""
    },
    {
      title: "Resource Allocation",
      description: "Optimize resource allocation with predictive analytics.",
      category: "Project Management",
      status: "Coming soon"
    },
    {
      title: "Risk Assessment",
      description: "Automated project risk assessment and mitigation.",
      category: "Risk Management",
      status: ""
    },
    {
      title: "Expense Management",
      description: "Streamline expense reporting and approval processes.",
      category: "Accounts Payable",
      status: ""
    },
    {
      title: "Payment Processing",
      description: "Automate payment processing and reconciliation.",
      category: "Accounts Payable",
      status: ""
    },
    {
      title: "Credit Management",
      description: "AI-powered credit risk assessment and management.",
      category: "Accounts Receivable",
      status: ""
    },
    {
      title: "Financial Planning",
      description: "Intelligent financial planning and analysis automation.",
      category: "Record to Report",
      status: "Coming soon"
    },
    {
      title: "Regulatory Reporting",
      description: "Automate regulatory reporting and compliance checks.",
      category: "Legal & Compliance",
      status: ""
    },
    {
      title: "Talent Acquisition",
      description: "AI-powered candidate screening and recruitment.",
      category: "Human Resources",
      status: ""
    },
    {
      title: "Benefits Administration",
      description: "Streamline benefits enrollment and management.",
      category: "Human Resources",
      status: "Coming soon"
    },
    {
      title: "Service Desk Analytics",
      description: "AI-driven analysis of service desk performance.",
      category: "IT Operations",
      status: ""
    },
    {
      title: "Knowledge Management",
      description: "Intelligent knowledge base creation and maintenance.",
      category: "Customer Service",
      status: ""
    },
    {
      title: "Supplier Analytics",
      description: "AI-powered supplier performance analysis.",
      category: "Supply Chain Management",
      status: ""
    },
    {
      title: "Project Analytics",
      description: "Advanced project performance analytics and insights.",
      category: "Project Management",
      status: ""
    },
    {
      title: "Compliance Training",
      description: "Automated compliance training and certification tracking.",
      category: "Legal & Compliance",
      status: "Coming soon"
    },
    {
      title: "Customer Segmentation",
      description: "AI-driven customer segmentation and analysis.",
      category: "Customer Service",
      status: ""
    },
    {
      title: "Asset Management",
      description: "Intelligent IT asset lifecycle management.",
      category: "IT Operations",
      status: "Coming soon"
    },
    {
      title: "Demand Planning",
      description: "AI-powered demand forecasting and planning.",
      category: "Supply Chain Management",
      status: ""
    },
    {
      title: "Time Tracking",
      description: "Automated time tracking and project billing.",
      category: "Project Management",
      status: ""
    },
    {
      title: "Document Management",
      description: "Intelligent document classification and routing.",
      category: "Record to Report",
      status: ""
    },
    {
      title: "Fraud Detection",
      description: "AI-powered fraud detection and prevention.",
      category: "Risk Management",
      status: "Coming soon"
    },
    {
      title: "Cash Flow Forecasting",
      description: "Intelligent cash flow prediction and management.",
      category: "Treasury and Tax",
      status: ""
    },
    {
      title: "Vendor Onboarding",
      description: "Streamline vendor registration and verification.",
      category: "Supply Chain Management",
      status: ""
    },
    {
      title: "Employee Experience",
      description: "AI-driven employee satisfaction analysis.",
      category: "Human Resources",
      status: "Coming soon"
    }
  ];

  const highlightText = (text: string, query: string) => {
    if (!query) return text;

    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === query.toLowerCase() ? 
        <span key={index} className="bg-blue-100">{part}</span> : 
        part
    );
  };

  const handleFilterClick = (category: string) => {
    setSelectedFilter(category === selectedFilter ? '' : category);
    setIsMoreMenuOpen(false);
  };

  const filteredSolutions = useMemo(() => {
    return solutions.filter(solution => {
      // First apply category filter
      const matchesCategory = !selectedFilter || solution.category === selectedFilter;
      
      // Then apply search filter if there's a search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = solution.title.toLowerCase().includes(query);
        const matchesDescription = solution.description.toLowerCase().includes(query);
        return matchesCategory && (matchesTitle || matchesDescription);
      }
      
      return matchesCategory;
    });
  }, [selectedFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-white px-6 py-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Solutions Lab</h1>
        <p className="mt-1 text-lg text-gray-600">Find your next AI Solution.</p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
        <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-all duration-200">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
            <MessageSquare className="w-5 h-5 text-purple-600" />
          </div>
          <h3 className="font-semibold text-gray-900">Talk to us</h3>
          <p className="text-sm text-gray-600 mt-1">Contact Automation Anywhere Solution Team</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-all duration-200">
          <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mb-3">
            <Flame className="w-5 h-5 text-pink-600" />
          </div>
          <h3 className="font-semibold text-gray-900">Trending</h3>
          <p className="text-sm text-gray-600 mt-1">Browse trending AI Solutions</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-all duration-200">
          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
            <Bell className="w-5 h-5 text-orange-600" />
          </div>
          <h3 className="font-semibold text-gray-900">Latest Updates</h3>
          <p className="text-sm text-gray-600 mt-1">Stay updated with the newest features and releases</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-all duration-200">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
            <Users className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="font-semibold text-gray-900">Customer Stories</h3>
          <p className="text-sm text-gray-600 mt-1">Learn how others are succeeding with AI solutions</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-all duration-200">
          <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mb-3">
            <MonitorPlay className="w-5 h-5 text-cyan-600" />
          </div>
          <h3 className="font-semibold text-gray-900">Webinars</h3>
          <p className="text-sm text-gray-600 mt-1">Join our upcoming webinars to deepen your understanding</p>
        </div>
      </div>

      {/* Search */}
      <div className="mt-8 relative">
        <input
          type="text"
          placeholder="Search AI solutions"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2.5 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Categories */}
      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleFilterClick(category)}
            className={`px-4 py-2 text-sm font-medium border rounded-full transition-colors duration-200 ${
              selectedFilter === category
                ? 'text-blue-600 border-blue-600 bg-blue-50'
                : 'text-gray-700 border-gray-300 bg-white hover:bg-gray-50'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          >
            {category}
          </button>
        ))}
        <div className="relative">
          <button
            onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
            className={`px-4 py-2 text-sm font-medium border rounded-full transition-colors duration-200 flex items-center gap-1 ${
              selectedFilter && moreCategories.includes(selectedFilter)
                ? 'text-blue-600 border-blue-600 bg-blue-50'
                : 'text-gray-700 border-gray-300 bg-white hover:bg-gray-50'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          >
            More
            <ChevronDown className="w-4 h-4" />
          </button>
          {isMoreMenuOpen && (
            <div className="absolute z-10 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg">
              <div className="py-1">
                {moreCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => handleFilterClick(category)}
                    className={`block w-full px-4 py-2 text-sm text-left transition-colors duration-200 ${
                      selectedFilter === category
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {filteredSolutions.map((solution, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-200">
            <div className="flex flex-col h-full">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {highlightText(solution.title, searchQuery)}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {highlightText(solution.description, searchQuery)}
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  selectedFilter === solution.category
                    ? 'text-blue-600 border border-blue-600 bg-blue-50'
                    : 'text-gray-700 bg-gray-100'
                }`}>
                  {solution.category}
                </span>
                {solution.status && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-gray-700 bg-gray-100">
                    {solution.status}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
        {filteredSolutions.length === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No solutions found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SolutionsLab; 