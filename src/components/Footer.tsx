import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark-surface text-medium-text py-8 mt-12 border-t border-gray-700">
      <div className="container mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h5 className="text-lg font-semibold text-light-text mb-3">Features</h5>
            <ul className="space-y-2">
              <li><Link href="/create-earprint" className="hover:text-brand-pink transition-colors">EarPrint Creator</Link></li>
              <li><Link href="/products" className="hover:text-brand-pink transition-colors">Product Matching</Link></li>
              <li><Link href="/challenges" className="hover:text-brand-pink transition-colors">Sound Challenges</Link></li>
              <li><Link href="/community" className="hover:text-brand-pink transition-colors">Community</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold text-light-text mb-3">Resources</h5>
            <ul className="space-y-2">
              <li><Link href="/blog" className="hover:text-brand-pink transition-colors">Blog</Link></li>
              <li><Link href="/sound-guide" className="hover:text-brand-pink transition-colors">Sound Guide</Link></li>
              <li><Link href="/faq" className="hover:text-brand-pink transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold text-light-text mb-3">Connect</h5>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:text-brand-pink transition-colors">Contact Us</Link></li>
              {/* Add social media links here */}
              <li><a href="#" className="hover:text-brand-pink transition-colors">Social Media</a></li> 
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-8">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} EarPrint. All rights reserved.
          </p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy" className="text-xs hover:text-brand-pink transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-xs hover:text-brand-pink transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

