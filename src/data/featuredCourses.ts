export type Course = {
  id: number;
  title: string;
  author: string;
  rating: number;
  ratingCount: number;
  price: number;
  oldPrice?: number;
  bestSeller?: boolean;
  category: string;
  imageUrl: string;
};

export const featuredCourses: Course[] = [
  {
    id: 1,
    title: "Modern React & TypeScript – Build Real Projects",
    author: "Jane Doe",
    rating: 4.7,
    ratingCount: 18432,
    price: 12.99,
    oldPrice: 79.99,
    bestSeller: true,
    category: "Web Development",
    imageUrl: "https://picsum.photos/seed/react/480/270",
  },
  {
    id: 2,
    title: "The Complete Python Bootcamp From Zero to Hero",
    author: "John Smith",
    rating: 4.6,
    ratingCount: 99210,
    price: 11.99,
    oldPrice: 69.99,
    bestSeller: true,
    category: "Data Science",
    imageUrl: "https://picsum.photos/seed/python/480/270",
  },
  {
    id: 3,
    title: "AWS Certified Solutions Architect – Associate 2024",
    author: "Cloud Guru",
    rating: 4.8,
    ratingCount: 53210,
    price: 13.99,
    oldPrice: 99.99,
    category: "Cloud & DevOps",
    imageUrl: "https://picsum.photos/seed/aws/480/270",
  },
  {
    id: 4,
    title: "Figma UI/UX Design Essentials",
    author: "Emily Designer",
    rating: 4.5,
    ratingCount: 15210,
    price: 9.99,
    oldPrice: 49.99,
    category: "Design",
    imageUrl: "https://picsum.photos/seed/figma/480/270",
  },
  {
    id: 5,
    title: "Complete Node.js Developer in 2024",
    author: "Alex Backend",
    rating: 4.6,
    ratingCount: 42110,
    price: 12.99,
    oldPrice: 84.99,
    bestSeller: true,
    category: "Web Development",
    imageUrl: "https://picsum.photos/seed/node/480/270",
  },
  {
    id: 6,
    title: "iOS & Swift – The Complete iOS App Development Bootcamp",
    author: "Swift Mastery",
    rating: 4.7,
    ratingCount: 25120,
    price: 14.99,
    oldPrice: 89.99,
    category: "Mobile Development",
    imageUrl: "https://picsum.photos/seed/swift/480/270",
  },
  {
    id: 7,
    title: "Machine Learning A–Z: AI, Python & R in Data Science",
    author: "ML Academy",
    rating: 4.5,
    ratingCount: 65210,
    price: 15.99,
    oldPrice: 119.99,
    category: "Data Science",
    imageUrl: "https://picsum.photos/seed/ml/480/270",
  },
  {
    id: 8,
    title: "Unreal Engine 5: Learn Game Development",
    author: "Game Dev Studio",
    rating: 4.4,
    ratingCount: 9100,
    price: 10.99,
    oldPrice: 79.99,
    category: "Game Development",
    imageUrl: "https://picsum.photos/seed/unreal/480/270",
  },
  {
    id: 9,
    title: "Project Management Professional (PMP) Exam Prep",
    author: "PM Expert",
    rating: 4.6,
    ratingCount: 18420,
    price: 16.99,
    oldPrice: 129.99,
    category: "Business & Management",
    imageUrl: "https://picsum.photos/seed/pmp/480/270",
  },
  {
    id: 10,
    title: "Productivity Masterclass: Principles and Tools",
    author: "Focus Lab",
    rating: 4.5,
    ratingCount: 11200,
    price: 9.99,
    oldPrice: 59.99,
    category: "Personal Development",
    imageUrl: "https://picsum.photos/seed/productivity/480/270",
  },
];
