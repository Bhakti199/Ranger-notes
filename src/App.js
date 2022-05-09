import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar, NavbarMblView, RequiresAuth } from "../src/Components";
import {
  ArchivePage,
  HomePage,
  LoginPage,
  NoteTakingPage,
  SignUpPage,
  TrashPage,
} from "./Pages";
import { useMainContext } from "./Context";

function App() {
  const { openSidebar } = useMainContext();
  const location = useLocation();
  return (
    <div className="App">
      <div className="navbar-desktop-view">
        <Navbar />
      </div>
      <div className="navbar-mbl-view">
        <NavbarMblView />
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
        <Route
          path="/archives"
          element={
            <RequiresAuth>
              <ArchivePage />
            </RequiresAuth>
          }
        />

        <Route
          path="/trash"
          element={
            <RequiresAuth>
              <TrashPage />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
