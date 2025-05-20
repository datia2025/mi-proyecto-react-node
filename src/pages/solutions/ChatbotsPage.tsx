import React from 'react';
import SectionHeader from '../../components/SectionHeader';

function ChatbotsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionHeader 
        title="Chatbots Inteligentes" 
        subtitle="Automatice la atención al cliente con chatbots impulsados por IA"
      />
      <div className="mt-12">
        <p className="text-lg text-gray-700">
          Nuestros chatbots inteligentes proporcionan atención al cliente 24/7, 
          mejorando la experiencia del usuario y reduciendo costos operativos.
        </p>
      </div>
    </div>
  );
}

export default ChatbotsPage;