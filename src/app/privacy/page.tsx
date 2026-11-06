'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';


const t = {
  es: {
    badge: 'Política de Privacidad',
    lastUpdated: 'Última actualización: 8 de septiembre de 2026',
    heroTitle: 'Tu privacidad es nuestra prioridad.',
    heroSubtitle:
      'En Pymio creemos que tus datos son tuyos. Nunca los vendemos, nunca los compartimos sin tu permiso.',

    toc: 'Contenido',
    tocItems: [
      'Quiénes somos',
      'Qué datos recopilamos',
      'Cómo usamos tus datos',
      'Con quién compartimos tus datos',
      'Tus derechos',
      'Seguridad',
      'Cookies',
      'Menores de edad',
      'Cambios a esta política',
      'Contacto',
    ],

    sections: [
      {
        id: 'quienes-somos',
        icon: 'BuildingOfficeIcon',
        title: '1. Quiénes somos',
        content: [
          'Pymio SpA es una empresa chilena con domicilio en Santiago, Chile. Operamos la aplicación móvil Pymio y el sitio web pymio.cl.',
          'Somos responsables del tratamiento de tus datos personales conforme a la Ley N° 19.628 sobre Protección de la Vida Privada de Chile y sus modificaciones vigentes.',
          'Si tienes preguntas sobre esta política, puedes contactarnos en: privacidad@pymio.cl',
        ],
      },
      {
        id: 'que-datos',
        icon: 'DocumentTextIcon',
        title: '2. Qué datos recopilamos',
        content: [
          'Datos de registro: nombre, correo electrónico, número de teléfono y RUT (opcional) cuando creas una cuenta.',
          'Datos de tu negocio: nombre del negocio, tipo de actividad, ventas registradas, inventario y facturas que ingresas voluntariamente a la app.',
          'Datos de uso: cómo interactúas con la app (funciones usadas, frecuencia, errores) para mejorar la experiencia.',
          'Datos del dispositivo: modelo, sistema operativo y versión de la app para soporte técnico.',
          'Datos de voz (opcional): si usas el Asistente de Voz Pymio, procesamos el audio localmente en tu dispositivo. No almacenamos grabaciones de voz en nuestros servidores.',
        ],
      },
      {
        id: 'como-usamos',
        icon: 'CogIcon',
        title: '3. Cómo usamos tus datos',
        content: [
          'Proveer el servicio: operar la app, sincronizar tus datos entre dispositivos y generar reportes de tu negocio.',
          'Mejorar Pymio: analizar patrones de uso (de forma anónima y agregada) para desarrollar nuevas funciones.',
          'Soporte al cliente: responder tus consultas y resolver problemas técnicos.',
          'Comunicaciones: enviarte actualizaciones importantes sobre la app o cambios en esta política. Nunca te enviaremos publicidad de terceros.',
          'Cumplimiento legal: cuando la ley chilena nos lo exija.',
          'Nunca usaremos tus datos para publicidad dirigida ni los venderemos a terceros.',
        ],
      },
      {
        id: 'con-quien',
        icon: 'ShareIcon',
        title: '4. Con quién compartimos tus datos',
        content: [
          'No vendemos tus datos. Punto.',
          'Proveedores de infraestructura: utilizamos servicios de nube (con servidores en la región de América del Sur cuando es posible) para almacenar datos de forma segura. Estos proveedores están contractualmente obligados a proteger tu información.',
          'Servicio de Impuestos Internos (SII): solo si tú activas la integración de facturación electrónica y nos autorizas expresamente a enviar datos en tu nombre.',
          'Autoridades legales: únicamente si existe una orden judicial o requerimiento legal válido bajo la ley chilena.',
          'En caso de fusión o adquisición de Pymio SpA, te notificaremos con al menos 30 días de anticipación y podrás eliminar tu cuenta antes de cualquier transferencia.',
        ],
      },
      {
        id: 'tus-derechos',
        icon: 'ShieldCheckIcon',
        title: '5. Tus derechos',
        content: [
          'Conforme a la Ley N° 19.628 y sus modificaciones, tienes derecho a:',
          'Acceso: solicitar una copia de todos los datos personales que tenemos sobre ti.',
          'Rectificación: corregir datos incorrectos o desactualizados.',
          'Cancelación: solicitar la eliminación de tus datos cuando ya no sean necesarios.',
          'Oposición: oponerte al tratamiento de tus datos para fines específicos.',
          'Portabilidad: recibir tus datos en un formato legible por máquina.',
          'Para ejercer cualquiera de estos derechos, escríbenos a privacidad@pymio.cl. Responderemos en un plazo máximo de 15 días hábiles.',
        ],
      },
      {
        id: 'seguridad',
        icon: 'LockClosedIcon',
        title: '6. Seguridad',
        content: [
          'Protegemos tus datos con cifrado AES-256 en reposo y TLS 1.3 en tránsito.',
          'Realizamos auditorías de seguridad periódicas y pruebas de penetración.',
          'El acceso a datos de producción está restringido a un número mínimo de empleados con autenticación de dos factores obligatoria.',
          'En caso de una brecha de seguridad que afecte tus datos, te notificaremos dentro de las 72 horas siguientes a su detección, conforme a la normativa vigente.',
          'Conservamos tus datos mientras tu cuenta esté activa. Si eliminas tu cuenta, borraremos tus datos personales en un plazo de 30 días, salvo obligación legal de conservarlos.',
        ],
      },
      {
        id: 'cookies',
        icon: 'ComputerDesktopIcon',
        title: '7. Cookies y tecnologías similares',
        content: [
          'El sitio web pymio.cl utiliza cookies estrictamente necesarias para su funcionamiento (sesión, preferencias de idioma).',
          'No utilizamos cookies de seguimiento publicitario ni compartimos datos de navegación con redes publicitarias.',
          'Puedes configurar tu navegador para rechazar cookies, aunque algunas funciones del sitio podrían verse afectadas.',
          'La app móvil no utiliza cookies. Usa almacenamiento local en tu dispositivo únicamente para mejorar el rendimiento.',
        ],
      },
      {
        id: 'menores',
        icon: 'UserGroupIcon',
        title: '8. Menores de edad',
        content: [
          'Pymio está dirigido a personas mayores de 18 años o a menores que cuenten con autorización de sus padres o tutores legales para operar un negocio.',
          'No recopilamos intencionalmente datos de menores de 14 años. Si detectamos que un menor de esa edad ha creado una cuenta sin autorización, eliminaremos sus datos de inmediato.',
          'Si eres padre o tutor y crees que tu hijo ha proporcionado datos sin tu consentimiento, contáctanos en privacidad@pymio.cl.',
        ],
      },
      {
        id: 'cambios',
        icon: 'ArrowPathIcon',
        title: '9. Cambios a esta política',
        content: [
          'Podemos actualizar esta política para reflejar cambios en nuestras prácticas o en la legislación chilena.',
          'Te notificaremos de cambios significativos por correo electrónico y mediante un aviso destacado en la app, con al menos 15 días de anticipación.',
          'El uso continuado de Pymio tras la fecha de vigencia de los cambios implica tu aceptación de la política actualizada.',
          'Siempre podrás consultar versiones anteriores de esta política escribiéndonos a privacidad@pymio.cl.',
        ],
      },
      {
        id: 'contacto',
        icon: 'EnvelopeIcon',
        title: '10. Contacto',
        content: [
          'Para cualquier consulta sobre privacidad, escríbenos a:',
          'Correo: privacidad@pymio.cl',
          'Dirección: Pymio SpA, Santiago, Chile',
          'Nos comprometemos a responder en un plazo máximo de 5 días hábiles.',
        ],
      },
    ],

    backHome: 'Volver al inicio',
    viewTerms: 'Ver Términos de Servicio',
  },
  en: {
    badge: 'Privacy Policy',
    lastUpdated: 'Last updated: September 8, 2026',
    heroTitle: 'Your privacy is our priority.',
    heroSubtitle:
      'At Pymio we believe your data is yours. We never sell it, never share it without your permission.',

    toc: 'Contents',
    tocItems: [
      'Who we are',
      'What data we collect',
      'How we use your data',
      'Who we share your data with',
      'Your rights',
      'Security',
      'Cookies',
      'Minors',
      'Changes to this policy',
      'Contact',
    ],

    sections: [
      {
        id: 'quienes-somos',
        icon: 'BuildingOfficeIcon',
        title: '1. Who we are',
        content: [
          'Pymio SpA is a Chilean company based in Santiago, Chile. We operate the Pymio mobile app and the website pymio.cl.',
          'We are responsible for processing your personal data in accordance with Chilean Law No. 19,628 on the Protection of Private Life and its current amendments.',
          'If you have questions about this policy, you can contact us at: privacy@pymio.cl',
        ],
      },
      {
        id: 'que-datos',
        icon: 'DocumentTextIcon',
        title: '2. What data we collect',
        content: [
          'Registration data: name, email address, phone number, and RUT (optional) when you create an account.',
          'Business data: business name, type of activity, recorded sales, inventory, and invoices you voluntarily enter into the app.',
          'Usage data: how you interact with the app (features used, frequency, errors) to improve the experience.',
          'Device data: model, operating system, and app version for technical support.',
          'Voice data (optional): if you use the Pymio Voice Assistant, we process audio locally on your device. We do not store voice recordings on our servers.',
        ],
      },
      {
        id: 'como-usamos',
        icon: 'CogIcon',
        title: '3. How we use your data',
        content: [
          'Providing the service: operating the app, syncing your data across devices, and generating business reports.',
          'Improving Pymio: analyzing usage patterns (anonymously and in aggregate) to develop new features.',
          'Customer support: responding to your inquiries and resolving technical issues.',
          'Communications: sending you important updates about the app or changes to this policy. We will never send you third-party advertising.',
          'Legal compliance: when required by Chilean law.',
          'We will never use your data for targeted advertising or sell it to third parties.',
        ],
      },
      {
        id: 'con-quien',
        icon: 'ShareIcon',
        title: '4. Who we share your data with',
        content: [
          'We do not sell your data. Period.',
          'Infrastructure providers: we use cloud services (with servers in the South American region when possible) to store data securely. These providers are contractually obligated to protect your information.',
          'Internal Revenue Service (SII): only if you activate the electronic invoicing integration and expressly authorize us to submit data on your behalf.',
          'Legal authorities: only if there is a valid court order or legal requirement under Chilean law.',
          'In the event of a merger or acquisition of Pymio SpA, we will notify you at least 30 days in advance and you may delete your account before any transfer.',
        ],
      },
      {
        id: 'tus-derechos',
        icon: 'ShieldCheckIcon',
        title: '5. Your rights',
        content: [
          'Under Law No. 19,628 and its amendments, you have the right to:',
          'Access: request a copy of all personal data we hold about you.',
          'Rectification: correct inaccurate or outdated data.',
          'Cancellation: request deletion of your data when it is no longer necessary.',
          'Opposition: object to the processing of your data for specific purposes.',
          'Portability: receive your data in a machine-readable format.',
          'To exercise any of these rights, write to us at privacy@pymio.cl. We will respond within a maximum of 15 business days.',
        ],
      },
      {
        id: 'seguridad',
        icon: 'LockClosedIcon',
        title: '6. Security',
        content: [
          'We protect your data with AES-256 encryption at rest and TLS 1.3 in transit.',
          'We conduct periodic security audits and penetration testing.',
          'Access to production data is restricted to a minimum number of employees with mandatory two-factor authentication.',
          'In the event of a security breach affecting your data, we will notify you within 72 hours of detection, in accordance with applicable regulations.',
          'We retain your data while your account is active. If you delete your account, we will erase your personal data within 30 days, unless legally required to retain it.',
        ],
      },
      {
        id: 'cookies',
        icon: 'ComputerDesktopIcon',
        title: '7. Cookies and similar technologies',
        content: [
          'The website pymio.cl uses strictly necessary cookies for its operation (session, language preferences).',
          'We do not use advertising tracking cookies or share browsing data with advertising networks.',
          'You can configure your browser to reject cookies, although some site features may be affected.',
          'The mobile app does not use cookies. It uses local storage on your device only to improve performance.',
        ],
      },
      {
        id: 'menores',
        icon: 'UserGroupIcon',
        title: '8. Minors',
        content: [
          'Pymio is intended for people over 18 years of age or minors who have parental or legal guardian authorization to operate a business.',
          'We do not intentionally collect data from children under 14. If we detect that a child of that age has created an account without authorization, we will delete their data immediately.',
          'If you are a parent or guardian and believe your child has provided data without your consent, contact us at privacy@pymio.cl.',
        ],
      },
      {
        id: 'cambios',
        icon: 'ArrowPathIcon',
        title: '9. Changes to this policy',
        content: [
          'We may update this policy to reflect changes in our practices or in Chilean legislation.',
          'We will notify you of significant changes by email and through a prominent notice in the app, at least 15 days in advance.',
          'Continued use of Pymio after the effective date of changes implies your acceptance of the updated policy.',
          'You can always request previous versions of this policy by writing to us at privacy@pymio.cl.',
        ],
      },
      {
        id: 'contacto',
        icon: 'EnvelopeIcon',
        title: '10. Contact',
        content: [
          'For any privacy inquiries, write to us at:',
          'Email: privacy@pymio.cl',
          'Address: Pymio SpA, Santiago, Chile',
          'We commit to responding within a maximum of 5 business days.',
        ],
      },
    ],

    backHome: 'Back to home',
    viewTerms: 'View Terms of Service',
  },
};

