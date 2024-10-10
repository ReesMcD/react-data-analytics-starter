import { queryOptions, useQuery } from "@tanstack/react-query";
import { getAllTeams } from "../../services/NFLService/NFLService";
import { NFLTeam } from "../../types/NFLTeam";

export const getTeamsQuery = () =>
  queryOptions<NFLTeam[], Error>({
    queryKey: ["allTeams"],
    queryFn: getAllTeams,
    staleTime: Infinity,
  });

export const useAllTeamsQuery = () =>
  useQuery<NFLTeam[], Error>(getTeamsQuery());
