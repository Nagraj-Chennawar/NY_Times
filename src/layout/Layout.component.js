import React from "react";
import { Route, Routes } from "react-router-dom";

// Import the Home and Article components
import Home from "../modules/home/Home";
import Article from "../modules/article/Article.component";
import Navbar from "../modules/navbar/Navbar.component";
import NotFound from "../modules/not-found/NotFound.component";
import Error from "../modules/error-message/Error";

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
      <Error />
      <main>
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<Home />} />

          {/* Route for the article detail page with a dynamic articleId parameter */}
          <Route path="/article/:articleId" element={<Article />} />

          {/* Route for the not found component in case of incorrect url */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default Layout;
