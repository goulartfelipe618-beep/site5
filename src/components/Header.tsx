import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/", label: "Transfer" },
    { to: "/grupos", label: "Galeria" },
    { to: "/sobre", label: "Maison" },
    { to: "/contato", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        {/* Top ornamental border */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="py-4 flex items-center justify-between">
          <Link to="/" className="text-center">
            <span className="text-xl text-foreground" style={{ fontFamily: 'Cormorant Garamond', fontWeight: 600, letterSpacing: '0.15em' }}>
              MAISON TRANSFER
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${
                  location.pathname === l.to
                    ? "text-accent font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block vintage-btn !py-2 !px-5 !text-sm"
          >
            Reservar
          </a>

          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-background border-t border-border"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm tracking-[0.1em] py-2 ${
                    location.pathname === l.to ? "text-accent font-medium" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="vintage-btn text-center !text-sm mt-2"
              >
                Reservar
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
