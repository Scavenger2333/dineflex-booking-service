
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-dineflex-burgundy text-3xl font-bold">
            Dine<span className="text-dineflex-gold">Flex</span>
          </h1>
        </Link>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link to="/" className="text-dineflex-charcoal hover:text-dineflex-burgundy font-medium transition-colors">
                Restaurants
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-dineflex-charcoal hover:text-dineflex-burgundy font-medium transition-colors">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
