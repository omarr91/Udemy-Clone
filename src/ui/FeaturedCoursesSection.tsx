import React from "react";
import "../App.css";
import CourseCard from "./CourseCard";
import { Course } from "../data/featuredCourses";

type Props = {
  courses: Course[];
  searchTerm: string;
};

const FeaturedCoursesSection: React.FC<Props> = ({ courses, searchTerm }) => {
  const hasResults = courses.length > 0;

  return (
    <section className="section">
      <div className="app-container">
        <div className="section-header">
          <div>
            <h2 className="section-title">Students are viewing</h2>
            <p className="section-subtitle">
              Hand-picked courses to help you get started quickly.
            </p>
          </div>
          <button
            style={{
              border: "none",
              background: "transparent",
              fontSize: "0.9rem",
              fontWeight: 600,
              cursor: "pointer",
              color: "var(--primary)",
            }}
          >
            Explore all
          </button>
        </div>

        {hasResults ? (
          <div className="grid-cards">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
            No courses found for <strong>{searchTerm}</strong>. Try another
            keyword (for example: <em>React</em>, <em>Python</em>,{" "}
            <em>design</em>…).
          </p>
        )}
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;
