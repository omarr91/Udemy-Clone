import React from "react";
import "../App.css";

type HeaderProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
};

const Header: React.FC<HeaderProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <header role="banner" aria-label="Main navigation"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        backgroundColor: "#020617",
        borderBottom: "1px solid rgba(148,163,184,0.35)",
        boxShadow: "0 6px 18px rgba(15, 23, 42, 0.6)",
      }}
    >
      <div
        className="app-container"
        style={{ paddingTop: "0.65rem", paddingBottom: "0.65rem" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          {/* Logo */}
          <div
            style={{
              fontWeight: 800,
              fontSize: "1.25rem",
              color: "#e5e7eb",
            }}
          >
            Udemy<span style={{ color: "#6366f1" }}>Clone</span>
          </div>

          {/* Navigation + Search */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              fontSize: "0.9rem",
              flex: 1,
              color: "#e5e7eb",
            }}
          >
            <span style={{ whiteSpace: "nowrap" }}>Categories</span>

            <input
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search for anything"
              style={{
                flex: 1,
                padding: "0.45rem 0.75rem",
                borderRadius: "999px",
                border: "1px solid rgba(148,163,184,0.5)",
                outline: "none",
                fontSize: "0.9rem",
                backgroundColor: "#020617",
                color: "#e5e7eb",
              }}
            />

            <span style={{ color: "#9ca3af", whiteSpace: "nowrap" }}>
              Udemy Business
            </span>
            <span style={{ color: "#9ca3af", whiteSpace: "nowrap" }}>
              Teach on Udemy
            </span>
          </nav>

          {/* Login / Signup */}
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button
              style={{
                padding: "0.45rem 0.9rem",
                borderRadius: "999px",
                border: "1px solid #e5e7eb",
                background: "transparent",
                color: "#e5e7eb",
                cursor: "pointer",
                fontSize: "0.9rem",
              }}
            >
              Log in
            </button>

            <button
              style={{
                padding: "0.45rem 0.9rem",
                borderRadius: "999px",
                border: "none",
                background: "var(--primary)",
                color: "#fff",
                cursor: "pointer",
                fontSize: "0.9rem",
                fontWeight: 600,
              }}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
