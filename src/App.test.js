import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders Notes Keeper", () => {
  render(<App />);
  const linkElement = screen.getByText(/Notes Keeper/i);
  expect(linkElement).toBeInTheDocument();
});
