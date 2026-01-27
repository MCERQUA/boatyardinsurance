import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { MDXContent } from "@/components/blog/MDXContent";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    openGraph: {
      title: `${post.title} | Surron Insurance Blog`,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return (
    <>
      {/* Article Header */}
      <section className="gradient-hero text-white py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-slate-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
            
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              {post.category}
            </Badge>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-slate-300">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readingTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-2">
              <div className="prose max-w-none">
                <MDXContent content={post.content} />
              </div>

              {/* Post Navigation */}
              <div className="mt-12 pt-8 border-t">
                <div className="grid sm:grid-cols-2 gap-4">
                  {prevPost && (
                    <Link 
                      href={`/blog/${prevPost.slug}`}
                      className="group p-4 border rounded-lg hover:border-primary transition-colors"
                    >
                      <span className="text-sm text-muted-foreground">Previous</span>
                      <p className="font-medium group-hover:text-primary transition-colors line-clamp-1">
                        {prevPost.title}
                      </p>
                    </Link>
                  )}
                  {nextPost && (
                    <Link 
                      href={`/blog/${nextPost.slug}`}
                      className="group p-4 border rounded-lg hover:border-primary transition-colors sm:text-right sm:ml-auto"
                    >
                      <span className="text-sm text-muted-foreground">Next</span>
                      <p className="font-medium group-hover:text-primary transition-colors line-clamp-1">
                        {nextPost.title}
                      </p>
                    </Link>
                  )}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA Card */}
              <Card className="bg-primary text-white sticky top-24">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Need Surron Insurance?</h3>
                  <p className="text-sm text-slate-200 mb-4">
                    Get a free quote for comprehensive coverage on your electric bike.
                  </p>
                  <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <Link href="/quote">
                      Get Your Free Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <a 
                      href={`tel:${siteConfig.company.phone}`}
                      className="flex items-center justify-center gap-2 text-sm hover:text-slate-200 transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      {siteConfig.company.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Related Categories */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-4">Browse by Category</h3>
                  <div className="flex flex-wrap gap-2">
                    <Link href="/blog">
                      <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white">
                        All Posts
                      </Badge>
                    </Link>
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
