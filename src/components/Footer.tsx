import { Facebook, Twitter, Instagram, Youtube, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center -rotate-6">
                <span className="text-secondary font-display text-2xl font-black">M</span>
              </div>
              <span className="font-display text-xl font-black">BURGER</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Serving the world's most iconic burgers since 2026. Made fresh, delivered with love.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                   <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-black text-lg mb-8 uppercase tracking-widest text-secondary">Our Menu</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">Flame Grilled Burgers <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">Golden Crispy Fries <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">Signature Shakes <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">Seasonal Specials <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-black text-lg mb-8 uppercase tracking-widest text-secondary">Information</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-black text-lg mb-8 uppercase tracking-widest text-secondary">Newsletter</h4>
            <p className="text-gray-400 mb-6 text-sm">Join the club for free burgers on your birthday!</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="yours@email.com" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 focus:outline-none focus:border-primary transition-colors text-sm"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-primary text-white px-4 rounded-full font-display font-bold text-xs uppercase hover:bg-white hover:text-primary transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-xs font-bold uppercase tracking-[0.2em]">
          &copy; 2026 GLOBAL BURGER EXPRESS. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
