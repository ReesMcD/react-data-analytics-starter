import { queryOptions, useQuery } from "@tanstack/react-query";
import { getPlayer } from "../../services/NFLService/NFLService";
import { NFLPlayer } from "../../types/NFLPlayer";

export const getPlayerQuery = (playerId: string) =>
  queryOptions<NFLPlayer | undefined, Error>({
    queryKey: ["player", playerId],
    queryFn: () => getPlayer(playerId),
    refetchOnWindowFocus: false,
    staleTime: 300000,
  });

export const usePlayerQuery = (playerId: string) =>
  useQuery<NFLPlayer | undefined, Error>(getPlayerQuery(playerId));
