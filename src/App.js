import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddJournal from "./pages/AddJournal";
import Analytics from "./components/Analytics";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-journal" element={<AddJournal />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
