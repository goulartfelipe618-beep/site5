import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Contato = () => {
  const info = [
    { label: "Correspondência", value: "contato@maisontransfer.com.br", href: "mailto:contato@maisontransfer.com.br" },
    { label: "Telefone", value: "(11) 99999-9999", href: "tel:+5511999999999" },
    { label: "WhatsApp", value: "(11) 99999-9999", href: "https://wa.me/5511999999999" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 md:pt-40 md:pb-28 deco-pattern">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="deco-line mx-auto max-w-xs mb-6">
              <span className="text-accent">✦</span>
            </div>
            <h1 className="text-4xl md:text-5xl text-foreground mb-4" style={{ fontFamily: 'Cormorant Garamond' }}>
              <em>Contactez-Nous</em>
            </h1>
            <p className="text-base text-muted-foreground italic max-w-md mx-auto" style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.1rem' }}>
              Estamos à sua disposição para compor a viagem perfeita.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-lg">
          <div className="vintage-card p-10 md:p-14">
            <div className="text-center mb-8">
              <div className="deco-line mx-auto max-w-[120px] mb-3">
                <span className="text-accent text-sm">✦</span>
              </div>
              <p className="text-lg text-foreground italic" style={{ fontFamily: 'Cormorant Garamond' }}>
                Carte de Contact
              </p>
            </div>

            <div className="space-y-6">
              {info.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="block text-center py-4 border-b border-border last:border-b-0 group"
                >
                  <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-foreground group-hover:text-accent transition-colors" style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.1rem' }}>
                    {item.value}
                  </p>
                </motion.a>
              ))}
            </div>

            <div className="deco-line mx-auto max-w-[120px] my-8">
              <span className="text-accent text-xs">◆</span>
            </div>

            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="vintage-btn block text-center w-full"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
