import { SectionTitle } from "@/components/ui/SectionTitle";
import { Quote, Heart } from "lucide-react";

const testimonials = [
  {
    content: "Grâce aux Orchidées Blanches, notre enfant a trouvé un lieu d'épanouissement. L'équipe est formidable et dévouée.",
    author: "Une maman",
    role: "Parent d'un enfant accompagné",
  },
  {
    content: "50 ans d'engagement, c'est 50 ans de vies transformées. Je suis fier d'avoir contribué à cette belle aventure humaine.",
    author: "Un bénévole",
    role: "Membre depuis 20 ans",
  },
  {
    content: "L'inclusion n'est pas un mot vide ici. C'est une réalité quotidienne que nous vivons avec joie et détermination.",
    author: "Une éducatrice",
    role: "Personnel du CME",
  },
];

export default function Temoignages() {
  return (
    <section className="section-padding">
      <div className="container-page">
        <SectionTitle
          title="Témoignages"
          subtitle="Des histoires vraies, des parcours inspirants, des voix qui portent l'espoir."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-orchid p-8">
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-foreground italic leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Poem Section */}
        <div className="max-w-3xl mx-auto">
          <div className="card-orchid p-8 md:p-12 bg-gradient-soft">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 text-center">
              Poème Hommage aux Fondateurs
            </h3>
            <div className="font-serif text-lg text-foreground/90 italic leading-loose space-y-6">
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
              <p>
                Chaque pierre posée racontait leur amour,<br />
                Chaque sourire échangé illuminait leurs jours.<br />
                Ces bâtisseurs de l'impossible ont osé rêver,<br />
                Pour que l'Orchidée Blanche puisse éclore et rayonner.
              </p>
            </div>
            <p className="text-center text-muted-foreground mt-8">
              Ce poème célèbre les bâtisseurs et fondateurs de l'association, leur courage et leur dévouement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
