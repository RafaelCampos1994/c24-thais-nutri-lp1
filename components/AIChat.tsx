import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; parts: { text: string }[] }[]>([
    { role: 'model', parts: [{ text: "Olá! Sou a assistente da Thais Bertocco. Quer saber como o Método ÂNCORA pode funcionar para sua rotina?" }] }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg = inputValue;
    setInputValue('');
    
    // Add user message
    const newHistory = [
        ...messages,
        { role: 'user' as const, parts: [{ text: userMsg }] }
    ];
    setMessages(newHistory);
    setIsLoading(true);

    // Call API
    const responseText = await sendMessageToGemini(userMsg, messages);

    // Add model response
    setMessages([
        ...newHistory,
        { role: 'model' as const, parts: [{ text: responseText || "Desculpe, não consegui responder." }] }
    ]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[350px] max-w-[90vw] h-[500px] max-h-[70vh] bg-white rounded-2xl shadow-2xl border border-brand-100 flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-800 to-brand-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gold-300" />
              <span className="font-serif font-medium">Equipe Thais Bertocco</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1 transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-brand-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-brand-600 text-white rounded-tr-none' 
                      : 'bg-white text-slate-700 border border-brand-100 rounded-tl-none'
                  }`}
                >
                  {msg.parts[0].text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-brand-100 flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-brand-400 rounded-full animate-bounce delay-75"></span>
                    <span className="w-2 h-2 bg-brand-400 rounded-full animate-bounce delay-150"></span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-brand-100 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Digite sua dúvida..."
              className="flex-1 px-4 py-2 border border-slate-200 rounded-full focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-sm"
            />
            <button 
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="bg-brand-700 text-white p-2 rounded-full hover:bg-brand-800 disabled:opacity-50 transition"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-3 bg-brand-700 hover:bg-brand-800 text-white pl-5 pr-6 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gold-500/30"
      >
        <MessageCircle className="w-6 h-6 text-gold-300" />
        <span className="font-serif italic tracking-wide hidden md:block">{isOpen ? 'Fechar' : 'Fale Conosco'}</span>
        {!isOpen && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
        )}
      </button>
    </div>
  );
};