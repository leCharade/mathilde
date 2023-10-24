import { Routes, Route } from 'react-router-dom';

import Accueil from './pages/1_Accueil';
import Grossesse from './pages/2_Grossesse';
import NouveauNes from './pages/3_NouveauNes';
import EnfantsBebe from './pages/4_EnfantsBebe';
import PremierAnniversaire from './pages/5_1erAnniversaire';
import Famille from './pages/6_Famille';
import Tarifs from './pages/7_Tarifs';
import Contact from './pages/8_Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="background-block background-block__main">
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/grossesse" element={<Grossesse />} />
            <Route path="/nouveau-nes" element={<NouveauNes />} />
            <Route path="/enfants-bebe" element={<EnfantsBebe />} />
            <Route path="/1er-anniversaire" element={<PremierAnniversaire />} />
            <Route path="/famille" element={<Famille />} />
            <Route path="/tarifs" element={<Tarifs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
      <Footer />
      </>
  );
}

export default App;
