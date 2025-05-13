import React from 'react';

// Assuming your animation classes are globally available or defined in a way Next.js/Tailwind can pick them up.
// If not, this component might need specific imports or setup for animations.

const ProductShowcase = () => {
  // Placeholder data for products - in a real application, this would come from a database or API
  const products = [
    {
      id: 1,
      name: 'AuraFlow X1 Earbuds',
      description: 'Immersive sound with active noise cancellation. Customizable fit for ultimate comfort.',
      image: '/placeholder-earbud-1.png', // Replace with actual image path
      price: '$199'
    },
    {
      id: 2,
      name: 'CyberSonix Pro Headphones',
      description: 'Studio-quality audio with enhanced bass. Sleek over-ear design with RGB lighting options.',
      image: '/placeholder-headphone-1.png', // Replace with actual image path
      price: '$299'
    },
    {
      id: 3,
      name: 'StealthBeat Wireless Pods',
      description: 'Discreet and powerful. Perfect for on-the-go listening with long-lasting battery life.',
      image: '/placeholder-pods-1.png', // Replace with actual image path
      price: '$149'
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-dark-surface text-light-text">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up opacity-0" style={{ animationFillMode: 'forwards' }}>
          <h2 className="text-4xl md:text-5xl font-bold text-light-text mb-4">
            Featured <span className="text-brand-purple">Products</span>
          </h2>
          <p className="text-lg md:text-xl text-medium-text max-w-2xl mx-auto">
            Explore our range of cutting-edge audio products, designed to work seamlessly with your EarPrint for a truly personalized sound experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-dark-bg p-6 rounded-xl shadow-2xl border border-gray-700/50 hover:border-brand-cyan transition-all duration-300 transform hover:scale-105 flex flex-col animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 0.2 + 0.5}s`, animationFillMode: 'forwards' }} // Added staggered delay and fill mode
            >
              <div className="relative w-full h-48 md:h-56 mb-4 bg-gray-700 rounded-lg flex items-center justify-center">
                {/* Placeholder for product image - In a real scenario, replace with <img src={product.image} alt={product.name} /> */}
                <span className='text-gray-400 text-sm'>[Product Image Placeholder {index + 1}]</span>
              </div>
              <h3 className="text-2xl font-semibold text-light-text mb-2">{product.name}</h3>
              <p className="text-medium-text text-sm mb-4 flex-grow">{product.description}</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-xl font-bold text-brand-cyan">{product.price}</span>
                <button className="bg-brand-purple hover:bg-brand-pink text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 animate-fade-in-up opacity-0" style={{ animationDelay: `${products.length * 0.2 + 0.5}s`, animationFillMode: 'forwards' }}>
            <p className="text-medium-text">More innovative products coming soon...</p>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

