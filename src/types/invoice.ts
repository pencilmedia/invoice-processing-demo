export interface Invoice {
  id: string;
  company: string;
  amount: string;
  date: string;
  status: 'pending' | 'processing' | 'processed' | 'needs-assistance';
}

export interface ChatMessage {
  type: 'user' | 'assistant';
  text: string;
} 