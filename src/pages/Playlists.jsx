import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/client";

const logo = new URL("../assets/wistaway-logo.svg", import.meta.url).href;

export default function Playlists() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [playlists, setPlaylists] = useState([]);

  async function load() {
    setError("");
    setLoading(true);

    try {
      const data = await api.getPlaylists();
      setPlaylists(data.playlists || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="container">
      <div className="nav">
        <div className="brand">
          <img src={logo} alt="Wistaway" className="logo" />
        </div>
        <Link to="/login" className="link">
          Login
        </Link>
      </div>

      <div className="card stack">
        <div>
          <h1 className="h1">Your playlists</h1>
          <p className="caption">
            Open a playlist to view details and add inspiration links.
          </p>
        </div>

        {loading ? (
          <div className="caption">Loading…</div>
        ) : error ? (
          <div className="caption text-error">{error}</div>
        ) : playlists.length === 0 ? (
          <div className="caption">No playlists yet</div>
        ) : (
          <div className="stack">
            {playlists.map((p) => (
              <Link
                key={p.id}
                to={`/playlists/${p.id}`}
                className="card card-compact"
              >
                <div className="card-row">
                  <div className="stack-tight">
                    <div className="title-sm">{p.title}</div>
                    <div className="caption">
                      {p.description || "No description."}
                    </div>
                  </div>
                  <span className="badge">Open</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
