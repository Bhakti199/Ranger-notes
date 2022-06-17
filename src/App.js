import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
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
import { ProfilePage } from "./Pages/ProfilePage/ProfilePage";

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

        <Route
          path="/profile"
          element={
            <RequiresAuth>
              <ProfilePage />
            </RequiresAuth>
          }
        />
      </Routes>
      <Toaster
        position="top-center"
        toastOptions={{ className: "toast", duration: 3000 }}
      />
    </div>
  );
}

export default App;
