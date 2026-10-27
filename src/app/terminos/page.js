import Link from "next/link";
import { LegalNote, LegalPageLayout, LegalSection } from "@/components/legal/LegalLayout";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata = {
  title: "Términos y condiciones",
  description:
    "Condiciones de uso de Caimanera, la plataforma hiperlocal para encontrar partidos y canchas cerca de ti.",
  alternates: { canonical: "/terminos" },
};

const toc = [
  { id: "quienes-somos", title: "Quiénes somos" },
  { id: "aceptacion", title: "Aceptación" },
  { id: "servicio", title: "El servicio" },
  { id: "cuenta", title: "Tu cuenta" },
  { id: "reservas", title: "Reservas y cupos" },
  { id: "pagos", title: "Pagos" },
  { id: "pases", title: "Pases y créditos" },
  { id: "cancelaciones", title: "Cancelaciones y reembolsos" },
  { id: "conducta", title: "Conducta" },
  { id: "responsabilidad", title: "Responsabilidad" },
  { id: "propiedad", title: "Propiedad intelectual" },
  { id: "disponibilidad", title: "Beta y cambios" },
  { id: "ley", title: "Ley aplicable" },
  { id: "contacto", title: "Contacto" },
];

export default function TermsPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal · Términos"
      title="Términos y condiciones"
      description="Las reglas del juego para usar Caimanera, reservar cupos y gestionar tus pagos y pases."
      updated="26 de octubre de 2026"
      toc={toc}
    >
      <LegalNote>
        Caimanera está en fase beta. Algunas funciones, precios, canchas y
        disponibilidad pueden cambiar mientras seguimos construyendo la
        plataforma. Si encuentras algo que no funciona como esperas, escríbenos.
      </LegalNote>

      <div className="mt-8">
        <LegalSection id="quienes-somos" number={1} title="Quiénes somos">
          <p>
            Caimanera es una plataforma tecnológica operada desde Caracas,
            Venezuela, que conecta jugadores con canchas y organizadores de
            encuentros deportivos amateurs. Caimanera no es el organizador
            deportivo, el club ni el arrendador de la cancha: facilita la
            publicación, la reserva, la inscripción y el registro de pagos.
          </p>
          <p>
            Las canchas y los organizadores son responsables de la información
            que publican, de las condiciones del espacio y de la prestación del
            servicio deportivo.
          </p>
        </LegalSection>

        <LegalSection id="aceptacion" number={2} title="Aceptación">
          <p>
            Al acceder a la landing, crear una cuenta o usar la aplicación,
            aceptas estos términos y la{" "}
            <Link href="/privacidad">política de privacidad</Link>. Si no estás de
            acuerdo, no debes usar el servicio.
          </p>
          <p>
            Debes tener capacidad legal para contratar. Si usas Caimanera en
            nombre de una cancha, un club o una organización, declaras que
            cuentas con autorización para aceptar estas condiciones en su
            nombre.
          </p>
        </LegalSection>

        <LegalSection id="servicio" number={3} title="El servicio">
          <p>
            Caimanera permite descubrir canchas y partidos cercanos, consultar
            cupos, inscribirte, entrar a una lista de espera, pagar por partido
            o usar un pase, y consultar tu historial. El catálogo puede incluir
            datos de demostración mientras la plataforma está en beta.
          </p>
          <p>
            La disponibilidad de partidos y canchas depende de cada organizador
            y puede cambiar sin previo aviso. La publicación de un partido no
            garantiza que siempre haya cupos disponibles; el estado se muestra
            en la app al momento de consultar.
          </p>
        </LegalSection>

        <LegalSection id="cuenta" number={4} title="Tu cuenta">
          <p>
            Para reservar y gestionar pagos necesitas una cuenta. Debes
            proporcionar información veraz y mantenerla actualizada. Eres
            responsable de cuidar tus credenciales y de toda actividad realizada
            desde tu cuenta.
          </p>
          <p>
            Si detectas un acceso no autorizado o un error en tus datos,
            notifícanos lo antes posible a{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Podemos
            suspender cuentas que incumplan estos términos, usen información
            falsa o afecten la seguridad de la plataforma.
          </p>
        </LegalSection>

        <LegalSection id="reservas" number={5} title="Reservas y cupos">
          <p>
            Al inscribirte, el sistema verifica la disponibilidad y registra tu
            participación como <strong>confirmada</strong> o en{" "}
            <strong>lista de espera</strong>. Si el partido requiere pago y la
            transacción queda pendiente, tu cupo puede quedar reservado hasta
            la conciliación.
          </p>
          <p>
            La información pública de un partido no expone datos personales de
            otros jugadores. Los cupos, precios y horarios son responsabilidad
            del organizador y deben contrastarse en el detalle del partido antes
            de confirmar.
          </p>
        </LegalSection>

        <LegalSection id="pagos" number={6} title="Pagos">
          <p>
            Caimanera admite, según disponibilidad, BDT, pago móvil o
            transferencia, Binance y tarjeta. Los pagos que no son inmediatos se
            registran como transacciones <strong>pendientes</strong> y pueden
            requerir confirmación del staff.
          </p>
          <p>
            Los precios se muestran en dólares estadounidenses (USD). La app
            puede mostrar una referencia en bolívares; el monto final, las
            comisiones y el tipo de cambio aplicable dependen del método de pago
            y del proveedor correspondiente. No almacenamos datos completos de
            tarjetas ni actuamos como entidad financiera.
          </p>
          <p>
            Si un pago es rechazado, duplicado o realizado por error, escríbenos
            para revisarlo. Podemos solicitar comprobantes y datos de referencia
            para conciliar la transacción.
          </p>
        </LegalSection>

        <LegalSection id="pases" number={7} title="Pases y créditos">
          <p>
            Los pases son planes de acceso que incluyen una cantidad de partidos
            o créditos. El <strong>Pase Básico</strong> incluye 4 partidos al
            mes, el <strong>Pase PRO</strong> incluye 8 partidos al mes con
            prioridad de reserva y el <strong>Pase VIP</strong> permite partidos
            ilimitados durante su vigencia, sujeto a cupos disponibles.
          </p>
          <p>
            La compra o renovación crea un pago pendiente. El pase se activa o
            renueva cuando el pago se confirma. Puedes tener más de un pase
            activo; al inscribirte se utiliza el que vence primero. Los créditos
            no son transferibles ni canjeables por dinero, salvo que la ley
            aplicable disponga lo contrario.
          </p>
          <p>
            Las fechas de vigencia, los partidos incluidos y las condiciones de
            prioridad se muestran en la app antes de la compra. Los planes y
            precios pueden cambiar para compras futuras, sin afectar un pase ya
            activado conforme a sus condiciones.
          </p>
        </LegalSection>

        <LegalSection id="cancelaciones" number={8} title="Cancelaciones y reembolsos">
          <p>
            Puedes cancelar tu inscripción desde Mis partidos, sujeto a las
            reglas y plazos del partido. Si estabas confirmado, Caimanera puede
            promover al primer jugador de la lista de espera y devolver el
            crédito del pase cuando corresponda.
          </p>
          <p>
            Los reembolsos de pagos por partidos o pases se rigen por las
            condiciones del organizador, el método de pago y la ley aplicable.
            Las ausencias sin aviso, los partidos ya jugados y los servicios ya
            prestados normalmente no generan reembolso. Si consideras que un
            cobro es incorrecto, contáctanos con la referencia de la
            transacción.
          </p>
        </LegalSection>

        <LegalSection id="conducta" number={9} title="Conducta">
          <ul>
            <li>No suplantes la identidad de otra persona ni publiques datos falsos.</li>
            <li>No uses bots, automatizaciones abusivas o intentos de acceso no autorizado.</li>
            <li>No acoses, discrimines o pongas en riesgo a otros jugadores.</li>
            <li>No publiques contenido ilegal, ofensivo o que infrinja derechos de terceros.</li>
            <li>Respeta las reglas de la cancha, los horarios y las indicaciones del organizador.</li>
          </ul>
          <p>
            Podemos suspender o cancelar el acceso a quien incumpla estas reglas.
            Cuando sea posible, intentaremos explicar la decisión y permitir una
            revisión.
          </p>
        </LegalSection>

        <LegalSection id="responsabilidad" number={10} title="Responsabilidad">
          <p>
            La actividad deportiva implica riesgos físicos. Cada jugador asume
            la responsabilidad de su estado de salud, su equipo y su conducta
            durante el partido. Caimanera no sustituye la evaluación médica ni
            garantiza la seguridad del espacio.
          </p>
          <p>
            En la medida permitida por la ley, Caimanera no responde por daños
            derivados de la actuación de canchas, organizadores, jugadores o
            proveedores de pago. Tampoco garantiza disponibilidad ininterrumpida
            del sitio, aunque trabajamos para mantenerlo operativo y seguro.
          </p>
        </LegalSection>

        <LegalSection id="propiedad" number={11} title="Propiedad intelectual">
          <p>
            La marca Caimanera, el logo, el diseño, los textos y el software de
            la plataforma son propiedad de sus titulares. No puedes copiarlos,
            modificarlos, distribuirlos ni usarlos comercialmente sin
            autorización previa.
          </p>
          <p>
            Te otorgamos una licencia limitada, personal y no exclusiva para usar
            la app conforme a estos términos. El contenido que publiques sigue
            siendo tuyo; nos autorizas a mostrarlo dentro de la plataforma para
            operar el servicio.
          </p>
        </LegalSection>

        <LegalSection id="disponibilidad" number={12} title="Beta y cambios">
          <p>
            Caimanera está en fase beta. Podemos modificar, pausar o retirar
            funciones, corregir errores y actualizar precios o catálogos. Si un
            cambio afecta materialmente un servicio ya pagado, buscaremos una
            solución razonable con las personas afectadas.
          </p>
          <p>
            También podemos actualizar estos términos. Publicaremos la versión
            vigente en esta página con su fecha de actualización. El uso
            continuado después de un cambio implica su aceptación.
          </p>
        </LegalSection>

        <LegalSection id="ley" number={13} title="Ley aplicable">
          <p>
            Estos términos se interpretan conforme a las leyes de la República
            Bolivariana de Venezuela. Antes de acudir a una instancia judicial,
            las partes intentarán resolver de buena fe cualquier controversia
            relacionada con el servicio.
          </p>
        </LegalSection>

        <LegalSection id="contacto" number={14} title="Contacto">
          <p>
            Para dudas, solicitudes o reclamos sobre estos términos, escríbenos
            a <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. También
            puedes revisar nuestra{" "}
            <Link href="/privacidad">política de privacidad</Link> y las{" "}
            <Link href="/#faq">preguntas frecuentes</Link>.
          </p>
        </LegalSection>
      </div>
    </LegalPageLayout>
  );
}
