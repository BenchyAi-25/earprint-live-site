import React from "react";

const ChallengesPreview = () => {
  const challenges = [
    {
      id: 1,
      title: "Rhythm Master Challenge",
      description: "Test your timing and rhythm by tapping along to complex beats. Can you keep up?",
      difficulty: "Intermediate",
      rewards: "Exclusive Badge, 100 EarPoints",
      icon: "🎧",
    },
    {
      id: 2,
      title: "Sonic Identifier Quest",
      description: "Identify subtle differences in soundscapes. A true test for the discerning ear.",
      difficulty: "Advanced",
      rewards: "Limited Edition Earbud Skin, 500 EarPoints",
      icon: "🔊",
    },
    {
      id: 3,
      title: "Melody Match-Up",
      description: "Match melodies to their corresponding artists or genres. How vast is your musical knowledge?",
      difficulty: "Beginner",
      rewards: "Starter Pack, 50 EarPoints",
      icon: "🎵",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-dark-surface text-light-text">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up opacity-0" style={{ animationFillMode: "forwards" }}>
          <h2 className="text-4xl md:text-5xl font-bold text-light-text mb-4">
            Audio <span className="text-brand-purple">Challenges</span> Await
          </h2>
          <p className="text-lg md:text-xl text-medium-text max-w-3xl mx-auto">
            Put your auditory skills to the test! Participate in our unique sound-based challenges to earn rewards, unlock achievements, and climb the leaderboards. New challenges added regularly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {challenges.map((challenge, index) => (
            <div
              key={challenge.id}
              className="bg-dark-bg p-6 rounded-xl shadow-2xl border border-gray-700/50 hover:border-brand-cyan transition-all duration-300 transform hover:scale-105 flex flex-col animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 0.2 + 0.5}s`, animationFillMode: "forwards" }}
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{challenge.icon}</span>
                <h3 className="text-2xl font-semibold text-light-text">{challenge.title}</h3>
              </div>
              <p className="text-medium-text text-sm mb-3 flex-grow">{challenge.description}</p>
              <div className="mb-3">
                <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${challenge.difficulty === "Beginner" ? "text-green-600 bg-green-200" : challenge.difficulty === "Intermediate" ? "text-yellow-600 bg-yellow-200" : "text-red-600 bg-red-200"}`}>
                  Difficulty: {challenge.difficulty}
                </span>
              </div>
              <p className="text-medium-text text-sm mb-4">Rewards: {challenge.rewards}</p>
              <button className="mt-auto bg-brand-purple hover:bg-brand-pink text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors duration-300 w-full">
                Attempt Challenge
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 animate-fade-in-up opacity-0" style={{ animationDelay: `${challenges.length * 0.2 + 0.5}s`, animationFillMode: "forwards" }}>
          <p className="text-medium-text">And many more exciting challenges to come!</p>
        </div>
      </div>
    </section>
  );
};

export default ChallengesPreview;

