import { Link } from 'react-router-dom'
import {
  LegalPage, H2, P, UL, B, I, Mail,
  RESPONSABLE, PAIS, JURISDICCION,
} from './legal/LegalLayout'

const linkClass = 'text-indigo-600 hover:text-indigo-700 underline'

const TermsOfUse = () => (
  <LegalPage title="Términos de Uso de MyCar" documentTitle="Términos de Uso – MyCar">
    <P>
      Estos términos regulan el uso de la aplicación <B>MyCar</B> ("la app"). Al crear una cuenta o usar la app aceptas estos
      términos y nuestra <Link to="/privacidad" className={linkClass}>Política de Privacidad</Link>. Si no estás de acuerdo, no uses la app.
    </P>

    <H2>1. Qué es MyCar</H2>
    <P>
      MyCar te ayuda a llevar el control de tus vehículos: finanzas (ingresos y egresos), kilometraje, viajes, mantenimiento
      y alertas. Parte de las funciones son gratuitas y otras requieren una suscripción.
    </P>

    <H2>2. Tu cuenta</H2>
    <UL>
      <li>Debes dar información verdadera y mantenerla actualizada.</li>
      <li>Eres responsable de la confidencialidad de tu contraseña y de lo que ocurra en tu cuenta.</li>
      <li>Debes tener la edad mínima legal para contratar en tu país, o contar con autorización de tu representante.</li>
      <li>Puedes eliminar tu cuenta en cualquier momento desde <I>Ajustes → Eliminar cuenta</I>.</li>
    </UL>

    <H2>3. Uso permitido</H2>
    <P>
      Te comprometes a <B>no</B>: usar la app para fines ilegales; intentar acceder a datos de otros usuarios; interferir con el
      funcionamiento o la seguridad del servicio; copiar, descompilar o revender la app; ni cargar contenido que infrinja
      derechos de terceros.
    </P>
    <P>
      <B>Seguridad vial:</B> no uses la app, y en especial el dictado por voz o la pantalla, mientras conduces. Registra tus
      datos cuando el vehículo esté detenido. El seguimiento de viajes se inicia solo por ti.
    </P>

    <H2>4. Suscripción "MyCarApp Pro"</H2>
    <UL>
      <li>
        <B>Planes:</B> mensual y anual. El precio exacto, con impuestos, se muestra en la app antes de comprar y puede variar
        según tu país y moneda.
      </li>
      <li><B>Pago:</B> se cobra a tu cuenta de Apple (App Store) o de Google (Google Play) al confirmar la compra.</li>
      <li>
        <B>Renovación automática:</B> la suscripción se renueva sola por el mismo periodo y precio, salvo que la canceles{' '}
        <B>al menos 24 horas antes</B> de que termine el periodo actual. El cobro de la renovación se hace dentro de las 24
        horas previas al fin del periodo.
      </li>
      <li>
        <B>Cancelar o cambiar de plan:</B> en <I>Ajustes → Administrar suscripción</I>, que abre la configuración de suscripciones
        de tu cuenta de Apple o Google. Al cancelar conservas el acceso hasta el final del periodo ya pagado.
      </li>
      <li>
        <B>Reembolsos:</B> los cobros los gestiona Apple o Google, por lo que las solicitudes de reembolso se hacen ante ellos
        y se rigen por sus políticas.
      </li>
      <li><B>Eliminar tu cuenta no cancela la suscripción:</B> debes cancelarla por separado.</li>
      <li><B>Restaurar compras:</B> puedes recuperar tu suscripción en un dispositivo nuevo desde <I>Ajustes → Restaurar compras</I>.</li>
    </UL>

    <H2>5. Tus datos y tu contenido</H2>
    <P>
      Los datos que ingresas (vehículos, movimientos, fotos, notas) <B>siguen siendo tuyos</B>. Nos autorizas únicamente a
      almacenarlos y procesarlos para prestarte el servicio, según la Política de Privacidad.
    </P>

    <H2>6. Cálculos y recomendaciones</H2>
    <P>
      Los kilómetros por día, el rendimiento, el costo por kilómetro y las recomendaciones de mantenimiento se calculan a
      partir <B>de los datos que tú ingresas</B> y son <B>orientativos</B>. No sustituyen el manual del fabricante, la revisión
      de un mecánico ni asesoría profesional contable o fiscal. La precisión del seguimiento por GPS puede variar según tu
      dispositivo y señal. Verifica la información importante antes de tomar decisiones.
    </P>

    <H2>7. Propiedad intelectual</H2>
    <P>
      La app, su diseño, marca y código son propiedad de <B>{RESPONSABLE}</B> o de sus licenciantes. Te concedemos
      una licencia personal, limitada, revocable e intransferible para usar la app según estos términos.
    </P>

    <H2>8. Disponibilidad y cambios</H2>
    <P>
      Procuramos que la app funcione de forma continua, pero no garantizamos que esté libre de interrupciones o errores.
      Podemos modificar, suspender o retirar funciones. Si cambiamos estos términos de forma importante, te avisaremos en
      la app; seguir usándola después del cambio implica aceptarlo.
    </P>

    <H2>9. Suspensión y terminación</H2>
    <P>
      Podemos suspender o cerrar una cuenta que incumpla estos términos. Puedes dejar de usar la app y eliminar tu cuenta
      cuando quieras.
    </P>

    <H2>10. Limitación de responsabilidad</H2>
    <P>
      En la medida permitida por la ley, la app se ofrece "tal cual". <B>{RESPONSABLE}</B> no será responsable por
      daños indirectos, pérdida de datos o de ganancias derivados del uso de la app, ni por decisiones tomadas a partir de
      sus cálculos y recomendaciones. Nada en estos términos limita derechos del consumidor que la ley no permita limitar.
    </P>

    <H2>11. Apple y Google</H2>
    <P>
      Estos términos son entre tú y <B>{RESPONSABLE}</B>, no con Apple ni Google. Ellos no son responsables de la
      app ni de su soporte. Si descargas la app de la App Store de Apple también aplican los{' '}
      <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" className={linkClass} target="_blank" rel="noopener noreferrer">términos estándar de licencia de Apple</a>, y Apple
      puede exigir su cumplimiento como tercero beneficiario.
    </P>

    <H2>12. Ley aplicable y contacto</H2>
    <P>
      Estos términos se rigen por las leyes de <B>{PAIS}</B>. Las controversias se someterán a los tribunales competentes de{' '}
      <B>{JURISDICCION}</B>, sin perjuicio de los derechos que la ley te otorgue como consumidor.
    </P>
    <P>Contacto: <B>{RESPONSABLE}</B> · <B><Mail /></B></P>
  </LegalPage>
)

export default TermsOfUse
