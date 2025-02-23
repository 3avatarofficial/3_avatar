import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    const handleCopy = async (event: ClipboardEvent) => {
      const selection = window.getSelection();
      if (!selection) return;
      
      const selectedText = selection.toString();
      
      if (selectedText === 'All') {
        event.preventDefault();
        
        try {
          await navigator.clipboard.writeText('Designed & Developed by Ritam Jash');
          
          const notification = document.createElement('div');
          notification.textContent = '✨ Credit copied!';
          notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: linear-gradient(to right, #10b981, #0891b2);
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 14px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.3s ease;
          `;
          document.body.appendChild(notification);
          
          setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
          }, 100);
          
          setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(20px)';
            setTimeout(() => notification.remove(), 300);
          }, 2000);
        } catch (err) {
          console.error('Failed to modify clipboard:', err);
        }
      }
    };

    document.addEventListener('copy', handleCopy);
    return () => document.removeEventListener('copy', handleCopy);
  }, []);

  return (
    <footer className="bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/3avatar-logo.png"
                alt="3Avatar Logo"
                className="h-40 w-auto"
              />
            </motion.div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <p className="text-gray-400 mt-2">
              Your Trusted Tech & Security Partner
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}