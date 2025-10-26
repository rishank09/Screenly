import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {Toaster} from 'react-hot-toast';

// Components
import Navbar from './component/Navbar';
import Footer from './component/Footer';

// Pages
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';

import SeatLayout from './pages/SeatLayout';
import MyBookings from './pages/MyBookings';
import Favorite from './pages/Favorite';

const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin');

  return (
    <>
      <Toaster />
      { !isAdminRoute && <Navbar /> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/favorite" element={<Favorite />} />
       {/* <Route
          path="/admin/*"
          element={
            
              <Layout />
            
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="add-shows" element={<AddShows />} />
          <Route path="list-shows" element={<ListShows />} />
          <Route path="list-bookings" element={<ListBookings />} />
        </Route> */}
      </Routes>
      { !isAdminRoute && <Footer /> }
    </>
  );
};

export default App;