export default function PrivacyPage() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const tx = t[lang];

  return (
    <div className="min-h-screen bg-background">
      <Header lang={lang} onLangChange={setLang} />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/6 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 right-0 w-[400px] h-[400px] rounded-full bg-accent/8 blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto px-5 md:px-8 text-center relative z-10">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Icon name="ShieldCheckIcon" size={14} />
              {tx.badge}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight mb-5 tracking-tight">
              {tx.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed mb-4">
              {tx.heroSubtitle}
            </p>
            <p className="text-sm text-muted-foreground/70 font-medium">{tx.lastUpdated}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-8 pb-24">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="flex flex-col lg:flex-row gap-10">

              {/* Sticky TOC */}
              <aside className="lg:w-64 shrink-0">
                <div className="lg:sticky lg:top-28 bg-muted/40 border border-border rounded-2xl p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">{tx.toc}</p>
                  <nav className="flex flex-col gap-1">
                    {tx.tocItems.map((item, i) => (
                      <a
                        key={i}
                        href={`#${tx.sections[i]?.id}`}
                        className="text-sm text-muted-foreground hover:text-primary font-medium py-1.5 px-2 rounded-lg hover:bg-primary/8 transition-all duration-150"
                      >
                        {item}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Sections */}
              <div className="flex-1 flex flex-col gap-10">
                {tx.sections.map((section) => (
                  <div
                    key={section.id}
                    id={section.id}
                    className="bg-card border border-border rounded-2xl p-7 md:p-9 scroll-mt-32"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon name={section.icon as Parameters<typeof Icon>[0]['name']} size={20} className="text-primary" />
                      </div>
                      <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
                    </div>
                    <ul className="flex flex-col gap-3">
                      {section.content.map((para, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          {section.content.length > 1 && i > 0 ? (
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          ) : (
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          )}
                          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{para}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Footer CTA */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href="/"
                    className="flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-muted transition-colors duration-200"
                  >
                    <Icon name="ArrowLeftIcon" size={16} />
                    {tx.backHome}
                  </a>
                  <a
                    href="/terms"
                    className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-bold hover:bg-accent transition-colors duration-300 shadow-md"
                  >
                    <Icon name="DocumentTextIcon" size={16} />
                    {tx.viewTerms}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
