import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AboutPage from "./pages/AboutPage";
import CoachingPage from "./pages/CoachingPage";
import HomePage from "./pages/HomePage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    // This Router component enables all the routing functionality
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<AboutPage />} />
        <Route path="/about" element={<CoachingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
