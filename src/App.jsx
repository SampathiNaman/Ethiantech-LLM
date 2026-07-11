import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import CourseListPage from "./components/CourseListPage";
import CourseDetailsPage from "./components/CourseDetailsPage";
import VideoPage from "./components/VideoPage";
import TutorLayout from "./components/tutor/TutorLayout";
import AddCoursePage from "./components/tutor/AddCoursePage";
import DashboardPlaceholder from "./components/tutor/DashboardPlaceholder";
import TutorCoursesPage from "./components/tutor/TutorCoursesPage";
import StudentsEnrolledPage from "./components/tutor/StudentsEnrolledPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CourseListPage />} />
        <Route path="/courses/video" element={<VideoPage />} />
        <Route path="/course/:id" element={<CourseDetailsPage />} />
        <Route path="/tutor" element={<TutorLayout />}>
          <Route index element={<Navigate to="add-course" replace />} />
          <Route path="dashboard" element={<DashboardPlaceholder />} />
          <Route path="add-course" element={<AddCoursePage />} />
          <Route path="courses" element={<TutorCoursesPage />} />
          <Route path="students" element={<StudentsEnrolledPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
