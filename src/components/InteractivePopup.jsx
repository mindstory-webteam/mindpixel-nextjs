import React, { useState, useEffect } from "react";
import { useNavigate } from '@/lib/react-router-dom-compat';
import SharedLeadForm from "./SharedLeadForm";

export default function InteractivePopup() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // Auto-open after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <style>{`
        :root {
          --purple: #95257b;
          --purple-dark: #7a1d64;
        }
        
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999999;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0.3s ease;
          font-family: 'Syne', sans-serif;
        }

        .popup-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        .popup-container {
          background: white;
          border-radius: 20px;
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.4);
          max-width: 600px;
          width: 90%;
          max-height: 90%;
          height: auto;
          position: relative;
          padding: 0;
          transform: scale(0.7);
          opacity: 0;
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease;
        }

        .popup-overlay.active .popup-container {
          transform: scale(1);
          opacity: 1;
        }

        .popup-content {
          max-height: calc(90vh - 180px);
          overflow-y: auto;
          overflow-x: hidden;
          padding-right: 8px;
        }

        .popup-content::-webkit-scrollbar {
          width: 6px;
        }

        .popup-content::-webkit-scrollbar-track {
          background: transparent;
        }

        .popup-content::-webkit-scrollbar-thumb {
          background: rgba(131, 58, 137, 0.25);
          border-radius: 10px;
        }

        .popup-content::-webkit-scrollbar-thumb:hover {
          background: var(--purple);
        }

        .popup-form-section {
          flex: 1;
          padding: 30px;
          position: relative;
        }

        .popup-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 32px;
          height: 32px;
          border: none;
          background: #f1f5f9;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          font-size: 20px;
          color: #475569;
          z-index: 10;
          line-height: 1;
        }

        .popup-close:hover {
          background: var(--purple);
          color: white;
          transform: rotate(90deg);
        }

        .popup-header {
          margin-bottom: 24px;
        }

        .popup-header h2 {
          margin: 0;
          font-size: 28px;
          color: var(--purple);
          font-weight: 500;
          letter-spacing: -0.5px;
        }

        .form-group {
          margin-bottom: 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-row {
          display: flex;
          gap: 16px;
        }

        .form-row .form-group {
          flex: 1;
        }

        .form-group label {
          font-size: 13px;
          font-weight: 700;
          color: #334155;
        }

        .form-input {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-family: inherit;
          font-size: 14px;
          color: #1e293b;
          transition: border-color 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--purple);
          box-shadow: 0 0 0 3px rgba(131, 58, 137, 0.1);
        }

        .form-input::placeholder {
          color: #94a3b8;
        }
        
        .form-input.error {
          border-color: #ea4335;
        }

        .form-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 16px;
          padding-right: 40px;
        }

        .popup-actions {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
          margin-top: 20px;
        }

        .popup-btn {
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 700;
          transition: all 0.25s ease;
        }

        .popup-btn-primary {
          background: var(--purple);
          color: white;
        }

        .popup-btn-primary:hover:not(:disabled) {
          background: var(--purple-dark);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(131, 58, 137, 0.2);
        }

        .popup-btn-primary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .popup-btn-secondary {
          background: #f1f5f9;
          color: #475569;
        }

        .popup-btn-secondary:hover {
          background: #e2e8f0;
        }

        .form-error-msg {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(234, 67, 53, 0.1);
          color: #ea4335;
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 13.5px;
          font-weight: 500;
          margin-top: 16px;
        }

        .form-error-msg svg {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .popup-container {
            flex-direction: column;
            max-height: 90vh;
            overflow-y: auto;
            width: 95%;
          }
          .popup-form-section {
            padding: 30px 24px;
          }
          .form-row {
            flex-direction: column;
            gap: 0px;
          }
        }
      `}</style>

      <div 
        className={`popup-overlay ${isOpen ? 'active' : ''}`}
        onClick={(e) => {
          if (e.target.classList.contains('popup-overlay')) setIsOpen(false);
        }}
      >
        <div className="popup-container">
          <div className="popup-form-section">
            <button className="popup-close" onClick={() => setIsOpen(false)} aria-label="Close popup">&times;</button>
            <div className="popup-header">
              <h2>Get in Touch</h2>
            </div>
            
            <div className="popup-content">
              <SharedLeadForm theme="light" buttonColor="var(--purple)" onSuccess={() => {
                setIsOpen(false);
                navigate('/thank-you');
              }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
