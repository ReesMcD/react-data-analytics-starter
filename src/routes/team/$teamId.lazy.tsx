import { createLazyFileRoute } from "@tanstack/react-router";
import TeamPage from "../../pages/team/TeamPage";

export const Route = createLazyFileRoute("/team/$teamId")({
  component: TeamPage,
});
