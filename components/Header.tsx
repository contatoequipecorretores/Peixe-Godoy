
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-center md:items-start">
          <h1 className={`text-2xl md:text-3xl font-bold tracking-tight ${isScrolled ? 'text-blue-900' : 'text-white md:text-white text-blue-900'}`}>
            Peixe Godoy
          </h1>
          <p className={`text-xs md:text-sm italic hidden md:block ${isScrolled ? 'text-blue-700' : 'text-slate-100'}`}>
            Especialista em peixes e frutos do mar
          </p>
        </div>
        
        <nav className="mt-4 md:mt-0">
          <ul className={`flex gap-4 md:gap-8 text-sm md:text-base font-medium ${isScrolled ? 'text-slate-700' : 'text-white md:text-white text-slate-700'}`}>
            <li><a href="#inicio" className="hover:text-amber-500 transition-colors">Início</a></li>
            <li><a href="#cardapio" className="hover:text-amber-500 transition-colors">Cardápio</a></li>
            <li><a href="#sobre" className="hover:text-amber-500 transition-colors">Sobre</a></li>
            <li><a href="#localizacao" className="hover:text-amber-500 transition-colors">Localização</a></li>
            <li><a href="#contato" className="hover:text-amber-500 transition-colors">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
