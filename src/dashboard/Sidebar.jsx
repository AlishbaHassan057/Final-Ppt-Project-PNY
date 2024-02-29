import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
import styles from "./dash.module.css";

const Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? styles["sidebar-responsive"] : ""}
    >
      <div className={styles["sidebar-title"]}>
        <div className={styles["sidebar-brand"]}>
          <BsCart3 className={`${styles.icon} ${styles.icon_header}`} /> SHOP
        </div>
        <span
          className={`${styles.icon} ${styles.close_icon}`}
          onClick={OpenSidebar}
        >
          X
        </span>
      </div>

      <ul className={styles["sidebar-list"]}>
        <li className={styles["sidebar-list-item"]}>
          <a href="">
            <BsGrid1X2Fill className={styles.icon} /> Dashboard
          </a>
        </li>
        <li className={styles["sidebar-list-item"]}>
          <a href="">
            <BsFillArchiveFill className={styles.icon} /> Events
          </a>
        </li>
        <li className={styles["sidebar-list-item"]}>
          <a href="">
            <BsFillGrid3X3GapFill className={styles.icon} />
            Upcoming Events
          </a>
        </li>
        <li className={styles["sidebar-list-item"]}>
          <a href="">
            <BsPeopleFill className={styles.icon} /> Registered Clients
          </a>
        </li>
        <li className={styles["sidebar-list-item"]}>
          <a href="">
            <BsListCheck className={styles.icon} /> Blogs
          </a>
        </li>
        <li className={styles["sidebar-list-item"]}>
          <a href="">
            <BsMenuButtonWideFill className={styles.icon} /> Reports
          </a>
        </li>
        <li className={styles["sidebar-list-item"]}>
          <a href="">
            <BsFillGearFill className={styles.icon} /> Setting
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
