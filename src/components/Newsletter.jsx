import { useState } from 'react';

const Newsletter = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '' });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    // Simulate API call (replace with your actual endpoint)
    setTimeout(() => {
      // In production, replace this with actual API call:
      // fetch('https://tu-api.com/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })
      
      setMessage(`¡Gracias ${formData.nombre}! Te hemos suscrito exitosamente. Revisa tu email para confirmar.`);
      setIsLoading(false);
      setFormData({ nombre: '', email: '' });
      
      // Optional: Send to analytics or backend
      console.log('Newsletter subscription:', formData);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="newsletter" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-blue-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Sé el primero en conocer MyCar
        </h2>
        <p className="text-xl text-indigo-100 mb-8">
          Suscríbete para recibir notificaciones cuando la app esté disponible y obtén acceso anticipado
        </p>
        
        <div className="bg-white rounded-xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="text" 
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Tu nombre" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                required
                disabled={isLoading}
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Tu email" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                required
                disabled={isLoading}
              />
            </div>
            <button 
              type="submit" 
              disabled={isLoading}
              className={`w-full bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg ${
                isLoading ? 'opacity-60 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? 'Suscribiendo...' : 'Suscribirse ahora'}
            </button>
          </form>
          
          {message && (
            <div className="mt-4 p-4 rounded-lg bg-green-500 text-white">
              {message}
            </div>
          )}
        </div>
        
        <p className="text-indigo-100 text-sm mt-6">
          🔒 No compartimos tu información. Puedes cancelar tu suscripción en cualquier momento.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
