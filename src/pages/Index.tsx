import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TransferForm } from "@/components/TransferForm";
import { motion } from "framer-motion";
import decoSedan from "@/assets/deco-sedan.jpg";
import decoInterior from "@/assets/deco-interior.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={decoSedan} alt="Sedã clássico de luxo" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 deco-pattern" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative container mx-auto px-6 py-32"
        >
          <div className="max-w-xl">
            <div className="deco-line mb-8 max-w-xs">
              <span className="text-accent">✦</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.15] mb-6 text-foreground" style={{ fontFamily: 'Cormorant Garamond' }}>
              <em>L'Art de Voyager</em><br />
              com Elegância
            </h1>
            <p className="text-base text-muted-foreground italic leading-relaxed mb-8 max-w-md" style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.1rem' }}>
              Cada trajeto é uma jornada. Cada detalhe, uma obra de arte.
              Permita-nos compor a sua próxima viagem.
            </p>
            <a href="#reserva" className="vintage-btn inline-block">
              Solicitar Transfer
            </a>
          </div>
        </motion.div>
      </section>

      {/* Framed gallery */}
      <section className="py-24 deco-pattern">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="deco-line mx-auto max-w-xs mb-4">
              <span className="text-accent text-sm">✦</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-foreground" style={{ fontFamily: 'Cormorant Garamond' }}>
              <em>Notre Flotte</em>
            </h2>
            <p className="text-sm text-muted-foreground italic mt-2" style={{ fontFamily: 'Cormorant Garamond' }}>
              Veículos que contam histórias de conforto e sofisticação
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="deco-frame">
                <img src={decoSedan} alt="Sedã clássico" className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="text-center mt-4">
                <p className="text-lg text-foreground" style={{ fontFamily: 'Cormorant Garamond' }}>
                  <em>Le Sedan</em>
                </p>
                <p className="text-xs text-muted-foreground tracking-wider mt-1">Elegância em cada curva</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="deco-frame">
                <img src={decoInterior} alt="Interior de luxo" className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="text-center mt-4">
                <p className="text-lg text-foreground" style={{ fontFamily: 'Cormorant Garamond' }}>
                  <em>L'Intérieur</em>
                </p>
                <p className="text-xs text-muted-foreground tracking-wider mt-1">Onde o conforto se torna arte</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { symbol: "◈", title: "Veículos\nClássicos" },
                { symbol: "◎", title: "Wi-Fi\na Bordo" },
                { symbol: "◇", title: "Pontualidade\nAbsoluta" },
                { symbol: "✦", title: "Motorista\nBilíngue" },
              ].map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="text-2xl text-accent block mb-3">{f.symbol}</span>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider whitespace-pre-line leading-relaxed">{f.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="reserva" className="py-24 deco-pattern">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="deco-line mx-auto max-w-xs mb-4">
                <span className="text-accent text-sm">✦</span>
              </div>
              <h2 className="text-3xl md:text-4xl text-foreground" style={{ fontFamily: 'Cormorant Garamond' }}>
                <em>Réservation</em>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <TransferForm />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
