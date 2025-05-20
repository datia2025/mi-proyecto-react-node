import React from 'react';
import SectionHeader from '../components/SectionHeader';

const WorkApproachPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionHeader 
        title="Nuestra Forma de Trabajar" 
        subtitle="Descubre cómo colaboramos con nuestros clientes para alcanzar resultados excepcionales"
      />
      
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Análisis Inicial</h3>
          <p className="text-gray-600">
            Comenzamos con una evaluación profunda de tus necesidades y objetivos empresariales para desarrollar una estrategia personalizada.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Diseño de Solución</h3>
          <p className="text-gray-600">
            Creamos una solución a medida que integra tecnología de IA con tus procesos existentes para maximizar la eficiencia.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Implementación Ágil</h3>
          <p className="text-gray-600">
            Utilizamos metodologías ágiles para una implementación rápida y efectiva, con ajustes continuos basados en feedback.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Capacitación</h3>
          <p className="text-gray-600">
            Proporcionamos entrenamiento completo a tu equipo para asegurar una adopción exitosa de las nuevas soluciones.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Monitoreo Continuo</h3>
          <p className="text-gray-600">
            Realizamos un seguimiento constante del rendimiento y hacemos optimizaciones para garantizar resultados óptimos.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Soporte Dedicado</h3>
          <p className="text-gray-600">
            Ofrecemos soporte técnico continuo y asesoramiento estratégico para mantener tu solución actualizada y eficiente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkApproachPage;