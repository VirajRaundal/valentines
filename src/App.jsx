import { Routes, Route } from 'react-router-dom';
import ValentineQuestion from './pages/ValentineQuestion';
import RichGifts from './pages/RichGifts';
import RealGifts from './pages/RealGifts';
import FuturePlans from './pages/FuturePlans';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ValentineQuestion />} />
      <Route path="/rich-gifts" element={<RichGifts />} />
      <Route path="/real-gifts" element={<RealGifts />} />
      <Route path="/plans" element={<FuturePlans />} />
    </Routes>
  );
}

export default App;
