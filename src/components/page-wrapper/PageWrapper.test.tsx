import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import renderWithRouter from "../../utils/test/renderWithRouter";
import PageWrapper from "./PageWrapper";

describe("PageWrapper Component", () => {
  test("renders children correctly", () => {
    renderWithRouter(
      <PageWrapper>
        <div>Test Child</div>
      </PageWrapper>
    );

    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });
});
