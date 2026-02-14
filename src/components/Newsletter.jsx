import { useEffect } from 'react';

const Newsletter = () => {
  useEffect(() => {
    // Configurar campos de Mailchimp antes de cargar el script
    if (typeof window !== 'undefined') {
      window.fnames = new Array();
      window.ftypes = new Array();
      window.fnames[0] = 'EMAIL';
      window.ftypes[0] = 'email';
      window.fnames[1] = 'FNAME';
      window.ftypes[1] = 'text';
      window.fnames[2] = 'LNAME';
      window.ftypes[2] = 'text';
      window.fnames[3] = 'ADDRESS';
      window.ftypes[3] = 'address';
      window.fnames[4] = 'PHONE';
      window.ftypes[4] = 'phone';
      window.fnames[5] = 'BIRTHDAY';
      window.ftypes[5] = 'birthday';
      window.fnames[6] = 'COMPANY';
      window.ftypes[6] = 'text';

      // Cargar script de validación de Mailchimp
      const script = document.createElement('script');
      script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
      script.async = true;
      script.onload = () => {
        // Inicializar Mailchimp después de cargar jQuery
        if (typeof window.jQuery !== 'undefined') {
          window.$mcj = window.jQuery.noConflict(true);
        }
      };
      document.body.appendChild(script);

      return () => {
        // Limpiar script al desmontar
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, []);

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
          <div id="mc_embed_signup" className="w-full">
            <form 
              action="https://app.us17.list-manage.com/subscribe/post?u=1e478a0cb4ea2a00582e33639&amp;id=c50db490ad&amp;f_id=008241e2f0" 
              method="post" 
              id="mc-embedded-subscribe-form" 
              name="mc-embedded-subscribe-form" 
              className="validate" 
              target="_blank"
              noValidate
            >
              <div id="mc_embed_signup_scroll" className="space-y-4">
                <div className="hidden">
                  <div className="indicates-required">
                    <span className="asterisk text-red-500">*</span> indica requerido
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label htmlFor="mce-EMAIL" className="block text-left text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="EMAIL" 
                      className="required email w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" 
                      id="mce-EMAIL" 
                      required 
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <label htmlFor="mce-FNAME" className="block text-left text-sm font-medium text-gray-700 mb-1">
                      Nombre
                    </label>
                    <input 
                      type="text" 
                      name="FNAME" 
                      className="text w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" 
                      id="mce-FNAME" 
                      placeholder="Tu nombre"
                    />
                  </div>
                </div>

                {/* Mensajes de respuesta */}
                <div id="mce-responses" className="clear">
                  <div className="response hidden" id="mce-error-response" style={{display: 'none'}}></div>
                  <div className="response hidden" id="mce-success-response" style={{display: 'none'}}></div>
                </div>

                {/* Campo anti-spam */}
                <div aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
                  <input 
                    type="text" 
                    name="b_1e478a0cb4ea2a00582e33639_c50db490ad" 
                    tabIndex="-1" 
                    value="" 
                  />
                </div>

                <div className="optionalParent">
                  <div className="clear">
                    <button 
                      type="submit" 
                      name="subscribe" 
                      id="mc-embedded-subscribe" 
                      className="w-full bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
                    >
                      Suscribirse ahora
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        
        <p className="text-indigo-100 text-sm mt-6">
          🔒 No compartimos tu información. Puedes cancelar tu suscripción en cualquier momento.
        </p>
      </div>

    </section>
  );
};

export default Newsletter;
