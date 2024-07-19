import React from "react";
import { Route, Routes } from "react-router-dom";

// Import the Home and Article components
import Home from "../modules/home/Home.component";
import Article from "../modules/article/Article.component";
import Navbar from "../modules/navbar/Navbar.component";
import NotFound from "../modules/not-found/NotFound.component";
/**
 * The Layout component defines the main routes for the application.
 * It uses React Router's Routes and Route components to specify the
 * paths and corresponding components to render.
 * Keeping scope for further enhancements like routes config
 * @returns {JSX.Element} The rendered Layout component with defined routes
 */
function Layout() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<Home />} />

        {/* Route for the article detail page with a dynamic articleId parameter */}
        <Route path="/article/:articleId" element={<Article />} />

        {/* Route for the article detail page with a dynamic articleId parameter */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Layout;