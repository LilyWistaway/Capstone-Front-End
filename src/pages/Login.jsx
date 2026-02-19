import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { api } from "../api/client";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const from = location.state?.from || "/";

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setBusy(true);

    try {
      const data = await api.login({ email, password });
      localStorage.setItem("token", data.token);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="container">
      <div className="card card--primary stack card-narrow">
        <div className="stack-tight card-center">
          <h1 className="h1">Welcome back</h1>
          <p className="caption card-center__body">
            Log in to save playlists and build a travel profile that evolves
            with you.
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

          <div className="card-center__actions">
            <button className="btn btn-primary" disabled={busy} type="submit">
              {busy ? "Logging in..." : "Log in"}
            </button>
          </div>

          <p className="caption card-center">
            Don’t have an account?{" "}
            <Link to="/register" className="link" state={{ from }}>
              Create one
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
