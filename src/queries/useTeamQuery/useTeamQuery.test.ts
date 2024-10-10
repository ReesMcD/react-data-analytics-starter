import { QueryClient } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { getTeam } from "../../services/NFLService/NFLService";
import queryClientProviderTestWrapper from "../../utils/test/queryClientProviderTestWrapper";
import { useTeamQuery } from "./useTeamQuery";

jest.mock("../../services/NFLService/NFLService");
const queryClient = new QueryClient();

describe("useTeamQuery", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    queryClient.clear();
  });

  it("should fetch a team correctly using useTeamQuery", async () => {
    const mockTeam = {
      id: "TB",
      name: "Buccaneers",
      fullName: "Tampa Bay Buccaneers",
      city: "Tampa",
      state: "Florida",
      stadium: "Raymond James Stadium",
      conference: "NFC",
      division: "South",
    };

    const teamId = "TB";
    (getTeam as jest.Mock).mockResolvedValue(mockTeam);

    const { result } = renderHook(() => useTeamQuery(teamId), {
      wrapper: queryClientProviderTestWrapper(queryClient),
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.isError).toBe(false);
    expect(result.current.data).toEqual(mockTeam);
    expect(getTeam).toHaveBeenCalledWith(teamId);
  });
});
