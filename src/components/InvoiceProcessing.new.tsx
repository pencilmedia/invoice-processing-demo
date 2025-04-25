import React, { useState, useEffect, useRef } from 'react';
import { Eye, EyeOff, Menu, User, X, MessageSquare, ChevronRight, ChevronLeft } from 'lucide-react';
import SolutionsLab from './SolutionsLab';
import PdfViewerDialog from './PdfViewerDialog';
import { Invoice, ChatMessage } from '../types/invoice';

const InvoiceProcessing = () => {
  // Authentication state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  
  // For Invoice Processing App
  const invoices: Invoice[] = [
    // ... rest of the existing invoices array ...
  ];
  
  // App state
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice>(invoices.find(inv => inv.status === 'needs-assistance') || invoices[0]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200);
  const [isLeftPaneCollapsed, setIsLeftPaneCollapsed] = useState(false);
  const [leftPaneWidth, setLeftPaneWidth] = useState(324);
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
  const [processingMode, setProcessingMode] = useState<'autonomous' | 'assisted'>('assisted');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('needs-assistance');
  const [isPdfDialogOpen, setIsPdfDialogOpen] = useState(false);
  const [isManuallyClosed, setIsManuallyClosed] = useState(false);
  
  // Refs
  const resizeRef = useRef<HTMLDivElement>(null);
  const leftPaneRef = useRef<HTMLDivElement>(null);

  // ... rest of the component code ...
}

export default InvoiceProcessing; 