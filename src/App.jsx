import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./homepage/contact/Contacts";
import Login from "./pages/home/Main";
import Admin from "./homepage/admin/Admin";
import HomeMain from "./homepage/HomeMain";
import AboutUs from "./aboutus/AboutUs";
import Services from "./services/Services";

import AdminDashboard from "./dashboard/AdminDashboard";
import { ToastContainer } from "react-toastify";
import AddBlog from "./addblog/AddBlog";
import Blog from "./blog/Blog";

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/add-blog" element={<AddBlog />} />
          <Route path="/blog" element={<Blog />} />

          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
