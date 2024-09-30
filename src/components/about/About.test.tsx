import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "./About";
import renderWithRouter from "../../utils/test/renderWithRouter";

test("should render about page", async () => {
  renderWithRouter(<About/>);
  expect(screen.getByText(/About page/i)).toBeInTheDocument();
});
