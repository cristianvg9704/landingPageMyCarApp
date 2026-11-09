import { useEffect } from 'react'

// Datos del responsable (se usan en la Política de Privacidad y en los Términos de Uso)
export const RESPONSABLE = 'Cristian Vargas'
export const EMAIL = 'cristianvg9704@gmail.com'
export const PAIS = 'Colombia'
export const JURISDICCION = 'Barranquilla, Atlántico'
export const ULTIMA_ACTUALIZACION = '8 de noviembre de 2026'

export const B = ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>
export const I = ({ children }) => <em>{children}</em>

export const Mail = () => (
  <a href={`mailto:${EMAIL}`} className="text-indigo-600 hover:text-indigo-700 underline break-words">
    {EMAIL}
  </a>
)

export const H2 = ({ children }) => (
  <h2 className="text-2xl font-bold text-gray-900 pt-6">{children}</h2>
)

export const P = ({ children }) => <p>{children}</p>

export const UL = ({ children }) => (
  <ul className="list-disc pl-6 space-y-2">{children}</ul>
)

export const Table = ({ head, rows }) => (
  <div className="overflow-x-auto rounded-lg border border-gray-200">
    <table className="w-full min-w-[32rem] text-left text-sm sm:text-base border-collapse">
      <thead className="bg-gray-100 text-gray-900">
        <tr>
          {head.map((h) => (
            <th key={h} className="px-4 py-3 font-semibold border-b border-gray-200">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="align-top odd:bg-white even:bg-gray-50">
            {row.map((cell, j) => (
              <td key={j} className="px-4 py-3 border-b border-gray-200">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export const LegalPage = ({ title, documentTitle, children }) => {
  useEffect(() => {
    document.title = documentTitle
  }, [documentTitle])

  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-gray-700 mb-8">
          <B>Última actualización:</B> {ULTIMA_ACTUALIZACION}
        </p>
        <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">{children}</div>
      </div>
    </section>
  )
}
