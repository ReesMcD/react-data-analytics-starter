import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PlayerPage from "./PlayerPage";

describe("Player Page Component", () => {
  it("should render the Player page with the correct name", () => {
    const playerId = "John Doe";
    render(<PlayerPage playerId={playerId} />);

    expect(screen.getByTestId("player-page")).toBeInTheDocument();
    expect(screen.getByText(`Player: ${playerId}`)).toBeInTheDocument();
  });
});
