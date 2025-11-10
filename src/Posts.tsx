import { useEffect, useState } from "react";

const Posts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="">
      {data?.map((item: any) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.completed.toString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
