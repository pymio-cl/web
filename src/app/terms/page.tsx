'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

const t = {
  es: {
    badge: 'Términos de Servicio',
    lastUpdated: 'Última actualización: 8 de septiembre de 2026',
    heroTitle: 'Términos claros, sin letra chica.',
    heroSubtitle:
      'Queremos que sepas exactamente qué puedes esperar de Pymio y qué esperamos de ti. Sin lenguaje legal confuso.',

    toc: 'Contenido',
    tocItems: [
      'Aceptación de los términos',
      'El servicio Pymio',
      'Tu cuenta',
      'Uso aceptable',
      'Tu contenido',
      'Propiedad intelectual',
      'Integración con el SII',
      'Limitación de responsabilidad',
      'Suspensión y terminación',
      'Ley aplicable',
      'Cambios a los términos',
      'Contacto',
    ],

    sections: [
      {
        id: 'aceptacion',
        icon: 'CheckCircleIcon',
        title: '1. Aceptación de los términos',
        content: [
          'Al descargar, instalar o usar la aplicación Pymio o el sitio web pymio.cl, aceptas estos Términos de Servicio en su totalidad.',
          'Si usas Pymio en nombre de un negocio, declaras que tienes autoridad para aceptar estos términos en nombre de dicho negocio.',
          'Si no estás de acuerdo con alguno de estos términos, no uses el servicio.',
          'Estos términos se rigen por la legislación chilena, incluyendo la Ley N° 19.496 sobre Protección de los Derechos de los Consumidores.',
        ],
      },
      {
        id: 'el-servicio',
        icon: 'DevicePhoneMobileIcon',
        title: '2. El servicio Pymio',
        content: [
          'Pymio es una aplicación de gestión de negocios diseñada para pequeños y medianos emprendedores chilenos.',
          'El plan gratuito incluye: registro de ventas, control de inventario, reportes básicos, asistente de voz y acceso desde múltiples dispositivos.',
          'Nos reservamos el derecho de modificar, suspender o descontinuar funciones del servicio con previo aviso de 30 días, salvo en casos de fuerza mayor o requerimientos legales urgentes.',
          'Pymio no es un software de contabilidad certificado ni reemplaza la asesoría de un contador profesional. Es una herramienta de apoyo para la gestión diaria.',
          'Nos esforzamos por mantener una disponibilidad del 99.5% mensual, pero no garantizamos un servicio ininterrumpido.',
        ],
      },
      {
        id: 'tu-cuenta',
        icon: 'UserCircleIcon',
        title: '3. Tu cuenta',
        content: [
          'Debes tener al menos 18 años para crear una cuenta, o contar con autorización de tus padres o tutores legales.',
          'Eres responsable de mantener la confidencialidad de tu contraseña y de todas las actividades que ocurran bajo tu cuenta.',
          'Debes notificarnos de inmediato a soporte@pymio.cl si sospechas un acceso no autorizado a tu cuenta.',
          'Puedes tener una sola cuenta gratuita por persona o negocio. Crear múltiples cuentas para eludir límites del servicio está prohibido.',
          'Nos reservamos el derecho de verificar la identidad del titular de la cuenta cuando sea necesario para proteger la seguridad del servicio.',
        ],
      },
      {
        id: 'uso-aceptable',
        icon: 'ShieldExclamationIcon',
        title: '4. Uso aceptable',
        content: [
          'Pymio está diseñado para la gestión legítima de negocios. Está prohibido:',
          'Usar el servicio para actividades ilegales, fraudulentas o que infrinjan derechos de terceros.',
          'Intentar acceder a datos de otros usuarios o a sistemas internos de Pymio.',
          'Usar herramientas automatizadas para extraer datos del servicio (scraping) sin autorización escrita.',
          'Revender, sublicenciar o comercializar el acceso al servicio a terceros.',
          'Cargar contenido que contenga virus, malware o código malicioso.',
          'El incumplimiento de estas normas puede resultar en la suspensión inmediata de tu cuenta.',
        ],
      },
      {
        id: 'tu-contenido',
        icon: 'FolderOpenIcon',
        title: '5. Tu contenido',
        content: [
          'Tus datos son tuyos. Los datos de ventas, inventario y clientes que ingresas a Pymio son de tu propiedad exclusiva.',
          'Nos otorgas una licencia limitada, no exclusiva y revocable para procesar y almacenar tu contenido únicamente con el fin de prestarte el servicio.',
          'No reclamamos ningún derecho de propiedad sobre tu contenido.',
          'Puedes exportar todos tus datos en cualquier momento desde la sección "Configuración > Exportar datos" de la app.',
          'Al eliminar tu cuenta, tus datos serán borrados de nuestros servidores en un plazo de 30 días, salvo obligación legal de conservarlos.',
        ],
      },
      {
        id: 'propiedad-intelectual',
        icon: 'StarIcon',
        title: '6. Propiedad intelectual',
        content: [
          'La marca Pymio, el logotipo, el diseño de la app, el código fuente y todos los materiales del servicio son propiedad de Pymio SpA y están protegidos por las leyes de propiedad intelectual chilenas e internacionales.',
          'No puedes copiar, modificar, distribuir, vender ni crear obras derivadas de ningún elemento de Pymio sin autorización escrita previa.',
          'El uso del nombre "Pymio" o de nuestros logotipos en materiales de marketing requiere autorización expresa.',
        ],
      },
      {
        id: 'integracion-sii',
        icon: 'DocumentCheckIcon',
        title: '7. Integración con el SII',
        content: [
          'La integración con el Servicio de Impuestos Internos (SII) de Chile es una función opcional que debes activar expresamente.',
          'Al activar esta función, nos autorizas a actuar como intermediario técnico para la emisión de documentos tributarios electrónicos en tu nombre.',
          'Eres el único responsable de la veracidad de los datos tributarios que ingresas. Pymio no verifica la exactitud de la información fiscal.',
          'Pymio no es un proveedor de servicios tributarios certificado por el SII. La integración facilita el proceso pero no reemplaza tu responsabilidad tributaria.',
          'Ante cualquier discrepancia con el SII, debes consultar a un contador o asesor tributario calificado.',
        ],
      },
      {
        id: 'limitacion',
        icon: 'ExclamationTriangleIcon',
        title: '8. Limitación de responsabilidad',
        content: [
          'Pymio se proporciona "tal cual" y "según disponibilidad". No garantizamos que el servicio sea libre de errores o interrupciones.',
          'En la máxima medida permitida por la ley chilena, Pymio SpA no será responsable por pérdidas de datos, pérdidas de ingresos, daños indirectos o consecuentes derivados del uso del servicio.',
          'Nuestra responsabilidad total ante ti no superará el monto que hayas pagado por el servicio en los últimos 12 meses. Para usuarios del plan gratuito, esta responsabilidad se limita a CLP $50.000.',
          'Nada en estos términos excluye o limita nuestra responsabilidad por fraude, negligencia grave o cualquier responsabilidad que no pueda excluirse bajo la Ley N° 19.496.',
        ],
      },
      {
        id: 'suspension',
        icon: 'NoSymbolIcon',
        title: '9. Suspensión y terminación',
        content: [
          'Puedes cancelar tu cuenta en cualquier momento desde "Configuración > Eliminar cuenta" en la app.',
          'Podemos suspender o terminar tu acceso si violas estos términos, con previo aviso de 7 días salvo en casos de violaciones graves o actividad ilegal.',
          'En caso de suspensión, tendrás 30 días para exportar tus datos antes de que sean eliminados.',
          'La terminación de tu cuenta no afecta las obligaciones que ya hayas contraído ni los derechos que ya hayamos adquirido.',
        ],
      },
      {
        id: 'ley-aplicable',
        icon: 'ScaleIcon',
        title: '10. Ley aplicable y resolución de disputas',
        content: [
          'Estos términos se rigen por las leyes de la República de Chile.',
          'Cualquier disputa se resolverá primero mediante negociación directa. Si no se llega a un acuerdo en 30 días, las partes podrán recurrir a mediación ante el SERNAC o a los tribunales ordinarios de justicia de Santiago, Chile.',
          'Como consumidor, tienes derecho a presentar reclamos ante el SERNAC (www.sernac.cl) o ante los Juzgados de Policía Local.',
          'Nada en estos términos limita tus derechos como consumidor bajo la Ley N° 19.496.',
        ],
      },
      {
        id: 'cambios-terminos',
        icon: 'ArrowPathIcon',
        title: '11. Cambios a los términos',
        content: [
          'Podemos actualizar estos términos para reflejar cambios en el servicio o en la legislación.',
          'Te notificaremos de cambios significativos con al menos 30 días de anticipación por correo electrónico y mediante aviso en la app.',
          'Si no estás de acuerdo con los nuevos términos, puedes cancelar tu cuenta antes de la fecha de vigencia.',
          'El uso continuado del servicio tras la fecha de vigencia implica aceptación de los términos actualizados.',
        ],
      },
      {
        id: 'contacto-terminos',
        icon: 'EnvelopeIcon',
        title: '12. Contacto',
        content: [
          'Para consultas sobre estos términos:',
          'Correo: legal@pymio.cl',
          'Dirección: Pymio SpA, Santiago, Chile',
          'Para soporte técnico: soporte@pymio.cl',
          'Respondemos en un plazo máximo de 5 días hábiles.',
        ],
      },
    ],

    backHome: 'Volver al inicio',
    viewPrivacy: 'Ver Política de Privacidad',
  },
  en: {
    badge: 'Terms of Service',
    lastUpdated: 'Last updated: September 8, 2026',
    heroTitle: 'Clear terms, no fine print.',
    heroSubtitle:
      'We want you to know exactly what to expect from Pymio and what we expect from you. No confusing legal language.',

    toc: 'Contents',
    tocItems: [
      'Acceptance of terms',
      'The Pymio service',
      'Your account',
      'Acceptable use',
      'Your content',
      'Intellectual property',
      'SII integration',
      'Limitation of liability',
      'Suspension and termination',
      'Applicable law',
      'Changes to terms',
      'Contact',
    ],

    sections: [
      {
        id: 'aceptacion',
        icon: 'CheckCircleIcon',
        title: '1. Acceptance of terms',
        content: [
          'By downloading, installing, or using the Pymio app or the website pymio.cl, you accept these Terms of Service in their entirety.',
          'If you use Pymio on behalf of a business, you represent that you have authority to accept these terms on behalf of that business.',
          'If you disagree with any of these terms, do not use the service.',
          'These terms are governed by Chilean legislation, including Law No. 19,496 on the Protection of Consumer Rights.',
        ],
      },
      {
        id: 'el-servicio',
        icon: 'DevicePhoneMobileIcon',
        title: '2. The Pymio service',
        content: [
          'Pymio is a business management application designed for small and medium Chilean entrepreneurs.',
          'The free plan includes: sales recording, inventory control, basic reports, voice assistant, and access from multiple devices.',
          'We reserve the right to modify, suspend, or discontinue service features with 30 days\' prior notice, except in cases of force majeure or urgent legal requirements.',
          'Pymio is not certified accounting software and does not replace the advice of a professional accountant. It is a support tool for daily management.',
          'We strive to maintain 99.5% monthly availability, but we do not guarantee uninterrupted service.',
        ],
      },
      {
        id: 'tu-cuenta',
        icon: 'UserCircleIcon',
        title: '3. Your account',
        content: [
          'You must be at least 18 years old to create an account, or have parental or legal guardian authorization.',
          'You are responsible for maintaining the confidentiality of your password and all activities that occur under your account.',
          'You must notify us immediately at support@pymio.cl if you suspect unauthorized access to your account.',
          'You may have only one free account per person or business. Creating multiple accounts to circumvent service limits is prohibited.',
          'We reserve the right to verify the identity of the account holder when necessary to protect the security of the service.',
        ],
      },
      {
        id: 'uso-aceptable',
        icon: 'ShieldExclamationIcon',
        title: '4. Acceptable use',
        content: [
          'Pymio is designed for legitimate business management. The following are prohibited:',
          'Using the service for illegal, fraudulent activities or activities that infringe third-party rights.',
          'Attempting to access other users\' data or Pymio\'s internal systems.',
          'Using automated tools to extract data from the service (scraping) without written authorization.',
          'Reselling, sublicensing, or commercializing access to the service to third parties.',
          'Uploading content containing viruses, malware, or malicious code.',
          'Violation of these rules may result in immediate suspension of your account.',
        ],
      },
      {
        id: 'tu-contenido',
        icon: 'FolderOpenIcon',
        title: '5. Your content',
        content: [
          'Your data is yours. The sales, inventory, and customer data you enter into Pymio is your exclusive property.',
          'You grant us a limited, non-exclusive, revocable license to process and store your content solely for the purpose of providing the service.',
          'We claim no ownership rights over your content.',
          'You can export all your data at any time from "Settings > Export data" in the app.',
          'When you delete your account, your data will be erased from our servers within 30 days, unless legally required to retain it.',
        ],
      },
      {
        id: 'propiedad-intelectual',
        icon: 'StarIcon',
        title: '6. Intellectual property',
        content: [
          'The Pymio brand, logo, app design, source code, and all service materials are the property of Pymio SpA and are protected by Chilean and international intellectual property laws.',
          'You may not copy, modify, distribute, sell, or create derivative works from any element of Pymio without prior written authorization.',
          'Use of the "Pymio" name or our logos in marketing materials requires express authorization.',
        ],
      },
      {
        id: 'integracion-sii',
        icon: 'DocumentCheckIcon',
        title: '7. SII integration',
        content: [
          'Integration with Chile\'s Internal Revenue Service (SII) is an optional feature that you must expressly activate.',
          'By activating this feature, you authorize us to act as a technical intermediary for the issuance of electronic tax documents on your behalf.',
          'You are solely responsible for the accuracy of the tax data you enter. Pymio does not verify the accuracy of tax information.',
          'Pymio is not an SII-certified tax services provider. The integration facilitates the process but does not replace your tax responsibility.',
          'For any discrepancy with the SII, you should consult a qualified accountant or tax advisor.',
        ],
      },
      {
        id: 'limitacion',
        icon: 'ExclamationTriangleIcon',
        title: '8. Limitation of liability',
        content: [
          'Pymio is provided "as is" and "as available." We do not guarantee that the service will be error-free or uninterrupted.',
          'To the maximum extent permitted by Chilean law, Pymio SpA will not be liable for data loss, loss of revenue, indirect or consequential damages arising from the use of the service.',
          'Our total liability to you will not exceed the amount you have paid for the service in the last 12 months. For free plan users, this liability is limited to CLP $50,000.',
          'Nothing in these terms excludes or limits our liability for fraud, gross negligence, or any liability that cannot be excluded under Law No. 19,496.',
        ],
      },
      {
        id: 'suspension',
        icon: 'NoSymbolIcon',
        title: '9. Suspension and termination',
        content: [
          'You can cancel your account at any time from "Settings > Delete account" in the app.',
          'We may suspend or terminate your access if you violate these terms, with 7 days\' prior notice except in cases of serious violations or illegal activity.',
          'In case of suspension, you will have 30 days to export your data before it is deleted.',
          'Termination of your account does not affect obligations you have already incurred or rights we have already acquired.',
        ],
      },
      {
        id: 'ley-aplicable',
        icon: 'ScaleIcon',
        title: '10. Applicable law and dispute resolution',
        content: [
          'These terms are governed by the laws of the Republic of Chile.',
          'Any dispute will first be resolved through direct negotiation. If no agreement is reached within 30 days, the parties may resort to mediation before SERNAC or the ordinary courts of justice in Santiago, Chile.',
          'As a consumer, you have the right to file complaints with SERNAC (www.sernac.cl) or with the Local Police Courts.',
          'Nothing in these terms limits your rights as a consumer under Law No. 19,496.',
        ],
      },
      {
        id: 'cambios-terminos',
        icon: 'ArrowPathIcon',
        title: '11. Changes to terms',
        content: [
          'We may update these terms to reflect changes in the service or legislation.',
          'We will notify you of significant changes at least 30 days in advance by email and through a notice in the app.',
          'If you disagree with the new terms, you may cancel your account before the effective date.',
          'Continued use of the service after the effective date implies acceptance of the updated terms.',
        ],
      },
      {
        id: 'contacto-terminos',
        icon: 'EnvelopeIcon',
        title: '12. Contact',
        content: [
          'For inquiries about these terms:',
          'Email: legal@pymio.cl',
          'Address: Pymio SpA, Santiago, Chile',
          'For technical support: support@pymio.cl',
          'We respond within a maximum of 5 business days.',
        ],
      },
    ],

    backHome: 'Back to home',
    viewPrivacy: 'View Privacy Policy',
  },
};

export default function TermsPage() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const tx = t[lang];

  return (
    <div className="min-h-screen bg-background">
      <Header lang={lang} onLangChange={setLang} />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-accent/6 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-primary/8 blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto px-5 md:px-8 text-center relative z-10">
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Icon name="DocumentTextIcon" size={14} />
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
                        className="text-sm text-muted-foreground hover:text-accent font-medium py-1.5 px-2 rounded-lg hover:bg-accent/8 transition-all duration-150"
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
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <Icon name={section.icon as Parameters<typeof Icon>[0]['name']} size={20} className="text-accent" />
                      </div>
                      <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
                    </div>
                    <ul className="flex flex-col gap-3">
                      {section.content.map((para, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          {i === 0 ? (
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          ) : (
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
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
                    href="/privacy"
                    className="flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-primary transition-colors duration-300 shadow-md"
                  >
                    <Icon name="ShieldCheckIcon" size={16} />
                    {tx.viewPrivacy}
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
