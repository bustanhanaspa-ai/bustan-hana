import { useTranslation } from 'react-i18next';

const VideoSection = () => {
  const { t } = useTranslation();
  
  const videos = [
    {
      id: "1xUTRec0qXw",
      title: "Experience Our Services",
    },
    {
      id: "EA9TI7ZhfGM",
      title: "Behind the Scenes",
    },
    {
      id: "QbAi_Su-ZSw",
      title: "Customer Testimonials",
    },
  ];

  return (
    <section id="videos" className="py-20 px-4 bg-background relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
            {t('videos.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('videos.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="scroll-fade-in aspect-video rounded-lg overflow-hidden shadow-elegant border border-border/50 hover:shadow-glow transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.id}?si=${video.id === "1xUTRec0qXw" ? "_RA91odJHECGZhKw" : video.id === "EA9TI7ZhfGM" ? "ChAaaegsvy3ANAHt" : "BFzVgvKjuX_fHEZ3"}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
