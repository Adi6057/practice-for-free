import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./Footer"
import Navbar from "./Navbar";
import MovieBlog from "./pages/MovieBlog";

const App = () => {
  return (
    <Router>
      <Navbar />
      <MovieBlog />
      <Footer />
    </Router>
  );
};

export default App;
