import React from 'react';
import { X } from 'lucide-react';

interface PdfViewerDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const PdfViewerDialog: React.FC<PdfViewerDialogProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Scrim/Overlay */}
      <div className="absolute inset-0 bg-black/50 transition-opacity duration-[1500ms]" onClick={onClose} />
      
      {/* Dialog */}
      <div className="absolute inset-4 bg-white rounded-lg shadow-xl flex flex-col transition-all duration-[1500ms]">
        {/* Header - Fixed */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Invoice-tiff.pdf</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Content - Scrollable */}
        <div className="flex-1 min-h-0">
          <div className="flex h-full">
            {/* Left side - PDF pages */}
            <div className="w-72 flex flex-col bg-gray-50 border-r border-gray-200">
              <h3 className="text-sm font-medium text-gray-900 p-4 border-b border-gray-200">Pages (12)</h3>
              <div className="flex-1 overflow-y-auto">
                <div className="space-y-2 p-4">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="aspect-[3/4] bg-white rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Center - Main PDF view */}
            <div className="flex-1 flex flex-col min-w-0">
              <div className="flex-1 overflow-y-auto p-6">
                <div className="h-full bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg className="w-24 h-24 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Right side - Extracted fields */}
            <div className="w-80 flex flex-col bg-gray-50 border-l border-gray-200">
              <h3 className="text-sm font-medium text-gray-900 p-4 border-b border-gray-200">Extracted form fields</h3>
              <div className="flex-1 overflow-y-auto">
                <div className="p-4">
                  {[1, 2, 3].map((section) => (
                    <div key={section} className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-gray-900">Section Name</h3>
                        <button className="text-gray-400 hover:text-gray-500">
                          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                        </button>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <div className="text-sm text-gray-500 mb-1">PO Number</div>
                          <div className="bg-white rounded p-2 text-sm">field value</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-1">Item Quantity</div>
                          <div className="bg-white rounded p-2 text-sm">field value</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-1">Total Price</div>
                          <div className="bg-white rounded p-2 text-sm">field value</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfViewerDialog; 