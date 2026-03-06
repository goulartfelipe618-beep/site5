import { useState } from "react";
import { toast } from "@/hooks/use-toast";

type TripType = "ida" | "ida-volta" | "hora";

export const TransferForm = () => {
  const [step, setStep] = useState(1);
  const [tripType, setTripType] = useState<TripType>("ida");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "✦ Réservation Enregistrée", description: "Entraremos em contato para confirmar seu trajeto." });
    setStep(1);
  };

  const labelClass = "text-[11px] uppercase tracking-[0.12em] text-muted-foreground mb-1.5 block font-medium";

  return (
    <div className="vintage-card p-8 md:p-12">
      {/* Ornamental header */}
      <div className="text-center mb-8">
        <div className="deco-line mb-3">
          <span className="text-accent text-sm">✦</span>
        </div>
        <p className="text-lg text-foreground italic" style={{ fontFamily: 'Cormorant Garamond' }}>
          Carte de Réservation
        </p>
      </div>

      {/* Trip type tabs */}
      <div className="flex gap-0 mb-8 border border-border">
        {([["ida", "Somente Ida"], ["ida-volta", "Ida e Volta"], ["hora", "Por Hora"]] as const).map(
          ([val, label]) => (
            <button
              key={val}
              type="button"
              onClick={() => setTripType(val)}
              className={`flex-1 py-3 text-xs tracking-[0.1em] uppercase transition-all duration-300 ${
                tripType === val
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:text-foreground"
              }`}
              style={{ fontFamily: 'Raleway' }}
            >
              {label}
            </button>
          )
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {step === 1 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className={labelClass}>Passageiros</label>
                <input type="number" min={1} placeholder="Nº" required className="vintage-input" />
              </div>
              <div>
                <label className={labelClass}>Data</label>
                <input type="date" required className="vintage-input" />
              </div>
              <div>
                <label className={labelClass}>Hora</label>
                <input type="time" required className="vintage-input" />
              </div>
            </div>

            {tripType === "hora" && (
              <div>
                <label className={labelClass}>Horas de Serviço</label>
                <input type="number" min={1} placeholder="Quantas horas?" required className="vintage-input" />
              </div>
            )}

            <div>
              <label className={labelClass}>Endereço de Embarque</label>
              <input placeholder="Onde o buscaremos..." required className="vintage-input" />
            </div>
            <div>
              <label className={labelClass}>Destino</label>
              <input placeholder="Para onde deseja ir..." required className="vintage-input" />
            </div>

            {tripType === "ida-volta" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Data de Retorno</label>
                  <input type="date" className="vintage-input" />
                </div>
                <div>
                  <label className={labelClass}>Hora de Retorno</label>
                  <input type="time" className="vintage-input" />
                </div>
              </div>
            )}

            <div>
              <label className={labelClass}>Observações</label>
              <textarea placeholder="Algum pedido especial?..." rows={2} className="vintage-input resize-none" />
            </div>
            <div>
              <label className={labelClass}>Cupom</label>
              <input placeholder="Código de cortesia" className="vintage-input" />
            </div>

            <div className="deco-line my-6">
              <span className="text-accent text-xs">◆</span>
            </div>

            <button type="button" onClick={() => setStep(2)} className="vintage-btn w-full">
              Próximo — Seus Dados
            </button>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Nome Completo</label>
                <input placeholder="Como gostaria de ser chamado" required className="vintage-input" />
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
                  <option value="indicacao">Indicação Pessoal</option>
                  <option value="google">Google</option>
                  <option value="instagram">Instagram</option>
                  <option value="concierge">Concierge de Hotel</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </div>

            <div className="deco-line my-6">
              <span className="text-accent text-xs">◆</span>
            </div>

            <div className="flex gap-4">
              <button type="button" onClick={() => setStep(1)} className="vintage-btn-outline flex-1">
                Retornar
              </button>
              <button type="submit" className="vintage-btn flex-1">
                Confirmar Reserva
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};
