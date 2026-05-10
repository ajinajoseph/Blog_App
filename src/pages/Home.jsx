import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import BlogCard from "../components/BlogCard";
import CategoryFilter from "../components/CategoryFilter";
import Pagination from "../components/Pagination";

function Home() {
  const { category } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setCurrentPage(1);
  }, [category]);
  const filteredBlogs = category
    ? blogPosts.filter((blog) => blog.category === category)
    : blogPosts;

  const postsPerPage = 3;

  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;

  const currentPosts = filteredBlogs.slice(
    startIndex,
    startIndex + postsPerPage
  );

  return (
    <div className="container">
      <h1>Blog App</h1>

      <CategoryFilter />

      <div className="grid">
        {currentPosts.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Home;