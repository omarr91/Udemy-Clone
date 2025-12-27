import React, { useState } from "react";
import "../App.css";
import Header from "./Header";
import HeroSection from "./HeroSection";
import CategoriesSection from "./CategoriesSection";
import FeaturedCoursesSection from "./FeaturedCoursesSection";
import TrustedCompaniesSection from "./TrustedCompaniesSection";
import { featuredCourses } from "../data/featuredCourses";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredCourses = featuredCourses.filter((course) => {
    if (!normalizedSearch) return true;
    const text = `${course.title} ${course.category} ${course.author}`.toLowerCase();
    return text.includes(normalizedSearch);
  });

  return (
    <div className="app-root">
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <HeroSection searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <CategoriesSection />
      <FeaturedCoursesSection
        courses={filteredCourses}
        searchTerm={searchTerm}
      />
      <TrustedCompaniesSection />
    </div>
  );
};

export default App;
