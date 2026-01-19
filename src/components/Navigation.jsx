const Navigation = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">MyCar</span>
          </div>
          <div className="hidden md:flex space-x-8">
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
