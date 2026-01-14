
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/seed/seafood-about/800/600" 
              alt="Restaurante Peixe Godoy" 
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Peixe Godoy</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Há anos servindo o melhor da culinária marinha em Osasco. Nosso foco é a qualidade dos ingredientes e um tempero que remete às melhores moquecas do litoral brasileiro.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="space-y-3">
                <h4 className="font-bold text-amber-400 text-lg">Serviços</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><span className="text-green-400">✔</span> Refeição no local</li>
                  <li className="flex items-center gap-2"><span className="text-green-400">✔</span> Para viagem</li>
                  <li className="flex items-center gap-2"><span className="text-green-400">✔</span> Entrega sem contato</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-bold text-amber-400 text-lg">Destaques Google</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">✨ Ambiente descontraído</li>
                  <li className="flex items-center gap-2">✨ Atendimento simpático</li>
                  <li className="flex items-center gap-2">✨ Pratos muito bem avaliados</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
