import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GroupForm } from "@/components/GroupForm";
import { motion } from "framer-motion";
import decoFleet from "@/assets/deco-fleet.jpg";
import decoSedan from "@/assets/deco-sedan.jpg";
import decoInterior from "@/assets/deco-interior.jpg";

const galleryItems = [
  {
    img: decoFleet,
    title: "La Grande Flotte",
    poem: "Uma procissão de elegância sobre rodas — cada veículo, um convite ao extraordinário.",
  },
  {
    img: decoSedan,
    title: "Le Voyage Intime",
    poem: "Para os que compreendem que a jornada é tão preciosa quanto o destino.",
  },
  {
    img: decoInterior,
    title: "L'Expérience Intérieure",
    poem: "Couro, madeira e luz dourada — uma cápsula de conforto que transcende o tempo.",
  },
];

const Grupos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 deco-pattern">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="deco-line mx-auto max-w-xs mb-6">
              <span className="text-accent">✦</span>
            </div>
            <h1 className="text-4xl md:text-5xl text-foreground mb-4" style={{ fontFamily: 'Cormorant Garamond' }}>
              <em>La Galerie</em>
            </h1>
            <p className="text-base text-muted-foreground italic max-w-md mx-auto" style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.1rem' }}>
              Uma curadoria de serviços para grupos que apreciam a arte de viajar juntos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery — art exhibition style */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-24">
            {galleryItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
                  i % 2 === 1 ? "md:[direction:rtl] [&>*]:md:[direction:ltr]" : ""
                }`}
              >
                <div className="deco-frame">
                  <img src={item.img} alt={item.title} className="w-full aspect-[4/3] object-cover" />
                </div>
                <div className={`${i % 2 === 1 ? "md:text-right" : ""}`}>
                  <p className="text-accent text-lg mb-2">✦</p>
                  <h3 className="text-2xl md:text-3xl text-foreground mb-4" style={{ fontFamily: 'Cormorant Garamond' }}>
                    <em>{item.title}</em>
                  </h3>
                  <p className="text-muted-foreground italic leading-relaxed" style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.05rem' }}>
                    "{item.poem}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 deco-pattern">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="deco-line mx-auto max-w-xs mb-4">
              <span className="text-accent text-sm">✦</span>
            </div>
            <h2 className="text-3xl text-foreground" style={{ fontFamily: 'Cormorant Garamond' }}>
              <em>Nos Services</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { symbol: "◈", title: "Casamentos", desc: "Transporte nupcial digno de um conto de fadas." },
              { symbol: "◎", title: "Eventos Corporativos", desc: "Logística impecável para convenções e gala." },
              { symbol: "◇", title: "Turismo de Luxo", desc: "Excursões sob medida com toque artesanal." },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="vintage-card p-8 text-center"
              >
                <span className="text-2xl text-accent block mb-4">{s.symbol}</span>
                <h3 className="text-lg text-foreground mb-2" style={{ fontFamily: 'Cormorant Garamond' }}>
                  <em>{s.title}</em>
                </h3>
                <p className="text-sm text-muted-foreground italic" style={{ fontFamily: 'Cormorant Garamond' }}>
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24">
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
              <h2 className="text-3xl text-foreground" style={{ fontFamily: 'Cormorant Garamond' }}>
                <em>Demande de Groupe</em>
              </h2>
            </motion.div>
            <GroupForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Grupos;
