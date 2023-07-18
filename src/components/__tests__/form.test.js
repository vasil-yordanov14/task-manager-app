import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Form from "../Form";

test("form renders correctly", () => {
  render(<Form />);

  const titleInput = screen.getByLabelText("Title");
  const descriptionInput = screen.getByLabelText("Description");
  const submitButton = screen.getByText("Add Task");
  const downloadButton = screen.getByText("Download");

  expect(titleInput).toBeInTheDocument();
  expect(descriptionInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
  expect(downloadButton).toBeInTheDocument();
});
