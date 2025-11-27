import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Posts from "./Posts";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header">
        <h1 className="main-title">Production Ready Container</h1>

        <div className="logo-row">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </div>

      <h1 className="sub-title">Vite + React</h1>

      <div className="counter-card">
        <button className="counter-btn" onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="note">Click on the Vite and React logos to learn more</p>

      {/* Posts Section */}
      <section className="posts-section">
        <h2 className="posts-title">Latest Posts</h2>
        <Posts />
      </section>
    </>
  );
}

export default App;
