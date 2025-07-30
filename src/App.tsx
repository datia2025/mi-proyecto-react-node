import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LearnPage from './pages/LearnPage';
import StoriesPage from './pages/StoriesPage';
import ContactPage from './pages/ContactPage';
import WorkApproachPage from './pages/WorkApproachPage';
import SolutionsPage from './pages/SolutionsPage';
import HumanTalentPage from './pages/solutions/HumanTalentPage';
import FinancePage from './pages/solutions/FinancePage';
import OperationsPage from './pages/solutions/OperationsPage';
import SmartMarketingPage from './pages/solutions/SmartMarketingPage';
import ChatbotsPage from './pages/solutions/ChatbotsPage';
import WebAppsPage from './pages/solutions/WebAppsPage';
import LearnPageDiscount from './pages/learn-discount'; 

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/aprender-con-ia" element={<LearnPage />} />
            <Route path="/historias" element={<StoriesPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/forma-de-trabajar" element={<WorkApproachPage />} />
            <Route path="/soluciones" element={<SolutionsPage />} />
            <Route path="/soluciones/talento-humano" element={<HumanTalentPage />} />
            <Route path="/soluciones/finanzas" element={<FinancePage />} />
            <Route path="/soluciones/operaciones" element={<OperationsPage />} />
            <Route path="/soluciones/marketing" element={<SmartMarketingPage />} />
            <Route path="/soluciones/chatbots" element={<ChatbotsPage />} />
            <Route path="/soluciones/apps-web" element={<WebAppsPage />} />
            <Route path="/learn-discount" element={<LearnPageDiscount />} /> {/* <-- AÑADE ESTA LÍNEA */}

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;