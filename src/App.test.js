import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const searchInput = screen.getByTestId("searchInput");
  expect(searchInput).toBeInTheDocument();
});
