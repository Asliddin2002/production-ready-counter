import { useEffect, useState } from "react";

export type Post = {
  id: number;
  title: string;
  completed: boolean;
};

const Posts = () => {
  const [data, setData] = useState<Post[]>([]);

  async function fetchData() {
    await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.completed.toString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
