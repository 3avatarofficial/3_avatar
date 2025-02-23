import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400 p-0.5"
      onClick={toggleTheme}
    >
      <div className="h-full w-full rounded-[0.7rem] bg-slate-900/90 backdrop-blur-sm flex items-center justify-center">
        <motion.div
          initial={false}
          animate={{ rotate: isDark ? 0 : 180 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {isDark ? (
            <Moon className="h-6 w-6 text-white" />
          ) : (
            <Sun className="h-6 w-6 text-white" />
          )}
        </motion.div>
      </div>
    </motion.button>
  );
}