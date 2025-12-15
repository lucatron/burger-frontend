import { NavLink } from "react-router-dom";
import "./Navbar.css";

type NavbarProps = {
  brandName: string;
};

export default function Navbar({ brandName }: NavbarProps) {
  return (
    <header className="navbar">
      <div className="navbar_inner">
        <span className="navbar_brand">{brandName}</span>

        <nav className="navbar_nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navbar_link active" : "navbar_link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/discover"
            className={({ isActive }) =>
              isActive ? "navbar_link active" : "navbar_link"
            }
          >
            Discover
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
