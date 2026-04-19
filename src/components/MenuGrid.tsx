import { motion } from 'motion/react';
import { Plus, Flame } from 'lucide-react';

const MENU_ITEMS = [
  {
    id: 1,
    name: "Classic Cheese",
    category: "Burgers",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop",
    popular: true
  },
  {
    id: 2,
    name: "Golden Crisps",
    category: "Fries",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1630384066272-1b601614742a?q=80&w=600&auto=format&fit=crop",
    popular: false
  },
  {
    id: 3,
    name: "Smoky BBQ Blast",
    category: "Burgers",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=600&auto=format&fit=crop",
    popular: true
  },
  {
    id: 4,
    name: "Oceanic Sparkle",
    category: "Drinks",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600&auto=format&fit=crop",
    popular: false
  },
  {
    id: 5,
    name: "Spicy Twisters",
    category: "Fries",
    price: 4.49,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=600&auto=format&fit=crop",
    popular: false
  },
  {
    id: 6,
    name: "Velvet Shake",
    category: "Drinks",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop",
    popular: true
  }
];

export default function MenuGrid() {
  return (
    <div className="p-6 lg:p-8 flex flex-col h-full">
      <h3 className="font-black uppercase text-sm border-b-2 border-secondary pb-4 mb-6 tracking-widest text-white/50">
        Featured Menu
      </h3>
      
      <div className="space-y-4 flex-1 overflow-y-auto pr-2 custom-scrollbar">
        {MENU_ITEMS.slice(0, 4).map((item, idx) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center gap-4 group cursor-pointer hover:bg-white/5 p-3 rounded-2xl transition-colors"
          >
            <div className="w-16 h-16 bg-white rounded-xl overflow-hidden p-1 flex-shrink-0">
               <img 
                 src={item.image} 
                 alt={item.name} 
                 className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform"
                 referrerPolicy="no-referrer"
               />
            </div>
            <div className="min-w-0">
               <h4 className="font-black text-sm uppercase truncate group-hover:text-secondary transition-colors">{item.name}</h4>
               <p className="text-secondary font-black text-sm mt-1">${item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-white/10 hidden lg:block">
         <p className="text-[10px] font-black uppercase text-white/30 tracking-widest mb-4">Quick Add</p>
         <div className="flex gap-2">
            <button className="flex-1 py-3 bg-secondary text-primary rounded-xl font-black text-[10px] uppercase">Add Bag</button>
            <button className="flex-1 py-3 bg-white/5 text-white rounded-xl font-black text-[10px] uppercase">Details</button>
         </div>
      </div>
    </div>
  );
}
