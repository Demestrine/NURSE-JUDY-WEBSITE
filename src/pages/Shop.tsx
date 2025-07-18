import { useState } from 'react';
import { ShoppingCart, Star, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: "Nurse Judy T-Shirt",
      category: "apparel",
      price: 25,
      image: "/placeholder-tshirt.jpg",
      rating: 4.9,
      reviews: 156,
      description: "Comfortable cotton t-shirt with inspirational nursing quote",
      colors: ["White", "Navy", "Pink"],
      sizes: ["S", "M", "L", "XL"],
      bestseller: true
    },
    {
      id: 2,
      name: "NCLEX Study Planner",
      category: "study",
      price: 15,
      image: "/placeholder-planner.jpg",
      rating: 5.0,
      reviews: 89,
      description: "Digital planner to organize your NCLEX study schedule",
      format: "PDF Download",
      popular: true
    },
    {
      id: 3,
      name: "Nurse Judy Hoodie",
      category: "apparel",
      price: 45,
      image: "/placeholder-hoodie.jpg",
      rating: 4.8,
      reviews: 203,
      description: "Warm, cozy hoodie perfect for long study sessions",
      colors: ["Grey", "Navy", "Black"],
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 4,
      name: "International Nursing Guide",
      category: "study",
      price: 35,
      image: "/placeholder-guide.jpg",
      rating: 4.9,
      reviews: 124,
      description: "Complete guide to working as a nurse abroad",
      pages: "150+ pages",
      format: "PDF + Bonus Videos"
    },
    {
      id: 5,
      name: "Nurse Judy Water Bottle",
      category: "accessories",
      price: 20,
      image: "/placeholder-bottle.jpg",
      rating: 4.7,
      reviews: 78,
      description: "Stainless steel water bottle with motivational quote",
      capacity: "750ml",
      colors: ["Teal", "Pink", "White"]
    },
    {
      id: 6,
      name: "Study Flashcards Set",
      category: "study",
      price: 12,
      image: "/placeholder-cards.jpg",
      rating: 4.8,
      reviews: 167,
      description: "Essential nursing concepts flashcards for quick review",
      cards: "200 cards",
      format: "Physical + Digital"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'apparel', name: 'Apparel' },
    { id: 'study', name: 'Study Materials' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
            Nurse Judy <span className="text-gradient">Shop</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empower your nursing journey with our carefully curated study materials and inspirational merchandise
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input className="pl-10" placeholder="Search products..." />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "btn-primary" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="card-elegant group">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-xl">
                  <div className="w-full h-48 bg-gradient-card"></div>
                  {product.bestseller && (
                    <Badge className="absolute top-3 left-3 bg-secondary-vibrant text-white">
                      Bestseller
                    </Badge>
                  )}
                  {product.popular && (
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                      Popular
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <span className="font-bold text-xl text-primary">${product.price}</span>
                </div>
                
                <p className="text-muted-foreground text-sm">{product.description}</p>
                
                {/* Product Details */}
                <div className="space-y-2 text-xs text-muted-foreground">
                  {product.colors && (
                    <div>Colors: {product.colors.join(", ")}</div>
                  )}
                  {product.sizes && (
                    <div>Sizes: {product.sizes.join(", ")}</div>
                  )}
                  {product.format && (
                    <div>Format: {product.format}</div>
                  )}
                  {product.pages && (
                    <div>{product.pages}</div>
                  )}
                  {product.capacity && (
                    <div>Capacity: {product.capacity}</div>
                  )}
                  {product.cards && (
                    <div>{product.cards}</div>
                  )}
                </div>
                
                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                
                <Button className="btn-primary w-full">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="card-elegant text-center p-6">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 gradient-hero rounded-full flex items-center justify-center text-white mx-auto">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg">Free Shipping</h3>
              <p className="text-muted-foreground text-sm">
                Free shipping on all orders over $50 within Kenya
              </p>
            </CardContent>
          </Card>

          <Card className="card-elegant text-center p-6">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground mx-auto">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg">Quality Guaranteed</h3>
              <p className="text-muted-foreground text-sm">
                High-quality materials and content, satisfaction guaranteed
              </p>
            </CardContent>
          </Card>

          <Card className="card-elegant text-center p-6">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground mx-auto">
                <Filter className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg">Instant Downloads</h3>
              <p className="text-muted-foreground text-sm">
                Digital products available for immediate download
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card className="card-elegant p-8 gradient-card">
            <CardContent className="space-y-6">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground">
                Need Something Custom?
              </h2>
              <p className="text-lg text-muted-foreground">
                Looking for personalized study materials or bulk orders? Let's create something special for you.
              </p>
              <Button className="btn-primary" size="lg">
                Contact for Custom Orders
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Shop;