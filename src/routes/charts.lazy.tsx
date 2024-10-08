import { createLazyFileRoute } from "@tanstack/react-router";
import ChartsPage from "../pages/charts/ChartsPage";

export const Route = createLazyFileRoute("/charts")({
  component: ChartsPage,
});
