import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoGold from 'figma:asset/62284ae84bca37e6cc569ee02a225b6e6059e285.png';
import logoTeal from 'figma:asset/b15a300af1b52a0d768012746127e1d7e21bbab8.png';
import logoIcon from 'figma:asset/29d957deb6459cf196467fa370e71bec471a6a58.png';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'hosting', label: 'Hosting' },
    { id: 'coaching', label: 'Coaching' },
    { id: 'talent-rescue', label: 'Talent Rescue' },
    { id: 'bookings', label: 'Bookings' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-luxury' : 'bg-white'
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="transition-opacity hover:opacity-80"
          >
            <img 
              src={logoTeal} 
              alt="Sir Rume" 
              className="h-8 md:h-10 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm uppercase tracking-wider transition-colors ${
                  currentPage === item.id
                    ? 'text-gold'
                    : 'text-charcoal hover:text-gold'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-charcoal hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-charcoal/10 pt-6">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-sm uppercase tracking-wider transition-colors ${
                    currentPage === item.id
                      ? 'text-gold'
                      : 'text-charcoal hover:text-gold'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}