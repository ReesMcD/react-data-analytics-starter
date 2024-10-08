import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PageWrapper from "./PageWrapper";

describe("PageWrapper Component", () => {
  test("renders children correctly", () => {
    render(
      <PageWrapper>
        <div>Test Child</div>
      </PageWrapper>
    );

    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });
});
