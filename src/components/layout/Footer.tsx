import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-xl font-bold">OB</span>
              </div>
              <div>
                <p className="font-serif text-xl font-semibold">Les Orchidées Blanches</p>
                <p className="text-sm text-background/70">ONG & Centre Médico-Éducatif</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed mb-6 max-w-md">
              Depuis 1972, nous œuvrons pour l'inclusion, la participation et la citoyenneté 
              des personnes en situation de handicap à Madagascar. Pour une vie digne et épanouie.
            </p>
            <p className="text-sm text-background/60 italic">
              « Inclusion, Participation, Citoyenneté »
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Navigation</h3>
            <nav className="flex flex-col gap-3">
              {[
                { name: "Accueil", href: "/" },
                { name: "ONG", href: "/ong" },
                { name: "CME", href: "/cme" },
                { name: "Partage", href: "/partage" },
                { name: "Album", href: "/album" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <a
                href="https://maps.google.com/?q=Androhibe+Antananarivo+Madagascar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-background/70 hover:text-primary transition-colors"
              >
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span>2 M 46 bis Androhibe<br />Antananarivo, Madagascar</span>
              </a>
              <a
                href="tel:+261207642623"
                className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 shrink-0" />
                <span>+261 20 76 426 23</span>
              </a>
              <a
                href="mailto:orchideesblanches@moov.mg"
                className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 shrink-0" />
                <span>orchideesblanches@moov.mg</span>
              </a>
              <a
                href="https://lesorchideesblanches.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
              >
                <Globe className="w-5 h-5 shrink-0" />
                <span>lesorchideesblanches.org</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Les Orchidées Blanches. Tous droits réservés.
          </p>
          <p className="text-background/60 text-sm flex items-center gap-1">
            Fait avec <Heart className="w-4 h-4 text-primary fill-primary" /> à Madagascar
          </p>
        </div>
      </div>
    </footer>
  );
}
