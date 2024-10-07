import { Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

function Navbar() {
  return (
    <>
      <nav className="w-full bg-gray-800 fixed top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link
                to="/"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium [&.active]:bg-gray-900"
              >
                Home
              </Link>
              <Link
                to="/charts"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium [&.active]:bg-gray-900 ml-4"
              >
                Charts
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="pt-16">
        {" "}
        {/* Add padding to account for fixed navbar */}
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  );
}

export default Navbar;
