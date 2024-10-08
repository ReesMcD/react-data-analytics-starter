import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PageWrapper from "./PageWrapper";

describe("PageWrapper Component", () => {
  it("should render children correctly", () => {
    render(
      <PageWrapper>
        <div>Test Child</div>
      </PageWrapper>
    );

    expect(screen.getByTestId("page-wrapper")).toBeInTheDocument();
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });
});
