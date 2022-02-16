import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import MovieForm from "./components/movieForm";
import NotFound from "./components/common/notFound";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/movies/:id" element={<MovieForm />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/" element={<Movies />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </BrowserRouter>
      ,
    </main>
  );
}

export default App;
