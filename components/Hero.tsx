
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image - Close up apetitoso de Camarão/Frutos do Mar */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&q=90&w=2000" 
          alt="Camarão Grelhado Suculento" 
          className="w-full h-full object-cover food-reveal"
        />
        {/* Overlay para legibilidade e profundidade */}
        <div className="absolute inset-0 bg-overlay-appetizing"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-3 mb-2 bg-amber-500/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-xl float-anim">
            <span className="text-white font-black">NOVIDADE</span>
            <span className="text-sm font-medium text-amber-50 uppercase tracking-tighter">Camarão na Brasa com Ervas Finas</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black leading-[0.95] font-serif text-glow">
            Onde o mar <br/>
            <span className="text-amber-400 italic">encontra o fogo.</span>
          </h2>
          
          <p className="text-xl md:text-2xl font-light text-slate-100 max-w-xl leading-relaxed text-glow">
            Descubra o segredo do Peixe Godoy: ingredientes frescos, tempero de família e o aroma irresistível da grelha.
          </p>

          <div className="flex flex-wrap gap-5 pt-4">
            <a 
              href="#cardapio" 
              className="group bg-amber-500 hover:bg-amber-600 text-white font-bold py-5 px-12 rounded-2xl text-lg transition-all shadow-2xl hover:shadow-amber-500/50 flex items-center gap-3"
            >
              Explorar Cardápio
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-blue-900 bg-slate-300 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Avatar" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium">
                <span className="block font-bold text-amber-400">4.4/5 Estrelas</span>
                No Google Reviews
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave with more texture */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] fill-slate-50 opacity-100">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,52.38,57.18,28.67,111,59.65,174,65.81,103,10,208-33.19,301-81.28,40.48-21,80.17-43.19,142-43.19V0Z" opacity=".5"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".25"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
