import { SectionTitle } from "@/components/ui/SectionTitle";
import { CheckCircle, Users, Heart, BookOpen, Shield, Sparkles } from "lucide-react";

const conseils = [
  {
    icon: Heart,
    title: "Accepter ses émotions",
    content: "Il est normal de ressentir de la tristesse, de la colère ou de l'anxiété. Ces émotions font partie du processus d'adaptation. Ne les refoulez pas.",
  },
  {
    icon: Users,
    title: "Ne pas rester isolé",
    content: "Rejoignez des groupes de soutien, partagez avec d'autres familles. L'échange d'expériences est une source précieuse de réconfort et de conseils pratiques.",
  },
  {
    icon: BookOpen,
    title: "S'informer",
    content: "Renseignez-vous sur le handicap de votre enfant. Comprendre permet de mieux accompagner et de prendre les bonnes décisions.",
  },
  {
    icon: Shield,
    title: "Prendre soin de soi",
    content: "Vous ne pouvez pas aider efficacement si vous êtes épuisé. Accordez-vous du temps, acceptez l'aide extérieure quand elle se présente.",
  },
  {
    icon: Sparkles,
    title: "Célébrer les petites victoires",
    content: "Chaque progrès, aussi petit soit-il, mérite d'être célébré. Ces moments de joie sont le carburant de votre parcours.",
  },
  {
    icon: Users,
    title: "Collaborer avec les professionnels",
    content: "Une bonne relation avec l'équipe éducative et médicale est essentielle. N'hésitez pas à poser des questions et à partager vos observations.",
  },
];

export default function Conseils() {
  return (
    <section className="section-padding">
      <div className="container-page">
        <SectionTitle
          title="Conseils Pratiques"
          subtitle="Des recommandations pour accompagner au mieux votre enfant et prendre soin de vous."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {conseils.map((conseil) => (
            <div key={conseil.title} className="card-orchid p-6">
              <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <conseil.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {conseil.title}
              </h3>
              <p className="text-muted-foreground">{conseil.content}</p>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="max-w-3xl mx-auto">
          <div className="card-orchid p-8 bg-gradient-soft">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
              Ressources Complémentaires
            </h3>
            <ul className="space-y-4">
              {[
                "Contactez le CME pour un accompagnement personnalisé",
                "Participez aux réunions de familles organisées régulièrement",
                "Consultez notre bibliothèque de ressources au centre",
                "Rejoignez notre groupe de parents pour échanger",
              ].map((resource) => (
                <li key={resource} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{resource}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
