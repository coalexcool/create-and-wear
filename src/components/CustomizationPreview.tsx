import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Palette, Upload, Type, Layers, RotateCcw, Download } from "lucide-react";
import tshirtImage from "@/assets/product-tshirt.jpg";

const CustomizationPreview = () => {
  const [selectedProduct, setSelectedProduct] = useState("tshirt");
  const [selectedColor, setSelectedColor] = useState("white");
  const [selectedSize, setSelectedSize] = useState("M");

  const products = [
    { id: "tshirt", name: "T-Shirt", price: "€29.99", image: tshirtImage },
    { id: "hoodie", name: "Felpa", price: "€49.99", image: tshirtImage },
    { id: "tank", name: "Canotta", price: "€24.99", image: tshirtImage },
  ];

  const colors = [
    { id: "white", name: "Bianco", value: "#FFFFFF", border: true },
    { id: "black", name: "Nero", value: "#000000" },
    { id: "navy", name: "Navy", value: "#1e40af" },
    { id: "red", name: "Rosso", value: "#dc2626" },
    { id: "green", name: "Verde", value: "#16a34a" },
    { id: "yellow", name: "Giallo", value: "#eab308" },
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const tools = [
    { id: "upload", icon: Upload, label: "Carica Logo", active: false },
    { id: "text", icon: Type, label: "Aggiungi Testo", active: true },
    { id: "graphics", icon: Palette, label: "Grafica", active: false },
    { id: "layers", icon: Layers, label: "Livelli", active: false },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-light/20 to-secondary-light/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-premium text-premium-foreground">
            Anteprima in Tempo Reale
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Configuratore</span> Interattivo
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visualizza e personalizza i tuoi prodotti in tempo reale con il nostro configuratore avanzato
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Preview Area */}
          <div className="relative">
            <div className="bg-background rounded-2xl p-8 shadow-elegant">
              {/* Product Preview */}
              <div className="relative aspect-square bg-muted/30 rounded-xl mb-6 overflow-hidden group">
                <img
                  src={products.find(p => p.id === selectedProduct)?.image}
                  alt="Product Preview"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: selectedColor === "black" ? "brightness(0.3)" : "none" }}
                />
                
                {/* Design Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg animate-pulse-glow">
                    <div className="text-2xl font-bold text-center text-primary">
                      IL TUO<br />DESIGN
                    </div>
                  </div>
                </div>

                {/* Live Preview Badge */}
                <Badge className="absolute top-4 right-4 bg-success text-success-foreground animate-pulse">
                  Live Preview
                </Badge>
              </div>

              {/* Product Info */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">
                  {products.find(p => p.id === selectedProduct)?.name} Personalizzata
                </h3>
                <p className="text-3xl font-bold text-primary mb-4">
                  {products.find(p => p.id === selectedProduct)?.price}
                </p>
                <div className="flex gap-2 justify-center">
                  <Badge variant="secondary">Tempi: 24-48h</Badge>
                  <Badge variant="secondary">Spedizione: 2-3 giorni</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Customization Panel */}
          <div className="space-y-8">
            {/* Product Selection */}
            <div className="bg-background rounded-2xl p-6 shadow-card">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-primary" />
                Scegli Prodotto
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {products.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedProduct(product.id)}
                    className={`p-3 rounded-lg border-2 transition-all hover-scale ${
                      selectedProduct === product.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="text-sm font-medium">{product.name}</div>
                    <div className="text-xs text-muted-foreground">{product.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="bg-background rounded-2xl p-6 shadow-card">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Palette className="w-5 h-5 text-primary" />
                Colore
              </h3>
              <div className="grid grid-cols-6 gap-3">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`w-12 h-12 rounded-full transition-all hover-scale ${
                      color.border ? "border-2 border-gray-300" : ""
                    } ${
                      selectedColor === color.id
                        ? "ring-4 ring-primary ring-offset-2"
                        : "hover:ring-2 hover:ring-primary/50 hover:ring-offset-1"
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="bg-background rounded-2xl p-6 shadow-card">
              <h3 className="text-xl font-semibold mb-4">Taglia</h3>
              <div className="grid grid-cols-6 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-3 rounded-lg border-2 transition-all hover-scale ${
                      selectedSize === size
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Design Tools */}
            <div className="bg-background rounded-2xl p-6 shadow-card">
              <h3 className="text-xl font-semibold mb-4">Strumenti Design</h3>
              <div className="grid grid-cols-2 gap-3">
                {tools.map((tool) => (
                  <button
                    key={tool.id}
                    className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all hover-scale ${
                      tool.active
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <tool.icon className="w-5 h-5" />
                    <span className="font-medium">{tool.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Button variant="outline" className="flex-1">
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
              <Button variant="outline" className="flex-1">
                <Download className="w-4 h-4 mr-2" />
                Salva Design
              </Button>
            </div>

            <Button className="w-full btn-hero">
              Aggiungi al Carrello - {products.find(p => p.id === selectedProduct)?.price}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizationPreview;