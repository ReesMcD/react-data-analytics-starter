import { createLazyFileRoute } from "@tanstack/react-router";
import PlayerPage from "../../pages/player/PlayerPage";

export const Route = createLazyFileRoute("/player/$playerId")({
  component: PlayerPage,
});
