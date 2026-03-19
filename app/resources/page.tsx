export default function Resources() {
  return (
    <div style={{ padding: 40 }}>
      <div style={{ maxWidth: 900, margin: "auto" }}>
        <h1>Resources</h1>

        <div style={grid}>
          <a href="PASTE_GOOGLE_DRIVE_LINK" target="_blank" style={card}>
            📁 Shared Drive
          </a>

          <a href="PASTE_DOC_LINK" target="_blank" style={card}>
            📄 Training Docs
          </a>

          <a href="PASTE_GUIDELINES_LINK" target="_blank" style={card}>
            🎯 Brand Guidelines
          </a>
        </div>
      </div>
    </div>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 20,
};

const card = {
  padding: 20,
  borderRadius: 12,
  border: "1px solid #eee",
  textDecoration: "none",
  color: "black",
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
};