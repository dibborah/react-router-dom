import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <h1>Nav</h1>
      <nav>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"about"}>About</Link></li>
          <li><Link to={"post"}>Post</Link></li>
          <li><Link to={"contact"}>Contact</Link></li>
        </ul>
      </nav>
      <hr />
      <h1>Main Content</h1>
      <Outlet />
    </div>
  );
};

export default RootLayout;
