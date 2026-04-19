/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuGrid from './components/MenuGrid';
import StoreLocator from './components/StoreLocator';
import AppBanner from './components/AppBanner';
import Footer from './components/Footer';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="lg:grid lg:grid-cols-[80px_1fr_340px] lg:grid-rows-[80px_1fr_200px] min-h-screen bg-primary font-sans text-white overflow-x-hidden">
      <Navbar />
      <header className="lg:col-start-2 lg:col-end-4 lg:row-start-1 flex justify-between items-center px-8 lg:px-10">
        <div className="hidden lg:flex gap-8 font-black uppercase text-xs tracking-widest text-white/70">
          <a href="#menu" className="hover:text-secondary transition-colors">Menu</a>
          <a href="#STORE" className="hover:text-secondary transition-colors">STORE</a>
          <a href="#deals" className="hover:text-secondary transition-colors">Rewards</a>
          <a href="#locator" className="hover:text-secondary transition-colors">Locations</a>
        </div>
        <button className="btn-primary py-3 px-8 text-sm !shadow-none">Order Now</button>
      </header>
      
      <main className="lg:col-start-2 lg:row-start-2">
        <Hero />
      </main>

      <aside className="lg:col-start-3 lg:row-start-2 bg-black/10 overflow-hidden">
        <MenuGrid />
      </aside>

      <section className="lg:col-start-2 lg:row-start-3 px-4 lg:px-10 py-4">
        <AppBanner />
      </section>

      <section className="lg:col-start-3 lg:row-start-3 p-4">
        <StoreLocator />
      </section>

      <div className="lg:col-span-3">
        <Footer />
      </div>
    </div>
  );
}
