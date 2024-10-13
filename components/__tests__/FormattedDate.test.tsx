import { render, screen } from "test-utils";
import FormattedDate from "../FormattedDate";

describe("Formatted Date component", () => {
  it("renders correctly with a valid date string", () => {
    render(<FormattedDate dateString="2023-10-05" />);
    const timeElement = screen.getByText("Oct 5, 2023");
    expect(timeElement).toBeInTheDocument();
    expect(timeElement).toHaveAttribute("dateTime", "2023-10-05");
  });

  it("handles invalid date string gracefully", () => {
    render(<FormattedDate dateString="invalid-date" />);
    const timeElement = screen.getByText("Invalid Date");
    expect(timeElement).toBeInTheDocument();
    expect(timeElement).toHaveAttribute("dateTime", "invalid-date");
  });

  it("handles empty date string", () => {
    render(<FormattedDate dateString="" />);
    const timeElement = screen.getByText("Invalid Date");
    expect(timeElement).toBeInTheDocument();
    expect(timeElement).toHaveAttribute("dateTime", "");
  });

  it("handles null date string", () => {
    // @ts-ignore
    render(<FormattedDate dateString={null} />);
    const timeElement = screen.getByText("Invalid Date");
    expect(timeElement).toBeInTheDocument();
  });

  it("handles undefined date string", () => {
    // @ts-ignore
    render(<FormattedDate dateString={undefined} />);
    const timeElement = screen.getByText("Invalid Date");
    expect(timeElement).toBeInTheDocument();
  });

  it("handles leap year date", () => {
    render(<FormattedDate dateString="2020-02-29" />);
    const timeElement = screen.getByText("Feb 29, 2020");
    expect(timeElement).toBeInTheDocument();
    expect(timeElement).toHaveAttribute("dateTime", "2020-02-29");
  });

  it("handles future date", () => {
    render(<FormattedDate dateString="3023-10-05" />);
    const timeElement = screen.getByText("Oct 5, 3023");
    expect(timeElement).toBeInTheDocument();
    expect(timeElement).toHaveAttribute("dateTime", "3023-10-05");
  });

  it("handles past date", () => {
    render(<FormattedDate dateString="1990-01-01" />);
    const timeElement = screen.getByText("Jan 1, 1990");
    expect(timeElement).toBeInTheDocument();
    expect(timeElement).toHaveAttribute("dateTime", "1990-01-01");
  });

  it("handles different date formats", () => {
    render(<FormattedDate dateString="05 Oct 2023" />);
    const timeElement = screen.getByText("Invalid Date");
    expect(timeElement).toBeInTheDocument();
    expect(timeElement).toHaveAttribute("dateTime", "05 Oct 2023");
  });
});
