import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Sidebar } from "../src/Components";
import { HomePage, LoginPage, NoteTakingPage, SignUpPage } from "./Pages";
import { useMainContext } from "./Context";
import { RequiresAuth } from "./Components";
function App() {
  const { openSidebar } = useMainContext();
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      <div
        className={`sidebar-container ${
          openSidebar ? "drawer-open" : "drawer-close"
        }`}
      >
        {location.pathname === "/note-taking-page" && <Sidebar />}
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route
          path="/note-taking-page"
          element={
            <RequiresAuth>
              <NoteTakingPage />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
