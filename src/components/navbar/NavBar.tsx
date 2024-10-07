// Start of Selection
import { Link } from "react-router-dom";

function Navbar(): React.ReactNode {
  return (
    <nav className="">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
