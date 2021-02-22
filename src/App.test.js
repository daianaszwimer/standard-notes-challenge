import { render, screen } from "@testing-library/react";
import App from "./App";
import {
  TITLE_TEXT,
  SUBTITLE_TEXT,
  LINK_TEXT
} from "./modules/landing/constants";

test("renders title", () => {
  render(<App />);
  const linkElement = screen.getByText(TITLE_TEXT);
  expect(linkElement).toBeInTheDocument();
});
test("renders subtitle", () => {
  render(<App />);
  const linkElement = screen.getByText(SUBTITLE_TEXT);
  expect(linkElement).toBeInTheDocument();
});
test("renders link", () => {
  render(<App />);
  const linkElement = screen.getByText(LINK_TEXT);
  expect(linkElement).toBeInTheDocument();
});
