export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] px-6 py-12 text-center">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <h2
            className="tracking-widest text-[#fafaf8]"
            style={{
              fontSize: "1.5rem",
              fontWeight: 300,
              letterSpacing: "0.2em",
            }}
          >
            GUIAC
          </h2>
        </div>
        <p className="text-[#d4c9bb]/60" style={{ fontSize: "0.875rem" }}>
          © 2025 GUIAC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
