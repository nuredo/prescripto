import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Doctors from "./Pages/Doctors ";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import MyProfile from "./Pages/MyProfile";
import MyAppointments from "./Pages/MyAppointments";
import Appointment from "./Pages/Appointment";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SpecialityMenu from "./Components/SpecialityMenu";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[5%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} name="doctors" />
        <Route
          path="/doctors/:speciality"
          element={<Doctors />}
          name="doctors"
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/my-profile" element={<MyProfile />} />

        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
