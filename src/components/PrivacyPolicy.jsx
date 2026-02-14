const PrivacyPolicy = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Política de Privacidad
        </h1>
        <p className="text-gray-600 mb-12">
          Última actualización: 14 de febrero de 2026
        </p>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-8 leading-relaxed">
            Esta Política de Privacidad describe cómo MyCarApp ("nosotros") recopila, usa y comparte información cuando utilizas nuestra aplicación móvil.
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información que recopilamos</h2>
              <p className="text-gray-700 mb-4">Podemos recopilar los siguientes tipos de información:</p>
              
              <div className="ml-4 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Información personal</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Correo electrónico</li>
                    <li>Número de teléfono</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Datos del dispositivo y uso</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Información del dispositivo (modelo, versión de sistema operativo)</li>
                    <li>Datos de uso de la app (pantallas vistas, duración de sesión, fallos)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Datos de ubicación</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Ubicación precisa (GPS), cuando el usuario lo permite</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Información del vehículo</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Placa del vehículo</li>
                    <li>Datos del vehículo (marca, modelo, año)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Cómo usamos tu información</h2>
              <p className="text-gray-700 mb-4">Usamos tu información para:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Crear y administrar tu cuenta</li>
                <li>Proveer y mejorar la funcionalidad de la app</li>
                <li>Mostrar información del vehículo al usuario</li>
                <li>Analizar el uso y mejorar el rendimiento</li>
                <li>Brindar soporte y responder consultas</li>
                <li>Estimar el kilometraje del vehículo y avisar cuando corresponde mantenimiento</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Base legal y consentimiento</h2>
              <p className="text-gray-700 mb-4">Tratamos los datos personales con base en:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Tu consentimiento, por ejemplo cuando habilitas la ubicación GPS</li>
                <li>La prestación del servicio, para crear y administrar tu cuenta</li>
                <li>Obligaciones legales, cuando aplique</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Puedes retirar tu consentimiento en cualquier momento (por ejemplo, desactivando los permisos de ubicación).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Proveedores de terceros</h2>
              <p className="text-gray-700 mb-4">Usamos proveedores externos para operar la app. Por ejemplo:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>RevenueCat (gestión de suscripciones)</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Solo compartimos los datos necesarios para que dichos servicios funcionen. No vendemos tus datos personales.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Conservación de datos</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Conservamos tus datos mientras tu cuenta esté activa.</li>
                <li>Si tu cuenta está inactiva durante 1 año, y no solicitas conservarla, eliminaremos tus datos automáticamente.</li>
                <li>También puedes solicitar la eliminación en cualquier momento.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Tus derechos (Colombia)</h2>
              <p className="text-gray-700 mb-4">Bajo la legislación colombiana, tienes derecho a:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Acceder a tus datos personales</li>
                <li>Actualizarlos o corregirlos</li>
                <li>Solicitar su eliminación (supresión)</li>
                <li>Revocar la autorización</li>
                <li>Presentar una queja ante la Superintendencia de Industria y Comercio (SIC)</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Para ejercer estos derechos, contáctanos en: <a href="mailto:cristianvg9704@gmail.com" className="text-indigo-600 hover:text-indigo-700 underline">cristianvg9704@gmail.com</a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Seguridad</h2>
              <p className="text-gray-700">
                Implementamos medidas razonables de seguridad para proteger tu información.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Privacidad de menores</h2>
              <p className="text-gray-700">
                MyCarApp no está dirigida a menores de edad. No recopilamos intencionalmente datos personales de menores.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Eliminación de cuenta</h2>
              <p className="text-gray-700">
                Puedes eliminar tu cuenta directamente en la app. Esto eliminará tus datos según nuestra política de conservación. Si necesitas ayuda, contáctanos en <a href="mailto:cristianvg9704@gmail.com" className="text-indigo-600 hover:text-indigo-700 underline">cristianvg9704@gmail.com</a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Cambios en esta política</h2>
              <p className="text-gray-700">
                Podemos actualizar esta política ocasionalmente. Te informaremos actualizando la fecha de "Última actualización".
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contacto</h2>
              <p className="text-gray-700">
                Si tienes preguntas sobre esta política, contáctanos en: <a href="mailto:cristianvg9704@gmail.com" className="text-indigo-600 hover:text-indigo-700 underline">cristianvg9704@gmail.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
