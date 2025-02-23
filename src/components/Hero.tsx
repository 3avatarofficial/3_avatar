import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBackground from './HeroBackground';
import { FadeIn } from './animations/FadeIn';
import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    const handleCopy = async (event: ClipboardEvent) => {
      const selection = window.getSelection();
      if (!selection) return;
      
      const selectedText = selection.toString();
      
      if (selectedText === 'A' || selectedText === 'a') {
        event.preventDefault();
        
        try {
          await navigator.clipboard.writeText('Happy Birthday Aj');
          
          const notification = document.createElement('div');
          notification.textContent = '✨ Magic copy!';
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

    const heroSection = document.getElementById('home');
    if (heroSection) {
      heroSection.addEventListener('copy', handleCopy);
    }

    return () => {
      if (heroSection) {
        heroSection.removeEventListener('copy', handleCopy);
      }
    };
  }, []);

  const scrollToForm = () => {
    const formSection = document.querySelector('#contact .max-w-2xl');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
      // Add focus to the first input after scrolling
      setTimeout(() => {
        const nameInput = document.getElementById('name');
        if (nameInput) nameInput.focus();
      }, 800);
    }
  };

  return (
    <div id="home" className="relative pt-20">
      <HeroBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
        <div className="text-center">
          <FadeIn delay={0.2}>
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-white mb-7 drop-shadow-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Your Trusted Tech & Security Partner
            </motion.h1>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto mb-9 drop-shadow">
              At 3Avatar, we pride ourselves on delivering the best in technology and security services right to your doorstep in Purba Bardhaman and beyond.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <motion.button
              onClick={scrollToForm}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-7 py-3.5 text-base border border-transparent font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-600 transition-colors duration-300 shadow-lg"
            >
              Get Started
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.span>
            </motion.button>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}