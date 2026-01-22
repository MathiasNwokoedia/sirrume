import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { HostingPage } from './pages/HostingPage';
import { CoachingPage } from './pages/CoachingPage';
import { TalentRescuePage } from './pages/TalentRescuePage';
import { BookingsPage } from './pages/BookingsPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />;
      case 'hosting':
        return <HostingPage onNavigate={setCurrentPage} />;
      case 'coaching':
        return <CoachingPage onNavigate={setCurrentPage} />;
      case 'talent-rescue':
        return <TalentRescuePage onNavigate={setCurrentPage} />;
      case 'bookings':
        return <BookingsPage onNavigate={setCurrentPage} />;
      case 'blog':
        return <BlogPage onNavigate={setCurrentPage} />;
      case 'contact':
        return <ContactPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
