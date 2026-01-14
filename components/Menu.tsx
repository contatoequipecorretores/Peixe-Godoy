
import React from 'react';
import { MENU_DATA } from '../constants';

const Menu: React.FC = () => {
  return (
    <section id="cardapio" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-[2px] bg-amber-500"></div>
            <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">Tradição Peixe Godoy</span>
            <div className="w-8 h-[2px] bg-amber-500"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-blue-950 mb-6 font-serif">Nosso Menu</h2>
          <p className="text-slate-500 max-w-lg mx-auto">Peixes grelhados na hora, porções generosas e o tempero que você só encontra aqui.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16">
          {MENU_DATA.map((category, idx) => (
            <div key={idx} className="relative">
              <div className="flex items-center gap-5 mb-10 group">
                <div className="bg-white text-blue-950 w-16 h-16 rounded-3xl flex items-center justify-center text-4xl shadow-xl border border-slate-100 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-950 font-serif leading-none">
                    {category.title}
                  </h3>
                  {category.description && (
                    <span className="text-[10px] text-amber-600 font-black uppercase tracking-[0.2em] mt-1 block">{category.description}</span>
                  )}
                </div>
              </div>

              <div className="space-y-8">
                {category.items.map((item, i) => (
                  <div key={i} className="group cursor-default">
                    <div className="flex items-baseline justify-between gap-4">
                      <div className="flex items-center gap-1">
                        <span className="menu-item-dot group-hover:scale-150 transition-transform"></span>
                        <span className="text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                          {item.name}
                        </span>
                      </div>
                      <div className="flex-grow border-b border-dotted border-slate-300 mb-1 opacity-50"></div>
                      <span className="text-amber-600 font-black text-xl font-serif">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Decorative wave divider for long lists */}
              {category.items.length > 8 && (
                <div className="mt-12 opacity-10">
                   <svg height="20" width="100%" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0 10 Q 12.5 0 25 10 T 50 10 T 75 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-32 relative group">
          <div className="absolute inset-0 bg-blue-950 rounded-[4rem] rotate-1 group-hover:rotate-0 transition-transform duration-500 shadow-2xl"></div>
          <div className="relative bg-blue-900 rounded-[4rem] -rotate-1 group-hover:rotate-0 transition-transform duration-500 p-12 text-center text-white border-4 border-blue-800 overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>
            <h4 className="text-4xl font-bold mb-6 font-serif">Não passe vontade sozinho!</h4>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg">Traga a família e os amigos para saborear o que há de melhor no mar. Ambiente climatizado e atendimento cordial esperam por você.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="tel:1142376004" className="bg-amber-500 hover:bg-amber-600 text-white px-12 py-5 rounded-2xl font-black text-xl transition-all shadow-xl flex items-center justify-center gap-3">
                Reservar Mesa
              </a>
              <a href="#localizacao" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all border border-white/20">
                Ver Localização
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
