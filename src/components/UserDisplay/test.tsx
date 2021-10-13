import { render, screen } from "@testing-library/react";
import UserDisplay from ".";

describe("<UserDisplay />", () => {
  it("should render the heading", () => {
    const { container } = render(
      <UserDisplay userTurn={false} username={"fulane"} />
    );

    expect(
      screen.getByRole("heading", { name: /UserDisplay/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
