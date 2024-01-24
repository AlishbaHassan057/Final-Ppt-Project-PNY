import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./homepage/HomePage";
import About from "./about/About";
import Cards from "./cards/Cards";
import Experience from "./experience/Experience";
import Logo from "./logo/Logo";
import Team from "./team/Team";
import Pricing from "./pricing/Pricing";
import Contacts from "./contact/Contacts";
import Footer from "./footer/Footer";
import PasteBoard from "./pasteboard/PasteBoard";
import Navbar from "./navbar/Navbar";
import Join from "./join/Join";
import Upcoming from "./upcoming/Upcoming";
import Testimonials from "./testimonials/Testimonials";
import Blogs from "./blog/Blogs";
import Login from "./login/Login";
import Admin from "./admin/Admin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <HomePage />
                <PasteBoard />
                <About />
                <Cards />
                <Experience />
                <Upcoming />
                <Logo />
                <Team />
                <Pricing />
                <Testimonials />
                <Join />
                <Blogs />
                <Footer />
              </>
            }
          />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
