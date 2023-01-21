import React from "react";
import TermsAndConditions from "pages/TermsAndConditions";
import SignupLoginModule from "pages/SignupLoginModule";
import SignUp from "pages/SignUp";
import SecurityPolicy from "pages/SecurityPolicy";
import EditProfile from "pages/EditProfile";
import PhoneVerification from "pages/PhoneVerification";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/phoneverification" element={<PhoneVerification />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/securitypolicy" element={<SecurityPolicy />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signuploginmodule" element={<SignupLoginModule />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
