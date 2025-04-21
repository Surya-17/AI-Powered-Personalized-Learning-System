import { NavLink } from "react-router-dom";
import "./header.css";
import { CircleUser, Home } from "lucide-react";
import { translateLocalStorage } from "../../translate/translate";

const Header = () => {
  return (
    <header>
      <span style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold", marginLeft: "10px" }}>
        Neural Nomads
      </span>
      <NavLink to="/" className={"Home"}>
        <Home size={40} strokeWidth={1} color="white" />
      </NavLink>
      <NavLink to="/profile" className={"ProfileAvatar"}>
        <CircleUser size={50} strokeWidth={1} color="white" />
      </NavLink>
    </header>
  );
};


export default Header;
