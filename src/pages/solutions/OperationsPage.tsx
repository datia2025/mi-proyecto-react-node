import React from 'react';
import SectionHeader from '../../components/SectionHeader';

const OperationsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionHeader 
        title="Operaciones" 
        subtitle="Optimice sus operaciones con soluciones impulsadas por IA"
      />
      
      <div className="mt-12 grid gap-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Transforme sus operaciones empresariales
          </h2>
          <p className="text-gray-600 mb-6">
            Mejore la eficiencia operativa, reduzca costos y optimice procesos con nuestras 
            soluciones de IA diseñadas específicamente para operaciones empresariales.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Automatización de procesos
              </h3>
              <p className="text-gray-600">
                Identifique y automatice tareas repetitivas para liberar el potencial 
                de su equipo y reducir errores operativos.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Optimización de recursos
              </h3>
              <p className="text-gray-600">
                Utilice análisis predictivo para optimizar la asignación de recursos 
                y mejorar la eficiencia operativa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationsPage;