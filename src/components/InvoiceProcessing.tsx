import React, { useState, useEffect, useRef } from 'react';
import { Eye, EyeOff, Menu, User, X, MessageSquare, ChevronRight, ChevronLeft } from 'lucide-react';
import { Invoice, ChatMessage } from '../types/invoice';
import PdfViewerDialog from './PdfViewerDialog';

const InvoiceProcessing: React.FC = () => {
  // Authentication state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  
  // For Invoice Processing App
  const invoices: Invoice[] = [
    { 
      id: 'INV-2025-001', 
      company: 'Acme Corp', 
      amount: '$1,245.00', 
      date: '2025-01-01', 
      status: 'needs-assistance' 
    },
    { 
      id: 'INV-2025-002', 
      company: 'TechSolutions Inc.', 
      amount: '$3,782.50', 
      date: '2025-01-02', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-003', 
      company: 'Global Manufacturers', 
      amount: '$945.75', 
      date: '2025-01-03', 
      status: 'processed' 
    },
    { 
      id: 'INV-2025-004', 
      company: 'XYZ Enterprises', 
      amount: '$2,156.00', 
      date: 'Duis aute irure dolor in reprehenderit.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-005', 
      company: 'Digital Services Ltd.', 
      amount: '$4,890.25', 
      date: 'Excepteur sint occaecat. Cupidatat non proident.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-006', 
      company: 'Quantum Innovations', 
      amount: '$6,750.00', 
      date: 'Innovative solutions for next-gen technology.', 
      status: 'processed' 
    },
    { 
      id: 'INV-2025-007', 
      company: 'EcoSmart Solutions', 
      amount: '$3,299.99', 
      date: 'Sustainable technology implementations.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-008', 
      company: 'DataFlow Systems', 
      amount: '$5,475.50', 
      date: 'Enterprise data management solutions.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-009', 
      company: 'CloudNine Technologies', 
      amount: '$8,925.75', 
      date: 'Cloud infrastructure and services.', 
      status: 'processed' 
    },
    { 
      id: 'INV-2025-010', 
      company: 'SecureNet Solutions', 
      amount: '$4,150.25', 
      date: 'Advanced security implementations.', 
      status: 'needs-assistance' 
    },
    { 
      id: 'INV-2025-011', 
      company: 'SmartGrid Analytics', 
      amount: '$7,230.00', 
      date: 'Power grid optimization services.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-012', 
      company: 'BioTech Dynamics', 
      amount: '$9,150.75', 
      date: 'Medical research equipment.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-013', 
      company: 'RoboTech Industries', 
      amount: '$12,450.00', 
      date: 'Automation system deployment.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-014', 
      company: 'Nexus Logistics', 
      amount: '$5,678.90', 
      date: 'Supply chain optimization services.', 
      status: 'needs-assistance' 
    },
    { 
      id: 'INV-2025-015', 
      company: 'SolarEdge Energy', 
      amount: '$15,230.00', 
      date: 'Renewable energy solutions.', 
      status: 'processed' 
    },
    { 
      id: 'INV-2025-016', 
      company: 'FinTech Global', 
      amount: '$8,945.25', 
      date: 'Financial technology services.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-017', 
      company: 'HealthCare Plus', 
      amount: '$23,450.00', 
      date: 'Medical equipment and supplies.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-018', 
      company: 'EduTech Solutions', 
      amount: '$6,780.50', 
      date: 'Educational technology platforms.', 
      status: 'processed' 
    },
    { 
      id: 'INV-2025-019', 
      company: 'AgriTech Innovations', 
      amount: '$9,875.25', 
      date: 'Agricultural technology solutions.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-020', 
      company: 'CyberShield Security', 
      amount: '$12,345.00', 
      date: 'Cybersecurity services.', 
      status: 'needs-assistance' 
    },
    { 
      id: 'INV-2025-021', 
      company: 'GreenBuild Construction', 
      amount: '$45,678.90', 
      date: 'Sustainable construction materials.', 
      status: 'processed' 
    },
    { 
      id: 'INV-2025-022', 
      company: 'DataMine Analytics', 
      amount: '$7,890.25', 
      date: 'Big data analysis services.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-023', 
      company: 'SmartHome Systems', 
      amount: '$15,670.00', 
      date: 'Home automation solutions.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-024', 
      company: 'AutoTech Motors', 
      amount: '$32,450.00', 
      date: 'Automotive technology components.', 
      status: 'processed' 
    },
    { 
      id: 'INV-2025-025', 
      company: 'FoodTech Solutions', 
      amount: '$8,765.50', 
      date: 'Food processing technology.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-026', 
      company: 'RetailTech Systems', 
      amount: '$12,345.00', 
      date: 'Retail management software.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-027', 
      company: 'MediaStream Networks', 
      amount: '$18,765.25', 
      date: 'Digital media distribution.', 
      status: 'processed' 
    },
    { 
      id: 'INV-2025-028', 
      company: 'TravelTech Services', 
      amount: '$9,876.50', 
      date: 'Travel industry solutions.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-029', 
      company: 'SportsTech Innovations', 
      amount: '$15,432.00', 
      date: 'Sports technology equipment.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-030', 
      company: 'FashionTech Designs', 
      amount: '$23,456.75', 
      date: 'Fashion industry technology.', 
      status: 'processed' 
    },
    { 
      id: 'INV-2025-031', 
      company: 'PetTech Solutions', 
      amount: '$7,654.25', 
      date: 'Pet care technology.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-032', 
      company: 'LegalTech Systems', 
      amount: '$19,876.50', 
      date: 'Legal industry software.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-033', 
      company: 'RealEstate Tech', 
      amount: '$28,765.00', 
      date: 'Real estate technology.', 
      status: 'processed' 
    },
    { 
      id: 'INV-2025-034', 
      company: 'MusicTech Studios', 
      amount: '$12,345.75', 
      date: 'Music production technology.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-035', 
      company: 'GamingTech Solutions', 
      amount: '$15,678.25', 
      date: 'Gaming industry technology.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-036', 
      company: 'FitnessTech Systems', 
      amount: '$9,876.50', 
      date: 'Fitness technology equipment.', 
      status: 'processed' 
    },
    { 
      id: 'INV-2025-037', 
      company: 'BeautyTech Innovations', 
      amount: '$7,654.25', 
      date: 'Beauty industry technology.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-038', 
      company: 'ArtTech Studios', 
      amount: '$12,345.00', 
      date: 'Digital art technology.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-039', 
      company: 'SpaceTech Systems', 
      amount: '$45,678.90', 
      date: 'Space technology solutions.', 
      status: 'processed' 
    },
    { 
      id: 'INV-2025-040', 
      company: 'OceanTech Solutions', 
      amount: '$23,456.75', 
      date: 'Marine technology equipment.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-041', 
      company: 'MiningTech Systems', 
      amount: '$34,567.25', 
      date: 'Mining industry technology.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-042', 
      company: 'ForestTech Solutions', 
      amount: '$12,345.50', 
      date: 'Forestry technology equipment.', 
      status: 'processed' 
    },
    { 
      id: 'INV-2025-043', 
      company: 'WeatherTech Systems', 
      amount: '$9,876.25', 
      date: 'Weather monitoring technology.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-044', 
      company: 'WaterTech Solutions', 
      amount: '$15,678.50', 
      date: 'Water treatment technology.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-045', 
      company: 'AirTech Systems', 
      amount: '$23,456.75', 
      date: 'Air quality technology.', 
      status: 'processed' 
    },
    { 
      id: 'INV-2025-046', 
      company: 'WasteTech Solutions', 
      amount: '$12,345.25', 
      date: 'Waste management technology.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-047', 
      company: 'EnergyTech Systems', 
      amount: '$34,567.50', 
      date: 'Energy management technology.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-048', 
      company: 'TransportTech Solutions', 
      amount: '$45,678.25', 
      date: 'Transportation technology.', 
      status: 'processed' 
    },
    { 
      id: 'INV-2025-049', 
      company: 'ConstructionTech Systems', 
      amount: '$56,789.00', 
      date: 'Construction technology.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-050', 
      company: 'ManufacturingTech Solutions', 
      amount: '$67,890.25', 
      date: 'Manufacturing technology.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-051', 
      company: 'PharmaTech Systems', 
      amount: '$78,901.50', 
      date: 'Pharmaceutical technology.', 
      status: 'processed' 
    },
    { 
      id: 'INV-2025-052', 
      company: 'BioTech Solutions', 
      amount: '$89,012.75', 
      date: 'Biotechnology equipment.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-053', 
      company: 'ChemTech Systems', 
      amount: '$90,123.00', 
      date: 'Chemical technology.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-054', 
      company: 'PhysicsTech Solutions', 
      amount: '$12,345.25', 
      date: 'Physics research equipment.', 
      status: 'processed' 
    },
    { 
      id: 'INV-2025-055', 
      company: 'MathTech Systems', 
      amount: '$23,456.50', 
      date: 'Mathematical software.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-056', 
      company: 'GeoTech Solutions', 
      amount: '$34,567.75', 
      date: 'Geological technology.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-057', 
      company: 'AstroTech Systems', 
      amount: '$45,678.00', 
      date: 'Astronomy equipment.', 
      status: 'processed' 
    },
    { 
      id: 'INV-2025-058', 
      company: 'OceanTech Solutions', 
      amount: '$56,789.25', 
      date: 'Oceanographic technology.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-059', 
      company: 'ClimateTech Systems', 
      amount: '$67,890.50', 
      date: 'Climate research technology.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-060', 
      company: 'EcoTech Solutions', 
      amount: '$78,901.75', 
      date: 'Ecological technology.', 
      status: 'processed' 
    },
    { 
      id: 'INV-2025-061', 
      company: 'UrbanTech Systems', 
      amount: '$89,012.00', 
      date: 'Urban planning technology.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-062', 
      company: 'RuralTech Solutions', 
      amount: '$90,123.25', 
      date: 'Rural development technology.', 
      status: 'processing' 
    },
    { 
      id: 'INV-2025-063', 
      company: 'SocialTech Systems', 
      amount: '$12,345.50', 
      date: 'Social impact technology.', 
      status: 'processed' 
    }
  ];
  
  // App state
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200); // Default value that matches server
  const [isLeftPaneCollapsed, setIsLeftPaneCollapsed] = useState(false);
  const [leftPaneWidth, setLeftPaneWidth] = useState(320);
  const [isResizing, setIsResizing] = useState(false);
  const [isNarrowView, setIsNarrowView] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [fadeState, setFadeState] = useState("visible");
  const [displayedInvoice, setDisplayedInvoice] = useState<Invoice>(invoices[0]);
  const [currentPage, setCurrentPage] = useState("invoices");
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("30 Days");
  const [isMounted, setIsMounted] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  
  // Add new state for toggle with 'assisted' as default
  const [processingMode, setProcessingMode] = useState<'autonomous' | 'assisted'>('assisted');
  
  // Add new states for search and filter
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Refs
  const resizeRef = useRef<HTMLDivElement>(null);
  const leftPaneRef = useRef<HTMLDivElement>(null);

  // Add new state for dialog
  const [isPdfDialogOpen, setIsPdfDialogOpen] = useState(false);
  
  // Add new state for manual toggle
  const [isManuallyClosed, setIsManuallyClosed] = useState(false);
  
  // Handle initial mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Effect for window resize and pane width check
  useEffect(() => {
    if (!signedIn || !isMounted) return;
    
    const checkNarrowView = () => {
      if (leftPaneRef.current && !isLeftPaneCollapsed) {
        const width = leftPaneRef.current.offsetWidth;
        setIsNarrowView(width < 196);
      } else {
        setIsNarrowView(false);
      }
    };
    
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setWindowWidth(currentWidth);
      checkNarrowView();
      
      // Handle chat panel visibility based on viewport width
      if (currentWidth >= 1024) {
        if (!isChatOpen && !isManuallyClosed) {
          setIsChatOpen(true);
        }
      } else {
        if (isChatOpen) {
          setIsChatOpen(false);
        }
      }
    };
    
    // Set initial window width and check chat panel state
    const initialWidth = window.innerWidth;
    setWindowWidth(initialWidth);
    checkNarrowView();
    
    // Set initial chat panel state
    if (initialWidth >= 1024 && !isChatOpen && !isManuallyClosed) {
      setIsChatOpen(true);
    } else if (initialWidth < 1024 && isChatOpen) {
      setIsChatOpen(false);
    }
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isLeftPaneCollapsed, leftPaneWidth, signedIn, isMounted, windowWidth, isChatOpen, isManuallyClosed]);
  
  // Close menu when clicking outside
  useEffect(() => {
    if (!signedIn) return;
    
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.menu-container')) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen, signedIn]);

  // Handle side menu close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isSideMenuOpen && !target.closest('.side-menu-container')) {
        setIsSideMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSideMenuOpen]);

  // Handle mouse events for resizing
  useEffect(() => {
    if (!signedIn) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      
      const newWidth = e.clientX;
      
      if (newWidth >= 150 && newWidth <= 396) {
        setLeftPaneWidth(newWidth);
      } else if (newWidth < 150) {
        setLeftPaneWidth(150);
      } else if (newWidth > 396) {
        setLeftPaneWidth(396);
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.body.style.cursor = 'default';
      document.body.style.userSelect = 'auto';
    };

    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, signedIn]);

  // Handle resize start
  const handleResizeStart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  };

  // Handle invoice selection with fade transition
  const handleInvoiceSelect = (invoice: Invoice) => {
    if (invoice.id === selectedInvoice?.id) return;
    
    setFadeState("opacity-0");
    
    setTimeout(() => {
      setSelectedInvoice(invoice);
      setDisplayedInvoice(invoice);
      setFadeState("opacity-100");
    }, 500);
    
    if (windowWidth < 768) {
      setIsLeftPaneCollapsed(true);
    }
  };

  // Toggle chat visibility
  const toggleChat = () => {
    const newIsChatOpen = !isChatOpen;
    setIsChatOpen(newIsChatOpen);
    
    // Only set manual close when explicitly closing the panel
    if (!newIsChatOpen) {
      setIsManuallyClosed(true);
    }
    
    // Initialize chat messages when opening the panel
    if (newIsChatOpen && chatMessages.length === 0) {
      setChatMessages([
        { 
          type: 'assistant', 
          text: `How can I help you with ${currentPage === "invoices" ? `invoice ${selectedInvoice?.id}` : "your analytics"}?` 
        }
      ]);
    }
  };

  // Toggle left pane collapse
  const toggleLeftPane = () => {
    setIsLeftPaneCollapsed(!isLeftPaneCollapsed);
  };

  const handleChatSubmit = () => {
    if (!chatInput.trim()) return;
    
    // Add user message
    setChatMessages(prev => [...prev, { type: 'user', text: chatInput }]);
    
    // Simulate AI response
    setTimeout(() => {
      let response = "I'll help you analyze that. Based on the information provided, ";
      if (currentPage === "invoices") {
        response += `for invoice ${selectedInvoice?.id} from ${selectedInvoice?.company}, `;
        if (chatInput.toLowerCase().includes('status')) {
          response += `the current status is ${selectedInvoice?.status}.`;
        } else if (chatInput.toLowerCase().includes('amount')) {
          response += `the amount is ${selectedInvoice?.amount}.`;
        } else {
          response += "I can help you process this invoice efficiently. What specific information would you like to know?";
        }
      } else {
        response += "I can help you understand the analytics data. What specific metrics would you like to explore?";
      }
      setChatMessages(prev => [...prev, { type: 'assistant', text: response }]);
    }, 1000);
    
    // Clear input
    setChatInput('');
  };

  // Render Chat Panel
  const renderChatPanel = () => {
    return (
      <div className={`h-full transition-all duration-300 ease-in-out ${isChatOpen ? 'w-80' : 'w-0'}`}>
        <aside className="h-full bg-white flex flex-col border-l border-gray-200">
          {isChatOpen && (
            <>
              {/* Chat Header */}
              <div className="flex justify-between items-center p-4 bg-gray-50 border-b border-gray-200">
                <h3 className="font-medium text-gray-900">Assistant</h3>
                <button 
                  onClick={() => {
                    setIsChatOpen(false);
                    setIsManuallyClosed(true);
                  }}
                  className="p-1 rounded-full hover:bg-gray-200 active:bg-gray-300 text-gray-400 hover:text-gray-600 active:text-gray-800 focus:outline-none"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 bg-white p-4 overflow-y-auto">
                <div className="space-y-4 mt-[150px]">
                  <h2 className="text-xl font-semibold text-gray-900 text-center">What can I help with today?</h2>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        key={num}
                        className="px-3 py-1 rounded-full bg-white text-gray-700 text-sm hover:bg-gray-50 border border-gray-100"
                      >
                        Topic {num}
                      </button>
                    ))}
                  </div>
                </div>
                {chatMessages.map((message, index) => (
                  <div 
                    key={index} 
                    className={`mt-4 ${
                      message.type === 'user' 
                        ? 'ml-auto' 
                        : ''
                    }`}
                  >
                    <div className={`rounded-2xl p-3 max-w-[85%] ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white ml-auto'
                        : 'bg-white text-gray-800'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-blue-200">
                <div className="flex items-center bg-white rounded-full pr-2">
                  <input 
                    type="text" 
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleChatSubmit()}
                    placeholder="Ask me anything..."
                    className="flex-1 bg-transparent px-4 py-2 text-sm focus:outline-none"
                  />
                  <button 
                    onClick={handleChatSubmit}
                    className="p-1 text-blue-600 hover:text-blue-700 active:text-blue-800 focus:outline-none"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M22 2L11 13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 2L15 22L11 13L2 9L22 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </>
          )}
        </aside>
      </div>
    );
  };

  // Analysis Page Content
  const renderAnalysisPage = () => {
    return (
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 flex flex-col bg-white overflow-y-auto">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900">Analysis</h1>
            <p className="text-gray-600 mb-6">Monitor the metrics of your AI Solution.</p>
            
            {/* Time period filters */}
            <div className="flex mb-8 space-x-4">
              {["7 Days", "30 Days", "90 Days", "YTD"].map((period) => (
                <button
                  key={period}
                  className={`px-3 py-1 rounded-md text-sm ${
                    selectedTimePeriod === period 
                      ? "bg-blue-100 text-blue-800 font-medium" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedTimePeriod(period)}
                >
                  {period}
                </button>
              ))}
            </div>
            
            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Line Chart Card - Top Left */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">Title</h2>
                    <p className="text-sm text-gray-500">Subtitle</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-bold">50.00%</span>
                    <span className="ml-2 text-green-600 flex items-center text-sm">
                      <svg className="w-3 h-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      +7%
                    </span>
                  </div>
                </div>
                <div className="h-48 w-full">
                  {/* SVG Line Chart */}
                  <svg width="100%" height="100%" viewBox="0 0 400 200">
                    {/* Chart axes */}
                    <line x1="40" y1="10" x2="40" y2="180" stroke="#E5E7EB" strokeWidth="1" />
                    <line x1="40" y1="180" x2="390" y2="180" stroke="#E5E7EB" strokeWidth="1" />
                    
                    {/* Y-axis labels */}
                    <text x="35" y="20" textAnchor="end" fontSize="10" fill="#6B7280">1000</text>
                    <text x="35" y="60" textAnchor="end" fontSize="10" fill="#6B7280">750</text>
                    <text x="35" y="100" textAnchor="end" fontSize="10" fill="#6B7280">500</text>
                    <text x="35" y="140" textAnchor="end" fontSize="10" fill="#6B7280">250</text>
                    <text x="35" y="180" textAnchor="end" fontSize="10" fill="#6B7280">0</text>
                    
                    {/* X-axis labels */}
                    <text x="40" y="195" textAnchor="middle" fontSize="10" fill="#6B7280">0</text>
                    <text x="100" y="195" textAnchor="middle" fontSize="10" fill="#6B7280">1</text>
                    <text x="160" y="195" textAnchor="middle" fontSize="10" fill="#6B7280">2</text>
                    <text x="220" y="195" textAnchor="middle" fontSize="10" fill="#6B7280">3</text>
                    <text x="280" y="195" textAnchor="middle" fontSize="10" fill="#6B7280">4</text>
                    <text x="340" y="195" textAnchor="middle" fontSize="10" fill="#6B7280">5</text>
                    
                    {/* Blue line */}
                    <path d="M40,140 L100,40 L160,120 L220,60 L280,60 L340,160" fill="none" stroke="#3B82F6" strokeWidth="2" />
                    
                    {/* Purple line */}
                    <path d="M40,120 L100,140 L160,120 L220,80 L280,100 L340,110" fill="none" stroke="#8B5CF6" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              
              {/* Pie Chart Card - Top Right */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">Title</h2>
                    <p className="text-sm text-gray-500">Subtitle</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-bold">50.00%</span>
                    <span className="ml-2 text-green-600 flex items-center text-sm">
                      <svg className="w-3 h-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      +7%
                    </span>
                  </div>
                </div>
                <div className="flex justify-center items-center h-48">
                  {/* SVG Pie Chart */}
                  <svg width="160" height="160" viewBox="0 0 160 160">
                    <circle cx="80" cy="80" r="80" fill="white" />
                    
                    {/* Pie segments */}
                    <path d="M80,80 L160,80 A80,80 0 0,1 80,160 Z" fill="#8B5CF6" />
                    <path d="M80,80 L80,160 A80,80 0 0,1 0,80 Z" fill="#3B82F6" />
                    <path d="M80,80 L0,80 A80,80 0 0,1 80,0 Z" fill="#F59E0B" />
                    <path d="M80,80 L80,0 A80,80 0 0,1 160,80 Z" fill="#EF4444" />
                    
                    {/* Percentage labels */}
                    <text x="120" y="40" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">40%</text>
                    <text x="40" y="40" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">40%</text>
                    <text x="40" y="120" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">40%</text>
                    <text x="120" y="120" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">40%</text>
                  </svg>
                </div>
              </div>
              
              {/* Bar Chart Card - Bottom Left */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">Title</h2>
                    <p className="text-sm text-gray-500">Subtitle</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-bold">50.00%</span>
                    <span className="ml-2 text-green-600 flex items-center text-sm">
                      <svg className="w-3 h-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      +7%
                    </span>
                  </div>
                </div>
                <div className="h-48 w-full">
                  {/* SVG Bar Chart */}
                  <svg width="100%" height="100%" viewBox="0 0 400 200">
                    {/* Chart axes */}
                    <line x1="40" y1="10" x2="40" y2="180" stroke="#E5E7EB" strokeWidth="1" />
                    <line x1="40" y1="180" x2="390" y2="180" stroke="#E5E7EB" strokeWidth="1" />
                    
                    {/* Y-axis labels */}
                    <text x="35" y="20" textAnchor="end" fontSize="10" fill="#6B7280">500</text>
                    <text x="35" y="60" textAnchor="end" fontSize="10" fill="#6B7280">400</text>
                    <text x="35" y="100" textAnchor="end" fontSize="10" fill="#6B7280">300</text>
                    <text x="35" y="140" textAnchor="end" fontSize="10" fill="#6B7280">200</text>
                    <text x="35" y="180" textAnchor="end" fontSize="10" fill="#6B7280">0</text>
                    
                    {/* Bars */}
                    <rect x="80" y="140" width="40" height="40" fill="#3B82F6" />
                    <rect x="180" y="60" width="40" height="120" fill="#3B82F6" />
                    <rect x="280" y="140" width="40" height="40" fill="#3B82F6" />
                    
                    {/* Bar labels */}
                    <text x="100" y="130" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">40</text>
                    <text x="200" y="110" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">40</text>
                    <text x="300" y="130" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">40</text>
                  </svg>
                </div>
              </div>
              
              {/* Line Chart Card - Bottom Right (duplicate of top left for layout) */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">Title</h2>
                    <p className="text-sm text-gray-500">Subtitle</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-bold">50.00%</span>
                    <span className="ml-2 text-green-600 flex items-center text-sm">
                      <svg className="w-3 h-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      +7%
                    </span>
                  </div>
                </div>
                <div className="h-48 w-full">
                  {/* SVG Line Chart (duplicate of first) */}
                  <svg width="100%" height="100%" viewBox="0 0 400 200">
                    {/* Chart axes */}
                    <line x1="40" y1="10" x2="40" y2="180" stroke="#E5E7EB" strokeWidth="1" />
                    <line x1="40" y1="180" x2="390" y2="180" stroke="#E5E7EB" strokeWidth="1" />
                    
                    {/* Y-axis labels */}
                    <text x="35" y="20" textAnchor="end" fontSize="10" fill="#6B7280">1000</text>
                    <text x="35" y="60" textAnchor="end" fontSize="10" fill="#6B7280">750</text>
                    <text x="35" y="100" textAnchor="end" fontSize="10" fill="#6B7280">500</text>
                    <text x="35" y="140" textAnchor="end" fontSize="10" fill="#6B7280">250</text>
                    <text x="35" y="180" textAnchor="end" fontSize="10" fill="#6B7280">0</text>
                    
                    {/* X-axis labels */}
                    <text x="40" y="195" textAnchor="middle" fontSize="10" fill="#6B7280">0</text>
                    <text x="100" y="195" textAnchor="middle" fontSize="10" fill="#6B7280">1</text>
                    <text x="160" y="195" textAnchor="middle" fontSize="10" fill="#6B7280">2</text>
                    <text x="220" y="195" textAnchor="middle" fontSize="10" fill="#6B7280">3</text>
                    <text x="280" y="195" textAnchor="middle" fontSize="10" fill="#6B7280">4</text>
                    <text x="340" y="195" textAnchor="middle" fontSize="10" fill="#6B7280">5</text>
                    
                    {/* Blue line */}
                    <path d="M40,140 L100,40 L160,120 L220,60 L280,60 L340,160" fill="none" stroke="#3B82F6" strokeWidth="2" />
                    
                    {/* Purple line */}
                    <path d="M40,120 L100,140 L160,120 L220,80 L280,100 L340,110" fill="none" stroke="#8B5CF6" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        {/* Chat panel */}
        {renderChatPanel()}
      </div>
    );
  };

  // Insights Page Content
  const renderInsightsPage = () => {
    return (
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 flex flex-col bg-white overflow-y-auto">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900">Insights</h1>
            <p className="text-gray-600 mb-6">Monitor the metrics of your AI Solution.</p>
            
            {/* Time period filters */}
            <div className="flex mb-8 space-x-4">
              {["7 Days", "30 Days", "90 Days", "YTD"].map((period) => (
                <button
                  key={period}
                  className={`px-3 py-1 rounded-md text-sm ${
                    selectedTimePeriod === period 
                      ? "bg-blue-100 text-blue-800 font-medium" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedTimePeriod(period)}
                >
                  {period}
                </button>
              ))}
            </div>
            
            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Line Chart Card - Top Left */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">Title</h2>
                    <p className="text-sm text-gray-500">Subtitle</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-bold">50.00%</span>
                    <span className="ml-2 text-green-600 flex items-center text-sm">
                      <svg className="w-3 h-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      +7%
                    </span>
                  </div>
                </div>
                <div className="h-48 w-full">
                  {/* SVG Line Chart */}
                  <svg width="100%" height="100%" viewBox="0 0 400 200">
                    {/* Chart axes */}
                    <line x1="40" y1="10" x2="40" y2="180" stroke="#E5E7EB" strokeWidth="1" />
                    <line x1="40" y1="180" x2="390" y2="180" stroke="#E5E7EB" strokeWidth="1" />
                    
                    {/* Y-axis labels */}
                    <text x="35" y="20" textAnchor="end" fontSize="10" fill="#6B7280">1000</text>
                    <text x="35" y="60" textAnchor="end" fontSize="10" fill="#6B7280">750</text>
                    <text x="35" y="100" textAnchor="end" fontSize="10" fill="#6B7280">500</text>
                    <text x="35" y="140" textAnchor="end" fontSize="10" fill="#6B7280">250</text>
                    <text x="35" y="180" textAnchor="end" fontSize="10" fill="#6B7280">0</text>
                    
                    {/* X-axis labels */}
                    <text x="40" y="195" textAnchor="middle" fontSize="10" fill="#6B7280">0</text>
                    <text x="100" y="195" textAnchor="middle" fontSize="10" fill="#6B7280">1</text>
                    <text x="160" y="195" textAnchor="middle" fontSize="10" fill="#6B7280">2</text>
                    <text x="220" y="195" textAnchor="middle" fontSize="10" fill="#6B7280">3</text>
                    <text x="280" y="195" textAnchor="middle" fontSize="10" fill="#6B7280">4</text>
                    <text x="340" y="195" textAnchor="middle" fontSize="10" fill="#6B7280">5</text>
                    
                    {/* Blue line */}
                    <path d="M40,140 L100,40 L160,120 L220,60 L280,60 L340,160" fill="none" stroke="#3B82F6" strokeWidth="2" />
                    
                    {/* Purple line */}
                    <path d="M40,120 L100,140 L160,120 L220,80 L280,100 L340,110" fill="none" stroke="#8B5CF6" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              
              {/* Pie Chart Card - Top Right */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">Title</h2>
                    <p className="text-sm text-gray-500">Subtitle</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-bold">50.00%</span>
                    <span className="ml-2 text-green-600 flex items-center text-sm">
                      <svg className="w-3 h-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      +7%
                    </span>
                  </div>
                </div>
                <div className="flex justify-center items-center h-48">
                  {/* SVG Pie Chart */}
                  <svg width="160" height="160" viewBox="0 0 160 160">
                    <circle cx="80" cy="80" r="80" fill="white" />
                    
                    {/* Pie segments */}
                    <path d="M80,80 L160,80 A80,80 0 0,1 80,160 Z" fill="#8B5CF6" />
                    <path d="M80,80 L80,160 A80,80 0 0,1 0,80 Z" fill="#3B82F6" />
                    <path d="M80,80 L0,80 A80,80 0 0,1 80,0 Z" fill="#F59E0B" />
                    <path d="M80,80 L80,0 A80,80 0 0,1 160,80 Z" fill="#EF4444" />
                    
                    {/* Percentage labels */}
                    <text x="120" y="40" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">40%</text>
                    <text x="40" y="40" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">40%</text>
                    <text x="40" y="120" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">40%</text>
                    <text x="120" y="120" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">40%</text>
                  </svg>
                </div>
              </div>
              
              {/* Bar Chart Card - Bottom Left */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">Title</h2>
                    <p className="text-sm text-gray-500">Subtitle</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-bold">50.00%</span>
                    <span className="ml-2 text-green-600 flex items-center text-sm">
                      <svg className="w-3 h-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      +7%
                    </span>
                  </div>
                </div>
                <div className="h-48 w-full">
                  {/* SVG Bar Chart */}
                  <svg width="100%" height="100%" viewBox="0 0 400 200">
                    {/* Chart axes */}
                    <line x1="40" y1="10" x2="40" y2="180" stroke="#E5E7EB" strokeWidth="1" />
                    <line x1="40" y1="180" x2="390" y2="180" stroke="#E5E7EB" strokeWidth="1" />
                    
                    {/* Y-axis labels */}
                    <text x="35" y="20" textAnchor="end" fontSize="10" fill="#6B7280">500</text>
                    <text x="35" y="60" textAnchor="end" fontSize="10" fill="#6B7280">400</text>
                    <text x="35" y="100" textAnchor="end" fontSize="10" fill="#6B7280">300</text>
                    <text x="35" y="140" textAnchor="end" fontSize="10" fill="#6B7280">200</text>
                    <text x="35" y="180" textAnchor="end" fontSize="10" fill="#6B7280">0</text>
                    
                    {/* Bars */}
                    <rect x="80" y="140" width="40" height="40" fill="#3B82F6" />
                    <rect x="180" y="60" width="40" height="120" fill="#3B82F6" />
                    <rect x="280" y="140" width="40" height="40" fill="#3B82F6" />
                    
                    {/* Bar labels */}
                    <text x="100" y="130" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">40</text>
                    <text x="200" y="110" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">40</text>
                    <text x="300" y="130" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">40</text>
                  </svg>
                </div>
              </div>
              
              {/* Line Chart Card - Bottom Right (duplicate of top left for layout) */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">Title</h2>
                    <p className="text-sm text-gray-500">Subtitle</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-bold">50.00%</span>
                    <span className="ml-2 text-green-600 flex items-center text-sm">
                      <svg className="w-3 h-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      +7%
                    </span>
                  </div>
                </div>
                <div className="h-48 w-full">
                  {/* SVG Line Chart (duplicate of first) */}
                  <svg width="100%" height="100%" viewBox="0 0 400 200">
                    {/* Chart axes */}
                    <line x1="40" y1="10" x2="40" y2="180" stroke="#E5E7EB" strokeWidth="1" />
                    <line x1="40" y1="180" x2="390" y2="180" stroke="#E5E7EB" strokeWidth="1" />
                    
                    {/* Y-axis labels */}
                    <text x="35" y="20" textAnchor="end" fontSize="10" fill="#6B7280">1000</text>
                    <text x="35" y="60" textAnchor="end" fontSize="10" fill="#6B7280">750</text>
                    <text x="35" y="100" textAnchor="end" fontSize="10" fill="#6B7280">500</text>
                    <text x="35" y="140" textAnchor="end" fontSize="10" fill="#6B7280">250</text>
                    <text x="35" y="180" textAnchor="end" fontSize="10" fill="#6B7280">0</text>
                    
                    {/* X-axis labels */}
                    <text x="40" y="195" textAnchor="middle" fontSize="10" fill="#6B7280">0</text>
                    <text x="100" y="195" textAnchor="middle" fontSize="10" fill="#6B7280">1</text>
                    <text x="160" y="195" textAnchor="middle" fontSize="10" fill="#6B7280">2</text>
                    <text x="220" y="195" textAnchor="middle" fontSize="10" fill="#6B7280">3</text>
                    <text x="280" y="195" textAnchor="middle" fontSize="10" fill="#6B7280">4</text>
                    <text x="340" y="195" textAnchor="middle" fontSize="10" fill="#6B7280">5</text>
                    
                    {/* Blue line */}
                    <path d="M40,140 L100,40 L160,120 L220,60 L280,60 L340,160" fill="none" stroke="#3B82F6" strokeWidth="2" />
                    
                    {/* Purple line */}
                    <path d="M40,120 L100,140 L160,120 L220,80 L280,100 L340,110" fill="none" stroke="#8B5CF6" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        {/* Chat panel */}
        {renderChatPanel()}
      </div>
    );
  };

  // Filter invoices based on search query and active filter
  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = !searchQuery || 
      invoice.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'all' || invoice.status === activeFilter;
    return matchesSearch && matchesFilter;
  });

  // Invoice Processing Page Content
  const renderInvoiceProcessingPage = () => {
    return (
      <div className="flex flex-1 overflow-hidden">
        {/* Left panel - Invoice list */}
        <aside 
          ref={leftPaneRef}
          className={`relative border-r border-gray-200 flex flex-col ${
            isLeftPaneCollapsed ? 'w-10 bg-gray-100' : 'bg-white'
        } ${isResizing ? '' : 'transition-all duration-200'}`}
          style={{ 
            width: isLeftPaneCollapsed ? '40px' : `${leftPaneWidth}px`,
            minWidth: isLeftPaneCollapsed ? '40px' : '150px',
            maxWidth: isLeftPaneCollapsed ? '40px' : '396px'
          }}
        >
          {isLeftPaneCollapsed ? (
            <div className="p-2">
              <button 
                onClick={toggleLeftPane} 
                className="p-1 rounded hover:bg-blue-300 active:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          ) : (
            <>
              <div className="flex flex-col p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="font-medium text-gray-700 flex items-center">
                    Invoices <span className="text-sm text-gray-500 ml-1">({filteredInvoices.length})</span>
                  </h2>
                  <button 
                    onClick={toggleLeftPane} 
                    className="p-1 rounded hover:bg-blue-100 active:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
                  >
                    <ChevronLeft size={18} />
                  </button>
                </div>
              </div>
              <div className="overflow-y-auto flex-1">
                {/* Search and Filters */}
                <div className="p-4">
                  <div className="relative mb-3">
                    <input
                      type="text"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-0.5 flex h-6">
                    <button
                      onClick={() => setActiveFilter('all')}
                      className={`px-1.5 text-xs rounded-md transition-colors duration-[1500ms] flex-1 min-w-fit ${
                        activeFilter === 'all'
                          ? 'bg-white shadow-sm text-gray-800'
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setActiveFilter('needs-assistance')}
                      className={`px-1.5 text-xs rounded-md transition-colors duration-[1500ms] flex-1 min-w-fit ${
                        activeFilter === 'needs-assistance'
                          ? 'bg-white shadow-sm text-red-600'
                          : 'text-gray-600 hover:text-red-600'
                      }`}
                    >
                      Needs assistance
                    </button>
                    <button
                      onClick={() => setActiveFilter('processing')}
                      className={`px-1.5 text-xs rounded-md transition-colors duration-[1500ms] flex-1 min-w-fit ${
                        activeFilter === 'processing'
                          ? 'bg-white shadow-sm text-blue-600'
                          : 'text-gray-600 hover:text-blue-600'
                      }`}
                    >
                      Processing
                    </button>
                    <button
                      onClick={() => setActiveFilter('processed')}
                      className={`px-1.5 text-xs rounded-md transition-colors duration-[1500ms] flex-1 min-w-fit ${
                        activeFilter === 'processed'
                          ? 'bg-white shadow-sm text-green-600'
                          : 'text-gray-600 hover:text-green-600'
                      }`}
                    >
                      Processed
                    </button>
                  </div>
                </div>

                {/* Invoice List */}
                {filteredInvoices.map((invoice) => (
                  <div 
                    key={invoice.id}
                    className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${selectedInvoice?.id === invoice.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''}`}
                    onClick={() => handleInvoiceSelect(invoice)}
                  >
                    <div className="flex flex-col w-full">
                      <div className={`${isNarrowView ? "flex flex-col" : "flex justify-between items-start"}`}>
                        <div className="font-medium text-gray-800">{invoice.id}</div>
                        <div className={`font-medium text-sm ${isNarrowView ? "mt-1" : ""}`}>{invoice.amount}</div>
                      </div>
                        <div className="text-sm text-gray-600 mt-1">{invoice.company}</div>
                        <div className="text-sm text-gray-500 mt-1">{invoice.date}</div>
                      <div className="mt-2">
                        <span className={`text-xs px-2 py-1 rounded-full inline-block ${
                          invoice.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                          invoice.status === 'processing' ? 'bg-blue-100 text-blue-800' : 
                          invoice.status === 'needs-assistance' ? 'bg-red-100 text-red-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {invoice.status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          
          {/* Resizer handle */}
          {!isLeftPaneCollapsed && (
            <div
              ref={resizeRef}
              className="absolute top-0 right-0 w-1 h-full bg-gray-200 cursor-col-resize hover:bg-blue-400 hover:w-1 active:bg-blue-600 active:w-1 transition-colors"
              onMouseDown={handleResizeStart}
            />
          )}
        </aside>

        {/* Main content area with chat panel */}
        <div className="flex flex-1">
          {/* Middle panel - Invoice details */}
          <main className="flex-1 flex flex-col bg-gray-50 border-r border-gray-200">
            {selectedInvoice ? (
              <div className={`flex flex-col h-full transition-all duration-500 ease-in-out ${fadeState}`}>
                {!isChatOpen && (
                  <div className="p-4 flex justify-end border-b border-gray-200">
                    <button
                      onClick={() => {
                        setIsChatOpen(true);
                        setIsManuallyClosed(false);
                      }}
                      className="flex items-center space-x-2 px-3 py-1.5 text-sm text-gray-600 rounded hover:bg-blue-50"
                    >
                      <MessageSquare size={14} />
                      <span>Assistant</span>
                    </button>
                  </div>
                )}
                <div className="flex-1 overflow-y-auto">
                  <div className="p-6">
                    {/* Alert Banner with Buttons */}
                    {selectedInvoice.status === 'needs-assistance' && (
                      <div className="bg-red-50 rounded-lg p-4 mb-6">
                        <div className="flex justify-between items-start gap-4">
                          <div className="min-w-0 flex-shrink">
                            <p className="text-red-800 truncate">This invoice requires assistance</p>
                            <p className="text-sm text-red-700 line-clamp-2">Please review the details and take appropriate action.</p>
                          </div>
                          <div className="flex gap-2 flex-nowrap flex-shrink-0">
                            <button className="whitespace-nowrap px-3 py-1 text-sm bg-white text-red-700 border border-red-300 rounded hover:bg-red-50">
                              Send Back
                            </button>
                            <button className="whitespace-nowrap px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                              Approve & Process
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                    {selectedInvoice?.status === 'processed' && (
                      <div className="bg-green-50 border border-green-100 rounded-lg px-3 py-2 mb-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-xs text-green-700">This invoice was processed autonomously by the Invoice AI Agent.</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto">
                      {/* White Card Container */}
                      <div className="bg-white rounded-lg p-4 mb-4">
                        {/* Invoice Number and Status */}
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <div className="text-sm text-gray-500 mb-1">Invoice #</div>
                            <div className="text-2xl font-semibold">{displayedInvoice.id}</div>
                          </div>
                          <span className={`px-3 py-1 text-sm rounded-full ${
                            selectedInvoice?.status === 'needs-assistance' 
                              ? 'bg-red-100 text-red-800' 
                              : selectedInvoice?.status === 'processing'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {selectedInvoice?.status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                          </span>
                        </div>

                        {/* Timeline in Gray Card */}
                        <div className="bg-white rounded-lg p-4">
                          <div className="relative">
                            {/* Connecting line */}
                            <div className="absolute left-0 right-0 h-[2px] top-3">
                              <div className="h-full bg-[#E5E7EB]" />
                              <div className={`h-full bg-[#10B981] absolute top-0 left-0 ${
                                selectedInvoice?.status === 'needs-assistance' 
                                  ? 'w-[66%]' 
                                  : selectedInvoice?.status === 'processing'
                                  ? 'w-[100%]'
                                  : selectedInvoice?.status === 'processed'
                                  ? 'w-[100%]'
                                  : 'w-[40%]'
                              }`} />
                            </div>
                            
                            {/* Timeline steps */}
                            <div className="relative flex justify-between">
                              {[
                                { 
                                  title: 'Document',
                                  subtitle: 'Extraction',
                                  status: 'completed'
                                },
                                { 
                                  title: '3-Way',
                                  subtitle: 'Matching',
                                  status: 'completed'
                                },
                                { 
                                  title: 'Payment',
                                  subtitle: 'Rules',
                                  status: selectedInvoice?.status === 'needs-assistance' 
                                    ? 'current' 
                                    : selectedInvoice?.status === 'processing'
                                    ? 'completed'
                                    : 'completed'
                                },
                                { 
                                  title: 'Payment',
                                  subtitle: 'Processed',
                                  status: selectedInvoice?.status === 'processing' 
                                    ? 'current' 
                                    : selectedInvoice?.status === 'processed'
                                    ? 'completed'
                                    : 'pending'
                                }
                              ].map((item, index) => (
                                <div key={index} className="flex flex-col items-center">
                                  <div className={`w-6 h-6 rounded-full flex items-center justify-center relative z-10 ${
                                    item.status === 'completed' ? 'bg-[#10B981]' :
                                    item.status === 'current' ? 'bg-white border-2 border-[#E5E7EB]' :
                                    'bg-white border-2 border-[#E5E7EB]'
                                  }`}>
                                    {item.status === 'completed' ? (
                                      <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                      </svg>
                                    ) : (
                                      <div className={`w-1 h-1 rounded-full ${
                                        item.status === 'current' ? 'bg-[#E5E7EB]' : 'bg-[#E5E7EB]'
                                      }`} />
                                    )}
                                  </div>
                                  <div className="mt-2 text-center">
                                    <div className="text-xs font-medium text-gray-900">{item.title}</div>
                                    <div className="text-xs font-medium text-gray-900">{item.subtitle}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step Cards */}
                      <div className="space-y-4">
                        {/* Step 1 */}
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <div className="flex justify-between items-center mb-4">
                            <div>
                              <h3 className="text-lg font-semibold mb-2">Document Extraction</h3>
                            </div>
                            <span className="flex items-center text-gray-900 text-sm font-medium">
                              <svg className="w-5 h-5 mr-1.5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              Completed
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <div className="text-sm text-gray-500 mb-1">Invoice #</div>
                              <div className="bg-gray-50 rounded p-2 text-sm">{selectedInvoice?.id}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500 mb-1">Vendor</div>
                              <div className="bg-gray-50 rounded p-2 text-sm">{selectedInvoice?.company}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500 mb-1">Total</div>
                              <div className="bg-gray-50 rounded p-2 text-sm">{selectedInvoice?.amount}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500 mb-1">Tax Amount</div>
                              <div className="bg-gray-50 rounded p-2 text-sm">
                                {selectedInvoice?.amount 
                                  ? `$${(parseFloat(selectedInvoice.amount.replace(/[^0-9.-]+/g, '')) * 0.08).toFixed(2)}`
                                  : '$0.00'}
                              </div>
                            </div>
                          </div>
                          <button 
                            onClick={() => setIsPdfDialogOpen(true)}
                            className="inline-flex items-center px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
                          >
                            <span className="mr-2">Invoice-tiff.pdf</span>
                            <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </button>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <div className="flex justify-between items-center mb-4">
                            <div>
                              <h3 className="text-lg font-semibold">3-Way Matching</h3>
                            </div>
                            <span className="flex items-center text-gray-900 text-sm font-medium">
                              <svg className="w-5 h-5 mr-1.5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              Completed
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <div className="text-sm text-gray-500 mb-1">PO #</div>
                              <div className="bg-gray-50 rounded p-2 text-sm">PO-{selectedInvoice?.id.split('-')[2]}-001</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500 mb-1">Item Quantity</div>
                              <div className="bg-gray-50 rounded p-2 text-sm">{Math.floor(Math.random() * 100) + 1}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500 mb-1">Total Price</div>
                              <div className="bg-gray-50 rounded p-2 text-sm">{selectedInvoice?.amount}</div>
                            </div>
                          </div>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <div className="flex justify-between items-center mb-4">
                            <div>
                              <h3 className="text-lg font-semibold">Payment Rules</h3>
                            </div>
                            <span className="flex items-center text-gray-900 text-sm font-medium">
                              {selectedInvoice?.status === 'processed' || selectedInvoice?.status === 'processing' ? (
                                <>
                                  <svg className="w-5 h-5 mr-1.5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                  Completed
                                </>
                              ) : (
                                <>
                                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-1.5"></span>
                                  Incomplete
                                </>
                              )}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <div className="text-sm text-gray-700 mb-2">Below threshold amount</div>
                              <div className="flex space-x-4">
                                <label className="flex items-center">
                                  <input type="radio" name="threshold" className="form-radio text-blue-600" defaultChecked={selectedInvoice?.status !== 'needs-assistance'} />
                                  <span className="ml-2 text-sm">Yes</span>
                                </label>
                                <label className="flex items-center">
                                  <input type="radio" name="threshold" className="form-radio text-blue-600" defaultChecked={selectedInvoice?.status === 'needs-assistance'} />
                                  <span className="ml-2 text-sm">No</span>
                                </label>
                              </div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-700 mb-2">Verified payment terms</div>
                              <div className="flex space-x-4">
                                <label className="flex items-center">
                                  <input type="radio" name="payment_terms" className="form-radio text-blue-600" defaultChecked={selectedInvoice?.status !== 'needs-assistance'} />
                                  <span className="ml-2 text-sm">Yes</span>
                                </label>
                                <label className="flex items-center">
                                  <input type="radio" name="payment_terms" className="form-radio text-blue-600" defaultChecked={selectedInvoice?.status === 'needs-assistance'} />
                                  <span className="ml-2 text-sm">No</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Step 4 */}
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <div className="flex justify-between items-center mb-4">
                            <div>
                              <h3 className="text-lg font-semibold">Payment Processed</h3>
                            </div>
                            <span className="flex items-center text-gray-900 text-sm font-medium">
                              {selectedInvoice?.status === 'processed' ? (
                                <>
                                  <svg className="w-5 h-5 mr-1.5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                  Completed
                                </>
                              ) : (
                                <>
                                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-1.5"></span>
                                  Incomplete
                                </>
                              )}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <div className="text-sm text-gray-700 mb-2">Payment posted</div>
                              <div className="flex space-x-4">
                                <label className="flex items-center">
                                  <input type="radio" name="payment_posted" className="form-radio text-blue-600" defaultChecked={selectedInvoice?.status !== 'needs-assistance'} />
                                  <span className="ml-2 text-sm">Yes</span>
                                </label>
                                <label className="flex items-center">
                                  <input type="radio" name="payment_posted" className="form-radio text-blue-600" defaultChecked={selectedInvoice?.status === 'needs-assistance'} />
                                  <span className="ml-2 text-sm">No</span>
                                </label>
                              </div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-700 mb-2">Notification sent to vendor</div>
                              <div className="flex space-x-4">
                                <label className="flex items-center">
                                  <input type="radio" name="notification_sent" className="form-radio text-blue-600" defaultChecked={selectedInvoice?.status !== 'needs-assistance'} />
                                  <span className="ml-2 text-sm">Yes</span>
                                </label>
                                <label className="flex items-center">
                                  <input type="radio" name="notification_sent" className="form-radio text-blue-600" defaultChecked={selectedInvoice?.status === 'needs-assistance'} />
                                  <span className="ml-2 text-sm">No</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto flex items-center justify-center mb-4">
                    <MessageSquare size={24} className="text-gray-400" />
                  </div>
                  <h2 className="text-xl font-medium text-gray-700 mb-2">No Invoice Selected</h2>
                  <p className="text-gray-500">Select an invoice from the list to view details and process it.</p>
                </div>
              </div>
            )}
          </main>
          
          {/* Chat panel */}
          {renderChatPanel()}
        </div>
      </div>
    );
  };

  // Sign In Page
  if (!signedIn) {
    return (
      <div className="flex h-screen">
        {/* Left panel - Sign In Form (33.33% width) */}
        <div className="w-1/3 flex flex-col justify-center p-12 bg-white border-r border-gray-200">
          <div className="mx-auto w-full max-w-md">
            {/* Logo */}
            <div className="mb-10">
              <div className="flex flex-col items-center mb-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg transform rotate-45 absolute left-1/2 -translate-x-1/2"></div>
                  <div className="w-10 h-10 bg-white rounded-lg transform rotate-45 absolute left-1/2 -translate-x-1/2 top-1"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg transform rotate-45 absolute left-1/2 -translate-x-1/2 top-2 flex items-center justify-center">
                    <span className="text-white font-bold transform -rotate-45">A</span>
                  </div>
                </div>
                <div className="mt-14 text-center">
                  <div className="text-2xl font-bold tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">ACME</span>
                  </div>
                  <div className="text-gray-500 text-sm font-medium">Inc.</div>
                </div>
              </div>
            </div>

            {/* Sign In Form */}
            <div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="mb-8">
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="password" className="block text-sm text-gray-700">
                    Password
                  </label>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Please enter your password."
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-gray-400"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSignedIn(true)}
                className="w-full bg-blue-600 text-white p-3 rounded font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Sign In
              </button>
              <div className="mt-4 flex items-center justify-center">
                <div className="flex items-center text-gray-500 text-xs">
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12,3 Q16,2 19,7 Q21,11 17,18 Q14,21 9,19 Q5,16 6,11 Q7,5 12,3" fill="none" stroke="#E86C00" strokeWidth="2" />
                </svg>
                  <span>Powered by Automation Anywhere</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right panel - Marketing Content (66.67% width) */}
        <div className="w-2/3 bg-blue-100 p-16 flex flex-col justify-center">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              The Autonomous Enterprise is here
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              AI powered solutions
            </p>
            
            {/* Placeholder image */}
            <div className="w-full bg-gray-200 rounded-lg overflow-hidden shadow-lg h-96 flex items-center justify-center">
              <svg className="w-32 h-32 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Only render content after initial mount to avoid hydration issues
  if (!isMounted) {
    return null;
  }

  // Main App (After Sign In)
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200">
        <div className="flex items-center">
          <button 
            className="mr-3 p-2 rounded hover:bg-blue-100 active:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-150"
            onClick={() => setIsSideMenuOpen(true)}
          >
            <Menu size={16} className="text-gray-600" />
          </button>
          <div className="w-8 h-8 mr-3 flex items-center justify-center">
            <div className="relative w-5 h-5">
              <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg transform rotate-45 absolute left-1/2 -translate-x-1/2"></div>
              <div className="w-4 h-4 bg-white rounded-lg transform rotate-45 absolute left-1/2 -translate-x-1/2 top-0.5"></div>
              <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg transform rotate-45 absolute left-1/2 -translate-x-1/2 top-1 flex items-center justify-center">
                <span className="text-white text-xs font-bold transform -rotate-45">A</span>
          </div>
            </div>
          </div>
          <div>
          <h1 className="text-xl font-semibold text-gray-800">
              Invoice Processing
          </h1>
            <div className="text-sm text-gray-500">Acme Inc.</div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative menu-container">
            <button 
              className="p-2 rounded hover:bg-blue-100 active:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-150 flex items-center justify-center w-8 h-8"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="grid grid-cols-3 gap-0.5 w-4 h-4">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-gray-500 rounded-full" />
                ))}
              </div>
            </button>
            
            {isMenuOpen && (
              <div className="absolute right-0 mt-1 w-64 bg-white rounded-lg shadow-lg py-3 z-10">
                {/* Header Section */}
                <div className="px-4 pb-2">
                  <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mt-2.5">Discover More AI Solutions</h3>
                </div>
                
                {/* Solutions Lab Link */}
                <a 
                  href="/solutions-lab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-left px-4 py-2 text-sm text-gray-900 hover:bg-gray-50 active:bg-gray-100 focus:outline-none transition-colors duration-150 flex items-center justify-between group"
                >
                  <span className="font-medium">Solutions Lab</span>
                  <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                {/* Divider */}
                <div className="my-2 border-t border-gray-100"></div>

                {/* My Solutions Section */}
                <div className="px-4 pb-2">
                  <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mt-2.5">My Solutions</h3>
                </div>

                {/* Solution Links */}
                <div className="space-y-1">
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-900 hover:bg-gray-50 active:bg-gray-100 focus:outline-none transition-colors duration-150 font-medium">
                    Invoice Processing
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-900 hover:bg-gray-50 active:bg-gray-100 focus:outline-none transition-colors duration-150">
                    Billing
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-900 hover:bg-gray-50 active:bg-gray-100 focus:outline-none transition-colors duration-150">
                    Collections
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-900 hover:bg-gray-50 active:bg-gray-100 focus:outline-none transition-colors duration-150">
                    Customer Setup
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-900 hover:bg-gray-50 active:bg-gray-100 focus:outline-none transition-colors duration-150">
                    Monthly Close
                  </button>
                </div>
              </div>
            )}
          </div>
          <div 
            className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-100 active:bg-blue-200 transition-colors duration-150"
            onClick={() => setSignedIn(false)}
            title="Return to sign-in page"
          >
            <User size={16} className="text-yellow-600" />
          </div>
        </div>
      </header>

      {/* Main Content Based on Current Page */}
      {currentPage === "invoices" ? renderInvoiceProcessingPage() : renderInsightsPage()}
      
      {/* Side Menu Overlay */}
      <div className={`fixed inset-0 transition-opacity duration-300 ease-in-out z-50 flex ${isSideMenuOpen ? 'bg-black/50' : 'bg-transparent pointer-events-none'}`}>
        <div className={`w-64 bg-white h-full flex flex-col transform transition-transform duration-300 ease-in-out shadow-lg side-menu-container ${isSideMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-end p-4">
            <button 
              className="p-1 rounded hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-150"
              onClick={() => setIsSideMenuOpen(false)}
            >
              <X size={20} className="text-gray-600" />
            </button>
          </div>
          
          <div className="flex-1 flex flex-col">
            <div className="p-2">
              {/* Side Menu Content */}
              <div className="p-4">
                <div className="mt-2">
                  <button 
                    className={`w-full flex items-center p-3 rounded text-left ${
                      currentPage === "invoices" 
                        ? "border-l-4 border-blue-500 bg-blue-50 text-blue-700" 
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      setCurrentPage("invoices");
                      setIsSideMenuOpen(false);
                    }}
                  >
                    Invoice Processing
                  </button>
                  <button 
                    className={`w-full flex items-center p-3 rounded text-left mt-1 ${
                      currentPage === "insights" 
                        ? "border-l-4 border-blue-500 bg-blue-50 text-blue-700" 
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      setCurrentPage("insights");
                      setIsSideMenuOpen(false);
                    }}
                  >
                    Insights
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 mt-auto border-t border-gray-200">
            <div className="flex flex-col items-center">
              <svg className="w-40 h-12" viewBox="0 0 220 70" xmlns="http://www.w3.org/2000/svg">
                <path d="M30,10 Q45,5 60,30 Q70,45 55,60 Q35,70 20,55 Q10,45 30,10" fill="none" stroke="url(#gradient)" strokeWidth="6" />
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F5A623" />
                  <stop offset="100%" stopColor="#D0021B" />
                </linearGradient>
                <text x="75" y="30" fontFamily="Arial" fontSize="14" fontWeight="bold">AUTOMATION</text>
                <text x="75" y="45" fontFamily="Arial" fontSize="14" fontWeight="bold">ANYWHERE</text>
                <text x="75" y="60" fontFamily="Arial" fontSize="10" fill="#D0021B">Automation 360</text>
              </svg>
            </div>
          </div>
        </div>
        <div 
          className="flex-1"
          onClick={() => setIsSideMenuOpen(false)}
        ></div>
      </div>

      {/* PDF Dialog Component */}
      <PdfViewerDialog isOpen={isPdfDialogOpen} onClose={() => setIsPdfDialogOpen(false)} />
    </div>
  );
};

export default InvoiceProcessing;