import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import AboutBackground from './AboutBackground';
import { FadeIn } from './animations/FadeIn';
import { ScaleIn } from './animations/ScaleIn';

const features = [
  "Expert Technicians",
  "Affordable Pricing",
  "Doorstep Services",
  "Reliable Support",
  "Quick Response Time",
  "Quality Assurance"
];

export default function About() {
  return (
    <div id="about" className="relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />
      <div className="bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <FadeIn>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-6">
                  Why Choose Us?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  We're committed to providing top-notch technology and security solutions with unmatched customer service. Our team of experts ensures that every project is handled with precision and care.
                </p>
              </FadeIn>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <FadeIn key={index} delay={index * 0.1} direction="left">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
                    >
                      <motion.div
                        initial={{ rotate: -90 }}
                        animate={{ rotate: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        <CheckCircle className="h-6 w-6 text-emerald-500" />
                      </motion.div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  </FadeIn>
                ))}
              </div>
            </div>
            
            <ScaleIn delay={0.3}>
              <div className="mt-12 lg:mt-0">
                <motion.div 
                  className="relative aspect-[4/3]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg"
                    animate={{ rotate: [6, 4, 6] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="relative h-full rounded-lg shadow-xl overflow-hidden">
                    <AboutBackground />
                  </div>
                </motion.div>
              </div>
            </ScaleIn>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />
    </div>
  );
}