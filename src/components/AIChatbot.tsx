import React, { useState, useEffect, useRef } from 'react';
import { KNOWLEDGE_BASE, PERSONAL_INFO } from '../data/portfolioData';
import { ChatMessage } from '../types';
import { Bot, X, Send, Sparkles, RefreshCw, ChevronDown, Volume2, VolumeX, ShieldCheck } from 'lucide-react';

interface AIChatbotProps {
  theme: 'dark' | 'light';
  onOpenResumeModal: () => void;
}

export const AIChatbot: React.FC<AIChatbotProps> = ({ theme, onOpenResumeModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'assistant',
      text: `Hello! 👋 I'm Muhammad Azhar's AI Portfolio Assistant. How can I assist you today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestions: [
        'Who is Muhammad Azhar?',
        'Tell me about his education',
        'What AWS services does he know?',
        'What certifications has he earned?',
        'What projects has he completed?',
        'How can I contact him?'
      ]
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll to bottom of chat
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  // Local knowledge-base answer matcher algorithm
  const findLocalAnswer = (query: string): string => {
    const qLower = query.toLowerCase().trim();

    if (qLower.includes('resume') || qLower.includes('cv') || qLower.includes('download')) {
      return "You can download Muhammad Azhar's resume PDF directly by clicking the 'Download Resume' button at the top, or I can open the resume viewer for you right now!";
    }

    let bestMatchScore = 0;
    let bestAnswer = "";

    for (const item of KNOWLEDGE_BASE) {
      let score = 0;
      for (const kw of item.keywords) {
        if (qLower.includes(kw)) {
          score += kw.length; // weight longer keyword matches higher
        }
      }
      if (score > bestMatchScore) {
        bestMatchScore = score;
        bestAnswer = item.answer;
      }
    }

    if (bestMatchScore > 0 && bestAnswer) {
      return bestAnswer;
    }

    // Default friendly response
    return `Muhammad Azhar is an AWS Certified Solutions Architect and IT Executive based in Islamabad, Pakistan. He specializes in AWS Cloud Infrastructure (EC2, S3, IAM, VPC, Lambda), Windows Administration, and IoT. You can reach him at ${PERSONAL_INFO.email} or call +92 335 5277018.`;
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // First attempt to call the Express server route /api/chat which uses @google/genai (Gemini 3.6 Flash)
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: messages.map((m) => ({ role: m.sender, content: m.text }))
        })
      });

      const data = await response.json();

      let replyText = "";
      if (data && data.success && data.response) {
        replyText = data.response;
      } else {
        // Fall back to structured JSON local matcher
        replyText = findLocalAnswer(query);
      }

      setTimeout(() => {
        setIsTyping(false);

        // Check if user asked for resume
        const suggestions: string[] = [];
        if (query.toLowerCase().includes('resume')) {
          onOpenResumeModal();
        } else {
          suggestions.push('Which AWS services does he know?');
          suggestions.push('What certifications has he earned?');
          suggestions.push('How can I contact him?');
        }

        const botReply: ChatMessage = {
          id: `bot-${Date.now()}`,
          sender: 'assistant',
          text: replyText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          suggestions: suggestions.slice(0, 3)
        };

        setMessages((prev) => [...prev, botReply]);
      }, 700);

    } catch (err) {
      console.warn("Falling back to local knowledge base matcher:", err);
      setTimeout(() => {
        setIsTyping(false);
        const replyText = findLocalAnswer(query);
        const botReply: ChatMessage = {
          id: `bot-${Date.now()}`,
          sender: 'assistant',
          text: replyText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages((prev) => [...prev, botReply]);
      }, 600);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Floating Chat Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Assistant Chat"
          className="group relative flex items-center gap-3 p-4 rounded-full bg-gradient-to-r from-amber-500 via-orange-600 to-orange-600 text-white shadow-2xl shadow-amber-500/40 hover:scale-105 transition-all duration-300"
        >
          <div className="relative">
            <Bot className="w-7 h-7" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-300"></span>
            </span>
          </div>

          <div className="hidden sm:block text-left pr-2">
            <span className="block text-xs font-extrabold leading-tight">Ask Azhar AI</span>
            <span className="block text-[10px] text-amber-200">Instant Portfolio Q&A</span>
          </div>
        </button>
      )}

      {/* Floating Chat Window Modal */}
      {isOpen && (
        <div className={`w-[90vw] sm:w-[400px] h-[550px] rounded-3xl shadow-2xl flex flex-col overflow-hidden glass-deep text-white`}>
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-orange-600 via-orange-600 to-orange-700 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Bot className="w-6 h-6 text-amber-200" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold flex items-center gap-1.5">
                  Azhar AI Assistant <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                </h3>
                <p className="text-[10px] text-amber-100 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Powered by Knowledge Base & Gemini AI
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                aria-label="Toggle Sound"
                className="p-1.5 rounded-lg hover:bg-white/10 text-amber-100"
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Chat"
                className="p-1.5 rounded-lg hover:bg-white/10 text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat History Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
            
            {/* Note about API Key extension */}
            {/* 
              API KEY NOTE:
              To make this chatbot fully powered by live generative AI, you can configure
              process.env.GEMINI_API_KEY in your server environment or Secrets panel.
              The server will automatically route queries to Gemini 3.6 Flash!
            */}

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col space-y-1 ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`p-3.5 rounded-2xl max-w-[85%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-tr-none shadow-lg shadow-amber-500/25'
                      : 'glass text-slate-200 rounded-tl-none'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>

                <span className="text-[10px] text-slate-500 font-mono px-1">
                  {msg.timestamp}
                </span>

                {/* Suggested chips */}
                {msg.suggestions && msg.suggestions.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2 max-w-[90%]">
                    {msg.suggestions.map((sug, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => handleSendMessage(sug)}
                        className={`text-[11px] font-medium px-2.5 py-1 rounded-full border transition-all text-left glass text-amber-300 hover:border-amber-400/60 hover:bg-amber-500/10`}
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className={`flex items-center gap-2 p-3 rounded-2xl glass w-fit text-slate-400`}>
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce delay-150"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce delay-300"></span>
                </div>
                <span className="text-[11px]">Azhar AI is typing...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div className="p-3 border-t border-white/10 bg-white/5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about Muhammad Azhar..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className={`flex-1 px-4 py-2.5 rounded-2xl text-xs font-medium border transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/50 ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 text-white placeholder-slate-500'
                    : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
                }`}
              />

              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2.5 rounded-2xl text-white bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 disabled:opacity-40 transition-all shadow-md shadow-amber-500/20"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      )}

    </div>
  );
};
