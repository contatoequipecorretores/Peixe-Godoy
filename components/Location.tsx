
import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">Venha nos Visitar</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-blue-100 p-3 rounded-full h-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Endereço</h4>
                  <p className="text-slate-600">Av. Analice Sakatauskas, 78<br />Bela Vista, Osasco - SP, 06060-000</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-100 p-3 rounded-full h-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Horário</h4>
                  <p className="text-slate-600">Terça a Domingo: 11:00 às 22:00</p>
                  <p className="text-sm text-amber-600 font-semibold mt-1">Abre às 11:00</p>
                </div>
              </div>

              <div id="contato" className="flex gap-4">
                <div className="bg-blue-100 p-3 rounded-full h-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Contato</h4>
                  <p className="text-slate-600">(11) 4237-6004</p>
                  <a href="https://instagram.com" className="text-blue-600 hover:underline mt-2 inline-block font-medium">Siga-nos no Instagram</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 h-[450px] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.886047123984!2d-46.7792618237586!3d-23.536585160862594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf01934c180001%3A0x77d122606540c499!2sAv.%20Analice%20Sakatauskas%2C%2078%20-%20Bela%20Vista%2C%20Osasco%20-%20SP%2C%2006060-000!5e0!3m2!1spt-BR!2sbr!4v1716293400000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
