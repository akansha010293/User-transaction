import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
