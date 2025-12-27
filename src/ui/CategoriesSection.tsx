import React from "react";
import { categories } from "../data/categories";


const CategoriesSection: React.FC = () => {
  return (
    <section className="section">
      <div className="app-container">
        <div className="section-header">
          <div>
            <h2 className="section-title">Top categories</h2>
            <p className="section-subtitle">
              Explore learning paths across the most in-demand fields.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1rem"
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              style={{
                textAlign: "left",
                padding: "1rem",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border-subtle)",
                backgroundColor: "#fff",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(15, 23, 42, 0.03)"
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: "0.2rem" }}>{cat.name}</div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                {cat.coursesCount.toLocaleString()} courses
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
