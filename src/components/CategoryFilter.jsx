import { Link } from "react-router-dom";

function CategoryFilter() {
  const categories = [
    "technology",
    "lifestyle",
    "travel",
  ];

  return (
    <div className="filters">
      <Link to="/">
        <button>All</button>
      </Link>

      {categories.map((cat) => (
        <Link
          key={cat}
          to={`/category/${cat}`}
        >
          <button>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        </Link>
      ))}
    </div>
  );
}

export default CategoryFilter;