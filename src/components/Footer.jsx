const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MyCar</h3>
            <p className="text-gray-400">
              Organiza los ingresos de tus vehículos de forma inteligente.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('producto')}
                  className="hover:text-white transition"
                >
                  Producto
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('caracteristicas')}
                  className="hover:text-white transition"
                >
                  Características
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('newsletter')}
                  className="hover:text-white transition"
                >
                  Newsletter
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <p className="text-gray-400">
              Email: contacto@mycar.app
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MyCar. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
