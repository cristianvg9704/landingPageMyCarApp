import { useLanguage } from '../i18n/LanguageContext'

const Hero = () => {
  const { t } = useLanguage();
  const tr = t.hero;
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          {tr.titleStart}
          <span className="text-indigo-600">{tr.titleHighlight}</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          {tr.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('producto')}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
          >
            {tr.learnMore}
          </button>
          <button
            onClick={() => scrollToSection('newsletter')}
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition shadow-lg border-2 border-indigo-600"
          >
            {tr.subscribe}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
