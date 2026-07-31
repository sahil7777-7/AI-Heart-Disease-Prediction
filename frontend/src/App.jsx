import Navbar from './components/Navbar';
import PredictionForm from './components/PredictionForm';
import Footer from './components/Footer';
import MedicalBackground from './components/MedicalBackground';
import HeartHero from './components/HeartHero';

function App() {
  return (
    <div className="app-viewport">
      <MedicalBackground />
      <Navbar />
      <main className="main-layout">
        <HeartHero />
        <PredictionForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
