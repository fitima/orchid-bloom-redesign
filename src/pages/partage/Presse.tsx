import { SectionTitle } from "@/components/ui/SectionTitle";
import { Newspaper, Calendar, ExternalLink } from "lucide-react";

const articles = [
  {
    title: "Les Orchidées Blanches célèbrent 50 ans d'engagement",
    source: "L'Express de Madagascar",
    date: "2022",
    excerpt: "Retour sur un demi-siècle de dévouement pour les personnes en situation de handicap à Madagascar.",
  },
  {
    title: "Journée Mondiale de la Trisomie 21 : Un événement fédérateur",
    source: "Midi Madagasikara",
    date: "Mars 2024",
    excerpt: "Les Orchidées Blanches ont organisé une journée de sensibilisation en partenariat avec plusieurs institutions.",
  },
  {
    title: "Visite officielle de l'Ambassadeur de France",
    source: "Tribune de Madagascar",
    date: "2025",
    excerpt: "L'Ambassadeur de France a rendu hommage au travail exemplaire réalisé par l'ONG depuis plus de 50 ans.",
  },
  {
    title: "L'inclusion des personnes handicapées : un défi national",
    source: "Madagascar Tribune",
    date: "2023",
    excerpt: "Interview avec les responsables de l'ONG sur les avancées et les défis de l'inclusion à Madagascar.",
  },
  {
    title: "Le CME d'Androhibe : un modèle d'accompagnement",
    source: "Gazetiko",
    date: "2023",
    excerpt: "Reportage au cœur du premier Centre Médico-Éducatif de Madagascar.",
  },
];

export default function Presse() {
  return (
    <section className="section-padding">
      <div className="container-page">
        <SectionTitle
          title="Revue de Presse"
          subtitle="Les Orchidées Blanches dans les médias : articles, reportages et mentions."
        />
        
        <div className="max-w-4xl mx-auto space-y-6">
          {articles.map((article, index) => (
            <article key={index} className="card-orchid p-6 md:p-8 group hover:border-primary/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <Newspaper className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <span className="font-medium text-primary">{article.source}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground">{article.excerpt}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Info */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <p className="text-muted-foreground">
            Pour toute demande de presse ou interview, veuillez nous contacter à{" "}
            <a href="mailto:orchideesblanches@moov.mg" className="text-primary hover:underline">
              orchideesblanches@moov.mg
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
