import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/create-recipe">Create</Link>
      <Link to="/saved-recipe">Save</Link>
      <Link to="/auth">Register/LogIn</Link>
    </div>
  );
};

export default NavBar;
