import React, { useState } from "react";
import { UserProvider } from "./UserContext";
import "./App.css";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import Member from "./components/Auth/Member";
import ForgotPassword from "./components/Auth/ForgotPassword";
import MemberPasswordChange from "./components/Auth/MemberPasswordChange";
import Profile from "./components/Services/Profile";
import Duties from "./components/Services/Duties";
import AppliedDuties from "./components/Services/AppliedDuties";
import Authform from "./components/Auth/AuthForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";
import CaregiverBody from "./components/Shared/Body";
import AboutPage from "./components/Shared/About";
import {
  AttendantPage,
  NursePage,
  CaretakerPage,
  ElderlyCarePage,
} from "./components/Shared/Services";
import ProjectPage from "./components/Shared/Project";
import ServiceBookingForms from "./components/Shared/Forms";
import ApplyForm from "./components/Shared/ApplyForm";
import Applier from "./components/Services/Applier";
import AttendanceCalendar from "./components/Auth/Attendance";
import PaymentPage from "./components/Services/Payments";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <UserProvider>
      <Router>
        <div className="home h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<CaregiverBody />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route
              path="/services"
              element={
                <div>
                  <AttendantPage />
                  <NursePage />
                  <CaretakerPage />
                  <ElderlyCarePage />
                </div>
              }
            />
            <Route path="/attendant" element={<AttendantPage />} />
            <Route path="/nurse" element={<NursePage />} />
            <Route path="/caretaker" element={<CaretakerPage />} />
            <Route path="/eldercare" element={<ElderlyCarePage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/form" element={<ServiceBookingForms />} />
            <Route path="/apply/:role" element={<ApplyForm />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/member/login" element={<Member />} />
            <Route path="/duties" element={<Duties />} />
            <Route path="/apply-duty" element={<Applier />} />
            <Route path="/get-applied-duties" element={<AppliedDuties />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/attendance" element={<AttendanceCalendar />} />
            <Route path="/payments" element={<PaymentPage />} />

            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/member/password-change"
              element={<MemberPasswordChange />}
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
