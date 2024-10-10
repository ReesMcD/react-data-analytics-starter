import { Route } from "@tanstack/react-router";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { useTeamQuery } from "../../queries/useTeamQuery/useTeamQuery";
import TeamPage from "./TeamPage";

jest.mock("@tanstack/react-router", () => ({
  Route: {
    useParams: jest.fn(),
  },
}));

jest.mock("../../queries/useTeamQuery/useTeamQuery", () => ({
  useTeamQuery: jest.fn(),
}));

describe("Team Page Component", () => {
  it("should render the Team page with the correct team name", () => {
    const mockTeamId = "TB";
    const mockTeam = {
      id: "TB",
      name: "Buccaneers",
      fullName: "Tampa Bay Buccaneers",
    };

    jest.mocked(Route.useParams).mockReturnValue({ teamId: mockTeamId });
    jest.mocked(useTeamQuery).mockReturnValue({ data: mockTeam });

    render(<TeamPage />);

    expect(screen.getByTestId("player-page")).toBeInTheDocument();
    expect(screen.getByText(`Team: ${mockTeam.name}`)).toBeInTheDocument();
  });

  it("should render loading state when team data is not available", () => {
    const mockTeamId = "TB";

    (Route.useParams as jest.Mock).mockReturnValue({ teamId: mockTeamId });
    (useTeamQuery as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: true,
    });

    render(<TeamPage />);

    expect(screen.getByTestId("player-page")).toBeInTheDocument();
    expect(screen.getByText("Team:")).toBeInTheDocument();
  });
});
