import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return isActive ? { color: "green" } : {};
            }}
          >
            {({ isActive }) => {
              return isActive ? "Active tab" : "Home";
            }}
          </NavLink>
        </li>
        <li>
          <NavLink
            end
            to={"/react"}
            style={({ isActive }) => {
              return isActive ? { color: "green" } : {};
            }}
          >
            {({ isActive }) => {
              return isActive ? "Active tab" : "Slogan";
            }}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/react/dom"
            style={({ isActive }) => {
              return isActive ? { color: "green" } : {};
            }}
          >
            {({ isActive }) => {
              return isActive ? "Active tab" : "Dom";
            }}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
