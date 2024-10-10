import { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext } from "@tanstack/react-router";
import Navbar from "../components/navbar/NavBar";
import { getTeamsQuery } from "../queries/useTeamsQuery/useTeamsQuery";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    loader:
      () =>
      async ({
        context: { queryClient },
      }: {
        context: { queryClient: QueryClient };
      }) => {
        return queryClient.ensureQueryData(getTeamsQuery());
      },
    component: Navbar,
  }
);
