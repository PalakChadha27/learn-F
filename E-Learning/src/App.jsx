import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import MentorDashboard from "./components/mentorDashboard/MentorDashboard";

const App = () => {
  return (
    <Router>
       <Routes>
         <Route path="/" element={<Dashboard />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/mentor-dashboard" element={ <MentorDashboard />} />
       </Routes>
     </Router>
   );
}

export default App;
