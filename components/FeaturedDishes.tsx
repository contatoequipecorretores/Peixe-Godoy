
import React from 'react';

const FeaturedDishes: React.FC = () => {
  const features = [
    {
      name: "Moqueca Capixaba",
      image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800",
      price: "R$ 58,00",
      tag: "Borbulhando",
      desc: "Feita na panela de barro com o frescor do coentro e urucum."
    },
    {
      name: "Salmão Grelhado",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
      price: "R$ 59,00",
      tag: "Saudável",
      desc: "Crosta crocante e interior macio, acompanhado de legumes."
    },
    {
      name: "Combinado Gourmet",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800",
      price: "R$ 60,00",
      tag: "O Melhor",
      desc: "Mix de frutos do mar salteados no azeite de ervas."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -mr-48 -mt-48 opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-3 block">Experiência Sensorial</span>
          <h2 className="text-4xl md:text-6xl font-bold text-blue-950 font-serif">Para Salivar a Boca</h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto italic">
            "Não é apenas comida, é uma viagem ao litoral sem sair de Osasco."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((dish, i) => (
            <div key={i} className="group relative bg-white rounded-[2rem] overflow-hidden shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 card-hover border border-slate-100">
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white text-sm font-light leading-relaxed">{dish.desc}</p>
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-blue-900 text-[10px] font-black px-3 py-1 rounded-full shadow-lg uppercase tracking-tighter">
                {dish.tag}
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-900 font-serif mb-2">{dish.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-amber-600 font-black text-2xl">{dish.price}</span>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(s => <span key={s} className="text-amber-400 text-xs">★</span>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
