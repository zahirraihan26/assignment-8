import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Trash2, Copy, Check, Mic, MicOff } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import confetti from 'canvas-confetti';

const ChatAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState(() => {
        const saved = localStorage.getItem('hero_ai_messages');
        return saved ? JSON.parse(saved) : [
            { role: 'assistant', text: 'Hi! I am the Hero.AI assistant. How can I help you today?' }
        ];
    });
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [copiedIndex, setCopiedIndex] = useState(null);
    const [isListening, setIsListening] = useState(false);
    const messagesEndRef = useRef(null);
    const recognitionRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        localStorage.setItem('hero_ai_messages', JSON.stringify(messages));
        scrollToBottom();
    }, [messages, isLoading, isOpen]);

    // Initialize Speech Recognition
    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = false;
            recognitionRef.current.interimResults = false;
            recognitionRef.current.lang = 'en-US';

            recognitionRef.current.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                setInput(transcript);
                setIsListening(false);
            };

            recognitionRef.current.onerror = () => {
                setIsListening(false);
            };

            recognitionRef.current.onend = () => {
                setIsListening(false);
            };
        }
    }, []);

    const toggleListening = () => {
        if (isListening) {
            recognitionRef.current?.stop();
            setIsListening(false);
        } else {
            recognitionRef.current?.start();
            setIsListening(true);
        }
    };

    const handleSend = async (e) => {
        if (e) e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMsg = input.trim();
        setMessages((prev) => [...prev, { role: 'user', text: userMsg }]);
        setInput('');
        setIsLoading(true);
        setError(null);

        try {
            const apiMessages = [
                ...messages.filter((m, i) => !(i === 0 && m.role === 'assistant')),
                { role: 'user', text: userMsg }
            ].map(m => ({
                role: m.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: m.text }]
            }));

            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY || ''}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        systemInstruction: {
                            parts: [{ text: "You are the Hero.AI Agent, a helpful, friendly, and knowledgeable AI assistant for an AI Models marketplace website. You help users explore models, deploy them, and understand AI concepts. Keep responses concise. Use markdown for formatting and code blocks where appropriate." }]
                        },
                        contents: apiMessages
                    })
                }
            );

            const data = await response.json();
            console.log('Gemini API Response Status:', response.status);
            console.log('Gemini API Response Data:', data);

            if (!response.ok) {
                throw new Error(data.error?.message || `API Error: ${response.status}`);
            }

            if (data.candidates && data.candidates[0].content.parts[0].text) {
                const aiText = data.candidates[0].content.parts[0].text;
                setMessages((prev) => [...prev, { role: 'assistant', text: aiText }]);
                
                // Trigger confetti for positive/successful sounding replies
                if (aiText.toLowerCase().includes('success') || aiText.toLowerCase().includes('congratulations') || aiText.toLowerCase().includes('awesome')) {
                    confetti({
                        particleCount: 100,
                        spread: 70,
                        origin: { y: 0.6 },
                        colors: ['#8b5cf6', '#06b6d4']
                    });
                }
            } else {
                setMessages((prev) => [...prev, { role: 'assistant', text: 'Sorry, I encountered an error processing that request.' }]);
            }
        } catch (error) {
            console.error('Chat Error:', error);
            setError(error.message);
            setMessages((prev) => [...prev, { role: 'assistant', text: 'Error connecting to the AI agent. Please check the console for details.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    const clearChat = () => {
        if (window.confirm('Are you sure you want to clear the chat history?')) {
            const initialMsg = [{ role: 'assistant', text: 'Hi! I am the Hero.AI assistant. How can I help you today?' }];
            setMessages(initialMsg);
            localStorage.setItem('hero_ai_messages', JSON.stringify(initialMsg));
        }
    };

    const copyToClipboard = (text, index) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    const MarkdownComponents = {
        code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
                <SyntaxHighlighter
                    style={atomDark}
                    language={match[1]}
                    PreTag="div"
                    className="rounded-md my-2 text-xs"
                    {...props}
                >
                    {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
            ) : (
                <code className="bg-[rgba(255,255,255,0.1)] px-1 rounded text-[#06b6d4]" {...props}>
                    {children}
                </code>
            );
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {isOpen && (
                <div className="glass-panel border border-[rgba(255,255,255,0.1)] rounded-2xl w-80 sm:w-96 h-[550px] max-h-[85vh] mb-4 flex flex-col overflow-hidden shadow-2xl animate-in slide-in-from-bottom-5 fade-in duration-300">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-[rgba(255,255,255,0.05)] bg-[rgba(0,0,0,0.3)] backdrop-blur-md">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#06b6d4] to-[#8b5cf6] flex items-center justify-center shadow-lg">
                                <Sparkles size={16} className="text-white" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-sm">Hero.AI Agent</h3>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                    <p className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">Online</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button 
                                onClick={clearChat} 
                                title="Clear Chat"
                                className="p-2 text-gray-400 hover:text-red-400 transition-colors rounded-lg hover:bg-[rgba(255,255,255,0.05)]"
                            >
                                <Trash2 size={18} />
                            </button>
                            <button onClick={() => setIsOpen(false)} className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-[rgba(255,255,255,0.05)]">
                                <X size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 bg-[rgba(15,23,42,0.5)]">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                                <div
                                    className={`relative group max-w-[90%] p-3.5 rounded-2xl text-sm ${msg.role === 'user'
                                        ? 'bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] text-white rounded-tr-sm shadow-md'
                                        : 'bg-[rgba(30,41,59,0.7)] border border-[rgba(255,255,255,0.05)] text-gray-200 rounded-tl-sm shadow-sm'
                                        }`}
                                >
                                    <div className="prose prose-invert prose-sm max-w-none">
                                        <ReactMarkdown components={MarkdownComponents}>
                                            {msg.text}
                                        </ReactMarkdown>
                                    </div>
                                    
                                    {msg.role === 'assistant' && (
                                        <button
                                            onClick={() => copyToClipboard(msg.text, idx)}
                                            className="absolute -right-8 top-0 p-1.5 text-gray-500 hover:text-white opacity-0 group-hover:opacity-100 transition-all rounded-md bg-[rgba(255,255,255,0.03)]"
                                            title="Copy message"
                                        >
                                            {copiedIndex === idx ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-[rgba(30,41,59,0.7)] border border-[rgba(255,255,255,0.05)] p-4 rounded-2xl rounded-tl-sm flex gap-1.5 items-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] animate-bounce"></span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                                </div>
                            </div>
                        )}
                        {error && (
                            <div className="flex justify-center">
                                <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs py-2 px-4 rounded-lg">
                                    {error}
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-4 border-t border-[rgba(255,255,255,0.05)] bg-[rgba(15,23,42,0.8)] backdrop-blur-md">
                        <form onSubmit={handleSend} className="flex gap-2 items-center">
                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask me anything..."
                                    disabled={isLoading}
                                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-xl py-3 pl-4 pr-10 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#8b5cf6] focus:border-transparent transition-all disabled:opacity-50 placeholder:text-gray-500"
                                />
                                <button
                                    type="button"
                                    onClick={toggleListening}
                                    disabled={isLoading || !recognitionRef.current}
                                    className={`absolute right-3 top-1/2 -translate-y-1/2 transition-colors ${isListening ? 'text-red-500 animate-pulse' : 'text-gray-500 hover:text-white'}`}
                                >
                                    {isListening ? <MicOff size={18} /> : <Mic size={18} />}
                                </button>
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] rounded-xl text-white hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all disabled:opacity-50 active:scale-95"
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative w-16 h-16 rounded-2xl bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] shadow-[0_0_25px_rgba(139,92,246,0.4)] flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
            >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
            </button>
        </div>
    );
};

export default ChatAssistant;
