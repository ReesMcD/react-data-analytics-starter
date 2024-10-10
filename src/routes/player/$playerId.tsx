import { createFileRoute } from "@tanstack/react-router";
import { getPlayerQuery } from "../../queries/usePlayerQuery/usePlayerQuery";
import { NFLPlayer } from "../../types/NFLPlayer";

export const Route = createFileRoute("/player/$playerId")({
  loader: async ({ context: { queryClient }, params }) => {
    return queryClient.ensureQueryData<NFLPlayer | undefined>(
      getPlayerQuery(params.playerId)
    );
  },
});
