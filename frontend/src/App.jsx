import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Notifications from "./pages/Notifications";

import Students from "./modules/students/Students";
import Exams from "./modules/exams/Exams";
import Evaluation from "./modules/evaluation/Evaluation";
import OneOnOne from "./modules/oneOnOne/OneOnOne";
import FollowUps from "./modules/followups/FollowUps";

import DashboardLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./auth/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/evaluations" element={<Evaluation />} />
          <Route path="/one-on-one" element={<OneOnOne />} />
          <Route path="/followups" element={<FollowUps />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/notifications" element={<Notifications />} />
        </Route>

        {/* Unknown Routes */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
