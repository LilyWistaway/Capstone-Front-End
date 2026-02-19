import { Routes, Route, useLocation } from "react-router-dom";

import TopNav from "./components/TopNav";
import RequireAuth from "./components/RequireAuth";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Playlists from "./pages/Playlists";
import PlaylistDetail from "./pages/PlaylistDetail";
import Quiz from "./pages/Quiz";
import QuizResults from "./pages/QuizResults";
import TravelStyle from "./pages/TravelStyle";
import Booking from "./pages/Booking";
import NotFound from "./pages/NotFound";

import "./styles/design-system.css";

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className={`app-shell${isHome ? " app-shell--home" : ""}`}>
      <TopNav />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/booking" element={<Booking />} />

        <Route
          path="/playlists"
          element={
            <RequireAuth
              title="Log in to view your playlists"
              message="Your playlists live with your account so you can save and return anytime."
            >
              <Playlists />
            </RequireAuth>
          }
        />

        <Route
          path="/playlists/:playlistId"
          element={
            <RequireAuth
              title="Log in to view this playlist"
              message="Playlists are saved to your account so you can come back to them anytime."
            >
              <PlaylistDetail />
            </RequireAuth>
          }
        />

        <Route
          path="/travel-style"
          element={
            <RequireAuth
              title="Log in to view your travel style"
              message="Your travel style is built from what you explore and save."
            >
              <TravelStyle />
            </RequireAuth>
          }
        />

        <Route
          path="/quiz/results"
          element={
            <RequireAuth
              title="Log in to view your quiz results"
              message="Results are tied to your account so they can evolve over time."
            >
              <QuizResults />
            </RequireAuth>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
