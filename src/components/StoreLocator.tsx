import { motion } from 'motion/react';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';

export default function StoreLocator() {
  return (
    <div className="bg-white text-dark rounded-3xl h-full flex flex-col justify-center p-6 lg:p-8 shadow-2xl">
      <div className="w-full h-16 bg-gray-100 rounded-xl mb-6 border-2 border-dashed border-gray-300 flex items-center justify-center">
         <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2">
           <MapPin size={14} /> Map Overview
         </span>
      </div>
      
      <h3 className="font-display text-xl lg:text-2xl font-black uppercase leading-none mb-1">
        Find Nearest
      </h3>
      <p className="font-bold opacity-40 text-[10px] uppercase tracking-widest">
        342 Main St, New York, NY
      </p>

      <div className="mt-6 flex items-center justify-between">
         <div className="flex -space-x-2">
            {[1,2,3].map(i => (
              <div key={i} className="w-8 h-8 rounded-full bg-primary border-2 border-white flex items-center justify-center text-[8px] font-black text-white">M</div>
            ))}
         </div>
         <button className="text-primary font-black text-[10px] uppercase tracking-widest hover:underline">
           View Map
         </button>
      </div>
    </div>
  );
}
