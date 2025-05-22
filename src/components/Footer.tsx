import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  const linkedinUrl = "https://www.linkedin.com/company/datiadigital/";

  return (
    <footer className="bg-[#283A80] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div>
            <Link to="/">
              <img src={logo} alt="Datia Logo" className="h-12 mb-4" />
            </Link>
            <p className="text-gray-300 mt-4">
              Potenciando personas con tecnología.
            </p>
            <div className="flex mt-6 space-x-4">
              {/* Aquí pasamos la URL al SocialIcon de LinkedIn */}
              <SocialIcon icon={<Linkedin size={20} />} url={linkedinUrl} />
              {/* Puedes añadir más iconos sociales de la misma manera:
              <SocialIcon icon={<Facebook size={20} />} url="TU_URL_DE_FACEBOOK" />
              <SocialIcon icon={<Twitter size={20} />} url="TU_URL_DE_TWITTER" />
              <SocialIcon icon={<Instagram size={20} />} url="TU_URL_DE_INSTAGRAM" />
              */}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <FooterLink to="/" label="Inicio" />
              <FooterLink to="/nosotros" label="Nosotros" />
              <FooterLink to="/aprender-con-ia" label="Aprender con IA" />
              <FooterLink to="/soluciones" label="Soluciones Inteligentes" />
              <FooterLink to="/contacto" label="Contacto" />
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h4 className="text-xl font-bold mb-6">Soluciones</h4>
            <ul className="space-y-3">
              <FooterLink to="/soluciones/talento-humano" label="Talento Humano Reinventado" />
              <FooterLink to="/soluciones/finanzas" label="Finanzas Reinventadas" />
              <FooterLink to="/soluciones/operaciones" label="Operaciones que Fluyen" />
              <FooterLink to="/soluciones/marketing" label="NextGen Marketing" />
              <FooterLink to="/soluciones/chatbots" label="Conversaciones con Chatbots" />
              <FooterLink to="/soluciones/apps-web" label="Apps Web al Instante" />
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-[#FF6B2B]" />
                <span>Calle 146a No.54c-86 Of.201 Bogotá - Colombia</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-[#FF6B2B]" />
                <span>+57 324 6831933</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-[#FF6B2B]" />
                <span>fernando@datia.digital</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>© {new Date().getFullYear()} Datia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, label }) => {
  return (
    <li>
      <Link
        to={to}
        className="text-gray-300 hover:text-[#FF6B2B] transition-colors duration-300"
      >
        {label}
      </Link>
    </li>
  );
};

interface SocialIconProps {
  icon: React.ReactNode;
  url: string; // Añadimos la prop url
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, url }) => { // Recibimos la prop url
  return (
    <a
      href={url} // Usamos la prop url en el href
      target="_blank" // Abre el enlace en una nueva pestaña
      rel="noopener noreferrer" // Buenas prácticas de seguridad para target="_blank"
      className="bg-[#FF6B2B] bg-opacity-20 text-white hover:bg-opacity-100 transition-all duration-300 p-2 rounded-full"
    >
      {icon}
    </a>
  );
};

export default Footer;