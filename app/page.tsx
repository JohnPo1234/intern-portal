"use client";

export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <div style={{ maxWidth: 900, margin: "auto" }}>
        <h1 style={{ fontSize: 36, marginBottom: 10 }}>
          Welcome to Top Floor
        </h1>

        <p style={{ marginBottom: 30 }}>
          Your intern dashboard
        </p>

        <div style={grid}>
          
          {/* TASKS */}
          <a
            href="/tasks"
            style={card}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            📋 My Tasks
          </a>

          {/* EVENTS */}
          <a
            href="/events"
            style={card}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            📅 Events
          </a>

          {/* SUBMIT */}
          <a
            href="/submit"
            style={card}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            📤 Submit Work
          </a>

          {/* RESOURCES */}
          <a
            href="/resources"
            style={card}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            📚 Resources
          </a>

          {/* QUESTIONS */}
          <a
            href="/questions"
            style={card}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            ❓ Questions
          </a>

        </div>
      </div>
    </div>
  );
}

/* GRID */
const grid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 20,
};

/* CARD STYLE */
const card = {
  padding: 30,
  borderRadius: 12,
  background: "white",
  border: "1px solid #eee",
  textDecoration: "none",
  color: "black",
  fontSize: 18,
  fontWeight: 500,
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  transition: "all 0.2s ease",
  cursor: "pointer",
};

/* HOVER EFFECT */
function handleHover(e: any) {
  e.currentTarget.style.transform = "translateY(-6px)";
  e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.12)";
}

/* HOVER OUT */
function handleLeave(e: any) {
  e.currentTarget.style.transform = "translateY(0)";
  e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.05)";
}