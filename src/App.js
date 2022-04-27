import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, SignUpPage } from "./Pages";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
