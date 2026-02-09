import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/client";

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
        <div className="brand">Wistaway Mini</div>
        <Link
          to="/login"
          className="subtle"
          style={{ textDecoration: "underline" }}
        >
          Login
        </Link>
      </div>

      <div className="card stack">
        <div>
          <h1 className="h1">Your playlists</h1>
          <p className="subtle">
            Click a playlist to view details and add inspiration links.
          </p>
        </div>

        {loading ? (
          <div className="subtle">Loading…</div>
        ) : error ? (
          <div className="subtle" style={{ color: "#b91c1c" }}>
            {error}
          </div>
        ) : playlists.length === 0 ? (
          <div className="subtle">
            No playlists yet. Create one in the backend (or we’ll add a create
            form next).
          </div>
        ) : (
          <div className="stack">
            {playlists.map((p) => (
              <Link
                key={p.id}
                to={`/playlists/${p.id}`}
                className="card"
                style={{ padding: 14 }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 10,
                  }}
                >
                  <div className="stack" style={{ gap: 6 }}>
                    <strong style={{ fontSize: 14 }}>{p.title}</strong>
                    <div className="subtle">
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
