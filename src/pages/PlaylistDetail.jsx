import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../api/client";

const LINK_TYPES = [
  { value: "tiktok", label: "TikTok link" },
  { value: "instagram", label: "IG link" },
  { value: "webpage", label: "Webpage link" },
  { value: "youtube", label: "YouTube link" },
];

export default function PlaylistDetail() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [playlist, setPlaylist] = useState(null);
  const [links, setLinks] = useState([]);

  const [url, setUrl] = useState("");
  const [linkType, setLinkType] = useState("tiktok");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [saveOk, setSaveOk] = useState("");

  const playlistId = useMemo(() => Number(id), [id]);

  async function load() {
    setError("");
    setLoading(true);

    try {
      const data = await api.getPlaylistDetail(playlistId);
      setPlaylist(data.playlist);
      setLinks(data.links || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!Number.isInteger(playlistId)) {
      setError("Invalid playlist id");
      setLoading(false);
      return;
    }
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playlistId]);

  async function handleAddLink(e) {
    e.preventDefault();
    setSaveError("");
    setSaveOk("");
    setSaving(true);

    try {
      const payload = {
        url,
        linkType,
        title: title.trim() ? title : undefined,
        note: note.trim() ? note : undefined,
      };

      const res = await api.addPlaylistLink(playlistId, payload);

      setLinks((prev) => [res.link, ...prev]);
      setUrl("");
      setTitle("");
      setNote("");
      setSaveOk("Saved.");
    } catch (err) {
      setSaveError(err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="container">
      <div className="nav">
        <div className="brand">Wistaway Mini</div>
        <div className="stack" style={{ gap: 6, alignItems: "flex-end" }}>
          <Link
            to="/login"
            className="subtle"
            style={{ textDecoration: "underline" }}
          >
            Login
          </Link>
          <span className="subtle">Playlist</span>
        </div>
      </div>

      {loading ? (
        <div className="card">Loading playlist…</div>
      ) : error ? (
        <div className="card">
          <h1 className="h1">Couldn’t load playlist</h1>
          <p className="subtle" style={{ color: "#b91c1c" }}>
            {error}
          </p>
          <p className="subtle">
            If this is a 401 error, you probably need to log in so the token is
            stored.
          </p>
        </div>
      ) : (
        <div className="stack">
          <div className="card">
            <h1 className="h1">{playlist.title}</h1>
            <p className="subtle">
              {playlist.description || "No description."}
            </p>
            <hr className="hr" />
            <span className="badge">{links.length} links saved</span>
          </div>

          <div className="grid2">
            <div className="card stack">
              <div>
                <h1 className="h1">Saved links</h1>
                <p className="subtle">
                  External inspiration attached to this playlist.
                </p>
              </div>

              {links.length === 0 ? (
                <div className="subtle">No links yet. Add the first one.</div>
              ) : (
                <div className="stack">
                  {links.map((l) => (
                    <div key={l.id} className="card" style={{ padding: 14 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: 10,
                        }}
                      >
                        <div className="stack" style={{ gap: 6 }}>
                          <div
                            style={{
                              display: "flex",
                              gap: 8,
                              alignItems: "center",
                            }}
                          >
                            <span className="badge">{l.link_type}</span>
                            <strong style={{ fontSize: 14 }}>
                              {l.title || "Saved link"}
                            </strong>
                          </div>
                          <a
                            href={l.url}
                            target="_blank"
                            rel="noreferrer"
                            className="subtle"
                            style={{ textDecoration: "underline" }}
                          >
                            {l.url}
                          </a>
                          {l.note ? (
                            <div className="subtle">{l.note}</div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="card stack">
              <div>
                <h1 className="h1">Add a link</h1>
                <p className="subtle">
                  TikTok, Instagram, YouTube, or a webpage.
                </p>
              </div>

              <form className="stack" onSubmit={handleAddLink}>
                <div className="row">
                  <label>Link type</label>
                  <select
                    value={linkType}
                    onChange={(e) => setLinkType(e.target.value)}
                  >
                    {LINK_TYPES.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="row">
                  <label>URL</label>
                  <input
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://..."
                  />
                </div>

                <div className="row">
                  <label>Title (optional)</label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Short label"
                  />
                </div>

                <div className="row">
                  <label>Note (optional)</label>
                  <textarea
                    rows={3}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Why did you save this?"
                  />
                </div>

                {saveError ? (
                  <div className="subtle" style={{ color: "#b91c1c" }}>
                    {saveError}
                  </div>
                ) : null}
                {saveOk ? (
                  <div className="subtle" style={{ color: "#166534" }}>
                    {saveOk}
                  </div>
                ) : null}

                <button disabled={saving || !url.trim()}>
                  {saving ? "Saving..." : "Save link"}
                </button>
              </form>

              <p className="subtle">
                This page requires an auth token in localStorage. Log in first
                if you see a 401.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
