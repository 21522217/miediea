import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SidebarLayout from "./components/nav/SidebarLayout";
import HomePage from "./pages/Home";
import Profile from "./pages/Profile";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex w-full h-screen">
        <Routes>
          <Route path="/" element={<SidebarLayout />}>
            <Route index element={<HomePage />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
