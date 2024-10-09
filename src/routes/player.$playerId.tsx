import { createFileRoute } from "@tanstack/react-router";
import PlayerPage from "../pages/player/PlayerPage";
import { getPlayer } from "../services/NFLService/NFLService";

export const Route = createFileRoute("/player/$playerId")({
  loader: ({ params }) => getPlayer(params.playerId),
  component: PlayerPage,
});
