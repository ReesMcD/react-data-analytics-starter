import { queryOptions, useQuery } from "@tanstack/react-query";
import { getTeam } from "../../services/NFLService/NFLService";
import { NFLTeam } from "../../types/NFLTeam";

export const getTeamQuery = (teamId: string) =>
  queryOptions<NFLTeam | undefined, Error>({
    queryKey: ["getTeam", teamId],
    queryFn: () => getTeam(teamId),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

export const useTeamQuery = (teamId: string) =>
  useQuery<NFLTeam | undefined, Error>(getTeamQuery(teamId));
