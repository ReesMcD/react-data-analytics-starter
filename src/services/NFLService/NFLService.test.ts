import { NFLPlayer } from "../../types/NFLPlayer";
import { NFLTeam } from "../../types/NFLTeam";
import { get } from "../../utils/client/get";
import {
  getAllPlayers,
  getAllTeams,
  getPlayer,
  getTeam,
  NFL_DATA_URL,
} from "./NFLService";

jest.mock("../../utils/client/get");

describe("NFLService", () => {
  describe("getAllPlayers", () => {
    it("should fetch all players successfully", async () => {
      const mockPlayers: NFLPlayer[] = [
        {
          id: "TB12",
          name: "Tom Brady",
          team_id: "TB",
          number: 12,
          position: "QB",
          college: "Michigan",
          stats: {},
          skills: {},
        },
        {
          id: "PM15",
          name: "Patrick Mahomes",
          team_id: "KC",
          number: 15,
          position: "QB",
          college: "Texas Tech",
          stats: {},
          skills: {},
        },
      ];
      (get as jest.Mock).mockResolvedValue(mockPlayers);

      const result = await getAllPlayers();

      expect(get).toHaveBeenCalledWith(`${NFL_DATA_URL}/nfl_players.json`);
      expect(result).toEqual(mockPlayers);
    });
  });

  describe("getPlayer", () => {
    it("should fetch a specific player successfully", async () => {
      const mockPlayers: NFLPlayer[] = [
        {
          id: "TB12",
          name: "Tom Brady",
          team_id: "TB",
          number: 12,
          position: "QB",
          college: "Michigan",
          stats: {},
          skills: {},
        },
        {
          id: "PM15",
          name: "Patrick Mahomes",
          team_id: "KC",
          number: 15,
          position: "QB",
          college: "Texas Tech",
          stats: {},
          skills: {},
        },
      ];
      (get as jest.Mock).mockResolvedValue(mockPlayers);

      const result = await getPlayer("TB12");

      expect(get).toHaveBeenCalledWith(`${NFL_DATA_URL}/nfl_players.json`);
      expect(result).toEqual(mockPlayers[0]);
    });

    it("should return undefined for non-existent player", async () => {
      const mockPlayers: NFLPlayer[] = [
        {
          id: "TB12",
          name: "Tom Brady",
          team_id: "TB",
          number: 12,
          position: "QB",
          college: "Michigan",
          stats: {},
          skills: {},
        },
      ];
      (get as jest.Mock).mockResolvedValue(mockPlayers);

      const result = await getPlayer("NonExistent");

      expect(get).toHaveBeenCalledWith(`${NFL_DATA_URL}/nfl_players.json`);
      expect(result).toBeUndefined();
    });
  });

  describe("getAllTeams", () => {
    it("should fetch all teams successfully", async () => {
      const mockTeams: NFLTeam[] = [
        {
          id: "TB",
          name: "Buccaneers",
          fullName: "Tampa Bay Buccaneers",
          city: "Tampa",
          state: "Florida",
          stadium: "Raymond James Stadium",
          conference: "NFC",
          division: "South",
        },
        {
          id: "KC",
          name: "Chiefs",
          fullName: "Kansas City Chiefs",
          city: "Kansas City",
          state: "Missouri",
          stadium: "Arrowhead Stadium",
          conference: "AFC",
          division: "West",
        },
      ];
      (get as jest.Mock).mockResolvedValue(mockTeams);

      const result = await getAllTeams();

      expect(get).toHaveBeenCalledWith(`${NFL_DATA_URL}/nfl_teams.json`);
      expect(result).toEqual(mockTeams);
    });
  });

  describe("getTeam", () => {
    it("should fetch a specific team successfully", async () => {
      const mockTeams: NFLTeam[] = [
        {
          id: "TB",
          name: "Buccaneers",
          fullName: "Tampa Bay Buccaneers",
          city: "Tampa",
          state: "Florida",
          stadium: "Raymond James Stadium",
          conference: "NFC",
          division: "South",
        },
        {
          id: "KC",
          name: "Chiefs",
          fullName: "Kansas City Chiefs",
          city: "Kansas City",
          state: "Missouri",
          stadium: "Arrowhead Stadium",
          conference: "AFC",
          division: "West",
        },
      ];
      (get as jest.Mock).mockResolvedValue(mockTeams);

      const result = await getTeam("TB");

      expect(get).toHaveBeenCalledWith(`${NFL_DATA_URL}/nfl_teams.json`);
      expect(result).toEqual(mockTeams[0]);
    });

    it("should return undefined for non-existent team", async () => {
      const mockTeams: NFLTeam[] = [
        {
          id: "TB",
          name: "Buccaneers",
          fullName: "Tampa Bay Buccaneers",
          city: "Tampa",
          state: "Florida",
          stadium: "Raymond James Stadium",
          conference: "NFC",
          division: "South",
        },
      ];
      (get as jest.Mock).mockResolvedValue(mockTeams);

      const result = await getTeam("NonExistent");

      expect(get).toHaveBeenCalledWith(`${NFL_DATA_URL}/nfl_teams.json`);
      expect(result).toBeUndefined();
    });
  });
});
