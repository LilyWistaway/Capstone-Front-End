import { Link } from "react-router-dom";

export default function BookingResults() {
  return (
    <main className="container">
      <section className="card stack card-center">
        <h1 className="h1">Booking options</h1>

        <p className="body card-center__body">
          This will show booking-ready options after the Booking inputs.
        </p>

        <div className="card-center__actions">
          <Link className="btn btn-primary" to="/playlists">
            Choose a playlist
          </Link>
          <Link className="btn btn-secondary" to="/booking">
            Adjust inputs
          </Link>
        </div>
      </section>
    </main>
  );
}
