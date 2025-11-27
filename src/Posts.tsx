import { useEffect, useState } from "react";
import { Virtuoso } from "react-virtuoso";
import "./Posts.css";

export type Post = {
  id: number;
  title: string;
  completed: boolean;
};

const Posts = () => {
  const [data, setData] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchData() {
    setIsLoading(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const json = await res.json();
      setData(json);
      setError("");
    } catch {
      setError("Failed to fetch posts");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <h3 className="loader">Loading posts ...</h3>;
  if (error) return <h2 className="error-msg">{error}</h2>;

  return (
    <div className="virtual-container">
      <Virtuoso
        data={data}
        itemContent={(index, post) => (
          <div style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
            <h3>{post.title}</h3>
            <p>{post.completed ? "Completed" : "Pending"}</p>
          </div>
        )}
      />
    </div>
  );
};

export default Posts;
