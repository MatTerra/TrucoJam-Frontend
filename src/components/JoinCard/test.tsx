import { render, screen } from "@testing-library/react";
import JoinCard from ".";

describe("<JoinCard />", () => {
  it("should render the heading", () => {
    const { container } = render(<JoinCard text="" />);

    expect(
      screen.getByRole("heading", { name: /JoinCard/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
