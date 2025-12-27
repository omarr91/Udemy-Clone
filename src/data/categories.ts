export type Category = {
  id: number;
  name: string;
  slug: string;
  coursesCount: number;
};

export const categories: Category[] = [
  { id: 1, name: "Web Development", slug: "web-development", coursesCount: 125000 },
  { id: 2, name: "Mobile Development", slug: "mobile-development", coursesCount: 42000 },
  { id: 3, name: "Data Science", slug: "data-science", coursesCount: 38000 },
  { id: 4, name: "Cloud & DevOps", slug: "cloud-devops", coursesCount: 21000 },
  { id: 5, name: "Game Development", slug: "game-development", coursesCount: 12000 },
  { id: 6, name: "Design", slug: "design", coursesCount: 54000 },
  { id: 7, name: "Business & Management", slug: "business", coursesCount: 60000 },
  { id: 8, name: "Personal Development", slug: "personal-development", coursesCount: 33000 }
];
