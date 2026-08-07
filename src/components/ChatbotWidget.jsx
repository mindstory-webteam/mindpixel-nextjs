import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Loader2 } from 'lucide-react';
import { FaRobot, FaWhatsapp } from "react-icons/fa6";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function ChatbotWidget({
  apiEndpoint = '/api/chat',
  brandColor = '#1a1a1a',
  brandName = 'Elo',
  companyName = 'Mindpixel',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: '1',
      role: 'assistant',
      content: `Hi! I'm ${brandName} from ${companyName}. How can I help you today?`,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) throw new Error('Failed to get response');
      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.message || data.content || "Sorry, I couldn't process that.",
          timestamp: new Date(),
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: 'I am currently experiencing high traffic! Please contact our team directly via WhatsApp at +91 8281001410 or email us at hello@mindstory.in.',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <style>{`
        @keyframes chatFadeIn {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .chat-spin { animation: spin 1s linear infinite; }
        .chat-window-anim { animation: chatFadeIn 0.25s cubic-bezier(0.34, 1.56, 0.64, 1); }

        .chat-fab-wrap {
          touch-action: none;
          user-select: none;
          -webkit-user-select: none;
          position: fixed;
          right: 24px;
          bottom: 24px;
          width: 50px;
          height: 50px;
          cursor: pointer;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center; 
        }

        .whatsapp-fab-wrap {
          position: fixed;
          right: 24px;
          bottom: 84px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          z-index: 9999;
          transition: transform 0.2s, filter 0.2s, box-shadow 0.2s;
          cursor: pointer;
          text-decoration: none;
        }
    

        .chat-fab-lottie {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          background: #ffffff; 
          pointer-events: none;
          filter: drop-shadow(0 4px 14px rgba(0,0,0,0.28));
          transition: filter 0.2s, transform 0.2s;
        }
        .chat-fab-wrap:hover .chat-fab-lottie {
          filter: drop-shadow(0 6px 20px rgba(0,0,0,0.36));
          transform: scale(1.08);
        }

        .chat-fab-close {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #1a1a1a;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          pointer-events: none;
          box-shadow: 0 4px 20px rgba(0,0,0,0.28);
          transition: transform 0.2s;
        }
        .chat-fab-wrap:hover .chat-fab-close {
          transform: scale(1.08);
        }

        .chat-window {
          position: fixed;
          right: 24px;
          bottom: 84px;
          width: 380px;
          max-width: calc(100vw - 32px);
          height: 520px;
          max-height: calc(100vh - 32px);
          z-index: 9998;
          display: flex;
          flex-direction: column;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(0,0,0,0.18);
          border: 1px solid rgba(0,0,0,0.08);
          background: #fff;
        }

        @media (max-width: 640px) {
          .chat-fab-wrap {
            right: 20px;
            bottom: 20px;
          }
          .whatsapp-fab-wrap {
            right: 20px;
            bottom: 80px;
          }
          .chat-window {
            left: 16px;
            right: 16px;
            bottom: 80px;
            width: auto;
            max-width: none;
            height: 380px;
            max-height: 60vh;
            border-radius: 14px;
          }
          .chat-messages-list {
            padding: 12px !important;
            gap: 10px !important;
          }
          .chat-input-container {
            padding: 8px 10px !important;
            gap: 8px !important;
          }
          .chat-input-field {
            padding: 8px 12px !important;
            font-size: 13px !important;
          }
          .chat-send-btn {
            width: 38px !important;
            height: 38px !important;
          }
        }
      `}</style>

      {/* Fixed WhatsApp FAB */}
      <a
        href="https://wa.me/918281001410"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab-wrap"
        style={{
          opacity: isOpen ? 0 : 1,
          pointerEvents: isOpen ? 'none' : 'auto',
          transform: isOpen ? 'scale(0.8)' : 'scale(1)',
        }}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Fixed Lottie Chat FAB */}
      <div
        className="chat-fab-wrap"
        role="button"
        aria-label="Toggle chat"
        tabIndex={0}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={(e) => e.key === 'Enter' && setIsOpen((p) => !p)}
      >
        {isOpen ? (
          <div className="chat-fab-close">
            <X size={26} />
          </div>
        ) : (
          <div className="chat-fab-lottie">
            <DotLottieReact
              src="https://lottie.host/da1d1670-8bcf-466a-8be7-9a6578b1d09b/iTq4TiWYJd.lottie"
              loop
              autoplay
            />
          </div>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window-anim chat-window">
          {/* Header */}
          <div
            style={{
              backgroundColor: brandColor,
              color: '#fff',
              padding: '14px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FaRobot size={18} />
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 15, lineHeight: 1.2 }}>{brandName}</div>
                <div style={{ fontSize: 12, opacity: 0.85 }}>Online</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'rgba(255,255,255,0.15)',
                border: 'none',
                borderRadius: '50%',
                width: 32,
                height: 32,
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              aria-label="Close chat"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div
            className="chat-messages-list"
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              background: '#f7f8fa',
            }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                style={{
                  display: 'flex',
                  justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <div
                  style={{
                    maxWidth: '75%',
                    borderRadius: 16,
                    padding: '10px 14px',
                    fontSize: 14,
                    lineHeight: 1.5,
                    ...(message.role === 'user'
                      ? { backgroundColor: brandColor, color: '#fff' }
                      : {
                          backgroundColor: '#fff',
                          color: '#1a1a1a',
                          border: '1px solid #e5e7eb',
                          boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                        }),
                  }}
                >
                  <p style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                    {message.content}
                  </p>
                  <span style={{ display: 'block', marginTop: 4, fontSize: 11, opacity: 0.65 }}>
                    {message.timestamp.toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
            ))}

            {isLoading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div
                  style={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: 16,
                    padding: '10px 14px',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                  }}
                >
                  <Loader2 size={18} className="chat-spin" style={{ color: brandColor }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            className="chat-input-container"
            style={{
              padding: '12px 14px',
              borderTop: '1px solid #e5e7eb',
              background: '#fff',
              display: 'flex',
              gap: 10,
              flexShrink: 0,
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              disabled={isLoading}
              className="chat-input-field"
              style={{
                flex: 1,
                border: '2px solid #e5e7eb',
                borderRadius: 12,
                padding: '10px 14px',
                fontSize: 14,
                outline: 'none',
                transition: 'border-color 0.2s',
                opacity: isLoading ? 0.5 : 1,
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = brandColor)}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#e5e7eb')}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="chat-send-btn"
              style={{
                backgroundColor: brandColor,
                color: '#fff',
                border: 'none',
                borderRadius: 12,
                width: 44,
                height: 44,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: inputValue.trim() && !isLoading ? 'pointer' : 'not-allowed',
                opacity: !inputValue.trim() || isLoading ? 0.5 : 1,
                flexShrink: 0,
              }}
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}