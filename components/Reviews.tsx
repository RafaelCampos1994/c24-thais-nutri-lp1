import React from 'react';
import { Reveal } from './Reveal';

export const Reviews: React.FC = () => {
    // Hardcoded list of reviews based on the file listing
    const reviews = [
        "/Avaliacoes/Avaliação 01.jpeg",
        "/Avaliacoes/Avaliação 02.jpeg",
        "/Avaliacoes/Avaliação 03.jpeg",
        "/Avaliacoes/Avaliação 04.jpeg",
        "/Avaliacoes/Avaliação 05.jpeg",
        "/Avaliacoes/Avaliação 05.png",
        "/Avaliacoes/Avaliação 06.jpeg",
        "/Avaliacoes/Avaliação 07.jpeg",
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <Reveal>
                        <h2 className="font-serif text-3xl md:text-5xl text-brand-950 font-bold mb-6">
                            O que dizem sobre o <span className="text-brand-500">Método ÂNCORA</span>
                        </h2>
                        <p className="text-brand-700/80 text-lg max-w-2xl mx-auto">
                            Confira mais algumas avaliações de quem já transformou sua vida.
                        </p>
                    </Reveal>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {reviews.map((src, idx) => (
                        <Reveal key={idx} delay={idx * 0.05} width="100%">
                            <div className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg border border-brand-100 hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={src}
                                    alt={`Avaliação ${idx + 1}`}
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
