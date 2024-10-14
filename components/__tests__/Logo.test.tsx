import { render, screen } from "test-utils";
import Logo from "../Logo";

describe("Logo component", () => {
  it("renders the logo with the correct title text", () => {
    render(<Logo titleText="Rocky Linux Title" />);
    expect(screen.getByTitle("Rocky Linux Title")).toBeInTheDocument();
  });

  it("applies the default text class name when includeDefaultTextClassName is true", () => {
    render(
      <Logo
        titleText="Rocky Linux Logo"
        includeDefaultTextClassName={true}
      />
    );

    const pathElement = screen
      .getByLabelText("Rocky Linux Logo")
      .querySelector("path:last-child");

    expect(pathElement).toHaveClass("fill-black dark:fill-white");
  });

  it("does not apply the default text class name when includeDefaultTextClassName is false", () => {
    render(<Logo includeDefaultTextClassName={false} />);

    const pathElement = screen
      .getByLabelText("Rocky Linux Logo")
      .querySelector("path:last-child");

    expect(pathElement).not.toHaveClass("fill-black dark:fill-white");
  });

  it("applies the custom text class name", () => {
    render(<Logo textClassName="custom-class" />);

    const pathElement = screen
      .getByLabelText("Rocky Linux Logo")
      .querySelector("path:last-child");

    expect(pathElement).toHaveClass("custom-class");
  });

  it("renders the logo with the correct width and height", () => {
    render(
      <Logo
        width={500}
        height={200}
      />
    );

    const svgElement = screen.getByLabelText("Rocky Linux Logo");

    expect(svgElement).toHaveAttribute("width", "500");
    expect(svgElement).toHaveAttribute("height", "200");
  });

  it("renders the logo with the correct logo color", () => {
    render(<Logo logoColor="#FF0000" />);

    const svgElement = screen.getByLabelText("Rocky Linux Logo");
    const pathElement = svgElement.querySelectorAll("path")[0];

    expect(pathElement).toHaveAttribute("fill", "#FF0000");
  });

  it("renders the logo with the default title text when no titleText prop is provided", () => {
    render(<Logo />);
    expect(screen.getByTitle("Rocky Linux Logo")).toBeInTheDocument();
  });
});
