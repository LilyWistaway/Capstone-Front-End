import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Playlists from "./pages/Playlists";
import PlaylistDetail from "./pages/PlaylistDetail";
import "./styles/app.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/playlists" element={<Playlists />} />
      <Route path="/playlists/:id" element={<PlaylistDetail />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
