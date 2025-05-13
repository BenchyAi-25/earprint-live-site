import React from 'react';

const CommunitySpotlight = () => {
  // Placeholder data for community spotlight - replace with actual data as needed
  const communityMembers = [
    {
      id: 1,
      name: 'User123',
      avatar: '/placeholder-avatar.png', // Replace with actual image path or use a default
      testimonial: 'EarPrint has revolutionized my audio experience. The personalized sound is incredible!',
      stars: 5,
    },
    {
      id: 2,
      name: 'MusicLover22',
      avatar: '/placeholder-avatar.png',
      testimonial: 'The sound challenges are a blast, and I love discovering new products tailored to my hearing profile.',
      stars: 4,
    },
    {
      id: 3,
      name: 'TechGuruMike',
      avatar: '/placeholder-avatar.png',
      testimonial: 'Finally, a platform that understands individual hearing needs. The customization is top-notch.',
      stars: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-dark-surface text-light-text">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0s' }}>
          <h2 className="text-4xl md:text-5xl font-bold text-light-text mb-4">
            Voices from Our <span className="text-brand-purple">Community</span>
          </h2>
          <p className="text-lg md:text-xl text-medium-text max-w-3xl mx-auto">
            Discover what our users are saying about their enhanced audio experiences with EarPrint. We value every story and strive to make sound personal again.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {communityMembers.map((member, index) => (
            <div 
              key={member.id} 
              className="bg-dark-bg p-6 rounded-xl shadow-2xl border border-gray-700/50 hover:border-brand-cyan transition-all duration-300 transform hover:scale-105 flex flex-col items-center text-center animate-fade-in-up opacity-0"
              style={{ animationFillMode: 'forwards', animationDelay: `${index * 0.3 + 0.5}s` }} // Staggered animation for each card
            >
              <div className="w-24 h-24 rounded-full bg-gray-700 mb-4 flex items-center justify-center text-light-text text-3xl font-bold overflow-hidden">
                {/* Placeholder for avatar - In a real scenario, replace with <img src={member.avatar} alt={member.name} className="rounded-full w-full h-full object-cover" /> */}
                <span className='text-4xl'>{member.name.substring(0,1)}</span>
              </div>
              <h3 className="text-xl font-semibold text-light-text mb-2">{member.name}</h3>
              <p className="text-medium-text text-sm mb-3 italic flex-grow">{member.testimonial}</p>
              <div className="flex justify-center mt-auto">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < member.stars ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.387 2.458a1 1 0 00-.364 1.118l1.287 3.975c.3.921-.755 1.688-1.54 1.118l-3.386-2.458a1 1 0 00-1.176 0l-3.386 2.458c-.784.57-1.839-.197-1.54-1.118l1.287-3.975a1 1 0 00-.364-1.118L2.04 8.402c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69L9.049 2.927z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 animate-fade-in-up opacity-0" style={{ animationFillMode: 'forwards', animationDelay: `${communityMembers.length * 0.3 + 0.5}s`}} >
            <p className="text-medium-text">Become a part of the EarPrint story and share your unique sound journey!</p>
        </div>
      </div>
    </section>
  );
};

export default CommunitySpotlight;

