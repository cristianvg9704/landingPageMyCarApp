import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

const Footer = () => {
  const { t } = useLanguage();
  const tn = t.nav;
  const tr = t.footer;
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (id) => {
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link to="/">
              <h3 className="text-xl font-bold mb-4 hover:text-indigo-400 transition">MyCar</h3>
            </Link>
            <p className="text-gray-400">
              {tr.tagline}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{tr.links}</h4>
            <ul className="space-y-2 text-gray-400">
              {isHomePage ? (
                <>
                  <li>
                    <button 
                      onClick={() => scrollToSection('producto')}
                      className="hover:text-white transition"
                    >
                      {tn.product}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('caracteristicas')}
                      className="hover:text-white transition"
                    >
                      {tn.features}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('newsletter')}
                      className="hover:text-white transition"
                    >
                      {tn.newsletter}
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/" className="hover:text-white transition">
                    {tn.home}
                  </Link>
                </li>
              )}
              <li>
                <Link 
                  to="/privacidad"
                  className="hover:text-white transition"
                >
                  {tr.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link 
                  to="/terminos"
                  className="hover:text-white transition"
                >
                  {tr.termsOfUse}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{tr.contact}</h4>
            <p className="text-gray-400 mb-2">
              Email: contacto@mycar.app
            </p>
            <p className="text-gray-400 text-sm">
              {tr.privacyLabel} cristianvg9704@gmail.com
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MyCar. {tr.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
