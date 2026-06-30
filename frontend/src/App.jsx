import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Students from "./modules/students/Students";
import Exams from "./modules/exams/Exams";
import Evaluation from "./modules/evaluation/Evaluation";
import OneOnOne from "./modules/oneOnOne/OneOnOne";
import FollowUps from "./modules/followups/FollowUps";
import Reports from "./pages/Reports";
import Notifications from "./pages/Notifications";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Login Page (No Sidebar) */}
        <Route path="/" element={<Login />} />

        {/* All Dashboard Pages (With Sidebar) */}
        <Route
          path="*"
          element={
            <DashboardLayout>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/students" element={<Students />} />
                <Route path="/exams" element={<Exams />} />
                <Route path="/evaluations" element={<Evaluation />} />
                <Route path="/one-on-one" element={<OneOnOne />} />
                <Route path="/followups" element={<FollowUps />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/notifications" element={<Notifications />} />
              </Routes>
            </DashboardLayout>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;