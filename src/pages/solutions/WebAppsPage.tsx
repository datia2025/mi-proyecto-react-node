import React from 'react';
import SectionHeader from '../../components/SectionHeader';

function WebAppsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionHeader 
        title="Aplicaciones Web" 
        subtitle="Soluciones web personalizadas para su negocio"
      />
      <div className="mt-12">
        <p className="text-lg text-gray-700">
          Desarrollamos aplicaciones web modernas y escalables que ayudan a 
          transformar y optimizar sus procesos empresariales.
        </p>
      </div>
    </div>
  );
}

export default WebAppsPage;