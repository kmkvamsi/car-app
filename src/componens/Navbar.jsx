import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <ul>
          <NavLink style={{ color: "black" }} to="/">
            <li>
              {" "}
              <b> CR</b>
            </li>
          </NavLink>
          <NavLink to="/">
            {" "}
            <li>Home</li>
          </NavLink>
          <NavLink to="/buyacar">
            {" "}
            <li>Buycars</li>
          </NavLink>
          <NavLink to="/aboutus">
            {" "}
            <li>About</li>
          </NavLink>
          <NavLink to="/contactus">
            <li style={{ backgroundColor: " #043812", color: "white" }}>
              Contact
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
