import { motion } from 'framer-motion';

export default function AnimatedLogo() {
  return (
    <motion.div
      className="relative h-40 w-auto"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative h-full w-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut"
        }}
      >
        <img
          src="/3avatar-logo.png"
          // src="/3 AVATAR-01.png"
          alt="3Avatar Logo"
          className="h-full w-auto object-contain"
        />
      </motion.div>
    </motion.div>
  );
}
