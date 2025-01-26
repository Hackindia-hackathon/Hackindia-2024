
// // App.tsx
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import { Outlet } from 'react-router-dom';

// const App=()=> {
//   return (
//     <>
//       <div className="m-0 p-0 pb-6 primary_color">
//         <Navbar />
//         <Outlet/>
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default App;

// App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "@/components/Home";
import { DashboardComponent } from "@/components/dashboardCandidate";
import { DashboardComponentEmployer } from "@/components/dashboard"; // Fixed typo: DashboardComponentEmploye
import { LeaderboardPage } from "@/components/leaderboard";
import { ProfilePage } from "@/components/profile";
import { VerificationPage } from "@/components/verification";
import { SettingsPage } from "@/components/settings";
import { PostJobPage } from "@/components/post-job";
import RegisterationPage from "@/components/RegisterationPage";
import CertificateSubmissionComponent from "@/components/CertificationSubmission";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes> {/* Wrap all Route components in Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/candidate" element={<DashboardComponent />} />
        <Route path="/dashboard/employer" element={<DashboardComponentEmployer />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/verifications" element={<VerificationPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/post-jobs" element={<PostJobPage />} />
        <Route path="/certificate-submission" element={<CertificateSubmissionComponent />} />
        <Route path="/register" element={<RegisterationPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;