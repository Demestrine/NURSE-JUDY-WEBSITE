import { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, Search, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "NCLEX-RN Study Plan: Your 8-Week Guide to Success",
      excerpt: "A comprehensive breakdown of how to prepare for the NCLEX-RN exam in 8 weeks, including study schedules, resources, and test-taking strategies.",
      category: "NCLEX",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "/placeholder-blog1.jpg",
      featured: true,
      tags: ["Study Tips", "NCLEX", "Preparation"]
    },
    {
      id: 2,
      title: "Top 5 Countries for Kenyan Nurses to Work Abroad",
      excerpt: "Discover the best destinations for Kenyan nurses looking to work internationally, including salary ranges, requirements, and quality of life.",
      category: "Career",
      date: "2024-01-10",
      readTime: "6 min read",
      image: "/placeholder-blog2.jpg",
      tags: ["Career", "International", "Opportunities"]
    },
    {
      id: 3,
      title: "Success Story: From Nairobi to New York - Sarah's Journey",
      excerpt: "Follow Sarah Wanjiku's incredible journey from working in Nairobi to landing her dream job at a prestigious hospital in New York City.",
      category: "Success Stories",
      date: "2024-01-05",
      readTime: "5 min read",
      image: "/placeholder-blog3.jpg",
      tags: ["Success Story", "Inspiration", "USA"]
    },
    {
      id: 4,
      title: "Visa Application Tips: Avoiding Common Mistakes",
      excerpt: "Learn about the most common visa application mistakes that can delay or derail your nursing abroad journey, and how to avoid them.",
      category: "Visa & Immigration",
      date: "2024-01-01",
      readTime: "7 min read",
      image: "/placeholder-blog4.jpg",
      tags: ["Visa", "Immigration", "Tips"]
    },
    {
      id: 5,
      title: "Building Your International Nursing Resume",
      excerpt: "Essential tips for creating a compelling resume that stands out to international healthcare employers and passes ATS systems.",
      category: "Career",
      date: "2023-12-28",
      readTime: "6 min read",
      image: "/placeholder-blog5.jpg",
      tags: ["Resume", "Career", "Job Search"]
    },
    {
      id: 6,
      title: "Cultural Adaptation: Thriving as a Nurse Abroad",
      excerpt: "Practical advice for adapting to new cultures, healthcare systems, and workplace environments when nursing in a foreign country.",
      category: "Lifestyle",
      date: "2023-12-20",
      readTime: "9 min read",
      image: "/placeholder-blog6.jpg",
      tags: ["Culture", "Adaptation", "Lifestyle"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'NCLEX', name: 'NCLEX' },
    { id: 'Career', name: 'Career' },
    { id: 'Success Stories', name: 'Success Stories' },
    { id: 'Visa & Immigration', name: 'Visa & Immigration' },
    { id: 'Lifestyle', name: 'Lifestyle' }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
            Nursing <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert insights, success stories, and practical advice for your international nursing journey
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input className="pl-10" placeholder="Search articles..." />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "btn-primary" : ""}
                size="sm"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'all' && (
          <Card className="card-elegant mb-16 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto bg-gradient-card"></div>
              <CardContent className="p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-secondary-vibrant text-white">Featured</Badge>
                <h2 className="font-playfair text-3xl font-bold text-foreground mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <Button className="btn-primary w-fit">
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </div>
          </Card>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(selectedCategory === 'all' ? regularPosts : filteredPosts).map((post) => (
            <Card key={post.id} className="card-elegant group">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-xl">
                  <div className="w-full h-48 bg-gradient-card"></div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6 space-y-4">
                <Badge variant="outline" className="text-xs">
                  {post.category}
                </Badge>
                
                <h3 className="font-semibold text-lg leading-tight line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full mt-4">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20">
          <Card className="card-elegant p-8 gradient-card text-center">
            <CardContent className="space-y-6">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground">
                Never Miss an Update
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get the latest nursing tips, success stories, and opportunities delivered straight to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Enter your email..." className="flex-1" />
                <Button className="btn-primary">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Join 2,000+ nurses who get weekly insights. Unsubscribe anytime.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Popular Tags */}
        <div className="mt-16">
          <h3 className="font-semibold text-lg mb-6 flex items-center">
            <Tag className="w-5 h-5 mr-2" />
            Popular Tags
          </h3>
          <div className="flex flex-wrap gap-3">
            {['NCLEX Tips', 'Career Advice', 'Success Stories', 'Study Guides', 'Visa Help', 'Interview Prep', 'International Nursing', 'Resume Tips'].map((tag) => (
              <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;