import { createRootRoute } from "@tanstack/react-router";
import Navbar from "../components/navbar/NavBar";

export const Route = createRootRoute({
  component: Navbar,
});
