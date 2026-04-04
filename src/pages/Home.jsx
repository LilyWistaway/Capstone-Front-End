import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BeachIcon() {
  return (
    <svg viewBox="0 0 24 24" className="quiz-icon" aria-hidden="true">
      <path
        d="M3 17c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 2-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M6 14a5 5 0 0 1 10 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M18 7h.01"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function OutdoorIcon() {
  return (
    <svg viewBox="0 0 24 24" className="quiz-icon" aria-hidden="true">
      <path
        d="M3 18l7-9 5 6 6-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M3 18h18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FoodIcon() {
  return (
    <svg viewBox="0 0 24 24" className="quiz-icon" aria-hidden="true">
      <path
        d="M7 4v7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M10 4v7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M8.5 11v9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M16 4c1.6 1.6 1.6 4.1 0 5.7L15 10.7V20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CultureIcon() {
  return (
    <svg viewBox="0 0 24 24" className="quiz-icon" aria-hidden="true">
      <path
        d="M4 20h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M6 20V10h12v10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M3 10 12 4l9 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UrbanIcon() {
  return (
    <svg viewBox="0 0 24 24" className="quiz-icon" aria-hidden="true">
      <path
        d="M4 20V8l6-3v15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M10 20V4l10 4v12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WellnessIcon() {
  return (
    <svg viewBox="0 0 24 24" className="quiz-icon" aria-hidden="true">
      <path
        d="M12 20c4.5-3.1 7-6 7-9.3A4.2 4.2 0 0 0 12 8a4.2 4.2 0 0 0-7 2.7C5 14 7.5 16.9 12 20Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalmIcon() {
  return (
    <svg viewBox="0 0 24 24" className="quiz-icon" aria-hidden="true">
      <path
        d="M4 10c2 0 2-1.5 4-1.5S10 10 12 10s2-1.5 4-1.5S18 10 20 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M4 15c2 0 2-1.5 4-1.5S10 15 12 15s2-1.5 4-1.5S18 15 20 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ElectricIcon() {
  return (
    <svg viewBox="0 0 24 24" className="quiz-icon" aria-hidden="true">
      <path
        d="m13 2-7 11h5l-1 9 8-12h-5l1-8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CozyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="quiz-icon" aria-hidden="true">
      <path
        d="M7 20v-6a5 5 0 0 1 10 0v6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M5 12.5 12 6l7 6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CuriousIcon() {
  return (
    <svg viewBox="0 0 24 24" className="quiz-icon" aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M12 8.2a2.3 2.3 0 0 1 1.7 3.9c-.8.7-1.5 1.1-1.5 2.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M12 17.5h.01"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RomanticIcon() {
  return (
    <svg viewBox="0 0 24 24" className="quiz-icon" aria-hidden="true">
      <path
        d="M12 20c4.5-3.1 7-6 7-9.3A4.2 4.2 0 0 0 12 8a4.2 4.2 0 0 0-7 2.7C5 14 7.5 16.9 12 20Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AdventurousIcon() {
  return (
    <svg viewBox="0 0 24 24" className="quiz-icon" aria-hidden="true">
      <path
        d="M12 3 14.8 8.7 21 9.6l-4.5 4.3 1.1 6.1L12 17l-5.6 3 1.1-6.1L3 9.6l6.2-.9L12 3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const tripTypeOptions = [
  {
    value: "beach",
    title: "Beach",
    desc: "Coastal, warm-weather escapes",
    icon: <BeachIcon />,
  },
  {
    value: "outdoor",
    title: "Outdoor",
    desc: "Nature, hiking, and active trips",
    icon: <OutdoorIcon />,
  },
  {
    value: "food-drink",
    title: "Food & Drink",
    desc: "Meals, wine, and local flavor",
    icon: <FoodIcon />,
  },
  {
    value: "culture",
    title: "Culture",
    desc: "Cities, landmarks, and depth",
    icon: <CultureIcon />,
  },
  {
    value: "urban",
    title: "Urban",
    desc: "Fast-paced, vibrant city energy",
    icon: <UrbanIcon />,
  },
  {
    value: "wellness",
    title: "Wellness",
    desc: "Quiet, restorative, and calm",
    icon: <WellnessIcon />,
  },
];

const companionOptions = [
  { value: "solo", label: "Solo" },
  { value: "couple", label: "Couple" },
  { value: "group", label: "Friends / Group" },
  { value: "family", label: "Family" },
];

const moodOptions = [
  {
    value: "calm",
    title: "Calm",
    desc: "Quiet, slow, low-stimulation",
    icon: <CalmIcon />,
  },
  {
    value: "electric",
    title: "Electric",
    desc: "Lively, busy, high-energy",
    icon: <ElectricIcon />,
  },
  {
    value: "cozy",
    title: "Cozy",
    desc: "Warm, intimate, tucked away",
    icon: <CozyIcon />,
  },
  {
    value: "curious",
    title: "Curious",
    desc: "Exploratory, cultural, thoughtful",
    icon: <CuriousIcon />,
  },
  {
    value: "romantic",
    title: "Romantic",
    desc: "Intimate, atmospheric, special",
    icon: <RomanticIcon />,
  },
  {
    value: "adventurous",
    title: "Adventurous",
    desc: "Active, bold, slightly outside comfort zone",
    icon: <AdventurousIcon />,
  },
];

function SelectionTile({ option, selected, onSelect }) {
  const className = selected
    ? "tile tile--interactive tile--selected home-formTile"
    : "tile tile--interactive home-formTile";

  return (
    <button
      type="button"
      className={className}
      onClick={() => onSelect(option.value)}
    >
      <div className="home-formTileContent">
        <div className="home-formTileIcon">{option.icon}</div>
        <h3 className="home-formTileTitle">{option.title}</h3>
        <p className="home-formTileDesc">{option.desc}</p>
      </div>
    </button>
  );
}

export default function Home() {
  const navigate = useNavigate();

  const [tripType, setTripType] = useState("");
  const [companion, setCompanion] = useState("");
  const [mood, setMood] = useState("");

  const canSubmit = Boolean(tripType && companion && mood);

  function handleSubmit() {
    if (!canSubmit) return;

    navigate("/browse/results", {
      state: {
        tripType,
        companion,
        mood,
      },
    });
  }

  return (
    <main className="container home-v2">
      <section className="home-v2Hero">
        <div className="home-v2HeroText">
          <h1 className="h1 home-v2Headline">
            Too many trips look good.
            <br />
            You don’t know which one is actually right.
          </h1>

          <p className="body home-v2Subtext">
            Wistaway helps you compare real options so you can decide with
            confidence.
          </p>
        </div>

        <div className="home-v2HeroImageWrap">
          <img
            src="/BrowseImage.png"
            alt=""
            className="home-v2HeroImage"
            loading="eager"
          />
        </div>
      </section>

      <section className="home-v2Framing">
        <p className="body home-v2FramingText">
          Instead of endless searching, start with a few details. We’ll show you
          a small set of trips that actually fit so you can see the differences
          and choose what feels right.
        </p>
      </section>

      <section className="card home-v2FormCard">
        <div className="home-v2FormHeader">
          <h2 className="h2 home-v2FormTitle">Start with a few details</h2>
          <p className="caption home-v2FormHelper">Takes about 10 seconds</p>
        </div>

        <div className="home-v2Field">
          <label className="home-v2Label">
            What kind of trip are you looking for?
          </label>
          <div className="home-v2TripGrid">
            {tripTypeOptions.map((option) => (
              <SelectionTile
                key={option.value}
                option={option}
                selected={tripType === option.value}
                onSelect={setTripType}
              />
            ))}
          </div>
        </div>

        <div className="home-v2Field">
          <label className="home-v2Label">Who are you traveling with?</label>
          <div className="home-v2Segmented">
            {companionOptions.map((option) => {
              const selected = companion === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  className={
                    selected
                      ? "home-v2Segment home-v2Segment--selected"
                      : "home-v2Segment"
                  }
                  onClick={() => setCompanion(option.value)}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="home-v2Field">
          <label className="home-v2Label">
            What kind of energy do you want?
          </label>
          <div className="home-v2TripGrid">
            {moodOptions.map((option) => (
              <SelectionTile
                key={option.value}
                option={option}
                selected={mood === option.value}
                onSelect={setMood}
              />
            ))}
          </div>
        </div>

        <div className="home-v2CtaBlock">
          <button
            type="button"
            className="btn btn-primary home-v2Cta"
            disabled={!canSubmit}
            onClick={handleSubmit}
          >
            Show my options
          </button>
        </div>
      </section>
    </main>
  );
}
