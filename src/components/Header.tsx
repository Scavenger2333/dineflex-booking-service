
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll events to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-white/80 backdrop-blur-sm py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <h1 className="text-dineflex-burgundy text-3xl font-bold transition-transform duration-300 group-hover:scale-105">
            Dine<span className="text-dineflex-gold">Flex</span>
          </h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li>
              <Link 
                to="/" 
                className={cn(
                  "font-medium text-dineflex-charcoal hover:text-dineflex-burgundy transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-dineflex-burgundy after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100",
                  location.pathname === '/' && "text-dineflex-burgundy after:scale-x-100"
                )}
              >
                Restaurants
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={cn(
                  "font-medium text-dineflex-charcoal hover:text-dineflex-burgundy transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-dineflex-burgundy after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100",
                  location.pathname === '/about' && "text-dineflex-burgundy after:scale-x-100"
                )}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-full left-0 right-0 animate-fade-in">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col gap-4">
              <li>
                <Link 
                  to="/" 
                  className={cn(
                    "block py-2 font-medium text-dineflex-charcoal hover:text-dineflex-burgundy transition-colors",
                    location.pathname === '/' && "text-dineflex-burgundy"
                  )}
                >
                  Restaurants
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={cn(
                    "block py-2 font-medium text-dineflex-charcoal hover:text-dineflex-burgundy transition-colors",
                    location.pathname === '/about' && "text-dineflex-burgundy"
                  )}
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
