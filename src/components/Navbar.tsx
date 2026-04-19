import { motion } from 'motion/react';
import { ShoppingBag, Menu, MapPin } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="lg:row-span-3 lg:col-start-1 bg-black/10 flex lg:flex-col items-center justify-between lg:justify-start lg:pt-10 px-6 lg:px-0 py-4 lg:py-0 border-r border-white/10 z-50">
      <motion.div 
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shadow-2xl"
      >
        <span className="text-primary font-display text-2xl font-black">M</span>
      </motion.div>

      <div className="hidden lg:flex flex-col items-center gap-10 mt-16">
        <div className="w-6 h-0.5 bg-white relative before:content-[''] before:absolute before:w-6 before:h-0.5 before:bg-white before:-top-2 after:content-[''] after:absolute after:w-6 after:h-0.5 after:bg-white after:top-2" />
        <div className="lg:[writing-mode:vertical-lr] lg:rotate-180 text-[10px] font-black uppercase tracking-[0.3em] opacity-40 whitespace-nowrap">
          GLOBAL EST. 1955
        </div>
      </div>

      <div className="lg:hidden flex items-center gap-4">
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <Menu size={24} className="text-white" />
        </button>
      </div>
    </nav>
  );
}
