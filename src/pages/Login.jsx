import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../api/client";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setBusy(true);

    try {
      const data = await api.login({ email, password });
      localStorage.setItem("token", data.token);
      navigate("/playlists");
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="container">
      <div className="nav">
        <div className="brand">Wistaway Mini</div>
        <span className="subtle">Login</span>
      </div>

      <div className="card stack" style={{ maxWidth: 520 }}>
        <div>
          <h1 className="h1">Welcome back</h1>
          <p className="subtle">
            Log in to view your playlists and add inspiration links.
          </p>
        </div>

        <form className="stack" onSubmit={handleSubmit}>
          <div className="row">
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          <div className="row">
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>

          {error ? (
            <div className="subtle" style={{ color: "#b91c1c" }}>
              {error}
            </div>
          ) : null}

          <button disabled={busy}>{busy ? "Logging in..." : "Log in"}</button>

          <p className="subtle">
            Tip: For now, register users via the backend test script, then login
            here.{" "}
            <Link
              to="/playlists/1"
              className="subtle"
              style={{ textDecoration: "underline" }}
            >
              Go to a playlist detail (requires token)
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
