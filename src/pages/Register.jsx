import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { api } from "../api/client";

export default function Register() {
  const navigate = useNavigate();
  const location = useLocation();

  const [name, setName] = useState("");
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
      const data = await api.register({ name, email, password });
      localStorage.setItem("token", data.token);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="container task-page">
      <div className="card card--task stack card-narrow">
        <div className="stack-tight card-center">
          <h1 className="h1">Create your account</h1>
          <p className="caption card-center__body">
            Save playlists, track your travel style, and pick up where you left
            off.
          </p>
        </div>

        <form className="stack" onSubmit={handleSubmit}>
          <div className="row">
            <label>Name (optional)</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              autoComplete="name"
            />
          </div>

          <div className="row">
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="row">
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Create a password"
              autoComplete="new-password"
              required
            />
          </div>

          {error ? <div className="caption text-error">{error}</div> : null}

          <div className="card-center__actions">
            <button className="btn btn-primary" disabled={busy} type="submit">
              {busy ? "Creating..." : "Create account"}
            </button>
          </div>

          <p className="caption card-center">
            Already have an account?{" "}
            <Link to="/login" className="link">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
