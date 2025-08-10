import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag, Star, Eye } from "lucide-react";
import tshirtImage from "@/assets/product-tshirt.jpg";
import hoodieImage from "@/assets/product-hoodie.jpg";
import accessoriesImage from "@/assets/product-accessories.jpg";

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState("new");

  const products = {
    new: [
      {
        id: 1,
        name: "T-Shirt Design Moderno",
        price: "€29.99",
        originalPrice: null,
        image: tshirtImage,
        badge: "Nuovo",
        badgeColor: "bg-primary",
        rating: 4.8,
        reviews: 127,
        customizable: true,
      },
      {
        id: 2,
        name: "Felpa Urban Style",
        price: "€49.99",
        originalPrice: null,
        image: hoodieImage,
        badge: "Trending",
        badgeColor: "bg-secondary",
        rating: 4.9,
        reviews: 89,
        customizable: true,
      },
      {
        id: 3,
        name: "Accessori Set Premium",
        price: "€34.99",
        originalPrice: "€44.99",
        image: accessoriesImage,
        badge: "-22%",
        badgeColor: "bg-destructive",
        rating: 4.7,
        reviews: 203,
        customizable: false,
      },
    ],
    popular: [
      {
        id: 4,
        name: "T-Shirt Classic Fit",
        price: "€24.99",
        originalPrice: null,
        image: tshirtImage,
        badge: "Bestseller",
        badgeColor: "bg-success",
        rating: 4.9,
        reviews: 456,
        customizable: true,
      },
      {
        id: 5,
        name: "Hoodie Premium Cotton",
        price: "€54.99",
        originalPrice: null,
        image: hoodieImage,
        badge: "Top Rated",
        badgeColor: "bg-premium",
        rating: 5.0,
        reviews: 312,
        customizable: true,
      },
      {
        id: 6,
        name: "Accessories Bundle",
        price: "€39.99",
        originalPrice: "€49.99",
        image: accessoriesImage,
        badge: "Offerta",
        badgeColor: "bg-warning",
        rating: 4.6,
        reviews: 178,
        customizable: false,
      },
    ],
  };

  const tabs = [
    { id: "new", label: "Nuovi Arrivi", count: products.new.length },
    { id: "popular", label: "Più Venduti", count: products.popular.length },
  ];

  const currentProducts = products[activeTab as keyof typeof products];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            I Nostri <span className="gradient-text">Prodotti</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Scopri le nostre ultime creazioni e i prodotti più amati dai clienti
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted rounded-full p-1 inline-flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-smooth ${
                  activeTab === tab.id
                    ? "bg-background shadow-sm text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
                <span className="ml-2 text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProducts.map((product, index) => (
            <div
              key={product.id}
              className="group product-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative aspect-square mb-6 overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badge */}
                <Badge className={`absolute top-3 left-3 ${product.badgeColor} text-white`}>
                  {product.badge}
                </Badge>

                {/* Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="icon" variant="secondary" className="h-8 w-8 hover-scale">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="h-8 w-8 hover-scale">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>

                {/* Quick Add Button */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary-hover">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Aggiungi al Carrello
                  </Button>
                </div>

                {/* Customizable Indicator */}
                {product.customizable && (
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Badge variant="secondary" className="bg-premium text-premium-foreground">
                      Personalizzabile
                    </Badge>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews} recensioni)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold text-foreground">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Add to Cart */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  {product.customizable ? "Personalizza" : "Aggiungi al Carrello"}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Vedi Tutti i Prodotti
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;