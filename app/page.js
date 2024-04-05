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
      <Launch />
      <Tutors />
      <Reviews />
    </div>
  );
}
