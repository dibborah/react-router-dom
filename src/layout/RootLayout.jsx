import { Link, NavLink, Outlet } from "react-router-dom";
import styles from "./RootLayout.module.css";

const RootLayout = () => {
  return (
    <div>
      <h1>Nav</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? styles.activeNav : null)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"about"}
              className={({ isActive }) => (isActive ? styles.activeNav : null)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"posts"}
              className={({ isActive }) => (isActive ? styles.activeNav : null)}
            >
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"contact"}
              className={({ isActive }) => (isActive ? styles.activeNav : null)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default RootLayout;
