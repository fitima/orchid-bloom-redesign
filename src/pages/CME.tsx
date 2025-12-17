import { SectionTitle } from "@/components/ui/SectionTitle";
import { StatCard } from "@/components/ui/StatCard";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { Users, Brain, Heart, BookOpen, Target, Lightbulb, CheckCircle } from "lucide-react";

const timeline = [
  {
    date: "12 avril 1974",
    title: "Ouverture du Centre",
    description: "Le Centre Médico-Éducatif ouvre ses portes à Androhibe, devenant le premier établissement du genre à Madagascar.",
  },
  {
    date: "Années 80-90",
    title: "Développement des services",
    description: "Extension progressive des services d'accompagnement et diversification des approches pédagogiques.",
  },
  {
    date: "Années 2000",
    title: "Modernisation",
    description: "Adoption de nouvelles méthodes d'accompagnement et renforcement des équipes pluridisciplinaires.",
  },
  {
    date: "2024",
    title: "50 ans d'excellence",
    description: "Le CME célèbre un demi-siècle d'accompagnement personnalisé au service des personnes en situation de handicap.",
  },
];

const pathologies = [
  { name: "Malformation chromosomique", detail: "Dont trisomie 21" },
  { name: "Paralysie cérébrale", detail: "Troubles moteurs et neurologiques" },
  { name: "Troubles neurologiques", detail: "Diverses affections neurologiques" },
  { name: "Troubles du spectre de l'autisme", detail: "TSA et troubles apparentés" },
];

const axes = [
  {
    icon: BookOpen,
    title: "Axe Éducatif",
    description: "Développer les potentialités et inculquer les savoir-faire nécessaires dans la vie de tous les jours.",
  },
  {
    icon: Heart,
    title: "Axe Thérapeutique",
    description: "Atténuer la gravité des atteintes et troubles associés, prévenir l'apparition de troubles du comportement.",
  },
  {
    icon: Users,
    title: "Axe Socio-Familial",
    description: "Faciliter la participation et soutenir les familles dans leur rôle d'accompagnement.",
  },
];

const approaches = [
  "Respect des limites inhérentes à la déficience intellectuelle et des particularités de chacun",
  "Individualisation des programmes d'accompagnement selon les besoins spécifiques",
  "Diversification des formules d'accueil et des approches éducatives",
  "Ciblage de tous les domaines de développement (moteur, cognitif, social)",
  "Adoption d'apprentissages fonctionnels applicables à la vie quotidienne",
];

export default function CME() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-secondary relative overflow-hidden">
        <div className="absolute inset-0 orchid-pattern opacity-20" />
        <div className="container-page relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 rounded-full text-primary-foreground/90 text-sm font-medium mb-6">
              Centre Médico-Éducatif
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Le CME des Orchidées Blanches
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Premier Centre Médico-Éducatif de Madagascar, situé à Androhibe. 
              50 ans d'accompagnement personnalisé des enfants, adolescents et adultes en situation de handicap.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gradient-soft">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <StatCard number="50" label="Années d'existence" sublabel="Depuis 1974" />
            <StatCard number="1er" label="CME à Madagascar" />
            <StatCard number="3" label="Catégories d'âge" sublabel="Enfants • Ados • Adultes" />
            <StatCard number="6km" label="Du centre-ville" sublabel="Androhibe" />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-page">
          <SectionTitle
            title="Histoire du Centre"
            subtitle="Un demi-siècle d'accompagnement et d'innovation au service des personnes en situation de handicap."
          />
          
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <TimelineItem
                key={item.date}
                {...item}
                isLast={index === timeline.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Public & Pathologies */}
      <section className="section-padding bg-gradient-soft">
        <div className="container-page">
          <SectionTitle
            title="Public Cible"
            subtitle="Accompagnement adapté pour enfants, adolescents et adultes présentant diverses pathologies."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pathologies.map((pathology) => (
              <div key={pathology.name} className="card-orchid p-6">
                <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {pathology.name}
                </h3>
                <p className="text-sm text-muted-foreground">{pathology.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="section-padding">
        <div className="container-page">
          <SectionTitle
            title="Buts de l'Accompagnement"
            subtitle="Trois objectifs fondamentaux guident notre action éducative et thérapeutique."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <StatCard number="1" label="Autonomie" sublabel="Développer l'indépendance" className="bg-card" />
            <StatCard number="2" label="Connaissances pratiques" sublabel="Savoir-faire utiles" className="bg-card" />
            <StatCard number="3" label="Compétences sociales" sublabel="Intégration sociale" className="bg-card" />
          </div>
        </div>
      </section>

      {/* Axes */}
      <section className="section-padding bg-gradient-soft">
        <div className="container-page">
          <SectionTitle
            title="Axes d'Intervention"
            subtitle="Une approche globale et intégrée pour un accompagnement complet."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {axes.map((axe) => (
              <div key={axe.title} className="card-orchid p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <axe.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {axe.title}
                </h3>
                <p className="text-muted-foreground">{axe.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approaches */}
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              title="Approches Pédagogiques"
              subtitle="Des principes fondamentaux pour un accompagnement respectueux et efficace."
            />
            
            <div className="card-orchid p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  Principes Fondamentaux
                </h3>
              </div>
              
              <ul className="space-y-4">
                {approaches.map((approach) => (
                  <li key={approach} className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground">{approach}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
