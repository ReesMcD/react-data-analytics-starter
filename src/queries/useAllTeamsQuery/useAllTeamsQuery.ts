import { useQuery } from "@tanstack/react-query";
import { getAllTeams } from "../../services/NFLService/NFLService";
import { NFLTeam } from "../../types/NFLTeam";

export const useAllTeamsQuery = () =>
  useQuery<NFLTeam[], Error>({
    queryKey: ["allTeams"],
    queryFn: getAllTeams,
    staleTime: Infinity,
  });
