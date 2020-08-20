import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <main>
      <h1>React is amazing! ⚛️</h1>
      <h2>Web 33 is awesome 🔥🔥🔥</h2>
      <p>
        <a
          href="https://github.com/vercel/vercel/tree/master/examples/create-react-app"
          target="_blank"
          rel="noreferrer noopener"
        >
          This project
        </a>{" "}
        was bootstrapped with{" "}
        <a href="https://facebook.github.io/create-react-app/">
          Create React App
        </a>{" "}
        and contains three directories, <code>/public</code> for static assets,{" "}
        <code>/src</code> for components and content, and <code>/api</code>{" "}
        which contains a serverless <a href="https://golang.org/">Go</a>{" "}
        function. See{" "}
        <a href="/api/date">
          <code>api/date</code> for the Date API with Go
        </a>
        .
      </p>
    </main>
  );
}

export default App;
