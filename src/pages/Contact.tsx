import { useState } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Globe, Clock, Send, Heart } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    content: "2 M 46 bis Androhibe",
    subcontent: "Antananarivo, Madagascar",
  },
  {
    icon: Phone,
    title: "Téléphone",
    content: "+261 20 76 426 23",
    subcontent: "Ligne principale",
  },
  {
    icon: Mail,
    title: "Email",
    content: "orchideesblanches@moov.mg",
    subcontent: "Réponse sous 48h",
  },
  {
    icon: Globe,
    title: "Site Web",
    content: "lesorchideesblanches.org",
    subcontent: "Site officiel",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-secondary relative overflow-hidden">
        <div className="absolute inset-0 orchid-pattern opacity-20" />
        <div className="container-page relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 rounded-full text-primary-foreground/90 text-sm font-medium mb-6">
              Prenez Contact
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Une question, une demande d'information ou simplement envie de nous soutenir ? 
              N'hésitez pas à nous contacter.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-gradient-soft">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <div key={info.title} className="card-orchid p-6 text-center group">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <info.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                <p className="text-primary font-medium">{info.content}</p>
                <p className="text-sm text-muted-foreground">{info.subcontent}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map */}
      <section className="section-padding">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <SectionTitle
                title="Envoyez-nous un message"
                subtitle="Remplissez le formulaire ci-dessous et nous vous répondrons rapidement."
                centered={false}
              />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet</Label>
                    <Input id="name" name="name" placeholder="Votre nom" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="votre@email.com" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input id="subject" name="subject" placeholder="Objet de votre message" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Votre message..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Envoyer le message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map & Info */}
            <div>
              <SectionTitle
                title="Venez nous rendre visite"
                subtitle="Nous sommes situés à Androhibe, à 6 km du centre-ville d'Antananarivo."
                centered={false}
              />
              
              {/* Map placeholder */}
              <div className="card-orchid overflow-hidden mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.7539762424397!2d47.5362!3d-18.9098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAndrohibe%2C%20Antananarivo!5e0!3m2!1sfr!2smg!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Les Orchidées Blanches"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              {/* Hours */}
              <div className="card-orchid p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    Horaires d'ouverture
                  </h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span className="font-medium text-foreground">8h00 - 16h00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Samedi</span>
                    <span className="font-medium text-foreground">Sur rendez-vous</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="text-muted-foreground">Fermé</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-page text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 opacity-50" />
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
            Soutenez notre mission
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Chaque contribution, qu'elle soit financière ou en temps de bénévolat, 
            aide à transformer des vies et à construire une société plus inclusive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Faire un don
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10">
              Devenir bénévole
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
