"use client";

export default function BookingPage() {
  return (
    <div style={{ height: "100vh" }}>
      <iframe
        src="https://widget.zenbooker.com/book/wehear"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        title="Zenbooker Scheduler"
      />
    </div>
  );
}
