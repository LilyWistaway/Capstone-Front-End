import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../api/client";

const STARTERS = [
  {
    title: "Cozy Forest Cabins",
    cover: "/CabinPlaylist.png",
    slug: "cozy-forest-cabins",
  },
  {
    title: "Beach Getaways",
    cover: "/BeachPlaylist.png",
    slug: "beach-getaways",
  },
  {
    title: "High Energy Urban Life",
    cover: "/UrbanPlaylist.png",
    slug: "high-energy-urban-life",
  },
  {
    title: "Cultured & Curious",
    cover: "/CulturePlaylist.png",
    slug: "cultured-curious",
  },
];

const DEMO_COVERS = [
  "/CabinPlaylist.png",
  "/BeachPlaylist.png",
  "/UrbanPlaylist.png",
  "/CulturePlaylist.png",
];

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <path
        d="M12 5v14M5 12h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <path
        d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M14.8 9.2 13 13l-3.8 1.8L11 11l3.8-1.8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <path
        d="M10 13a5 5 0 0 1 0-7l.6-.6a5 5 0 0 1 7 7l-.6.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M14 11a5 5 0 0 1 0 7l-.6.6a5 5 0 0 1-7-7l.6-.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Playlists() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [playlists, setPlaylists] = useState([]);

  async function load() {
    setError("");
    setLoading(true);

    try {
      const data = await api.getPlaylists();
      setPlaylists(data.playlists || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const hasPlaylists = useMemo(() => (playlists || []).length > 0, [playlists]);

  async function handleCreatePlaylist() {
    if (typeof api.createPlaylist !== "function") {
      alert(
        "Playlist creation is coming next. For demo, open a playlist tile.",
      );
      return;
    }

    const title = window.prompt("Name your new playlist:");
    if (!title || !title.trim()) return;

    try {
      const data = await api.createPlaylist({
        title: title.trim(),
        description: "",
      });

      await load();
      if (data?.playlist?.id) {
        navigate(`/playlists/${data.playlist.id}`);
      }
    } catch (err) {
      alert(err.message);
    }
  }

  function handleAddLink() {
    if (!hasPlaylists) {
      alert("Create a playlist first, then add links inside it.");
      return;
    }
    navigate(`/playlists/${playlists[0].id}`);
  }

  function coverForIndex(i) {
    return DEMO_COVERS[i % DEMO_COVERS.length];
  }

  return (
    <main className="container">
      <div className="playlistHub">
        <header className="playlistHubHeader">
          <div className="playlistHubHeaderTop">
            <h2 className="h2 playlistHubHeaderTitle">Your Playlists</h2>

            <div className="playlistHubCta">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleCreatePlaylist}
              >
                Create a playlist
              </button>
            </div>
          </div>

          <p className="playlistHubSubtitle">
            Collections of places that match different versions of you.
          </p>
        </header>

        {loading ? (
          <section className="card stack card-center">
            <p className="caption">Loading your playlists…</p>
          </section>
        ) : error ? (
          <section className="card stack card-center">
            <p className="caption text-error">{error}</p>
            <p className="caption">
              If you see a 401 error, log in again and retry.
            </p>
          </section>
        ) : !hasPlaylists ? (
          <>
            <section className="playlistActionGrid">
              {/* Tile 1 (primary button) */}
              <button
                type="button"
                className="playlistActionTile"
                onClick={handleCreatePlaylist}
              >
                <div className="playlistActionIcon">
                  <PlusIcon />
                </div>
                <div className="playlistActionTitle">Create a playlist</div>
                <p className="playlistActionDesc">
                  Start a collection for a specific mood, season, or version of
                  you.
                </p>
                <div className="playlistActionCtaRow">
                  <span className="btn btn-primary">Create a playlist</span>
                </div>
              </button>

              {/* Tile 2 (outline button) */}
              <Link to="/browse" className="playlistActionTile">
                <div className="playlistActionIcon">
                  <CompassIcon />
                </div>
                <div className="playlistActionTitle">Browse destinations</div>
                <p className="playlistActionDesc">
                  Explore destinations and save what fits.
                </p>
                <div className="playlistActionCtaRow">
                  <span className="btn btn-secondary">Browse destinations</span>
                </div>
              </Link>

              {/* Tile 3 (outline button) */}
              <button
                type="button"
                className="playlistActionTile"
                onClick={handleAddLink}
              >
                <div className="playlistActionIcon">
                  <LinkIcon />
                </div>
                <div className="playlistActionTitle">Add a link</div>
                <p className="playlistActionDesc">
                  Drop a TikTok/IG link to start a playlist from inspiration.
                </p>
                <div className="playlistActionCtaRow">
                  <span className="btn btn-secondary">Add a link</span>
                </div>
              </button>
            </section>

            <hr className="playlistStarterRule" />

            <div className="playlistStarterHeader">
              Not sure where to start? Try a starter playlist.
            </div>

            <section className="playlistStarterGrid">
              {STARTERS.map((p) => (
                <a
                  key={p.slug}
                  href="#"
                  className="playlistTile"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(
                      "Starter playlists are demo-only. Create a playlist or open one you already have.",
                    );
                  }}
                >
                  <div className="playlistCoverWrap">
                    <img
                      className="playlistTileMedia"
                      src={p.cover}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="playlistTileBody">
                    <div className="playlistTileTitle">{p.title}</div>
                  </div>
                </a>
              ))}
            </section>
          </>
        ) : (
          <section className="playlistGrid">
            {playlists.map((p, i) => (
              <Link
                key={p.id}
                to={`/playlists/${p.id}`}
                className="playlistTile"
              >
                <div className="playlistCoverWrap">
                  <img
                    className="playlistTileMedia"
                    src={coverForIndex(i)}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="playlistTileBody">
                  <div className="playlistTileTitle">{p.title}</div>
                  {p.description ? (
                    <p className="playlistTileMeta">{p.description}</p>
                  ) : null}
                </div>
              </Link>
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
