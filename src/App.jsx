import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { JobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import Login from "./auth/Login/Login";
import Register from "./auth/Register/Register";
import { AuthProvider } from "./contexts/AuthContext";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="jobs" element={<JobsPage />} />
      <Route path="jobs/:id" element={<JobPage />} loader={JobLoader} />
      <Route path="add-job" element={<AddJobPage />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
