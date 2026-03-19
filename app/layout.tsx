export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#f9fafb" }}>
        
        {/* NAVBAR */}
        <div style={navbar}>
          
          {/* LEFT SIDE (LOGO) */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src="/logo.png" style={{ height: 40 }} />
            <span style={{ fontWeight: "bold", fontSize: 20 }}>
              Top Floor
            </span>
          </div>

          {/* RIGHT SIDE (LINKS) */}
          <div style={navLinks}>
            <a href="/tasks" style={link}>Tasks</a>
            <a href="/events" style={link}>Events</a>
            <a href="/submit" style={link}>Submit</a>
            <a href="/resources" style={link}>Resources</a>
            <a href="/questions" style={link}>Questions</a>
          </div>

        </div>

        {/* PAGE CONTENT */}
        <div style={{ padding: 20 }}>
          {children}
        </div>

      </body>
    </html>
  );
}

const navbar = {
  background: "linear-gradient(90deg, #C62828, #FF6B81)",
  color: "white",
  padding: "15px 30px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const navLinks = {
  display: "flex",
  gap: 20,
};

const link = {
  color: "white",
  textDecoration: "none",
  fontWeight: 500,
};