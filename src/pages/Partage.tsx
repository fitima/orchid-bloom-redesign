import { Link, Outlet, useLocation } from "react-router-dom";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MessageCircle, Lightbulb, Brain, BookOpen, Newspaper, ArrowRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  {
    icon: MessageCircle,
    title: "Témoignages",
    description: "Récits et expériences vécues par les familles, professionnels et bénévoles.",
    href: "/partage/temoignages",
  },
  {
    icon: Lightbulb,
    title: "Conseils",
    description: "Guides et recommandations pratiques pour les familles et les aidants.",
    href: "/partage/conseils",
  },
  {
    icon: Brain,
    title: "Réflexion",
    description: "Articles de fond sur l'acceptation du handicap et les défis familiaux.",
    href: "/partage/reflexion",
  },
  {
    icon: BookOpen,
    title: "Livre d'or",
    description: "Messages de soutien et témoignages de gratitude de la communauté.",
    href: "/partage/livre-dor",
  },
  {
    icon: Newspaper,
    title: "Revue de presse",
    description: "Articles et mentions médiatiques sur l'association et ses activités.",
    href: "/partage/presse",
  },
];

export default function Partage() {
  const location = useLocation();
  const isIndex = location.pathname === "/partage";

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-secondary relative overflow-hidden">
        <div className="absolute inset-0 orchid-pattern opacity-20" />
        <div className="container-page relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 rounded-full text-primary-foreground/90 text-sm font-medium mb-6">
              Section Communautaire
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Partage
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed italic">
              « Une volonté partagée, un enrichissement mutuel »
            </p>
          </div>
        </div>
      </section>

      {isIndex ? (
        <>
          {/* Quote */}
          <section className="section-padding bg-gradient-soft">
            <div className="container-page">
              <div className="max-w-3xl mx-auto text-center">
                <Quote className="w-12 h-12 mx-auto mb-6 text-primary/30" />
                <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed italic">
                  Cette section regroupe l'ensemble des contenus participatifs et communautaires du site, 
                  permettant aux visiteurs, familles, professionnels et bénévoles de partager leurs expériences, 
                  conseils et réflexions.
                </p>
              </div>
            </div>
          </section>

          {/* Sections Grid */}
          <section className="section-padding">
            <div className="container-page">
              <SectionTitle
                title="Explorez nos rubriques"
                subtitle="Des ressources précieuses pour accompagner et comprendre le quotidien avec le handicap."
              />
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sections.map((section) => (
                  <Link
                    key={section.title}
                    to={section.href}
                    className="card-orchid p-8 group"
                  >
                    <div className="w-14 h-14 mb-6 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary transition-colors">
                      <section.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {section.description}
                    </p>
                    <span className="inline-flex items-center text-primary font-medium">
                      Découvrir
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Poem */}
          <section className="section-padding bg-primary text-primary-foreground">
            <div className="container-page">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-serif text-3xl font-semibold mb-8">
                  Hommage aux Bâtisseurs
                </h2>
                <blockquote className="font-serif text-lg md:text-xl italic leading-relaxed space-y-4">
                  <p>
                    Ils étaient là, au tout début du rêve,<br />
                    Leurs mains tendues, leurs cœurs en fièvre,<br />
                    Portant, sans fléchir, le poids du destin,<br />
                    Pour qu'un éclat de lumière trace un chemin.
                  </p>
                  <p>
                    Dans le silence, ils ont sué sang et larmes,<br />
                    Leurs cœurs battant d'espoir comme une arme :<br />
                    Offrir à ceux que l'ombre engloutit parfois,<br />
                    Une place, une dignité, une voix.
                  </p>
                </blockquote>
                <p className="text-primary-foreground/70 mt-8">
                  — Extrait du poème hommage aux fondateurs
                </p>
              </div>
            </div>
          </section>
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
}
