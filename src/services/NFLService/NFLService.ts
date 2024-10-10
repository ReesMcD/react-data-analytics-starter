import { NFLPlayer } from "../../types/NFLPlayer";
import { NFLTeam } from "../../types/NFLTeam";
import { get } from "../../utils/client/get";

export const NFL_DATA_URL = "/data";

export async function getPlayers(): Promise<NFLPlayer[]> {
  console.log("Fetching all NFL players");
  try {
    return await get<NFLPlayer[]>(`${NFL_DATA_URL}/nfl_players.json`);
  } catch (error) {
    console.error("Error in NFLService getPlayers:", error);
    throw error;
  }
}

export async function getPlayer(id: string): Promise<NFLPlayer | undefined> {
  console.log(`Fetching NFL player ${id}`);
  try {
    const players = await get<NFLPlayer[]>(`${NFL_DATA_URL}/nfl_players.json`);
    return players.find((player) => player.id === id);
  } catch (error) {
    console.error(`Error in NFLService getPlayer ${id}:`, error);
    throw error;
  }
}

export async function getTeams(): Promise<NFLTeam[]> {
  console.log("Fetching all NFL teams");
  try {
    return await get<NFLTeam[]>(`${NFL_DATA_URL}/nfl_teams.json`);
  } catch (error) {
    console.error("Error in NFLService getTeams:", error);
    throw error;
  }
}

export async function getTeam(id: string): Promise<NFLTeam | undefined> {
  console.log(`Fetching NFL team ${id}`);
  try {
    const teams = await get<NFLTeam[]>(`${NFL_DATA_URL}/nfl_teams.json`);
    return teams.find((team) => team.id === id);
  } catch (error) {
    console.error(`Error in NFLService getTeam ${id}:`, error);
    throw error;
  }
}
