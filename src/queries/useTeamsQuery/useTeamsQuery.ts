import { queryOptions, useQuery } from "@tanstack/react-query";
import { getTeams } from "../../services/NFLService/NFLService";
import { NFLTeam } from "../../types/NFLTeam";

export const getTeamsQuery = () =>
  queryOptions<NFLTeam[], Error>({
    queryKey: ["getTeams"],
    queryFn: getTeams,
    staleTime: Infinity,
  });

export const useTeamsQuery = () => useQuery<NFLTeam[], Error>(getTeamsQuery());
