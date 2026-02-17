import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api/client";

const logo = new URL("../assets/wistaway-logo.png", import.meta.url).href;

const LINK_TYPES = [
  { value: "tiktok", label: "TikTok link" },
  { value: "instagram", label: "IG link" },
  { value: "webpage", label: "Webpage link" },
  { value: "youtube", label: "YouTube link" },
];

export default function PlaylistDetail() {
  const { playlistId: playlistIdParam } = useParams();
  const playlistId = Number(playlistIdParam);

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
    if (!Number.isFinite(playlistId) || !Number.isInteger(playlistId)) {
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
      {loading ? (
        <div className="card">Loading playlist…</div>
      ) : error ? (
        <div className="card stack">
          <h1 className="h1">Couldn’t load playlist</h1>
          <p className="caption text-error">{error}</p>
          <p className="caption">
            If you see a 401 error, log in again and retry.
          </p>
        </div>
      ) : (
        <div className="stack">
          <div className="card">
            <div className="inline-row">
              <img src={logo} alt="Wistaway" className="logo" />
            </div>

            <h1 className="h1">{playlist.title}</h1>
            <p className="caption">
              {playlist.description || "No description."}
            </p>
            <hr className="hr" />
            <span className="badge">{links.length} links saved</span>
          </div>

          <div className="grid2">
            <div className="card stack">
              <div>
                <h2 className="h2">Saved links</h2>
                <p className="caption">
                  External inspiration attached to this playlist.
                </p>
              </div>

              {links.length === 0 ? (
                <div className="caption">No links yet. Add the first one.</div>
              ) : (
                <div className="stack">
                  {links.map((l) => (
                    <div key={l.id} className="card card-compact">
                      <div className="card-row">
                        <div className="stack-tight">
                          <div className="inline-row">
                            <span className="badge">{l.link_type}</span>
                            <div className="title-sm">
                              {l.title || "Saved link"}
                            </div>
                          </div>

                          <a
                            href={l.url}
                            target="_blank"
                            rel="noreferrer"
                            className="link"
                          >
                            {l.url}
                          </a>

                          {l.note ? (
                            <div className="caption">{l.note}</div>
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
                <h2 className="h2">Add a link</h2>
                <p className="caption">
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
                  <div className="caption text-error">{saveError}</div>
                ) : null}
                {saveOk ? (
                  <div className="caption text-success">{saveOk}</div>
                ) : null}

                <button
                  className="btn btn-primary"
                  disabled={saving || !url.trim()}
                >
                  {saving ? "Saving..." : "Save link"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
