import { QueryClient } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { getPost } from "../../services/PlaceholderService/PlaceholderService";
import queryClientProviderTestWrapper from "../../utils/test/queryClientProviderTestWrapper";
import { usePostQuery } from "./usePostQuery";

jest.mock("../../services/PlaceholderService/PlaceholderService");
const queryClient = new QueryClient();

describe("usePostQuery", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    queryClient.clear();
  });

  it("should fetch posts correctly using usePostsQuery", async () => {
    const mockPost = { id: 1, title: "Post 1" };
    (getPost as jest.Mock).mockResolvedValue(mockPost);

    const { result } = renderHook(() => usePostQuery(1), {
      wrapper: queryClientProviderTestWrapper(queryClient),
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.isError).toBe(false);
    expect(result.current.data).toEqual(mockPost);
  });
});
