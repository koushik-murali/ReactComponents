import Compage from "./Compage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Compage/>} />
      </Routes>
    </Router>
  );
}