import { render, screen } from "@testing-library/react";
import Container from "./Container";

test("renders header in container", () => {
  render(<Container />);
  const headers = screen.getAllByRole("heading");
  expect(headers).toHaveLength(4);
});
