import { useEffect, useState } from "react";

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
    await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setError("");
        setIsLoading(false);
        setData(json);
      })
      .catch((error: unknown) => {
        setIsLoading(false);
        if (error) setError(`Failed to fetch posts`);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
      {!isLoading ? (
        data.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.completed.toString()}</p>
          </div>
        ))
      ) : (
        <h3 className="loader">Loading posts ...</h3>
      )}

      {error && <h2 className="error">{error}</h2>}
    </div>
  );
};

export default Posts;
