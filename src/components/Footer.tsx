import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-16">
    <div className="container mx-auto px-6">
      <div className="text-center mb-10">
        <div className="deco-line mb-4 [&::before]:bg-gradient-to-r [&::before]:from-transparent [&::before]:via-accent [&::before]:to-transparent [&::after]:bg-gradient-to-r [&::after]:from-transparent [&::after]:via-accent [&::after]:to-transparent">
          <span className="text-accent">✦</span>
        </div>
        <p className="text-xl tracking-[0.2em]" style={{ fontFamily: 'Cormorant Garamond' }}>MAISON TRANSFER</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-primary-foreground/40 mb-3">Navegação</p>
          <div className="flex flex-col gap-2">
            {[
              { to: "/", label: "Transfer" },
              { to: "/grupos", label: "Galeria" },
              { to: "/sobre", label: "Maison" },
              { to: "/contato", label: "Contato" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-primary-foreground/40 mb-3">Atendimento</p>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
            <span>contato@maisontransfer.com.br</span>
            <span>(11) 99999-9999</span>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-primary-foreground/40 mb-3">Horário</p>
          <p className="text-sm text-primary-foreground/60 italic" style={{ fontFamily: 'Cormorant Garamond' }}>
            "Disponíveis a qualquer hora,<br />para que seu momento seja perfeito."
          </p>
        </div>
      </div>

      <div className="mt-12 pt-6 text-center">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-primary-foreground/15 to-transparent mb-6" />
        <p className="text-[10px] text-primary-foreground/30 tracking-widest uppercase">
          © {new Date().getFullYear()} Maison Transfer — L'art de Voyager
        </p>
      </div>
    </div>
  </footer>
);
