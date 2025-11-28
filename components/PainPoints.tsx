import React from 'react';
import { Reveal } from './Reveal';
import { Button } from './Button';
import { Clock, Heart, Coffee, Ban, CheckCircle, ArrowRight } from 'lucide-react';

export const PainPoints: React.FC = () => {
  return (
    <section className="py-24 bg-brand-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-200/40 via-transparent to-transparent opacity-60"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <h2 className="font-serif text-3xl md:text-5xl text-brand-950 font-bold mb-8 leading-tight">
                Chega de dietas que não respeitam <span className="text-brand-500 italic">sua rotina</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Enquanto boa parte dos nutricionistas ainda entrega um cardápio pronto e espera que você se adapte, 
                  <span className="font-bold text-brand-700"> eu faço o caminho inverso.</span>
                </p>
                <div className="p-6 bg-white rounded-2xl shadow-lg shadow-brand-100 border-l-4 border-brand-500 italic text-brand-900 relative overflow-hidden">
                   <div className="absolute -right-4 -top-4 w-20 h-20 bg-brand-50 rounded-full"></div>
                   <span className="relative z-10">"Não é você que tem que se encaixar na dieta..."</span>
                </div>
                <p>
                  Antes de pensar no que entra no seu prato, eu penso no que existe na sua rotina:
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                    { icon: Clock, text: "Seus horários" },
                    { icon: Ban, text: "Seus desafios" },
                    { icon: Coffee, text: "Seus hábitos" },
                    { icon: Heart, text: "Seus gostos" },
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-brand-100 shadow-sm hover:shadow-md transition duration-300">
                        <item.icon className="w-5 h-5 text-brand-500" />
                        <span className="font-medium text-brand-900">{item.text}</span>
                    </div>
                ))}
              </div>
            </Reveal>
            
            <Reveal delay={0.3}>
                <div className="mt-10">
                    <Button variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                        Quero agendar minha conversa <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </Reveal>
          </div>

          <div className="relative">
             <Reveal delay={0.3}>
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-brand-900/10 relative z-10 border border-white">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-400 to-brand-600"></div>
                    <h3 className="font-serif text-2xl font-bold text-brand-900 mb-8 text-center">
                        A Diferença Real
                    </h3>
                    
                    <div className="space-y-6">
                        <div className="flex gap-4 opacity-60 grayscale transition hover:grayscale-0 hover:opacity-100 duration-300 group">
                            <div className="mt-1 bg-red-50 p-2 rounded-full h-fit group-hover:bg-red-100 transition">
                                <Ban className="w-5 h-5 text-red-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-700">Dieta Restritiva</h4>
                                <p className="text-sm text-slate-500">Comer perfeitamente por uma semana e desistir na primeira dificuldade.</p>
                            </div>
                        </div>
                        
                        <div className="h-px bg-slate-100 w-full"></div>

                        <div className="flex gap-4">
                            <div className="mt-1 bg-brand-100 p-2 rounded-full h-fit shadow-inner">
                                <CheckCircle className="w-6 h-6 text-brand-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-brand-800 text-lg">Método ÂNCORA</h4>
                                <p className="text-slate-600">Conseguir seguir um plano realista mesmo quando o dia foge do controle.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-10 pt-8 border-t border-dashed border-brand-100 text-center">
                        <p className="font-serif italic text-gold-600 text-lg">
                            "É o plano que tem que se encaixar na sua rotina."
                        </p>
                    </div>
                </div>
                {/* Decoration */}
                <div className="absolute -bottom-5 -right-5 w-full h-full bg-brand-900/5 rounded-[2.5rem] -z-10"></div>
             </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};