import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useTeamsQuery } from "../../queries/useTeamsQuery/useTeamsQuery";

function Navbar() {
  const { data: teams } = useTeamsQuery();
  return (
    <>
      <NavigationMenu.Root className="w-full fixed top-0 left-0 right-0 z-10 bg-white">
        <div className="container mx-auto px-4 relative">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          <div className="flex justify-between items-center h-16">
            <NavigationMenu.List className="flex space-x-4">
              <NavigationMenu.Item>
                <NavigationMenu.Link asChild>
                  <Link
                    to="/"
                    className="hover:text-secondary transition-colors duration-200 font-montserrat"
                  >
                    Home
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link asChild>
                  <Link
                    to="/charts"
                    className="hover:text-secondary transition-colors duration-200 font-montserrat"
                  >
                    Charts
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="hover:text-secondary transition-colors duration-200 font-montserrat">
                  Teams
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="absolute top-full left-0 w-auto bg-white shadow-lg rounded-md p-2">
                  <NavigationMenu.Sub>
                    <NavigationMenu.List className="grid grid-cols-auto gap-2 w-auto max-h-80 overflow-y-auto p-4">
                      {teams?.map((team) => (
                        <NavigationMenu.Item key={team.id}>
                          <NavigationMenu.Link asChild>
                            <Link
                              to="/team/$teamId"
                              params={{ teamId: team.id }}
                              className="block px-4 py-2 hover:bg-gray-100 rounded-md transition-colors duration-200 font-montserrat"
                            >
                              {team.name}
                            </Link>
                          </NavigationMenu.Link>
                        </NavigationMenu.Item>
                      ))}
                    </NavigationMenu.List>
                  </NavigationMenu.Sub>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </div>
        </div>
      </NavigationMenu.Root>

      <div className="container mx-auto px-4 pt-20">
        {" "}
        {/* Add padding to account for fixed navbar */}
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  );
}

export default Navbar;
