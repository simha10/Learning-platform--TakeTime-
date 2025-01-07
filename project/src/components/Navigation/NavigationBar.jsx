import { NavLink } from './NavLink';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-900 shadow-lg sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-blue-500 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#domains">Learning Paths</NavLink>
            <NavLink href="#internships">Internships</NavLink>
            <NavLink href="#founder">Founder</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 border-t border-gray-800">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#domains">Learning Paths</NavLink>
            <NavLink href="#internships">Internships</NavLink>
            <NavLink href="#founder">Founder</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}