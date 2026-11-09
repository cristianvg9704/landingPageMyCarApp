import {
  LegalPage, H2, P, UL, Table, B, I, Mail,
  RESPONSABLE, PAIS,
} from './legal/LegalLayout'

const PrivacyPolicy = () => (
  <LegalPage title="Política de Privacidad de MyCar" documentTitle="Política de Privacidad – MyCar">
    <P>
      Esta política explica qué datos recopila la aplicación <B>MyCar</B> ("la app"), para qué los usamos, con quién se comparten
      y qué control tienes sobre ellos. Al crear una cuenta o usar la app aceptas lo descrito aquí.
    </P>

    <H2>1. Quién es el responsable</H2>
    <P><B>{RESPONSABLE}</B></P>
    <P>Correo de contacto para privacidad: <B><Mail /></B></P>
    <P>País: <B>{PAIS}</B></P>

    <H2>2. Qué datos recopilamos</H2>
    <P>Solo recopilamos los datos necesarios para que la app funcione. Se guardan asociados a tu cuenta.</P>
    <Table
      head={['Datos', 'Detalle', 'Cómo los obtenemos']}
      rows={[
        [<B>Datos de la cuenta</B>, 'Nombre, correo electrónico, teléfono y contraseña (la contraseña se guarda cifrada, no podemos verla)', 'Los escribes al registrarte'],
        [<B>Inicio de sesión con Apple o Google</B>, 'Nombre y correo que el proveedor decida compartir contigo (con Apple puedes ocultar tu correo real)', 'Los entrega Apple o Google al iniciar sesión'],
        [<B>Tus vehículos</B>, 'Marca, modelo, año, placa, color, fecha y precio de compra, notas y foto', 'Los ingresas tú'],
        [<B>Movimientos económicos</B>, 'Ingresos y egresos de cada vehículo: monto, tipo, categoría (combustible, mantenimiento, otros), descripción, litros y kilometraje', 'Los ingresas tú (por teclado o por voz)'],
        [<B>Kilometraje y mantenimiento</B>, 'Lecturas de odómetro, registros de mantenimiento y viajes', 'Los ingresas tú o los calcula la app (ver sección 4)'],
        [<B>Alertas</B>, 'Título, descripción, fechas y repetición de tus recordatorios', 'Los ingresas tú'],
        [<B>Suscripción</B>, 'Estado de tu plan y historial de compras de la suscripción', 'Lo gestiona RevenueCat con la tienda de aplicaciones'],
        [<B>Identificadores</B>, 'Tu identificador de usuario y un identificador del dispositivo para enviar notificaciones push', 'Se generan automáticamente'],
      ]}
    />
    <P>
      No recopilamos tu lista de contactos, tu historial de navegación, datos de salud ni datos de pago.{' '}
      <B>El pago de la suscripción lo procesa Apple o Google; nosotros nunca vemos tu tarjeta.</B>
    </P>

    <H2>3. Para qué usamos tus datos</H2>
    <UL>
      <li>Crear tu cuenta, iniciar sesión y mantenerla segura.</li>
      <li>
        Mostrarte tus vehículos, finanzas, kilometraje y alertas, y calcular métricas y recomendaciones de mantenimiento
        a partir de <B>tu propio historial</B>.
      </li>
      <li>Gestionar tu suscripción y activar las funciones de pago.</li>
      <li>Enviarte notificaciones: recordatorios de tus alertas y, si las aceptas, novedades de la app.</li>
      <li>Atender tus solicitudes de soporte y cumplir obligaciones legales.</li>
    </UL>
    <P>
      <B>No vendemos tus datos, no los compartimos con corredores de datos, no mostramos publicidad y no te rastreamos
      entre otras apps o sitios web.</B>
    </P>

    <H2>4. Permisos del dispositivo</H2>
    <P>La app te pide permiso la primera vez que usas cada función. Puedes revocarlos en los ajustes del teléfono.</P>
    <UL>
      <li>
        <B>Ubicación (mientras usas la app y en segundo plano):</B> solo para medir los kilómetros de un viaje que <B>tú inicias</B>.
        Los cálculos se hacen en tu dispositivo. <B>No guardamos ni enviamos tus coordenadas ni tu ruta</B>; solo se guardan la
        distancia total, la duración y las horas de inicio y fin del viaje.
      </li>
      <li>
        <B>Micrófono y reconocimiento de voz:</B> solo cuando pulsas el botón de voz para dictar un ingreso o egreso. El
        reconocimiento lo realiza el sistema de tu teléfono (Apple o Google), por lo que el audio puede procesarse según sus
        políticas. <B>Nosotros no recibimos ni guardamos el audio</B>, solo el texto que se convierte en un movimiento.
      </li>
      <li>
        <B>Cámara y fotos:</B> solo si decides tomar o elegir una foto de tu vehículo o de tu perfil. La foto del vehículo se guarda
        en tu cuenta; la foto de perfil permanece en tu dispositivo.
      </li>
      <li><B>Notificaciones:</B> para tus recordatorios y para novedades de la app.</li>
    </UL>

    <H2>5. Con quién compartimos datos</H2>
    <P>Usamos proveedores que tratan los datos <B>únicamente para prestar el servicio</B>, no para sus propios fines publicitarios:</P>
    <Table
      head={['Proveedor', 'Para qué', 'Datos']}
      rows={[
        [<B>Supabase</B>, 'Base de datos y autenticación', 'Todos los datos de tu cuenta'],
        [<B>RevenueCat</B>, 'Gestión de la suscripción', 'Identificador de usuario y compras de la suscripción'],
        [<B>Google Firebase Cloud Messaging</B>, 'Notificaciones push', 'Identificador del dispositivo (token)'],
        [<><B>Apple</B> y <B>Google</B></>, 'Inicio de sesión, tiendas de aplicaciones y pagos', 'Según sus propias políticas'],
      ]}
    />
    <P>
      También podemos divulgar datos si una autoridad competente lo exige conforme a la ley. Estos proveedores pueden
      operar servidores fuera de tu país, por lo que tus datos pueden transferirse internacionalmente con las
      medidas de seguridad habituales del sector.
    </P>

    <H2>6. Cuánto tiempo los conservamos</H2>
    <P>
      Mantenemos tus datos mientras tengas una cuenta. Si la eliminas, <B>borramos tu cuenta y todos los datos asociados</B>{' '}
      de nuestros sistemas. Copias de seguridad técnicas pueden persistir durante un tiempo limitado hasta que se
      sobrescriben. Datos que la ley nos obligue a conservar se mantendrán solo el tiempo exigido.
    </P>

    <H2>7. Tus derechos y cómo ejercerlos</H2>
    <P>
      Conforme a la legislación aplicable de <B>{PAIS}</B> puedes <B>acceder, corregir, actualizar, solicitar la supresión de tus
      datos</B>, oponerte a su tratamiento y retirar tu consentimiento.
    </P>
    <UL>
      <li><B>Corregir:</B> edita tu perfil, vehículos y movimientos dentro de la app.</li>
      <li>
        <B>Eliminar tu cuenta y tus datos:</B> <I>Ajustes → Eliminar cuenta</I>. Es inmediato y permanente.{' '}
        <B>Eliminar la cuenta no cancela tu suscripción</B>: cancélala en <I>Ajustes → Administrar suscripción</I> (se abre la
        configuración de suscripciones de Apple o Google).
      </li>
      <li><B>Cualquier otra solicitud:</B> escríbenos a <B><Mail /></B> y responderemos en un plazo razonable.</li>
    </UL>

    <H2>8. Seguridad</H2>
    <P>
      Las comunicaciones se cifran con HTTPS y cada usuario solo puede acceder a sus propios datos mediante reglas de
      acceso en la base de datos. Ningún sistema es infalible; si detectamos un incidente que afecte tus datos, te
      informaremos conforme a la ley.
    </P>

    <H2>9. Menores de edad</H2>
    <P>
      MyCar no está dirigida a menores de edad. No recopilamos datos de menores a sabiendas; si crees que un menor se ha
      registrado, escríbenos para eliminar su cuenta.
    </P>

    <H2>10. Cambios en esta política</H2>
    <P>
      Podemos actualizar esta política. Si el cambio es importante te avisaremos dentro de la app. La fecha de arriba indica
      la última versión.
    </P>

    <H2>11. Contacto</H2>
    <P><B>{RESPONSABLE}</B> · <B><Mail /></B></P>
  </LegalPage>
)

export default PrivacyPolicy
