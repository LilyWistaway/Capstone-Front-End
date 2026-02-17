import { Link, useNavigate } from "react-router-dom";

export default function Quiz() {
  const navigate = useNavigate();

  function handleStart() {
    navigate("/quiz/results");
  }

  return (
    <main className="container">
      <section className="card stack">
        <h1 className="h1">Discover your travel style</h1>
        <p className="body">
          A quick set of questions that turns preferences into a clear style
          snapshot.
        </p>

        <div className="inline-row">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleStart}
          >
            Start Quiz
          </button>
          <Link className="btn btn-secondary" to="/browse">
            Skip to Browsing
          </Link>
        </div>
      </section>
    </main>
  );
}
