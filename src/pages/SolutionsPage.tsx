import React from 'react';
import SectionHeader from '../components/SectionHeader';

function SolutionsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionHeader 
        title="Nuestras Soluciones" 
        subtitle="Descubre cómo podemos ayudarte a transformar tu negocio con IA"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Solution categories will be added here */}
      </div>
    </div>
  );
}

export default SolutionsPage;