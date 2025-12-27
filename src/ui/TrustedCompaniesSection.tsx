import React from "react";
import { trustedCompanies } from "../data/trustedCompanies";


const TrustedCompaniesSection: React.FC = () => {
  return (
    <section className="section">
      <div className="app-container">
        <p
          style={{
            fontSize: "0.85rem",
            color: "var(--text-muted)",
            marginBottom: "0.75rem"
          }}
        >
          Trusted by teams at leading companies around the world
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            alignItems: "center"
          }}
        >
          {trustedCompanies.map((company) => (
            <div
              key={company.id}
              style={{
                fontWeight: 700,
                letterSpacing: "0.06em",
                fontSize: "0.9rem",
                textTransform: "uppercase",
                color: "#4b5563"
              }}
            >
              {company.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompaniesSection;
