import React from "react";
import Header from "./components/Header/Header.jsx";
import Launch from "./components/LaunchPage/Launch.jsx";
import "./globals.css";
import Tutors from "./components/TutorPage/Tutors.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";

export default function Page() {
  return (
    <div>
      <Header />

      <div className="section">
        <Launch />
      </div>
      <div className="section">
        <Tutors />
      </div>
      <div className="section">
        <Reviews />
      </div>
    </div>
  );
}
