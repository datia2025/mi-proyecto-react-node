import React from 'react';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import TestimonialCard from '../components/TestimonialCard';

const StoriesPage: React.FC = () => {
  return (
    <>
      <Hero
        title="Historias de Transformación"
        subtitle="Testimonios reales. Cambios duraderos."
        imageUrl="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Casos de Éxito"
            subtitle="Descubre cómo nuestras soluciones han transformado organizaciones"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Carlos Rodríguez"
              position="Director de RRHH"
              company="Global Tech"
              testimonial="La implementación de las soluciones de Datia transformó completamente nuestra gestión del talento. Redujimos el tiempo en procesos administrativos en un 60% y mejoramos significativamente la satisfacción de nuestros empleados."
              imageUrl="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              rating={5}
            />

            <TestimonialCard
              name="Ana Martínez"
              position="CFO"
              company="Innovatech"
              testimonial="Las soluciones financieras de Datia nos permitieron automatizar nuestras conciliaciones bancarias y tener una visión en tiempo real de nuestros KPIs. La eficiencia en nuestro departamento financiero aumentó dramáticamente."
              imageUrl="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              rating={5}
            />

            <TestimonialCard
              name="Miguel Sánchez"
              position="Director de Operaciones"
              company="Logística Express"
              testimonial="La implementación del sistema de gestión de operaciones de Datia revolucionó nuestra forma de trabajar. Ahora tenemos control total sobre nuestros procesos y una mejora significativa en la eficiencia operativa."
              imageUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              rating={5}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#ECEFF1]">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Impacto Real"
            subtitle="Resultados medibles que transforman organizaciones"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#1A237E] mb-6">Sector Financiero</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-[#FF6B2B] pl-4">
                  <p className="text-gray-600 mb-4">
                    "La automatización de nuestros procesos financieros con Datia resultó en:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Reducción del 70% en tiempo de conciliaciones</li>
                    <li>Mejora del 45% en precisión de reportes</li>
                    <li>ROI positivo en menos de 6 meses</li>
                  </ul>
                </div>
                <p className="text-[#1A237E] font-medium">
                  - Banco Nacional de Inversiones
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#1A237E] mb-6">Retail</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-[#03A9F4] pl-4">
                  <p className="text-gray-600 mb-4">
                    "La implementación del sistema de gestión de inventario nos permitió:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Reducir pérdidas de inventario en un 35%</li>
                    <li>Mejorar la rotación de productos en un 25%</li>
                    <li>Aumentar la satisfacción del cliente en un 40%</li>
                  </ul>
                </div>
                <p className="text-[#1A237E] font-medium">
                  - Supermercados Unidos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Transformación por Industria"
            subtitle="Soluciones adaptadas a cada sector"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1A237E] mb-4">Manufactura</h3>
              <p className="text-gray-600 mb-4">
                Optimización de procesos productivos y control de calidad mediante 
                automatización inteligente.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Reducción de desperdicios: 30%</li>
                <li>• Mejora en productividad: 45%</li>
                <li>• Optimización de costos: 25%</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1A237E] mb-4">Servicios</h3>
              <p className="text-gray-600 mb-4">
                Transformación de la experiencia del cliente mediante 
                automatización y análisis predictivo.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Satisfacción del cliente: +40%</li>
                <li>• Tiempo de respuesta: -60%</li>
                <li>• Retención de clientes: +35%</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1A237E] mb-4">Tecnología</h3>
              <p className="text-gray-600 mb-4">
                Aceleración de desarrollo y mejora en la entrega de 
                servicios tecnológicos.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Tiempo de desarrollo: -50%</li>
                <li>• Calidad del código: +40%</li>
                <li>• Eficiencia operativa: +60%</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1A237E] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Listo para escribir tu propia historia de éxito?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Únete a las organizaciones que ya han transformado su forma de trabajar 
            con nuestras soluciones inteligentes.
          </p>
          <a 
            href="/contacto" 
            className="btn bg-[#FF6B2B] text-white hover:bg-opacity-90"
          >
            Comienza tu transformación
          </a>
        </div>
      </section>
    </>
  );
};

export default StoriesPage;