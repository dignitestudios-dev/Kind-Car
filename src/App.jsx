import { Route, Routes } from "react-router";
import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";
import DummyHome from "./pages/app/DummyHome";
import DummyLogin from "./pages/authentication/DummyLogin";
import AuthLayout from "./layouts/AuthLayout";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">
              🚧 Under Maintenance
            </h1>
          </div>
        }
      />

      <Route path="app" element={<DashboardLayout />}>
        <Route path="dashboard" element={<DummyHome />} />
      </Route>

      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<DummyLogin />} />
      </Route>

      <Route
        path="*"
        element={<div className="text-7xl">Page Not Found</div>}
      />
    </Routes>
  );
}

export default App;
