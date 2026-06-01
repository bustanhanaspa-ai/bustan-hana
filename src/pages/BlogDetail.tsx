import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import SEO from '@/components/SEO';
import blogHammam from '@/assets/blog-hammam.jpg';
import blogSwedish from '@/assets/blog-swedish.jpg';
import blogAromatherapy from '@/assets/blog-aromatherapy.jpg';

const BlogDetail = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const blogImages: Record<string, string> = {
    'ancient-art-of-hammam': blogHammam,
    'swedish-massage-benefits': blogSwedish,
    'aromatherapy-essentials': blogAromatherapy,
  };

  const blogData = [
    { key: 'hammam', date: 'March 15, 2024', readTime: '5' },
    { key: 'swedish', date: 'March 10, 2024', readTime: '4' },
    { key: 'aromatherapy', date: 'March 5, 2024', readTime: '6' },
  ];

  const postKeys = ['hammam', 'swedish', 'aromatherapy'];
  const currentPostKey = postKeys.find(key => t(`blog.posts.${key}.slug`) === slug);

  if (!currentPostKey) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t('blog.title')} Not Found</h1>
          <Button onClick={() => navigate(`/${i18n.language}`)}>
            {t('nav.home')}
          </Button>
        </div>
      </div>
    );
  }

  const currentPost = blogData.find(post => post.key === currentPostKey)!;
  const postTitle = t(`blog.posts.${currentPostKey}.title`);
  const postImage = blogImages[slug || ''];

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = postTitle;
    
    const shareUrls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    };

    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  const relatedPosts = postKeys
    .filter(key => key !== currentPostKey)
    .slice(0, 2)
    .map(key => {
      const post = blogData.find(p => p.key === key)!;
      return {
        key,
        title: t(`blog.posts.${key}.title`),
        slug: t(`blog.posts.${key}.slug`),
        excerpt: t(`blog.posts.${key}.excerpt`),
        category: t(`blog.posts.${key}.category`),
        image: blogImages[t(`blog.posts.${key}.slug`)],
        date: post.date,
        readTime: post.readTime,
      };
    });

  return (
    <>
      <SEO 
        title={`${postTitle} - Bustan Hana Spa Blog`}
        description={t(`blog.posts.${currentPostKey}.excerpt`)}
        path={`/blog/${slug}`}
      />
      <Header />
      <FloatingWhatsApp />
      
      <main className="min-h-screen pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <img
            src={postImage}
            alt={postTitle}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-16">
            <Button
              variant="ghost"
              onClick={() => navigate(`/${i18n.language}#blog`)}
              className="mb-6 text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('blog.title')}
            </Button>
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold mb-4">
                {t(`blog.posts.${currentPostKey}.category`)}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {postTitle}
              </h1>
              <div className="flex items-center gap-6 text-white/90">
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {currentPost.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {currentPost.readTime} {t('blog.minRead')}
                </span>
                <span className="font-medium">
                  {t(`blog.posts.${currentPostKey}.author`)}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {t(`blog.posts.${currentPostKey}.content`)
              .split('\n\n')
              .map((paragraph: string, index: number) => (
                <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Share2 className="w-5 h-5" />
              {t('blog.shareArticle')}
            </h3>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare('facebook')}
                className="gap-2"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare('twitter')}
                className="gap-2"
              >
                <Twitter className="w-4 h-4" />
                Twitter
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare('linkedin')}
                className="gap-2"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">{t('blog.relatedPosts')}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedPosts.map((post) => (
              <Link
                key={post.key}
                to={`/${i18n.language}/blog/${post.slug}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                <Card className="overflow-hidden hover-lift">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
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
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BlogDetail;
