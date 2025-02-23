import { 
  Camera, 
  Laptop, 
  Printer, 
  Network, 
  Phone, 
  Fingerprint 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FadeIn } from './animations/FadeIn';
import ServiceModal from './modals/ServiceModal';
import type { ServiceType } from './types/service';

const services: ServiceType[] = [
  {
    title: "CCTV Camera Installation & Service",
    description: "Protect your home and business with our expert CCTV installation and maintenance services.",
    icon: Camera,
    gradient: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80"
  },
  {
    title: "Laptop, Desktop, Gaming PC",
    description: "Whether you need repairs, upgrades, or a custom-built gaming PC, our skilled technicians have you covered.",
    icon: Laptop,
    gradient: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80"
  },
  {
    title: "Printer Services",
    description: "Say goodbye to printer woes! We offer setup, repair, and troubleshooting for all types of printers.",
    icon: Printer,
    gradient: "from-emerald-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80"
  },
  {
    title: "Networking Solutions",
    description: "Optimize your connectivity with our professional network installation and configuration services.",
    icon: Network,
    gradient: "from-orange-500 to-amber-500",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
  },
  {
    title: "Telecom Services",
    description: "From seamless communication setups to telecom repairs, we ensure your technology is always up and running.",
    icon: Phone,
    gradient: "from-indigo-500 to-blue-500",
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80"
  },
  {
    title: "Smart Biometric Machines",
    description: "Upgrade your security with biometric solutions that integrate the latest in smart technology.",
    icon: Fingerprint,
    gradient: "from-rose-500 to-red-500",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80"
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div id="services" className="relative">
      {/* Add separator lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />
      <div className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Our Services</h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                Comprehensive tech solutions tailored to your needs
              </p>
            </div>
          </FadeIn>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden h-[400px]"
                  onClick={() => {
                    setSelectedService(service);
                    setIsModalOpen(true);
                  }}
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                  {/* Content */}
                  <div className="relative h-full p-8 flex flex-col justify-end text-white">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-14 h-14 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6`}
                    >
                      <service.icon className="h-7 w-7 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-200">{service.description}</p>
                    
                    {/* View Details Button */}
                    <motion.div 
                      className="mt-6 inline-flex"
                      initial={{ opacity: 0 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className={`px-4 py-2 rounded-lg bg-gradient-to-r ${service.gradient} text-white text-sm font-medium`}>
                        View Details
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
      {/* Add separator lines */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}