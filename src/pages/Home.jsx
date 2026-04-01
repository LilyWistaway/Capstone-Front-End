import { Link } from "react-router-dom";

const quizImg = new URL("../assets/QuizImage.png", import.meta.url).href;
const browseImg = new URL("../assets/BrowseImage.png", import.meta.url).href;
const bookImg = new URL("../assets/BookImage.png", import.meta.url).href;

function HomeTile({ to, title, desc, cta, bg }) {
  return (
    <Link
      to={to}
      className="home-tile tile-linkGraphic"
      aria-label={`${title}: ${cta}`}
    >
      {" "}
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
        Travel that feels like you
      </h1>

      <div className="home-gatewayGrid">
        <div className="home-gatewayQuiz">
          <HomeTile
            to="/quiz"
            title="Refine your taste profile"
            desc="Answer a few questions to get personalized recommendations"
            cta="Begin"
            bg={quizImg}
          />
        </div>

        <HomeTile
          to="/browse"
          title="See curated lodging destinations"
          desc="Explore options to narrow to the best fit for you"
          cta="View options"
          bg={browseImg}
        />

        <HomeTile
          to="/booking"
          title="Compare and choose"
          desc="Side-by-side comparisons of your top picks"
          cta="Compare options"
          bg={bookImg}
        />
      </div>
    </main>
  );
}
