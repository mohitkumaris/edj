import { render, screen } from "@testing-library/react";
import TextBox from "./Index";

test("renders textbox", () => {
  render(<TextBox />);
  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeDefined();
});
