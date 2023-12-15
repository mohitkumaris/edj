import { render, screen } from "@testing-library/react";
import LeftPanel from "./LeftPanel";

test("renders Left Panel", () => {
  render(<LeftPanel />);
  const leftPanel = screen.getByTestId("left");
  expect(leftPanel).toBeDefined();
});
