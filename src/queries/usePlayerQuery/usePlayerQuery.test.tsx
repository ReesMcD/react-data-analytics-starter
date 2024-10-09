import { QueryClient } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { getPlayer } from "../../services/NFLService/NFLService";
import queryClientProviderTestWrapper from "../../utils/test/queryClientProviderTestWrapper";
import { usePlayerQuery } from "./usePlayerQuery";

jest.mock("../../services/NFLService/NFLService");
const queryClient = new QueryClient();

describe("usePlayerQuery", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    queryClient.clear();
  });

  it("should fetch player correctly using usePlayerQuery", async () => {
    const mockPlayer = {
      id: "1",
      name: "Tom Brady",
      position: "QB",
      team: "TB",
    };

    (getPlayer as jest.Mock).mockResolvedValue(mockPlayer);

    const { result } = renderHook(() => usePlayerQuery("1"), {
      wrapper: queryClientProviderTestWrapper(queryClient),
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.isError).toBe(false);
    expect(result.current.data).toEqual(mockPlayer);
  });
});
