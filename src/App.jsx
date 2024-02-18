import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./homepage/contact/Contacts";
import Login from "./pages/home/Main";
import Admin from "./homepage/admin/Admin";
import HomeMain from "./homepage/HomeMain";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomeMain />
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
