import React from "react";
import NavBar from "../Components/NavBar";

export default function Quiz() {
  return (
    <>
      <div id="sidebar" className="App">
        <NavBar />
        {/* other elements */}
        <div class="container-fluid">
          <div class="qiuz-app aio-app">
            <h1 class="">
              Quizzes
              <img src="files/ideas.png" alt="" />
            </h1>
            <div class="custom-row">
              <h2 id="question">Q1: Question number one?</h2>
            </div>
            <div id="ans-btn">
              <button class="custom-btn">Answer A</button>
              <button class="custom-btn">Answer B</button>
              <button class="custom-btn">Answer C</button>
              <button class="custom-btn">Answer D</button>
            </div>
            <button class="custom-btn" id="next-btn">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
