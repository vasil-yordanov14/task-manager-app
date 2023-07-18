import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Task from "../Task";

test("renders tasks correctly", () => {
  const task = {
    id: "1",
    title: "Task 1",
    description: "Description 1",
  };
  render(<Task task={task} />);

  const titleEl = screen.getAllByText(/Title: /);
  const descriptionEl = screen.getAllByText(/Description: /);
  const idEl = screen.getAllByText(/ID: /);

  expect(titleEl.length).toBeGreaterThan(0);
  expect(descriptionEl.length).toBeGreaterThan(0);
  expect(idEl.length).toBeGreaterThan(0);
});
