import { GoogleGenAI } from "@google/genai";

const systemInstruction = `
Você é a assistente virtual da Nutricionista Thais Bertocco.
Seu objetivo é tirar dúvidas de potenciais pacientes sobre o acompanhamento nutricional e o "Método ÂNCORA".

Informações Importantes:
- **Localização:** Consultório em Cotia e Região.
- **Método ÂNCORA:** Focado em emagrecimento definitivo, sem dietas restritivas, adaptado à rotina do paciente.
- **As 4 Fases:** 1. Ancoragem (Entendimento), 2. Rota (Planejamento), 3. Navegação (Execução/Ajustes), 4. Porto Seguro (Manutenção).
- **Filosofia:** "Não é você que tem que se encaixar na dieta, é o plano que tem que se encaixar na sua rotina."
- **Convênios:** NÃO atende por plano de saúde/convênio. O atendimento é particular, mas emite recibo para reembolso se o plano do paciente permitir.
- **Diferencial:** Personalização extrema (considera horários, gostos, recaídas).
- **Objetivo:** Emagrecer comendo bem, melhorar exames e ganhar energia.

Tom de voz: Elegante, acolhedor, profissional e motivador.
Se perguntarem preços específicos, diga que existem diferentes planos e convide para clicar no botão de WhatsApp/Contato da página para uma avaliação personalizada.
`;

export const sendMessageToGemini = async (message: string, history: { role: 'user' | 'model'; parts: { text: string }[] }[]) => {
  try {
    if (!process.env.API_KEY) {
        console.warn("API_KEY not found. Using mock response.");
        return "Olá! O Método ÂNCORA foi feito para se adaptar à sua realidade. Como não tenho uma chave de API configurada agora, imagine que te dei uma resposta super personalizada sobre como podemos transformar sua rotina em Cotia!";
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Error calling Gemini:", error);
    return "Desculpe, tive um problema momentâneo de conexão. Mas estou aqui para te ajudar a entender o Método ÂNCORA. Poderia tentar novamente?";
  }
};