import "@testing-library/jest-dom";
import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithRouter from "../../utils/test/renderWithRouter";
import Charts from "./Charts";

describe("Charts Component", () => {
  test("should render with initial state of 1", async () => {
    renderCharts();

    expect(await screen.findByText(/^1$/)).toBeInTheDocument();
    expect(
      await screen.findByRole("button", { name: /one up/i })
    ).toBeInTheDocument();
  });

  test("should increase count by clicking a button", async () => {
    const user = userEvent.setup();

    renderCharts();

    expect(await screen.findByText(/^1$/)).toBeInTheDocument();

    await act(async () => {
      await user.click(await screen.findByRole("button", { name: /one up/i }));
    });

    expect(await screen.findByText(/^2$/)).toBeInTheDocument();
  });
});

const renderCharts = () => {
  return renderWithRouter(<Charts />);
};
