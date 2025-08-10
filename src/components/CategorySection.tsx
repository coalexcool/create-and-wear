import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import tshirtImage from "@/assets/product-tshirt.jpg";
import hoodieImage from "@/assets/product-hoodie.jpg";
import accessoriesImage from "@/assets/product-accessories.jpg";

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: "T-Shirt Personalizzate",
      description: "Comfort e stile per ogni occasione",
      image: tshirtImage,
      link: "#tshirts",
      color: "from-primary to-primary-light",
    },
    {
      id: 2,
      name: "Felpe Premium",
      description: "Calore e design in un unico capo",
      image: hoodieImage,
      link: "#hoodies",
      color: "from-secondary to-secondary-light",
    },
    {
      id: 3,
      name: "Accessori Unici",
      description: "Completa il tuo look con stile",
      image: accessoriesImage,
      link: "#accessories",
      color: "from-premium to-purple-400",
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Esplora le Nostre <span className="gradient-text">Categorie</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Scopri la nostra ampia selezione di prodotti personalizzabili per esprimere il tuo stile unico
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-2xl shadow-card hover-lift transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-white/90 mb-4">{category.description}</p>
                  <Button
                    variant="outline"
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-md group"
                  >
                    Scopri di più
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`}></div>

              {/* Content */}
              <div className="p-6 bg-background group-hover:bg-background/95 transition-colors">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-4">
              Non Sai da Dove Iniziare?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Il nostro team di design è qui per aiutarti a creare il capo perfetto per te
            </p>
            <Button className="btn-hero">
              Inizia a Personalizzare
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;