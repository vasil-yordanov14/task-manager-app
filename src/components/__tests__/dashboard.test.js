import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "../Dashboard";

test("title input should be rendered", () => {
  render(<Dashboard />);
  const titleInputEl = screen.getByLabelText("Title");
  expect(titleInputEl).toBeInTheDocument();
});
test("description input should be rendered", () => {
  render(<Dashboard />);
  const descriptionInputEl = screen.getByLabelText("Description");
  expect(descriptionInputEl).toBeInTheDocument();
});
test("add button should be rendered", () => {
  render(<Dashboard />);
  const addButton = screen.getByText("Add Task");
  expect(addButton).toBeInTheDocument();
});
