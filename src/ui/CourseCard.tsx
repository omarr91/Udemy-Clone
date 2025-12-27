import React from "react";
import { Course } from "../data/featuredCourses";
import "../App.css";

type Props = {
  course: Course;
};

const fallbackImage = "https://via.placeholder.com/480x270?text=Course";

const CourseCard: React.FC<Props> = ({ course }) => {
  return (
    <article className="course-card">
      <div
        style={{
          width: "100%",
          height: "180px",
          overflow: "hidden",
          backgroundColor: "#e5e7eb",
        }}
      >
        <img
          src={course.imageUrl}
          alt={course.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={(e) => {
            e.currentTarget.src = fallbackImage;
            e.currentTarget.onerror = null; // avoid infinite loop
          }}
        />
      </div>

      <div className="course-card-body">
        <p className="course-category">{course.category}</p>
        <h3 className="course-title">{course.title}</h3>
        <p className="course-author">{course.author}</p>

        <div className="course-meta">
          <span style={{ fontWeight: 600 }}>{course.rating.toFixed(1)}</span>
          <span className="course-stars">★★★★★</span>
          <span style={{ color: "var(--text-muted)" }}>
            ({course.ratingCount.toLocaleString()})
          </span>
        </div>

        <div className="course-price-row">
          <span className="course-price">${course.price.toFixed(2)}</span>
          {course.oldPrice && (
            <span className="course-old-price">
              ${course.oldPrice.toFixed(2)}
            </span>
          )}
        </div>

        {course.bestSeller && (
          <span className="course-badge">Bestseller</span>
        )}
      </div>
    </article>
  );
};

export default CourseCard;
