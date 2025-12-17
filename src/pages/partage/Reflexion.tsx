import { SectionTitle } from "@/components/ui/SectionTitle";
import { Quote, User } from "lucide-react";

export default function Reflexion() {
  return (
    <section className="section-padding">
      <div className="container-page">
        <SectionTitle
          title="Réflexion"
          subtitle="Articles de fond sur l'acceptation du handicap et les parcours familiaux."
        />
        
        {/* Main Article */}
        <div className="max-w-4xl mx-auto">
          <article className="card-orchid p-8 md:p-12 mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Sur l'acceptation de la déficience
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="lead text-xl text-foreground/80 italic mb-8">
                Accepter la déficience de l'enfant est une épreuve très difficile pour les parents 
                des enfants en situation de handicap. Faire le deuil de l'enfant rêvé, atterrir dans 
                un monde inconnu auquel on ne s'était absolument pas préparé...
              </p>
              
              <p>
                Cette acceptation n'est pas un événement ponctuel, mais un processus continu qui 
                évolue au fil du temps. Les parents traversent différentes étapes, chacune avec ses 
                défis et ses découvertes.
              </p>
              
              <h3 className="font-serif text-xl font-semibold text-foreground mt-8 mb-4">
                Les défis quotidiens
              </h3>
              
              <ul className="space-y-3">
                <li>Le deuil de l'enfant rêvé et l'acceptation de la réalité</li>
                <li>Les difficultés d'organisation et les dépenses liées au handicap</li>
                <li>La confrontation à des questionnements complexes</li>
                <li>La réalisation que la médecine peut être impuissante dans certains cas</li>
                <li>L'incertitude face aux lendemains</li>
              </ul>
              
              <p className="mt-8">
                Mais au-delà de ces défis, le parcours avec un enfant différent apporte aussi des 
                découvertes précieuses : une nouvelle vision de la vie, des liens renforcés, une 
                sensibilité accrue à la diversité humaine.
              </p>
            </div>
            
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Lisy Ratsifandrihamanana</p>
                <p className="text-sm text-muted-foreground">Psychologue Clinicienne</p>
              </div>
            </div>
          </article>

          {/* Bienvenue en Hollande */}
          <div className="card-orchid p-8 md:p-12 bg-gradient-soft">
            <Quote className="w-12 h-12 text-primary/30 mb-6" />
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
              « Bienvenue en Hollande »
            </h3>
            <p className="text-muted-foreground italic leading-relaxed mb-6">
              Ce texte célèbre compare l'expérience d'avoir un enfant handicapé à un voyage qui vous 
              emmène dans un pays différent de celui prévu. Vous aviez planifié d'aller en Italie, 
              mais vous atterrissez en Hollande. Ce n'est pas mieux ni pire, c'est simplement différent.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              La Hollande a ses propres beautés : les tulipes, les moulins à vent, les Rembrandt. 
              Mais tout le monde autour de vous parle d'Italie, de la beauté de l'Italie. Et vous 
              devez apprendre à apprécier la Hollande, à découvrir ses richesses uniques.
            </p>
            <p className="text-sm text-muted-foreground">
              — Texte d'Emily Perl Kingsley, adaptation française
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
