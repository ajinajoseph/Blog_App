import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";

function PostDetails() {
  const { id } = useParams();

  const post = blogPosts.find(
    (blog) => blog.id === parseInt(id)
  );

  if (!post) {
    return <h1>Post Not Found</h1>;
  }

  return (
    <div className="details-page">
      <div className="details-card">

        <span className="details-category">
          {post.category}
        </span>

        <h1>{post.title}</h1>

        <img
          src={post.image}
          alt={post.title}
        />

        <p>
          {post.content}
        </p>

        <Link to="/" className="back-btn">
          ← Back to Blogs
        </Link>

      </div>
    </div>
  );
}

export default PostDetails;