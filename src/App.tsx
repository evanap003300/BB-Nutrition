import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import CoachingPage from "./pages/CoachingPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    // This Router component enables all the routing functionality
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<CoachingPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
