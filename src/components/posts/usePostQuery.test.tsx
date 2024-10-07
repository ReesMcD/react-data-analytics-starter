import { QueryClient } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { getPosts } from "../../services/PlaceholderService/PlaceholderService";
import queryClientProviderTestWrapper from "../../utils/test/queryClientProviderTestWrapper";
import usePostsQuery from "./usePostsQuery";

jest.mock("../../services/PlaceholderService/PlaceholderService");
const queryClient = new QueryClient();

describe("Posts component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    queryClient.clear();
  });

  it("fetches posts correctly using usePostsQuery", async () => {
    const mockPosts = [
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" },
      { id: 3, title: "Post 3" },
    ];

    (getPosts as jest.Mock).mockResolvedValue(mockPosts);

    const { result } = renderHook(() => usePostsQuery(), {
      wrapper: queryClientProviderTestWrapper(queryClient),
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.isError).toBe(false);
    expect(result.current.data).toEqual(mockPosts);
  });
});
