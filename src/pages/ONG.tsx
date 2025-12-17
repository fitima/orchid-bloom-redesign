import { SectionTitle } from "@/components/ui/SectionTitle";
import { StatCard } from "@/components/ui/StatCard";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { Users, Target, Globe, Coins, TrendingUp, CheckCircle } from "lucide-react";

const timeline = [
  {
    date: "1972",
    title: "Création de l'Association",
    description: "L'Association « Les Orchidées Blanches » est née de l'initiative de quelques parents et professionnels afin de faire face aux nombreux problèmes posés par la déficience intellectuelle.",
  },
  {
    date: "29 avril 1972",
    title: "Agrément Officiel",
    description: "Agréée officiellement le 29 avril 1972, elle devient une référence dans le domaine du handicap à Madagascar.",
  },
  {
    date: "1974",
    title: "Premier CME",
    description: "Création du premier Centre spécialisé dans l'accompagnement Médico-Éducatif des personnes ayant une déficience intellectuelle à Madagascar.",
  },
  {
    date: "2009",
    title: "Reconnaissance ONG",
    description: "L'association est officiellement reconnue en tant qu'Organisation Non Gouvernementale.",
  },
  {
    date: "2022",
    title: "50 Ans d'Existence",
    description: "Jubilé de 50 années au service des personnes en situation de handicap, confirmant son statut de référence nationale.",
  },
];

const actions = [
  "Accompagnement médico-psychologique et socio-éducatif",
  "Soutien aux familles",
  "Sensibilisation et Information",
  "Échanges et partage avec d'autres organisations",
];

const ideals = [
  "Protéger les intérêts et les droits des personnes ayant une déficience intellectuelle",
  "Les accompagner pour une vie digne et épanouie",
  "Mobiliser la vie associative pour créer un réseau de solidarité",
  "Sensibiliser les décideurs et influencer les politiques publiques",
  "Informer la communauté sur les réalités du handicap intellectuel",
  "Promouvoir la solidarité et le respect de la différence",
];

const resources = [
  "Manifestations de levée de fonds",
  "Activités génératrices de ressources complémentaires",
  "Contribution des membres et des familles",
  "Sponsoring de sociétés",
  "Collaboration de l'État",
];

const perspectives = [
  "Poursuivre les actions de sensibilisation, d'information et de plaidoyer pour l'Inclusion",
  "Enrichir les activités et les services d'accompagnement",
  "Renforcer les compétences techniques du personnel",
  "Consolider les ressources financières pour la pérennité",
];

export default function ONG() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-secondary relative overflow-hidden">
        <div className="absolute inset-0 orchid-pattern opacity-20" />
        <div className="container-page relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 rounded-full text-primary-foreground/90 text-sm font-medium mb-6">
              Organisation Non Gouvernementale
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              L'ONG Les Orchidées Blanches
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Première organisation à Madagascar dédiée à la cause des personnes ayant une déficience intellectuelle. 
              Plus de 50 ans d'engagement au service de l'inclusion.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gradient-soft">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <StatCard number="52" label="Années d'existence" />
            <StatCard number="1ère" label="ONG du domaine" sublabel="à Madagascar" />
            <StatCard number="2009" label="Reconnaissance ONG" />
            <StatCard number="50+" label="Partenaires" sublabel="nationaux & internationaux" />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-page">
          <SectionTitle
            title="Notre Histoire"
            subtitle="Un demi-siècle d'engagement pour les droits et la dignité des personnes en situation de handicap."
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

      {/* Actions */}
      <section className="section-padding bg-gradient-soft">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Nos Actions"
                subtitle="Des interventions concrètes pour accompagner et défendre."
                centered={false}
              />
              <div className="space-y-4">
                {actions.map((action) => (
                  <div key={action} className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50">
                    <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground">{action}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="card-orchid p-8">
              <div className="w-14 h-14 mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                <Globe className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Affiliations et Réseau
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Membre de diverses <strong className="text-foreground">fédérations nationales, régionales et internationales</strong>, 
                l'ONG participe activement à toutes les actions en faveur des droits des personnes en situation de handicap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal */}
      <section className="section-padding">
        <div className="container-page">
          <SectionTitle
            title="Notre Idéal"
            subtitle="Les objectifs fondamentaux qui guident chacune de nos actions."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ideals.map((ideal, index) => (
              <div
                key={index}
                className="card-orchid p-6 flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Target className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground">{ideal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources & Perspectives */}
      <section className="section-padding bg-gradient-soft">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Resources */}
            <div className="card-orchid p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Coins className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  Ressources et Financement
                </h3>
              </div>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{resource}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Perspectives */}
            <div className="card-orchid p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  Perspectives d'Avenir
                </h3>
              </div>
              <ul className="space-y-3">
                {perspectives.map((perspective) => (
                  <li key={perspective} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{perspective}</span>
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
