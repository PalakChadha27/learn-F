import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import MentorDashboard from "./components/mentorDashboard/MentorDashboard";
import LearningQuests from "./components/learningquests/Quests";
import Quizes from "./components/quizes/quizes";
import Badges from "./components/badges/badges";
import CareerGrowth from "./components/growth/CareerGrowth";
import DiscussionForum from "./components/forums/Forums";
import LeaderBoard from "./components/leaderboard/Leaderboard";
import ChatBot from "./components/chatbot/ChatBot";

const App = () => {
  return (
    <Router>
       <Routes>
         <Route path="/" element={<Dashboard />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/mentor-dashboard" element={ <MentorDashboard />} />
         <Route path="/quests" element={ <LearningQuests />} />
         <Route path="/quizes" element={ <Quizes/>} />
         <Route path="/badges" element={ <Badges/>} />
         <Route path="/growth" element={ <CareerGrowth/>} />
         <Route path="/forum" element={ <DiscussionForum/>} />
         <Route path="/leader" element={ <LeaderBoard/>} />
         <Route path="/chat-bot" element= { <ChatBot />} />

       </Routes>
     </Router>
   );
}

export default App;
