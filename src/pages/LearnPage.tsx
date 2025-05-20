import React from 'react';
import SectionHeader from '../components/SectionHeader';

function LearnPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionHeader 
        title="Aprende con IA" 
        subtitle="Descubre cómo la inteligencia artificial puede transformar tu negocio"
      />
      
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Recursos Educativos</h3>
          <p className="text-gray-600">
            Accede a nuestra biblioteca de recursos para aprender sobre las últimas tendencias en IA
            y cómo implementarlas en tu empresa.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Tutoriales Prácticos</h3>
          <p className="text-gray-600">
            Aprende paso a paso cómo utilizar diferentes herramientas de IA para mejorar
            la eficiencia de tu negocio.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Casos de Estudio</h3>
          <p className="text-gray-600">
            Explora ejemplos reales de cómo otras empresas han implementado soluciones
            de IA exitosamente.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LearnPage;