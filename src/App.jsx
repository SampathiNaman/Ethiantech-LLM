import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import CourseListPage from "./components/CourseListPage";
import CourseDetailsPage from "./components/CourseDetailsPage";
import TutorLayout from "./components/tutor/TutorLayout";
import AddCoursePage from "./components/tutor/AddCoursePage";
import TutorDashboardPage from "./components/tutor/TutorDashboardPage";
import TutorCoursesPage from "./components/tutor/TutorCoursesPage";
import StudentsEnrolledPage from "./components/tutor/StudentsEnrolledPage";
import CourseVideo from "./components/CourseVideo";
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboardPage from "./components/admin/AdminDashboardPage";
import AdminRevenuePage from "./components/admin/AdminRevenuePage";
import AdminStudentsPage from "./components/admin/AdminStudentsPage";
import AdminInstructorsPage from "./components/admin/AdminInstructorsPage";
import AdminCoursesPage from "./components/admin/AdminCoursesPage";
import AdminUsersPage from "./components/admin/AdminUsersPage";
import StudentLayout from "./components/student/StudentLayout";
import StudentDashboardPage from "./components/student/StudentDashboardPage";
import StudentMyCoursesPage from "./components/student/StudentMyCoursesPage";
import StudentNotesPage from "./components/student/StudentNotesPage";
import StudentWishlistPage from "./components/student/StudentWishlistPage";
import StudentPerformancePage from "./components/student/StudentPerformancePage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CourseListPage />} />
        <Route path="/courses/video" element={<CourseVideo />} />
        <Route path="/course/:id" element={<CourseDetailsPage />} />
        <Route path="/tutor" element={<TutorLayout />}>
          <Route index element={<Navigate to="add-course" replace />} />
          <Route path="dashboard" element={<TutorDashboardPage />} />
          <Route path="add-course" element={<AddCoursePage />} />
          <Route path="courses" element={<TutorCoursesPage />} />
          <Route path="students" element={<StudentsEnrolledPage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboardPage />} />
          <Route path="revenue" element={<AdminRevenuePage />} />
          <Route path="students" element={<AdminStudentsPage />} />
          <Route path="instructors" element={<AdminInstructorsPage />} />
          <Route path="courses" element={<AdminCoursesPage />} />
          <Route path="users" element={<AdminUsersPage />} />
        </Route>
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<StudentDashboardPage />} />
          <Route path="my-courses" element={<StudentMyCoursesPage />} />
          <Route path="notes" element={<StudentNotesPage />} />
          <Route path="wishlist" element={<StudentWishlistPage />} />
          <Route path="performance" element={<StudentPerformancePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
