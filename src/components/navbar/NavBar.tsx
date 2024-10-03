// Start of Selection
import { Link } from "react-router-dom";

function Navbar(): React.ReactNode {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 p-4 shadow-md z-50">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-gray-300">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
