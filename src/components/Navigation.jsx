import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (id) => {
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Si no estamos en home, navegar a home y luego hacer scroll
      window.location.href = `/#${id}`;
    }
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-indigo-600 transition">
              MyCar
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            {isHomePage ? (
              <>
                <button 
                  onClick={() => scrollToSection('producto')}
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  Producto
                </button>
                <button 
                  onClick={() => scrollToSection('caracteristicas')}
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  Características
                </button>
                <button 
                  onClick={() => scrollToSection('newsletter')}
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  Newsletter
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  Inicio
                </Link>
              </>
            )}
            <Link 
              to="/privacidad"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
