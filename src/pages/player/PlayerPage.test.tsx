import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PlayerPage from "./PlayerPage";

jest.mock("@tanstack/react-router", () => ({
  Route: {
    useParams: jest.fn(),
  },
}));

jest.mock("../../queries/usePlayerQuery/usePlayerQuery", () => ({
  usePlayerQuery: jest.fn(),
}));

describe("Player Page Component", () => {
  it("should render the Player page with the correct player name", () => {
    // const mockPlayerId = "TB12";
    const mockPlayer = {
      id: "TB12",
      name: "Tom Brady",
      team_id: "TB",
      number: 12,
      position: "QB",
      college: "Michigan",
      stats: {
        passingYards: 84520,
        passingTouchdowns: 624,
        interceptions: 203,
      },
      skills: {
        armStrength: 95,
        accuracy: 98,
        leadership: 99,
      },
    };

    // jest.mocked(Route.useParams).mockReturnValue({ playerId: mockPlayerId });
    // jest.mocked(usePlayerQuery).mockReturnValue({ data: mockPlayer });

    render(<PlayerPage />);

    expect(screen.getByTestId("player-page")).toBeInTheDocument();
    expect(screen.getByText(`Player: ${mockPlayer.name}`)).toBeInTheDocument();
  });
});
