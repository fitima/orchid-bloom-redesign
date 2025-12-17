import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Building, HandHeart, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { StatCard } from "@/components/ui/StatCard";

const values = [
  {
    icon: Heart,
    title: "Inclusion",
    description: "Vivre ensemble dans le respect et l'acceptation de la différence, partager l'amour et les joies.",
  },
  {
    icon: Users,
    title: "Participation",
    description: "Permettre à chacun de contribuer activement à la société selon ses capacités et ses talents.",
  },
  {
    icon: HandHeart,
    title: "Citoyenneté",
    description: "Reconnaître les droits et la dignité de chaque personne en situation de handicap.",
  },
];

const services = [
  {
    icon: Building,
    title: "ONG Les Orchidées Blanches",
    description: "Organisation pionnière depuis 1972 pour la défense des droits des personnes handicapées.",
    link: "/ong",
  },
  {
    icon: Users,
    title: "Centre Médico-Éducatif",
    description: "Accompagnement médico-psychologique et socio-éducatif personnalisé depuis 1974.",
    link: "/cme",
  },
  {
    icon: Calendar,
    title: "Événements & Activités",
    description: "Manifestations de sensibilisation, colonies, journées thématiques tout au long de l'année.",
    link: "/album",
  },
];

export default function Index() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary" />
        <div className="absolute inset-0 orchid-pattern opacity-30" />
        
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        
        <div className="container-page relative z-10 text-center py-32">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-up">
              <span className="inline-block px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground/90 text-sm font-medium mb-6">
                ONG & Centre Médico-Éducatif • Madagascar
              </span>
            </div>
            
            <h1 className="animate-fade-up animation-delay-100 font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Les Orchidées Blanches
            </h1>
            
            <p className="animate-fade-up animation-delay-200 text-xl md:text-2xl text-primary-foreground/90 font-serif italic mb-4">
              « Inclusion, Participation, Citoyenneté »
            </p>
            
            <p className="animate-fade-up animation-delay-300 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Pour une vie digne et épanouie des personnes en situation de handicap. 
              Depuis 1972, nous œuvrons pour le respect de la différence.
            </p>
            
            <div className="animate-fade-up animation-delay-400 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link to="/ong">
                  Découvrir notre mission
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-soft">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <StatCard number="52" label="Années d'existence" sublabel="Depuis 1972" />
            <StatCard number="50" label="Années du CME" sublabel="Depuis 1974" />
            <StatCard number="1er" label="CME à Madagascar" sublabel="Pionnier du domaine" />
            <StatCard number="∞" label="Vies transformées" sublabel="Et ça continue" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-page">
          <SectionTitle
            title="Nos Valeurs Fondatrices"
            subtitle="Des mots porteurs d'espoir qui guident notre action quotidienne pour un avenir meilleur."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="card-orchid p-8 text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 orchid-pattern opacity-10" />
        <div className="container-page relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-16 h-16 mx-auto mb-8 opacity-50" />
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl italic leading-relaxed mb-8">
              « Vivre au quotidien l'inclusion, ce n'est pas vivre côte à côte dans l'ignorance. 
              C'est surtout PARTAGER, donner et recevoir, partager l'amour, les joies et les peines. »
            </blockquote>
            <p className="text-primary-foreground/70">— Philosophie des Orchidées Blanches</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-page">
          <SectionTitle
            title="Nos Actions"
            subtitle="Un accompagnement global pour les personnes en situation de handicap et leurs familles."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={service.link}
                className="card-orchid p-8 group"
              >
                <div className="w-14 h-14 mb-6 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-primary font-medium">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-soft">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Rejoignez notre mission
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Que ce soit par un don, du bénévolat ou simplement en partageant notre message, 
              chaque geste compte pour construire une société plus inclusive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  <Heart className="mr-2 h-5 w-5" />
                  Nous soutenir
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/partage">Lire les témoignages</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
