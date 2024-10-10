import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TeamPage from "./TeamPage";

describe("Team Page Component", () => {
  it("should render the Team page with the correct team ID", () => {
    const teamId = "team123";
    render(<TeamPage />);

    expect(screen.getByTestId("player-page")).toBeInTheDocument();
    expect(screen.getByText(`Team: ${teamId}`)).toBeInTheDocument();
  });
});
