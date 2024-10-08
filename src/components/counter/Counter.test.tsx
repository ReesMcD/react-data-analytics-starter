import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render Counter component", () => {
    renderCounter();

    expect(screen.getByTestId("counter-component")).toBeInTheDocument();
  });

  it("should render with initial state of 1", async () => {
    renderCounter();

    // expect(mockUseCounterStore).toHaveBeenCalled();
    expect(await screen.findByText(/^1$/)).toBeInTheDocument();
    expect(
      await screen.findByRole("button", { name: /one up/i })
    ).toBeInTheDocument();
  });

  it("should increase count by clicking a button", async () => {
    const user = userEvent.setup();

    renderCounter();

    expect(await screen.findByText(/^1$/)).toBeInTheDocument();

    await act(async () => {
      await user.click(await screen.findByRole("button", { name: /one up/i }));
    });

    expect(await screen.findByText(/^2$/)).toBeInTheDocument();
  });
});

const renderCounter = () => {
  return render(<Counter />);
};
