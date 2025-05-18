import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login/Login";
import { AppContextProvider } from "./hooks/useAppProvider";
import CreateTransaction from "./pages/CreateTransaction/CreateTransaction";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transaction" element={<CreateTransaction />} />
        </Routes>
      </Router>
    </AppContextProvider>
  );
}

export default App;
