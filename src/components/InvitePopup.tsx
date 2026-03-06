import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export const InvitePopup = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/30 backdrop-blur-sm"
        onClick={() => setVisible(false)}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 2.7 }}
          className="vintage-card p-10 md:p-14 max-w-md mx-6 text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="deco-line mb-6">
            <span className="text-accent text-lg">✦</span>
          </div>
          <h3 className="text-2xl md:text-3xl text-foreground mb-3" style={{ fontFamily: 'Cormorant Garamond' }}>
            Bem-vindo ao<br />Maison Transfer
          </h3>
          <p className="text-sm text-muted-foreground italic leading-relaxed mb-6">
            Permita-nos transformar seu próximo trajeto em uma experiência inesquecível.
            Solicite seu transfer e viaje como nos anos dourados.
          </p>
          <button onClick={() => setVisible(false)} className="vintage-btn w-full">
            Descobrir
          </button>
          <button onClick={() => setVisible(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
            <X size={18} />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
