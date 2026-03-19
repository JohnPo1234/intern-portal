export default function Events() {
  return (
    <div style={{ padding: 40 }}>
      <div style={{ maxWidth: 900, margin: "auto" }}>
        <h1>Events & Meetings</h1>

        <iframe
          src="https://calendar.google.com/calendar/embed?src=4a1346239263fb182db4a140c94be217b401065a7bb206822bd28ed3dbe24dfc%40group.calendar.google.com&ctz=America%2FChicago"
          width="100%"
          height="600"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
}