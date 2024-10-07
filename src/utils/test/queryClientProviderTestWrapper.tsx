import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClientProviderTestWrapper =
  (queryClient: QueryClient) =>
  ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

export default queryClientProviderTestWrapper;
