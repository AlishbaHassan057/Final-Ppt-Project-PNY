import { useState } from "react";
import styles from "./dash.module.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";

const AdminDashboard = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className={styles["grid-container"]}>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Home />
    </div>
  );
};

export default AdminDashboard;
