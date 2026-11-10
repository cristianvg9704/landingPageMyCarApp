import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { EMAIL } from '../components/legal/LegalLayout'

const linkClass = 'text-indigo-600 hover:text-indigo-700 underline'

function SupportPage() {
  const { t } = useLanguage()
  const tr = t.support

  useEffect(() => {
    document.title = tr.docTitle
  }, [tr.docTitle])

  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">{tr.title}</h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-10">{tr.intro}</p>

        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 sm:p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">{tr.contactTitle}</h2>
          <p className="text-gray-700 mb-6 break-words">
            {tr.contactText}{' '}
            <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(tr.mailSubject)}`} className={`${linkClass} font-semibold`}>
              {EMAIL}
            </a>
          </p>
          <p className="text-gray-700 mb-2 font-semibold">{tr.includeTitle}</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            {tr.include.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">{tr.faqTitle}</h2>
        <div className="space-y-3 mb-12">
          {tr.faq.map((item) => (
            <details key={item.q} className="group rounded-lg border border-gray-200 bg-white p-4 open:shadow-md">
              <summary className="cursor-pointer font-semibold text-gray-900 list-none flex justify-between items-center gap-4">
                <span>{item.q}</span>
                <span aria-hidden="true" className="text-indigo-600 transition group-open:rotate-45 text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-gray-700 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-3">{tr.moreTitle}</h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li><Link to="/privacidad" className={linkClass}>{tr.privacy}</Link></li>
          <li><Link to="/terminos" className={linkClass}>{tr.terms}</Link></li>
        </ul>
      </div>
    </section>
  )
}

export default SupportPage
