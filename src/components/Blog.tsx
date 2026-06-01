import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import blogHammam from '@/assets/blog-hammam.jpg';
import blogSwedish from '@/assets/blog-swedish.jpg';
import blogAromatherapy from '@/assets/blog-aromatherapy.jpg';

const Blog = () => {
  const { t, i18n } = useTranslation();
  
  const blogPosts = [
    {
      id: 1,
      key: 'hammam',
      image: blogHammam,
      date: "March 15, 2024",
      readTime: "5",
    },
    {
      id: 2,
      key: 'swedish',
      image: blogSwedish,
      date: "March 10, 2024",
      readTime: "4",
    },
    {
      id: 3,
      key: 'aromatherapy',
      image: blogAromatherapy,
      date: "March 5, 2024",
      readTime: "6",
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 bg-muted/30 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
            {t('blog.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => {
            const postSlug = t(`blog.posts.${post.key}.slug`);
            return (
              <Card
                key={post.id}
                className="scroll-fade-in group hover:shadow-elegant transition-all duration-300 overflow-hidden border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link to={`/${i18n.language}/blog/${postSlug}`}>
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={post.image}
                      alt={t(`blog.posts.${post.key}.title`)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                        {t(`blog.posts.${post.key}.category`)}
                      </span>
                    </div>
                  </div>
                </Link>

                <CardHeader>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime} {t('blog.minRead')}
                    </span>
                  </div>
                  <Link to={`/${i18n.language}/blog/${postSlug}`}>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {t(`blog.posts.${post.key}.title`)}
                    </h3>
                  </Link>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {t(`blog.posts.${post.key}.excerpt`)}
                  </p>
                  <Link to={`/${i18n.language}/blog/${postSlug}`}>
                    <Button variant="ghost" className="group/btn p-0 h-auto font-semibold">
                      {t('blog.readMore')}
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden max-w-sm mx-auto">
          <Carousel>
            <CarouselContent>
              {blogPosts.map((post) => {
                const postSlug = t(`blog.posts.${post.key}.slug`);
                return (
                  <CarouselItem key={post.id}>
                    <Card className="group hover:shadow-elegant transition-all duration-300 overflow-hidden border-border/50">
                      <Link to={`/${i18n.language}/blog/${postSlug}`}>
                        <div className="relative overflow-hidden aspect-video">
                          <img
                            src={post.image}
                            alt={t(`blog.posts.${post.key}.title`)}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                              {t(`blog.posts.${post.key}.category`)}
                            </span>
                          </div>
                        </div>
                      </Link>

                      <CardHeader>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime} {t('blog.minRead')}
                          </span>
                        </div>
                        <Link to={`/${i18n.language}/blog/${postSlug}`}>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {t(`blog.posts.${post.key}.title`)}
                          </h3>
                        </Link>
                      </CardHeader>

                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          {t(`blog.posts.${post.key}.excerpt`)}
                        </p>
                        <Link to={`/${i18n.language}/blog/${postSlug}`}>
                          <Button variant="ghost" className="group/btn p-0 h-auto font-semibold">
                            {t('blog.readMore')}
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Blog;
