
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-slate-800 pb-8 mb-8">
          <div>
            <h3 className="text-white text-2xl font-bold mb-2">Peixe Godoy</h3>
            <p className="text-slate-400">Especialista em peixes e frutos do mar em Osasco.</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Peixe Godoy. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#inicio" className="hover:text-slate-300">Início</a>
            <a href="#cardapio" className="hover:text-slate-300">Cardápio</a>
            <a href="#sobre" className="hover:text-slate-300">Sobre</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
