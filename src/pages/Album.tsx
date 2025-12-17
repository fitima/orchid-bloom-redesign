import { SectionTitle } from "@/components/ui/SectionTitle";
import { Calendar, Users, Heart, Award, Building } from "lucide-react";

const events2025 = [
  {
    title: "Opération Brioches et Chocolats 2025",
    date: "2025",
    description: "Activité de collecte de fonds et de sensibilisation. Moment convivial de partage.",
    icon: Heart,
  },
  {
    title: "Vivre Ensemble 2025",
    date: "2025",
    description: "Manifestation annuelle mettant en avant l'inclusion et le vivre ensemble.",
    icon: Users,
  },
  {
    title: "Journée Mondiale de la Trisomie 21",
    date: "21 mars 2025",
    description: "#WorldDownSyndromeDay - Célébration internationale avec partenaires institutionnels.",
    icon: Award,
  },
  {
    title: "Visite de l'Ambassadeur de France",
    date: "2025",
    description: "Visite diplomatique pour renforcer les liens de coopération.",
    icon: Building,
  },
];

const events2024 = [
  {
    title: "Journée Internationale des Personnes en Situation de Handicap",
    date: "3 décembre 2024",
    description: "Célébration annuelle avec activités de sensibilisation et mobilisation.",
    icon: Award,
  },
  {
    title: "Colonie A Novembre 2024",
    date: "Novembre 2024",
    description: "Séjour de vacances et d'animation pour les enfants et adolescents.",
    icon: Users,
  },
  {
    title: "Déjeuner de la Solidarité 2024",
    date: "2024",
    description: "Repas convivial de collecte de fonds réunissant familles et sympathisants.",
    icon: Heart,
  },
  {
    title: "Vivre Ensemble 2024",
    date: "2024",
    description: "Manifestation annuelle phare pour une société plus inclusive.",
    icon: Users,
  },
];

const partners = [
  "Ministère de la Santé service SSM",
  "Institution de la vision de Madagascar",
  "SALFA Ambohibao",
  "Projet Bethesda",
  "Ambassade de France",
];

export default function Album() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-secondary relative overflow-hidden">
        <div className="absolute inset-0 orchid-pattern opacity-20" />
        <div className="container-page relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 rounded-full text-primary-foreground/90 text-sm font-medium mb-6">
              Galerie d'Événements
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Album
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Découvrez les moments forts de notre association à travers nos événements, 
              célébrations et rencontres avec nos partenaires.
            </p>
          </div>
        </div>
      </section>

      {/* Events 2025 */}
      <section className="section-padding">
        <div className="container-page">
          <SectionTitle
            title="Événements 2025"
            subtitle="Les temps forts de cette année, marqués par l'engagement et la solidarité."
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            {events2025.map((event) => (
              <div key={event.title} className="card-orchid p-6 md:p-8 group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <event.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <span className="inline-flex items-center text-sm text-primary font-medium mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {event.date}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events 2024 */}
      <section className="section-padding bg-gradient-soft">
        <div className="container-page">
          <SectionTitle
            title="Événements 2024"
            subtitle="Retour sur les moments marquants de l'année précédente."
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            {events2024.map((event) => (
              <div key={event.title} className="card-orchid p-6 md:p-8 group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <event.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <span className="inline-flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {event.date}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding">
        <div className="container-page">
          <SectionTitle
            title="Nos Partenaires Institutionnels"
            subtitle="Les organisations qui soutiennent notre mission au quotidien."
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {partners.map((partner) => (
              <div
                key={partner}
                className="card-orchid p-6 text-center hover:border-primary/30"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
