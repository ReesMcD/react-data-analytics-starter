import { QueryClient } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { getTeams } from "../../services/NFLService/NFLService";
import queryClientProviderTestWrapper from "../../utils/test/queryClientProviderTestWrapper";
import { useTeamsQuery } from "./useTeamsQuery";

jest.mock("../../services/NFLService/NFLService");
const queryClient = new QueryClient();

describe("useTeamsQuery", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    queryClient.clear();
  });

  it("should fetch teams correctly using useTeamsQuery", async () => {
    const mockTeams = [
      { id: 1, name: "Team 1" },
      { id: 2, name: "Team 2" },
      { id: 3, name: "Team 3" },
    ];

    (getTeams as jest.Mock).mockResolvedValue(mockTeams);

    const { result } = renderHook(() => useTeamsQuery(), {
      wrapper: queryClientProviderTestWrapper(queryClient),
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.isError).toBe(false);
    expect(result.current.data).toEqual(mockTeams);
  });
});
