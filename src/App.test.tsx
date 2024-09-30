import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";
import renderWithRouter from "./utils/test/renderWithRouter";

test("should render application with navigation", async () => {
  renderWithRouter(<App />);
  const user = userEvent.setup();

  expect(screen.getByText(/Home page/i)).toBeInTheDocument();

  await user.click(screen.getByText(/about/i));
  expect(screen.getByText(/About page/i)).toBeInTheDocument();
});


