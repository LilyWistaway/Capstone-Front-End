import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../api/client";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setBusy(true);

    try {
      const data = await api.register({ name, email, password });
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
        <Link
          to="/login"
          className="subtle"
          style={{ textDecoration: "underline" }}
        >
          Log in
        </Link>
      </div>

      <div className="card stack" style={{ maxWidth: 520 }}>
        <div>
          <h1 className="h1">Create your account</h1>
          <p className="subtle">Start exploring and saving inspiration.</p>
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

          {error ? (
            <div className="subtle" style={{ color: "#b91c1c" }}>
              {error}
            </div>
          ) : null}

          <button disabled={busy}>
            {busy ? "Creating..." : "Create account"}
          </button>

          <p className="subtle">
            Already have an account?{" "}
            <Link to="/login" style={{ textDecoration: "underline" }}>
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
