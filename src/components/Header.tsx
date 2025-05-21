import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Datia Logo" className="h-10 md:h-12" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/" label="Inicio" currentPath={location.pathname} />
          <NavLink to="/nosotros" label="Nosotros" currentPath={location.pathname} />
          <NavLink to="/aprender-con-ia" label="Aprender con IA" currentPath={location.pathname} />
          <NavLink to="/soluciones" label="Soluciones Inteligentes" currentPath={location.pathname} />
          <NavLink to="/contacto" label="Contacto" currentPath={location.pathname} />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} className="text-[#9998c1]" />
          ) : (
            <Menu size={24} className="text-[#9998c1]" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4 slide-in-right">
          <nav className="flex flex-col space-y-4 px-4">
            <MobileNavLink to="/" label="Inicio" currentPath={location.pathname} />
            <MobileNavLink to="/nosotros" label="Nosotros" currentPath={location.pathname} />
            <MobileNavLink to="/aprender-con-ia" label="Aprender con IA" currentPath={location.pathname} />
            <MobileNavLink to="/historias" label="Historias de Transformación" currentPath={location.pathname} />
            <MobileNavLink to="/forma-de-trabajar" label="Nuestra Forma de Trabajar" currentPath={location.pathname} />
            <MobileNavLink to="/soluciones" label="Soluciones Inteligentes" currentPath={location.pathname} />
            <MobileNavLink to="/contacto" label="Contacto" currentPath={location.pathname} />
          </nav>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  currentPath: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, currentPath }) => {
  const isActive = currentPath === to || (to !== '/' && currentPath.startsWith(to));

  return (
    <Link
      to={to}
      className={`relative font-medium transition-colors duration-300 ${
        isActive
          ? 'text-[#FF6B2B]'
          : 'text-[#9998c1] hover:text-[#FF6B2B]'
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-[#FF6B2B] rounded-full" />
      )}
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  label: string;
  currentPath: string;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, label, currentPath }) => {
  const isActive = currentPath === to || (to !== '/' && currentPath.startsWith(to));
  return (
    <Link
      to={to}
      className={`block py-2 font-medium transition-colors duration-300 ${
        isActive
          ? 'text-[#FF6B2B]'
          : 'text-[#9998c1] hover:text-[#FF6B2B]'
      }`}
    >
      {label}
    </Link>
  );
};

export default Header;
