// import React, { useState, useRef, useEffect } from 'react';
// import { MessageSquare, X, Send, Sparkles } from 'lucide-react';

// const ChatAssistant = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [messages, setMessages] = useState([
//         { role: 'assistant', text: 'Hi! I am the Hero.AI assistant. How can I help you today?' }
//     ]);
//     const [input, setInput] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const messagesEndRef = useRef(null);

//     const scrollToBottom = () => {
//         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     };

//     useEffect(() => {
//         scrollToBottom();
//     }, [messages, isLoading, isOpen]);

//     const handleSend = async (e) => {
//         e.preventDefault();
//         if (!input.trim() || isLoading) return;

//         const userMsg = input.trim();
//         setMessages((prev) => [...prev, { role: 'user', text: userMsg }]);
//         setInput('');
//         setIsLoading(true);

//         try {
//             // Map our messages to Gemini's format, skipping the initial greeting as Gemini expects 'user' first
//             const apiMessages = [
//                 ...messages.filter((m, i) => !(i === 0 && m.role === 'assistant')),
//                 { role: 'user', text: userMsg }
//             ].map(m => ({
//                 role: m.role === 'assistant' ? 'model' : 'user',
//                 parts: [{ text: m.text }]
//             }));

//             const response = await fetch(
//                 `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyA3S-jQ2gbOJ3dKLwVF5G4JnuaGH4BZXE8`,
//                 {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({
//                         systemInstruction: {
//                             parts: [{ text: "You are the Hero.AI Agent, a helpful, friendly, and knowledgeable AI assistant for an AI Models marketplace website. You help users explore models, deploy them, and understand AI concepts. Keep responses concise." }]
//                         },
//                         contents: apiMessages
//                     })
//                 }
//             );

//             const data = await response.json();

//             if (data.candidates && data.candidates[0].content.parts[0].text) {
//                 const aiText = data.candidates[0].content.parts[0].text;
//                 setMessages((prev) => [...prev, { role: 'assistant', text: aiText }]);
//             } else {
//                 console.error("Unexpected Gemini Response:", data);
//                 setMessages((prev) => [...prev, { role: 'assistant', text: 'Sorry, I encountered an error processing that request.' }]);
//             }
//         } catch (error) {
//             console.error("Error communicating with Gemini:", error);
//             setMessages((prev) => [...prev, { role: 'assistant', text: 'Error connecting to the AI agent.' }]);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const renderTextWithLineBreaks = (text) => {
//         return text.split('\n').map((str, index, array) => (
//             <React.Fragment key={index}>
//                 {str}
//                 {index === array.length - 1 ? null : <br />}
//             </React.Fragment>
//         ));
//     };

//     return (
//         <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
//             {isOpen && (
//                 <div className="glass-panel border border-[rgba(255,255,255,0.1)] rounded-2xl w-80 sm:w-96 h-[500px] max-h-[80vh] mb-4 flex flex-col overflow-hidden shadow-2xl animate-in slide-in-from-bottom-5 fade-in duration-300">
//                     {/* Header */}
//                     <div className="flex items-center justify-between p-4 border-b border-[rgba(255,255,255,0.05)] bg-[rgba(0,0,0,0.2)]">
//                         <div className="flex items-center gap-2">
//                             <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#06b6d4] to-[#8b5cf6] flex items-center justify-center">
//                                 <Sparkles size={16} className="text-white" />
//                             </div>
//                             <div>
//                                 <h3 className="text-white font-semibold text-sm">Hero.AI Agent</h3>
//                                 <p className="text-xs text-[#06b6d4]">Online</p>
//                             </div>
//                         </div>
//                         <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
//                             <X size={20} />
//                         </button>
//                     </div>

//                     {/* Messages */}
//                     <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
//                         {messages.map((msg, idx) => (
//                             <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
//                                 <div
//                                     className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'user'
//                                         ? 'bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] text-white rounded-tr-sm'
//                                         : 'bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.05)] text-gray-200 rounded-tl-sm'
//                                         }`}
//                                 >
//                                     {renderTextWithLineBreaks(msg.text)}
//                                 </div>
//                             </div>
//                         ))}
//                         {isLoading && (
//                             <div className="flex justify-start">
//                                 <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.05)] p-4 rounded-2xl rounded-tl-sm flex gap-1.5 items-center">
//                                     <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"></span>
//                                     <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></span>
//                                     <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></span>
//                                 </div>
//                             </div>
//                         )}
//                         <div ref={messagesEndRef} />
//                     </div>

//                     {/* Input */}
//                     <div className="p-4 border-t border-[rgba(255,255,255,0.05)] bg-[rgba(0,0,0,0.2)]">
//                         <form onSubmit={handleSend} className="relative">
//                             <input
//                                 type="text"
//                                 value={input}
//                                 onChange={(e) => setInput(e.target.value)}
//                                 placeholder="Ask me anything..."
//                                 disabled={isLoading}
//                                 className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-[#8b5cf6] transition-colors disabled:opacity-50"
//                             />
//                             <button
//                                 type="submit"
//                                 disabled={isLoading || !input.trim()}
//                                 className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] rounded-lg text-white hover:opacity-90 transition-opacity disabled:opacity-50"
//                             >
//                                 <Send size={14} />
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             )}

//             {/* Toggle Button */}
//             <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="w-14 h-14 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] shadow-[0_0_20px_rgba(139,92,246,0.6)] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
//             >
//                 {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
//             </button>
//         </div>
//     );
// };

// export default ChatAssistant;
