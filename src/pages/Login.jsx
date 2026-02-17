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
      <div className="card stack card-narrow">
        <div className="stack-tight">
          <h1 className="h1">Welcome back</h1>
          <p className="caption">
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

          {error ? <div className="caption text-error">{error}</div> : null}

          <button className="btn btn-primary" disabled={busy}>
            {busy ? "Logging in..." : "Log in"}
          </button>

          <p className="caption">
            Don’t have an account?{" "}
            <Link to="/register" className="link">
              Create one
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
