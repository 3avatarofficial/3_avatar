import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ServiceType } from '../types/service';

interface ServiceModalProps {
  service: ServiceType | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  if (!service) return null;

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

  const modalContent = {
    'CCTV Camera Installation & Service': {
      details: [
        'HD & IP Camera Installation',
        'DVR/NVR Setup & Configuration',
        'Remote Viewing Setup',
        'Maintenance & Repairs',
        'Security System Integration',
        'Motion Detection Setup'
      ],
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80'
    },
    'Laptop, Desktop, Gaming PC': {
      details: [
        'Hardware Repairs & Upgrades',
        'Custom PC Building',
        'Performance Optimization',
        'Software Installation',
        'Data Recovery',
        'Gaming PC Optimization'
      ],
      image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80'
    },
    'Printer Services': {
      details: [
        'Printer Installation',
        'Network Printer Setup',
        'Cartridge Replacement',
        'Maintenance & Repairs',
        'Driver Installation',
        'Print Quality Optimization'
      ],
      image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80'
    },
    'Networking Solutions': {
      details: [
        'Network Design & Setup',
        'Wi-Fi Installation',
        'Router Configuration',
        'Network Security',
        'Bandwidth Optimization',
        'Network Troubleshooting'
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80'
    },
    'Telecom Services': {
      details: [
        'VoIP Setup',
        'PBX Installation',
        'Phone System Integration',
        'Call Center Setup',
        'Telecom Maintenance',
        'Communication Security'
      ],
      image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80'
    },
    'Smart Biometric Machines': {
      details: [
        'Fingerprint Scanner Setup',
        'Face Recognition Systems',
        'Access Control Integration',
        'Time Attendance Systems',
        'Security Protocols Setup',
        'Maintenance & Support'
      ],
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80'
    }
  };

  const content = modalContent[service.title as keyof typeof modalContent];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-4xl bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white shadow-md z-10 transition-transform hover:scale-110"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <motion.img
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  src={content.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4`}
                  >
                    <service.icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-white/90">{service.description}</p>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Our Services Include:</h4>
                <div className="space-y-3">
                  {content.details.map((detail, index) => (
                    <motion.div
                      key={detail}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-8 w-full py-3 px-6 rounded-lg bg-gradient-to-r ${service.gradient} text-white font-medium hover:shadow-lg transition-shadow`}
                  onClick={() => {
                    onClose();
                    scrollToForm();
                  }}
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
