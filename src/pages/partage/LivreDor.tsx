import { SectionTitle } from "@/components/ui/SectionTitle";
import { Quote, Heart, Star } from "lucide-react";

const messages = [
  {
    content: "Merci infiniment pour tout ce que vous faites. Votre dévouement change des vies chaque jour.",
    author: "Marie L.",
    date: "2024",
  },
  {
    content: "Une visite qui m'a profondément touché. Continuez votre magnifique travail !",
    author: "Pierre D.",
    date: "2024",
  },
  {
    content: "50 ans d'amour et de dévouement. Vous êtes une lumière pour Madagascar.",
    author: "Famille R.",
    date: "2023",
  },
  {
    content: "Votre travail est un exemple pour tous. Que Dieu vous bénisse.",
    author: "Un visiteur",
    date: "2023",
  },
  {
    content: "Ému par la qualité de l'accueil et le professionnalisme de l'équipe.",
    author: "Dr. Jean A.",
    date: "2023",
  },
  {
    content: "Une association qui redonne espoir aux familles. Reconnaissance éternelle.",
    author: "Hélène M.",
    date: "2022",
  },
];

export default function LivreDor() {
  return (
    <section className="section-padding">
      <div className="container-page">
        <SectionTitle
          title="Livre d'Or"
          subtitle="Messages de soutien et témoignages de gratitude de notre communauté."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {messages.map((message, index) => (
            <div key={index} className="card-orchid p-6 group">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-primary/20 mb-3" />
              <p className="text-foreground italic leading-relaxed mb-4">
                "{message.content}"
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-foreground">{message.author}</span>
                <span className="text-muted-foreground">{message.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="card-orchid p-8 bg-gradient-soft">
            <Heart className="w-12 h-12 mx-auto text-primary mb-4" />
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Laissez votre message
            </h3>
            <p className="text-muted-foreground mb-6">
              Vous souhaitez partager votre témoignage ou un message de soutien ? 
              Contactez-nous par email et nous serons heureux de l'ajouter à notre livre d'or.
            </p>
            <a
              href="mailto:orchideesblanches@moov.mg?subject=Livre d'or"
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              Envoyer un message →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
