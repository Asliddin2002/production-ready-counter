import { useEffect, useState } from "react";

export type Post = {
  id: number;
  title: string;
  completed: boolean;
};

const Posts = () => {
  const [data, setData] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    setIsLoading(true);
    await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));

    setIsLoading(false);
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
        <h3>Loading posts ...</h3>
      )}
    </div>
  );
};

export default Posts;
