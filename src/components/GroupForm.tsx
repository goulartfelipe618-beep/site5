import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const GroupForm = () => {
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "✦ Demande de Groupe", description: "Nossa equipe entrará em contato para compor seu evento." });
    setStep(1);
  };

  const labelClass = "text-[11px] uppercase tracking-[0.12em] text-muted-foreground mb-1.5 block font-medium";

  return (
    <div className="vintage-card p-8 md:p-12">
      <div className="text-center mb-8">
        <div className="deco-line mb-3"><span className="text-accent text-sm">✦</span></div>
        <p className="text-lg text-foreground italic" style={{ fontFamily: 'Cormorant Garamond' }}>Carte de Groupe</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {step === 1 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Tipo de Veículo</label>
                <select className="vintage-input">
                  <option value="">Selecione...</option>
                  <option value="van">Van de Luxo</option>
                  <option value="micro">Micro-ônibus Clássico</option>
                  <option value="onibus">Grand Ônibus</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Nº de Convidados</label>
                <input type="number" min={1} placeholder="Quantos?" required className="vintage-input" />
              </div>
            </div>
            <div>
              <label className={labelClass}>Local de Embarque</label>
              <input placeholder="Onde encontraremos seu grupo..." required className="vintage-input" />
            </div>
            <div>
              <label className={labelClass}>Destino</label>
              <input placeholder="Para onde seguirão..." required className="vintage-input" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Data/Hora de Ida</label>
                <input type="datetime-local" required className="vintage-input" />
              </div>
              <div>
                <label className={labelClass}>Data/Hora de Retorno</label>
                <input type="datetime-local" className="vintage-input" />
              </div>
            </div>
            <div>
              <label className={labelClass}>Detalhes da Ocasião</label>
              <textarea placeholder="Descreva o evento, desejos especiais..." rows={3} className="vintage-input resize-none" />
            </div>
            <div>
              <label className={labelClass}>Cupom de Cortesia</label>
              <input placeholder="Código" className="vintage-input" />
            </div>
            <div className="deco-line my-6"><span className="text-accent text-xs">◆</span></div>
            <button type="button" onClick={() => setStep(2)} className="vintage-btn w-full">Próximo — Seus Dados</button>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Nome Completo</label>
                <input placeholder="Seu nome" required className="vintage-input" />
              </div>
              <div>
                <label className={labelClass}>E-mail</label>
                <input type="email" placeholder="seu@email.com" required className="vintage-input" />
              </div>
              <div>
                <label className={labelClass}>WhatsApp</label>
                <input placeholder="(00) 00000-0000" required className="vintage-input" />
              </div>
              <div>
                <label className={labelClass}>Como nos encontrou?</label>
                <select className="vintage-input">
                  <option value="">Selecione...</option>
                  <option value="indicacao">Indicação</option>
                  <option value="google">Google</option>
                  <option value="instagram">Instagram</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </div>
            <div className="deco-line my-6"><span className="text-accent text-xs">◆</span></div>
            <div className="flex gap-4">
              <button type="button" onClick={() => setStep(1)} className="vintage-btn-outline flex-1">Retornar</button>
              <button type="submit" className="vintage-btn flex-1">Solicitar para Grupo</button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};
