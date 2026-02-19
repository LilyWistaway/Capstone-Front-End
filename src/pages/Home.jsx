import { Link } from "react-router-dom";

const quizImg = new URL("../assets/QuizImage.png", import.meta.url).href;
const browseImg = new URL("../assets/BrowseImage.png", import.meta.url).href;
const bookImg = new URL("../assets/BookImage.png", import.meta.url).href;

function HomeTile({ to, title, desc, cta, bg }) {
  return (
    <Link to={to} className="home-tile" aria-label={`${title}: ${cta}`}>
      <div className="home-tileMedia" style={{ backgroundImage: `url(${bg})` }}>
        <div className="home-tileContent">
          <h3 className="h3">{title}</h3>
          <p className="body home-tileDesc">{desc}</p>
          <span className="btn btn-primary home-tileCta">{cta}</span>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="container home-gateway">
      <h1 className="h1 home-gatewayTitle center">
        Travel that feels like you.
      </h1>

      <div className="home-gatewayGrid">
        <div className="home-gatewayQuiz">
          <HomeTile
            to="/quiz"
            title="Learn your travel style"
            desc="A quick read on what fits you lately."
            cta="Take the Quiz"
            bg={quizImg}
          />
        </div>

        <HomeTile
          to="/browse"
          title="Browse destinations"
          desc="Explore options that match your vibe."
          cta="Explore"
          bg={browseImg}
        />

        <HomeTile
          to="/booking"
          title="Booking"
          desc="Optional, when you’re ready."
          cta="View booking options"
          bg={bookImg}
        />
      </div>
    </main>
  );
}
