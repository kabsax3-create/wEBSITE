import { motion } from 'motion/react';
import { Smartphone, Download, Star } from 'lucide-react';

export default function AppBanner() {
  return (
    <div className="bg-secondary text-dark rounded-3xl h-full flex items-center justify-between px-8 lg:px-12 py-6 relative overflow-hidden group">
      <div className="relative z-10">
        <h2 className="font-display text-2xl lg:text-3xl font-black uppercase tracking-tighter leading-none mb-1">
          50% OFF FIRST APP ORDER
        </h2>
        <p className="font-bold opacity-60 text-xs uppercase tracking-widest">
          Exclusive deal for new members. Download now.
        </p>
      </div>
      
      <div className="relative z-10 hidden sm:block">
        <button className="bg-dark text-white px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform">
          Get App
        </button>
      </div>

      <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 flex items-center justify-center font-black text-[120px] pointer-events-none select-none">
        50%
      </div>
    </div>
  );
}
