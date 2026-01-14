
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedDishes from './components/FeaturedDishes';
import Menu from './components/Menu';
import About from './components/About';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-amber-200 selection:text-amber-900">
      <Header />
      <main>
        <Hero />
        <FeaturedDishes />
        <Menu />
        
        {/* Decorative Transition */}
        <div className="bg-white py-10">
          <div className="container mx-auto px-4">
             <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent w-full"></div>
          </div>
        </div>

        <About />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;
