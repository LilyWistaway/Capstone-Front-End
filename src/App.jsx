import { Routes, Route } from "react-router-dom";

import TopNav from "./components/TopNav";

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
  return (
    <div className="app-shell">
      <TopNav />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/playlists/:playlistId" element={<PlaylistDetail />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/results" element={<QuizResults />} />
        <Route path="/travel-style" element={<TravelStyle />} />
        <Route path="/booking" element={<Booking />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
