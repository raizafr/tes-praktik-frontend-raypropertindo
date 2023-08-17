import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import AddNews from "./pages/AddNews";
import UserManagement from "./pages/UserManagement";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex">
          <Sidebar />
          <div className="w-full">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/news/add-news" element={<AddNews />} />
              <Route path="/user-management" element={<UserManagement />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
