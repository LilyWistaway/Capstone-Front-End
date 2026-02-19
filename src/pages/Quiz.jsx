import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" className="quiz-icon" aria-hidden="true">
      <path
        d="M20 4c-7.5 0-13 3.7-15.7 10.2-.7 1.7-.4 3.7.9 5 1.3 1.3 3.3 1.6 5 .9C16.3 17 20 11.5 20 4Z"
        fill="none"
        stroke="#6FAE7A"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M5 19c4.2-4.2 8.2-6.9 13-9"
        fill="none"
        stroke="#6FAE7A"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BulbIcon() {
  return (
    <svg viewBox="0 0 24 24" className="quiz-icon" aria-hidden="true">
      <path
        d="M9 18h6"
        fill="none"
        stroke="#17BEBB"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M10 21h4"
        fill="none"
        stroke="#17BEBB"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M12 2a7 7 0 0 0-4 12c.6.5 1 1.3 1 2.1V17h6v-.9c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2Z"
        fill="none"
        stroke="#17BEBB"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PeopleHeartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="quiz-icon" aria-hidden="true">
      <path
        d="M8.2 12.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
        fill="none"
        stroke="#6B7280"
        strokeWidth="1.7"
      />
      <path
        d="M15.8 11.4a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"
        fill="none"
        stroke="#6B7280"
        strokeWidth="1.7"
      />
      <path
        d="M3.5 20.2c.6-3.3 3-5.2 5.7-5.2s5.1 1.9 5.7 5.2"
        fill="none"
        stroke="#6B7280"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M13.3 15.9c1 .2 2 .7 2.8 1.5.7.7 1.2 1.6 1.4 2.8"
        fill="none"
        stroke="#6B7280"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M19.3 13.1c.7-.6 1.8-.6 2.5.1.7.7.7 1.8 0 2.5l-2 2-2-2c-.7-.7-.7-1.8 0-2.5.7-.7 1.8-.7 2.5-.1Z"
        fill="#F29CA3"
        opacity="0.95"
      />
    </svg>
  );
}

