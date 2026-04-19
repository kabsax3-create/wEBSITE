import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative px-8 lg:px-12 py-10 lg:py-20 flex flex-col justify-center min-h-[60vh] lg:min-h-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h1 className="font-display text-[80px] sm:text-[100px] lg:text-[120px] font-black leading-[0.85] uppercase tracking-[-0.04em]">
          THE<br />
          <span className="text-secondary">GOLDEN</span><br />
          CRUNCH.
        </h1>
        
        <div className="mt-12 lg:hidden">
           <button className="btn-primary">Order Now</button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-2/3 lg:w-1/2 pointer-events-none opacity-80"
      >
         <img
            src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1000&auto=format&fit=crop"
            alt="Juicy Burger"
            className="w-full h-auto drop-shadow-[0_40px_40px_rgba(0,0,0,0.5)] scale-125 lg:scale-150 rotate-[-10deg]"
            referrerPolicy="no-referrer"
         />
      </motion.div>
    </section>
  );
}
