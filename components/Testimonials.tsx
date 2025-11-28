import React from 'react';
import { Reveal } from './Reveal';
import { Button } from './Button';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Mariana Silva",
      lost: "-12kg",
      text: "Eu achava que nunca conseguiria emagrecer depois dos 40. O método da Thais mudou minha visão sobre comida. Hoje sou outra mulher!",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Fernanda Costa",
      lost: "-8kg",
      text: "O que mais amei foi não precisar cozinhar comidas diferentes para mim e para minha família. Prático e delicioso.",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "Juliana Santos",
      lost: "-15kg",
      text: "O suporte é incrível. A comunidade me ajudou a não desistir. Vale cada centavo investido. Recomendo de olhos fechados.",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    }
  ];

  return (
    <section className="py-24 bg-brand-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-5xl text-brand-950 font-bold mb-6">
                Feedbacks de quem já está <br/><span className="text-brand-500">tendo resultados!</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, idx) => (
            <Reveal key={idx} delay={idx * 0.1} width="100%">
              <div className="bg-white p-8 rounded-3xl shadow-lg shadow-brand-100/50 border border-brand-100 relative h-full flex flex-col items-center text-center transform hover:-translate-y-2 transition duration-300">
                <Quote className="w-12 h-12 text-gold-100 absolute top-6 right-6 opacity-50" />
                
                <div className="flex justify-center items-center gap-1 mb-6 text-gold-400">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>

                <p className="text-slate-600 italic mb-8 flex-1 leading-relaxed relative z-10">"{t.text}"</p>

                <div className="flex flex-col items-center gap-3 mt-auto border-t border-slate-50 pt-6 w-full">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-brand-100" />
                  <div className="flex flex-col items-center gap-1">
                    <h4 className="font-bold text-brand-900">{t.name}</h4>
                    <span className="text-xs font-bold text-white bg-brand-500 px-2 py-1 rounded-full shadow-sm">{t.lost}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
            <div className="flex justify-center">
                <Button variant="outline" className="border-brand-300 text-brand-700 bg-white" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                    Quero ter resultados assim
                </Button>
            </div>
        </Reveal>
      </div>
    </section>
  );
};