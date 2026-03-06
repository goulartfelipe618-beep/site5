import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Sobre = () => {
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
              <em>La Maison</em>
            </h1>
            <p className="text-base text-muted-foreground italic max-w-md mx-auto" style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.1rem' }}>
              Conheça a história por trás de cada viagem perfeita.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="deco-line max-w-xs">
                <span className="text-accent text-xs">◆</span>
              </div>

              <h2 className="text-3xl text-foreground leading-tight" style={{ fontFamily: 'Cormorant Garamond' }}>
                <em>Mais de quinze anos transformando trajetos em experiências memoráveis</em>
              </h2>

              <p className="text-muted-foreground italic leading-relaxed" style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.05rem' }}>
                Fundada por um entusiasta da direção com mais de quinze anos de estrada,
                a Maison Transfer nasceu do desejo de transformar cada trajeto em uma
                experiência de conforto, elegância e pontualidade.
              </p>

              <p className="text-muted-foreground italic leading-relaxed" style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.05rem' }}>
                Como uma verdadeira maison de alta costura, cada detalhe é pensado:
                o aroma do veículo, a temperatura do ar, a playlist selecionada,
                os mimos artesanais. Nada é deixado ao acaso.
              </p>

              <p className="text-muted-foreground italic leading-relaxed" style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.05rem' }}>
                Nossa frota é composta por sedãs clássicos, SUVs imponentes e veículos
                para grupos — todos mantidos com o mesmo cuidado com que um restaurateur
                cuida de sua adega. Nossos chauffeurs são profissionais bilíngues,
                discretos e devotados à arte de servir.
              </p>

              <div className="deco-line max-w-xs">
                <span className="text-accent text-xs">◆</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-3 md:grid-cols-6 gap-6 mt-16 text-center"
            >
              {["Veículos\nClássicos", "Wi-Fi\na Bordo", "Pontualidade", "Segurança", "Chauffeur\nBilíngue", "Mimos\nArtesanais"].map((d, i) => (
                <div key={d}>
                  <span className="text-lg text-accent block mb-2">✦</span>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground whitespace-pre-line">{d}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
