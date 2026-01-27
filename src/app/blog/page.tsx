import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Learn about Talaria electric bikes, e-bike insurance, riding tips, and industry news. Expert insights for the e-bike community.",
  openGraph: {
    title: "Blog | Talaria Insurance",
    description: "Learn about Talaria electric bikes, e-bike insurance, riding tips, and industry news.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero text-white py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Talaria Insurance Blog
            </h1>
            <p className="text-lg text-slate-200">
              Expert insights on e-bike insurance, Talaria models, riding tips, and industry news.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          {/* Categories */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white">
                All Posts
              </Badge>
              {categories.map((category) => (
                <Badge 
                  key={category} 
                  variant="outline" 
                  className="cursor-pointer hover:bg-primary hover:text-white hover:border-primary"
                >
                  {category}
                </Badge>
              ))}
            </div>
          )}

          {/* Posts Grid */}
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                  {post.image && (
                    <div className="aspect-video bg-slate-100 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                        <span className="text-sm">Featured Image</span>
                      </div>
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                    <CardTitle className="line-clamp-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readingTime}
                      </div>
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-primary font-medium hover:underline inline-flex items-center"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                We're working on great content about Talaria bikes and e-bike insurance. Check back soon for articles, guides, and industry insights.
              </p>
              <Button asChild>
                <Link href="/quote">Get a Quote While You Wait</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-6">
              Have questions about Talaria insurance? We're here to help.
            </p>
            <Button asChild>
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
