import { createFileRoute } from "@tanstack/react-router";
import { getTeamQuery } from "../../queries/useTeamQuery/useTeamQuery";
import { NFLTeam } from "../../types/NFLTeam";

export const Route = createFileRoute("/team/$teamId")({
  loader: async ({ context: { queryClient }, params }) => {
    return queryClient.ensureQueryData<NFLTeam | undefined>(
      getTeamQuery(params.teamId)
    );
  },
});
