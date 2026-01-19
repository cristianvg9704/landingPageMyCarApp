const ProductInfo = () => {
  return (
    <section id="producto" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Qué es MyCar?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La aplicación móvil diseñada para conductores y dueños de vehículos que necesitan llevar un control organizado de los ingresos diarios
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Gestiona tus ingresos de forma inteligente
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              MyCar es una aplicación móvil diseñada para <strong className="text-gray-900">conductores</strong> que trabajan con 
              sus propios vehículos y para <strong className="text-gray-900">dueños de vehículos</strong> que los tienen trabajando 
              con otros conductores. Perfecta para taxis, servicios de paquetería, delivery u otros servicios de transporte.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Olvídate de los cuadernos y las hojas de cálculo complicadas. Con MyCar puedes registrar 
              fácilmente los ingresos de cada vehículo, ver estadísticas en tiempo real y mantener 
              tus cuentas siempre al día, ya seas conductor o dueño de una flota.
            </p>
            <ul className="space-y-3 mt-6">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-indigo-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-600">Registro rápido de ingresos diarios</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-indigo-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-600">Gestiona múltiples vehículos desde un solo lugar</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-indigo-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-600">Estadísticas y reportes automáticos</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl p-8 shadow-xl">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Características principales</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Registro en segundos</h5>
                    <p className="text-sm text-gray-600">Ingresa tus ganancias rápidamente</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Múltiples vehículos</h5>
                    <p className="text-sm text-gray-600">Gestiona taxi, paquetería y más</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Reportes diarios</h5>
                    <p className="text-sm text-gray-600">Visualiza tus ingresos fácilmente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
