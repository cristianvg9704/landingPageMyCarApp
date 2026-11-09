import { useLanguage } from '../i18n/LanguageContext'

const UserTypes = () => {
  const { t } = useLanguage();
  const tr = t.users;
  const userTypes = [
    {
      icon: (
        <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
      ),
      ...tr.types[0]
    },
    {
      icon: (
        <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
      ),
      ...tr.types[1]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {tr.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {tr.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {userTypes.map((type, index) => (
            <div key={index} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mr-4 shadow-md">
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{type.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {type.description}
              </p>
              <ul className="space-y-2">
                {type.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserTypes;
