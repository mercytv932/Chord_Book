import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import MySongs from "./pages/MySongs";
import SongDetails from "./pages/SongDetails";
import Favorites from "./pages/Favorites";
import SongForm from "./components/SongForm";
import AppLayout from "./components/AppLAyout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route element={<AppLayout />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="songs/new" element={<SongForm />}></Route>
          <Route path="/mysongs" element={<MySongs />}></Route>
          <Route path="/songdetails/:id" element={<SongDetails />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