function MountainIcon() {
  return (
    <svg viewBox="0 0 24 24" className="quiz-icon" aria-hidden="true">
      <path
        d="M3 18l7-9 5 6 6-8"
        fill="none"
        stroke="#17BEBB"
        strokeWidth="1.7"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M14 10l2 2"
        fill="none"
        stroke="#17BEBB"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M3 18h18"
        fill="none"
        stroke="#17BEBB"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconForKey({ optionKey }) {
  if (optionKey === "A") return <LeafIcon />;
  if (optionKey === "B") return <BulbIcon />;
  if (optionKey === "C") return <PeopleHeartIcon />;
  return <MountainIcon />;
}

export default function Quiz() {
  const navigate = useNavigate();

  const questions = useMemo(
    () => [
      {
        id: "q1",
        title: "What do you hope to feel at the end of a trip?",
        subtext: "Choose the one that feels most true.",
        options: [
          {
            key: "A",
            label: "Rested",
            desc: "Quiet mornings, unhurried days.",
            example: "A lakeside cabin with no agenda.",
          },
          {
            key: "B",
            label: "Inspired",
            desc: "New ideas, beauty, creativity.",
            example: "Five days exploring Copenhagen.",
          },
          {
            key: "C",
            label: "Connected",
            desc: "Meaningful experiences, belonging.",
            example: "A cooking class in Oaxaca.",
          },
          {
            key: "D",
            label: "Changed",
            desc: "Challenge, growth, perspective shift.",
            example: "A trek in Patagonia.",
          },
        ],
      },
      {
        id: "q2",
        title: "How much stimulation feels good on a trip?",
        subtext: "Choose the one that feels most true.",
        options: [
          {
            key: "A",
            label: "Low",
            desc: "Quiet, calm, spacious.",
            example: "Long mornings and one plan a day.",
          },
          {
            key: "B",
            label: "Moderate",
            desc: "Steady, not overwhelming.",
            example: "A few highlights, lots of downtime.",
          },
          {
            key: "C",
            label: "High",
            desc: "Lots happening each day.",
            example: "Markets, galleries, nights out.",
          },
          {
            key: "D",
            label: "Intense",
            desc: "Immersion and buzz.",
            example: "Peak season: constant motion.",
          },
        ],
      },
      {
        id: "q3",
        title: "How structured do you like your days?",
        subtext: "Choose the one that feels most true.",
        options: [
          {
            key: "A",
            label: "Fully mapped",
            desc: "Plans and reservations.",
            example: "Timed tickets + daily itinerary.",
          },
          {
            key: "B",
            label: "Light structure",
            desc: "Anchors + flexibility.",
            example: "2–3 anchors, room to wander.",
          },
          {
            key: "C",
            label: "Improvised",
            desc: "Go-with-the-flow.",
            example: "Book as you go.",
          },
          {
            key: "D",
            label: "Spontaneous",
            desc: "Decide day by day.",
            example: "Only first night booked.",
          },
        ],
      },
      {
        id: "q4",
        title: "What environments draw you in most?",
        subtext: "Choose the one that feels most true.",
        options: [
          {
            key: "A",
            label: "Walkable cities",
            desc: "Culture and design.",
            example: "Cafés, museums, texture.",
          },
          {
            key: "B",
            label: "Nature-forward",
            desc: "Land and water.",
            example: "Trails and open air.",
          },
          {
            key: "C",
            label: "Hidden gems",
            desc: "Slow local rhythm.",
            example: "Small-town charm.",
          },
          {
            key: "D",
            label: "Dynamic hubs",
            desc: "Social energy.",
            example: "Nightlife and buzz.",
          },
        ],
      },
      {
        id: "q5",
        title: "When choosing between comfort and novelty, you usually…",
        subtext: "Choose the one that feels most true.",
        options: [
          {
            key: "A",
            label: "Choose comfort",
            desc: "Familiar feels good.",
            example: "Return to a favorite place.",
          },
          {
            key: "B",
            label: "Mostly comfort",
            desc: "Safe base, small newness.",
            example: "Trusted stay, new city.",
          },
          {
            key: "C",
            label: "Mostly novelty",
            desc: "New with support.",
            example: "New place, solid base.",
          },
          {
            key: "D",
            label: "Choose novelty",
            desc: "New first.",
            example: "Remote or uncommon destinations.",
          },
        ],
      },
    ],
    [],
  );

  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const total = questions.length;
  const current = questions[index];
  const selected = answers[current?.id];

  function start() {
    setStarted(true);
  }
  function pick(optionKey) {
    setAnswers((prev) => ({ ...prev, [current.id]: optionKey }));
  }
  function next() {
    setIndex((prev) => Math.min(prev + 1, total - 1));
  }
  function back() {
    setIndex((prev) => Math.max(prev - 1, 0));
  }
  function backFromFirst() {
    setStarted(false);
    setIndex(0);
  }
  function finish() {
    localStorage.setItem("hasCompletedOnboardingQuiz", "true");
    navigate("/quiz/results");
  }

  function tileClass(optionKey) {
    const base = "tile tile--interactive tile--quizShot";
    return selected === optionKey ? `${base} tile--selected` : base;
  }

  return (
    <main className="container task-page">
      {!started ? (
        <section className="card card--hero card--task stack card-center">
          {" "}
          <h1 className="h1">Discover your travel style</h1>
          <p className="body card-center__body">
            Answer five quick questions. Choose what reflects your normal travel
            style.
          </p>
          <div className="card-center__actions">
            <button type="button" className="btn btn-primary" onClick={start}>
              Start Quiz
            </button>
          </div>
          <p className="caption card-center__body">
            You can explore without an account. Register or log in to see and
            save your results.
          </p>
        </section>
      ) : (
        <section className="card card--hero card--task stack quiz-shot card-center">
          {" "}
          <div className="stack-tight">
            <div className="quiz-step">
              Question {index + 1} of {total}
            </div>
            <h2 className="quiz-question">{current.title}</h2>
            <p className="quiz-subtext">{current.subtext}</p>
          </div>
          <div className="tile-grid tile-grid--2x2 tile-grid--cluster">
            {current.options.map((opt) => (
              <button
                key={opt.key}
                type="button"
                className={tileClass(opt.key)}
                onClick={() => pick(opt.key)}
              >
                <div className="quiz-shotTile">
                  <div className="quiz-shotIcon">
                    <IconForKey optionKey={opt.key} />
                  </div>

                  <h3 className="quiz-shotTitle">{opt.label}</h3>

                  <hr className="quiz-shotRule" />

                  <p className="quiz-shotDesc">{opt.desc}</p>

                  <hr className="quiz-shotRule" />

                  <p className="quiz-shotExample">
                    <span className="quiz-shotExampleLabel">Example:</span>{" "}
                    {opt.example}
                  </p>
                </div>
              </button>
            ))}
          </div>
          <div className="quiz-footer">
            <div />
            <div className="quiz-footerRight">
              <button
                type="button"
                className="btn btn-ghost"
                onClick={index === 0 ? backFromFirst : back}
              >
                Back
              </button>

              {index < total - 1 ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={next}
                  disabled={!selected}
                >
                  Continue
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={finish}
                  disabled={!selected}
                >
                  Finish
                </button>
              )}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
