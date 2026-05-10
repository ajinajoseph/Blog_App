import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <div className="card">

      <span>{blog.category}</span>

      <h2>{blog.title}</h2>

      <p>
        {blog.content.substring(0, 150)}...
      </p>

      <Link to={`/post/${blog.id}`}>
        Read More →
      </Link>

    </div>
  );
}

export default BlogCard;