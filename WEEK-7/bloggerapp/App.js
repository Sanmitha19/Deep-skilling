import React, { useState } from "react";
import "./App.css";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  const [view, setView] = useState("book"); // can be 'book', 'blog', or 'course'
  const [showCourse, setShowCourse] = useState(false);

  let content;
  // ✅ METHOD 1: if/else statement
  if (view === "book") {
    content = <BookDetails />;
  } else if (view === "blog") {
    content = <BlogDetails />;
  } else {
    content = null;
  }

  return (
    <div className="App">
      <h1>📖 Blogger App</h1>

      {/* Buttons to change view */}
      <button onClick={() => setView("book")}>Show Book</button>
      <button onClick={() => setView("blog")}>Show Blog</button>
      <button onClick={() => setShowCourse(!showCourse)}>
        {showCourse ? "Hide" : "Show"} Course
      </button>

      <hr />

      {/* ✅ Display using if/else */}
      {content}

      {/* ✅ METHOD 2: Ternary Operator */}
      {view === "blog" ? (
        <p style={{ color: "blue" }}>Currently viewing Blog Details</p>
      ) : (
        <p style={{ color: "green" }}>Viewing Book Details</p>
      )}

      {/* ✅ METHOD 3: Logical && */}
      {showCourse && <CourseDetails />}
    </div>
  );
}

export default App;
