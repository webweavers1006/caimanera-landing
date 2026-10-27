import Link from "next/link";
import { LegalNote, LegalPageLayout, LegalSection } from "@/components/legal/LegalLayout";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata = {
  title: "Política de privacidad",
  description:
    "Cómo Caimanera recopila, usa, comparte y protege tus datos personales y tu ubicación.",
  alternates: { canonical: "/privacidad" },
};

const toc = [
  { id: "responsable", title: "Responsable" },
  { id: "datos", title: "Datos que recopilamos" },
  { id: "finalidades", title: "Para qué los usamos" },
  { id: "ubicacion", title: "Ubicación y mapas" },
  { id: "pagos", title: "Pagos y transacciones" },
  { id: "cookies", title: "Cookies y almacenamiento" },
  { id: "compartir", title: "Con quién compartimos" },
  { id: "conservacion", title: "Conservación" },
  { id: "seguridad", title: "Seguridad" },
  { id: "derechos", title: "Tus derechos" },
  { id: "menores", title: "Menores de edad" },
  { id: "transferencias", title: "Transferencias" },
  { id: "cambios", title: "Cambios" },
  { id: "contacto", title: "Contacto" },
];

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal · Privacidad"
      title="Política de privacidad"
      description="Qué datos necesita Caimanera para funcionar, cómo los usamos y cómo puedes ejercer tus derechos."
      updated="26 de octubre de 2026"
      toc={toc}
    >
      <LegalNote>
        Caimanera está en beta. Los datos de canchas, partidos y planes que ves
        en la landing son de demostración. Esta política aplica a la landing y a
        la aplicación cuando entra en funcionamiento con datos reales.
      </LegalNote>

      <div className="mt-8">
        <LegalSection id="responsable" number={1} title="Responsable">
          <p>
            Caimanera, con operación desde Caracas, Venezuela, es responsable de
            los datos personales que trata a través de su landing y su
            aplicación. Para asuntos de privacidad puedes escribir a{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
          <p>
            Esta política describe, de forma general, los tratamientos actuales.
            Cuando una función requiera un consentimiento específico, lo
            pediremos de manera clara antes de activarla.
          </p>
        </LegalSection>

        <LegalSection id="datos" number={2} title="Datos que recopilamos">
          <ul>
            <li>
              <strong>Datos de cuenta:</strong> nombre, apellido, correo,
              contraseña cifrada, rol y preferencias.
            </li>
            <li>
              <strong>Datos de reservas:</strong> partidos, canchas,
              inscripciones, lista de espera, estado y historial.
            </li>
            <li>
              <strong>Datos de pago:</strong> método, monto, referencia, estado y
              comprobantes. No almacenamos números completos de tarjeta ni
              credenciales bancarias.
            </li>
            <li>
              <strong>Ubicación:</strong> coordenadas o direcciones que eliges
              para ordenar partidos y canchas por cercanía.
            </li>
            <li>
              <strong>Datos técnicos:</strong> dirección IP, tipo de dispositivo,
              navegador, registros de acceso y errores.
            </li>
            <li>
              <strong>Comunicaciones:</strong> mensajes que nos envías por correo
              o formularios de soporte.
            </li>
          </ul>
          <p>
            No pedimos datos sensibles innecesarios. Evita enviarnos información
            médica o documentos de identidad completos por canales que no estén
            habilitados para ello.
          </p>
        </LegalSection>

        <LegalSection id="finalidades" number={3} title="Para qué los usamos">
          <ul>
            <li>Crear y administrar tu cuenta y validar tu acceso.</li>
            <li>Mostrar partidos y canchas ordenados por cercanía.</li>
            <li>Gestionar inscripciones, cupos y listas de espera.</li>
            <li>Procesar y conciliar pagos, pases y créditos.</li>
            <li>Enviar notificaciones operativas relacionadas con tu cuenta.</li>
            <li>Prevenir fraude, abuso y accesos no autorizados.</li>
            <li>Medir el rendimiento del servicio y corregir errores.</li>
            <li>Cumplir obligaciones legales y atender solicitudes de soporte.</li>
          </ul>
          <p>
            Usamos los datos porque son necesarios para ejecutar el servicio que
            solicitas, porque tenemos un interés legítimo en operar y proteger
            la plataforma, porque existe una obligación legal o porque nos diste
            tu consentimiento para una finalidad específica.
          </p>
        </LegalSection>

        <LegalSection id="ubicacion" number={4} title="Ubicación y mapas">
          <p>
            La ubicación es clave para la experiencia hiperlocal. Puedes
            escribir una dirección, elegir una zona o cancha, o usar la ubicación
            de tu navegador. La última ubicación y las recientes pueden
            guardarse en el almacenamiento local de tu dispositivo para
            ahorrarte pasos en la próxima visita.
          </p>
          <p>
            Para geocodificar direcciones usamos servicios como{" "}
            <a href="https://nominatim.openstreetmap.org/" target="_blank" rel="noopener noreferrer">
              Nominatim
            </a>{" "}
            y mapas de{" "}
            <a href="https://www.openstreetmap.org/" target="_blank" rel="noopener noreferrer">
              OpenStreetMap
            </a>
            . Al consultar una dirección o cargar el mapa, tu navegador puede
            enviar la solicitud a esos servicios. No compartimos tu ubicación con
            otros jugadores.
          </p>
          <p>
            Puedes dejar de compartir la ubicación del navegador en cualquier
            momento desde los permisos del sistema. Sin ella, puedes seguir
            usando la app con una dirección o zona elegida manualmente.
          </p>
        </LegalSection>

        <LegalSection id="pagos" number={5} title="Pagos y transacciones">
          <p>
            Los pagos pueden procesarse mediante BDT, pago móvil o
            transferencia, Binance, tarjeta o los proveedores habilitados en
            cada caso. Caimanera recibe y registra la referencia, el monto y el
            estado de la transacción; los proveedores de pago tratan los datos
            necesarios para cobrar conforme a sus propias políticas.
          </p>
          <p>
            No somos una entidad financiera ni guardamos credenciales de acceso a
            tus cuentas bancarias o billeteras. Si un pago requiere comprobante,
            lo usaremos únicamente para conciliar la operación y atender
            reclamos relacionados.
          </p>
        </LegalSection>

        <LegalSection id="cookies" number={6} title="Cookies y almacenamiento">
          <p>
            Usamos cookies o almacenamiento local para mantener la sesión,
            recordar tu última ubicación, preferencias de tema y estado de
            rendimiento. Son herramientas necesarias para que la experiencia
            funcione; no usamos cookies publicitarias de terceros en esta
            landing.
          </p>
          <p>
            Si la app se instala como aplicación web (PWA), puede guardar en caché
            recursos para funcionar mejor. Puedes borrar estos datos desde la
            configuración de tu navegador; algunas preferencias se perderán y la
            app podría tardar más en cargar.
          </p>
        </LegalSection>

        <LegalSection id="compartir" number={7} title="Con quién compartimos">
          <p>
            No vendemos datos personales. Compartimos información solo cuando es
            necesaria para operar el servicio:
          </p>
          <ul>
            <li>Proveedores de hosting, infraestructura y correo transaccional.</li>
            <li>Procesadores de pago y conciliación financiera.</li>
            <li>Servicios de mapas y geocodificación.</li>
            <li>
              Canchas y organizadores, limitado a los datos necesarios para
              gestionar una reserva o inscripción.
            </li>
            <li>
              Autoridades o terceros cuando exista una obligación legal, una
              orden válida o sea necesario para proteger derechos y seguridad.
            </li>
          </ul>
          <p>
            Exigimos a nuestros proveedores tratar la información con medidas
            razonables de confidencialidad y seguridad.
          </p>
        </LegalSection>

        <LegalSection id="conservacion" number={8} title="Conservación">
          <p>
            Conservamos los datos mientras tu cuenta esté activa y durante el
            tiempo necesario para cumplir las finalidades descritas. Algunos
            registros de pagos, seguridad o soporte pueden conservarse por más
            tiempo cuando exista una obligación legal, una disputa o una
            necesidad de prevención de fraude.
          </p>
          <p>
            Cuando los datos ya no sean necesarios, los eliminaremos o
            anonimizaremos de forma razonable.
          </p>
        </LegalSection>

        <LegalSection id="seguridad" number={9} title="Seguridad">
          <p>
            Aplicamos medidas técnicas y organizativas razonables, como cifrado
            en tránsito, contraseñas cifradas, control de acceso por roles,
            registros de actividad y validación de sesiones. Ningún sistema es
            completamente infalible: si detectas un incidente o un acceso
            extraño, avísanos de inmediato.
          </p>
        </LegalSection>

        <LegalSection id="derechos" number={10} title="Tus derechos">
          <p>
            Puedes solicitar acceso a tus datos, su rectificación o
            actualización, su eliminación, la limitación u oposición a
            determinados tratamientos y la portabilidad cuando corresponda.
            También puedes retirar un consentimiento previo sin afectar la
            legalidad del tratamiento ya realizado.
          </p>
          <p>
            Envía tu solicitud a{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> indicando tu
            nombre, el correo asociado a la cuenta y qué deseas hacer.
            Responderemos en un plazo razonable. Si tu solicitud afecta una
            obligación legal o una reserva en curso, te explicaremos la
            situación.
          </p>
        </LegalSection>

        <LegalSection id="menores" number={11} title="Menores de edad">
          <p>
            El servicio está dirigido a personas con capacidad para contratar.
            Si eres menor de edad, necesitas la autorización y supervisión de tu
            representante legal. Si detectamos una cuenta de un menor sin
            autorización, podemos suspenderla y eliminar los datos que
            correspondan.
          </p>
        </LegalSection>

        <LegalSection id="transferencias" number={12} title="Transferencias">
          <p>
            Algunos proveedores de infraestructura, mapas o pagos pueden estar
            ubicados fuera de Venezuela. Cuando sea necesario transferir datos
            internacionalmente, buscaremos que existan medidas contractuales o
            técnicas razonables para proteger la información.
          </p>
        </LegalSection>

        <LegalSection id="cambios" number={13} title="Cambios">
          <p>
            Podemos actualizar esta política para reflejar cambios en el
            servicio, en la ley o en nuestras prácticas. Publicaremos la versión
            vigente en esta página con la fecha de actualización. Si el cambio
            es relevante, buscaremos comunicarlo por un canal adecuado.
          </p>
        </LegalSection>

        <LegalSection id="contacto" number={14} title="Contacto">
          <p>
            Para preguntas, solicitudes o reclamos de privacidad, escríbenos a{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. También
            puedes consultar los{" "}
            <Link href="/terminos">términos y condiciones</Link> y las{" "}
            <Link href="/#faq">preguntas frecuentes</Link>.
          </p>
        </LegalSection>
      </div>
    </LegalPageLayout>
  );
}
