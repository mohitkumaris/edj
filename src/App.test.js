import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Container", () => {
  render(<App />);
  const headers = screen.getAllByRole("heading");
  expect(headers).toHaveLength(4);
});
