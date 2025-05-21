import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <>
      <Hero
        title="Contacto"
        subtitle="¿Listo para trabajar con más inteligencia?"
        imageUrl="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#1A237E] mb-6">
                Estamos aquí para ayudarte
              </h2>
              <p className="text-gray-600 mb-8">
                Contáctanos para descubrir cómo nuestras soluciones inteligentes pueden 
                transformar tu negocio. Nuestro equipo estará encantado de atenderte y 
                responder todas tus preguntas.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-[#FF6B2B] bg-opacity-10 text-[#FF6B2B] mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A237E] mb-1">Dirección</h4>
                    <p className="text-gray-600">
                      Calle 146a No.54c-86 Of.201<br />
                      Bogotá, Colombia
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-[#FF6B2B] bg-opacity-10 text-[#FF6B2B] mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A237E] mb-1">Teléfono</h4>
                    <p className="text-gray-600">+57 324 6831933</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-[#FF6B2B] bg-opacity-10 text-[#FF6B2B] mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A237E] mb-1">Correo electrónico</h4>
                    <p className="text-gray-600">fernando@datia.digital</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-[#FF6B2B] bg-opacity-10 text-[#FF6B2B] mr-4">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A237E] mb-1">Horario de atención</h4>
                    <p className="text-gray-600">
                      Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A237E] mb-12 text-center">
            Preguntas Frecuentes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1A237E] mb-3">
                ¿Cómo puedo implementar sus soluciones en mi empresa?
              </h3>
              <p className="text-gray-600">
                El proceso comienza con una consulta inicial donde evaluamos tus necesidades. 
                Luego, desarrollamos un plan personalizado y te acompañamos en todo el proceso 
                de implementación, capacitación y seguimiento.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1A237E] mb-3">
                ¿Cuánto tiempo toma implementar una solución?
              </h3>
              <p className="text-gray-600">
                El tiempo varía según la complejidad y alcance del proyecto. Algunas soluciones 
                pueden implementarse en semanas, mientras que otras más complejas pueden tomar 
                algunos meses para una implementación completa.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1A237E] mb-3">
                ¿Las soluciones son personalizables?
              </h3>
              <p className="text-gray-600">
                Sí, todas nuestras soluciones son altamente personalizables y se adaptan a 
                las necesidades específicas de cada cliente, considerando su industria, 
                tamaño y procesos particulares.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1A237E] mb-3">
                ¿Ofrecen soporte técnico continuo?
              </h3>
              <p className="text-gray-600">
                Absolutamente. Contamos con un equipo de soporte técnico disponible para 
                resolver cualquier duda o incidencia. Además, ofrecemos planes de 
                mantenimiento y actualización continua.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;