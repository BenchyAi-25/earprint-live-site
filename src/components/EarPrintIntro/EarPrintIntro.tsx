import React from 'react';

const EarPrintIntro = () => {
  const features = [
    {
      title: "Instant Personalization",
      description: "Our advanced Sound Quiz analyzes your unique hearing profile in minutes, creating your personalized EarPrint.",
      animation: "animate-slide-in-left"
    },
    {
      title: "Tailored Audio Experience",
      description: "Unlock sound quality you\'ve never heard before. EarPrint optimizes audio for your ears, revealing hidden details in music and sound.",
      animation: "animate-fade-in-up"
    },
    {
      title: "Discover & Connect",
      description: "Explore products matched to your EarPrint, take on audio challenges, and connect with a community of enthusiasts.",
      animation: "animate-slide-in-right"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-dark-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-light-text mb-4">
            What is <span className="text-brand-purple">EarPrint</span>?
          </h2>
          <p className="text-lg md:text-xl text-medium-text max-w-2xl mx-auto">
            EarPrint is a revolutionary technology that maps your unique hearing abilities to deliver a perfectly personalized audio experience. Say goodbye to generic sound.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-dark-bg p-6 md:p-8 rounded-xl shadow-2xl border border-gray-700/50 hover:border-brand-cyan transition-all duration-300 transform hover:-translate-y-1 ${feature.animation} opacity-0`}
              style={{ animationDelay: `${index * 0.2}s` }} // Stagger animation
            >
              <div className="flex justify-center md:justify-start mb-4">
                <div className="w-12 h-12 bg-brand-cyan/20 rounded-full flex items-center justify-center text-brand-cyan text-2xl font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-light-text mb-3 text-center md:text-left">{feature.title}</h3>
              <p className="text-medium-text text-center md:text-left">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EarPrintIntro;

