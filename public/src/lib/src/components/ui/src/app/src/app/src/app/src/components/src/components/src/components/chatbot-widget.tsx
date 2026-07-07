"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message { role: "bot" | "user"; content: string; timestamp: Date; }

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "مرحباً! أنا فزعة AI. كيف أقدر أساعدك اليوم؟", timestamp: new Date() },
  ]);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => { scrollToBottom(); }, [messages]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages((prev) => [...prev, { role: "user", content: message, timestamp: new Date() }]);
      setMessage("");
      setIsTyping(true);
      setTimeout(() => {
        const responses = ["شكراً لتواصلك! سأقوم بمساعدتك في أقرب وقت.", "سؤال ممتاز! دعني أفكر في أفضل طريقة لمساعدتك.", "تم استلام رسالتك. فريقنا سيرد عليك قريباً."];
        setMessages((prev) => [...prev, { role: "bot", content: responses[Math.floor(Math.random() * responses.length)], timestamp: new Date() }]);
        setIsTyping(false);
      }, 1500);
    }
  };

  return (
    <>
      <button onClick={() => { setIsOpen(!isOpen); setIsMinimized(false); }}
        className={`fixed bottom-6 left-6 z-50 h-14 w-14 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-110 hover:shadow-xl flex items-center justify-center ${isOpen ? "rotate-90" : ""}`}>
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className={`fixed left-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border border-border overflow-hidden transition-all duration-300 ${isMinimized ? "bottom-24 h-16" : "bottom-24 h-[500px]"}`}>
          <div className="bg-primary text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center"><MessageCircle className="h-5 w-5" /></div>
              <div><h3 className="font-bold">فزعة AI</h3><p className="text-xs opacity-90">متصل الآن</p></div>
            </div>
            <button onClick={() => setIsMinimized(!isMinimized)} className="h-8 w-8 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
              <Minimize2 className="h-4 w-4" />
            </button>
          </div>

          {!isMinimized && (
            <>
              <div className="h-[calc(100%-140px)] overflow-y-auto p-4 space-y-4 bg-secondary/30">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.role === "user" ? "justify-start" : "justify-end"} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                    <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${msg.role === "user" ? "bg-primary text-white" : "bg-white border border-border text-foreground"}`}>
                      <p className="text-sm">{msg.content}</p>
                      <p className={`text-xs mt-1 ${msg.role === "user" ? "text-white/70" : "text-muted-foreground"}`}>
                        {msg.timestamp.toLocaleTimeString("ar-SA", { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-end">
                    <div className="bg-white border border-border rounded-2xl px-4 py-2">
                      <div className="flex gap-1">
                        <div className="h-2 w-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="h-2 w-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="h-2 w-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="border-t bg-white p-4">
                <div className="flex gap-2">
                  <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
                    placeholder="اكتب رسالتك..."
                    className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                  <Button size="icon" onClick={handleSend} disabled={!message.trim()} className="transition-all hover:scale-105">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
