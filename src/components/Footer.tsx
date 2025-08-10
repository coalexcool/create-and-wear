import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Heart,
  CreditCard,
  Truck,
  Shield
} from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Prodotti",
      links: [
        { name: "T-Shirt", href: "#tshirts" },
        { name: "Felpe", href: "#hoodies" },
        { name: "Accessori", href: "#accessories" },
        { name: "Personalizzabili", href: "#custom" },
        { name: "Nuovi Arrivi", href: "#new" },
      ],
    },
    {
      title: "Servizi",
      links: [
        { name: "Come Funziona", href: "#how-it-works" },
        { name: "Guida Taglie", href: "#size-guide" },
        { name: "Personalizzazione", href: "#customization" },
        { name: "Assistenza Design", href: "#design-help" },
        { name: "Tempi di Consegna", href: "#delivery" },
      ],
    },
    {
      title: "Supporto",
      links: [
        { name: "FAQ", href: "#faq" },
        { name: "Contattaci", href: "#contact" },
        { name: "Reso e Rimborsi", href: "#returns" },
        { name: "Traccia Ordine", href: "#tracking" },
        { name: "Live Chat", href: "#chat" },
      ],
    },
    {
      title: "Azienda",
      links: [
        { name: "Chi Siamo", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Sostenibilità", href: "#sustainability" },
        { name: "Partnership", href: "#partners" },
        { name: "Blog", href: "#blog" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const features = [
    {
      icon: CreditCard,
      title: "Pagamenti Sicuri",
      description: "Tutti i metodi di pagamento"
    },
    {
      icon: Truck,
      title: "Spedizione Veloce",
      description: "24-48h produzione"
    },
    {
      icon: Shield,
      title: "Garanzia Qualità",
      description: "100% soddisfatti o rimborsati"
    }
  ];

  return (
    <footer className="bg-accent/30 border-t border-border">
      {/* Features Bar */}
      <div className="border-b border-border bg-background/50">
        <div className="container mx-auto px-4 py-6">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 text-center md:text-left">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold gradient-text mb-4">StyleCraft</h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              Creiamo abbigliamento personalizzato di alta qualità che riflette il tuo stile unico. 
              Design innovativi, materiali premium e attenzione ai dettagli.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@stylecraft.it</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>+39 02 1234 5678</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Milano, Italia</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="hover-scale"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-semibold mb-2">Resta Aggiornato</h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Ricevi le ultime novità, offerte esclusive e ispirazioni per i tuoi design
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="La tua email"
                className="rounded-full"
              />
              <Button className="rounded-full px-6">
                Iscriviti
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-background/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 StyleCraft. Tutti i diritti riservati.</span>
              <span className="hidden md:inline">|</span>
              <span className="flex items-center gap-1">
                Fatto con <Heart className="w-4 h-4 text-red-500 fill-current" /> in Italia
              </span>
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">
                Termini d'Uso
              </a>
              <a href="#cookies" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;