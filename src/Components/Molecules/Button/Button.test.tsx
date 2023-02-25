import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("Button이 화면상에 랜더됩니다.", () => {
  render(<Button text="Button" />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

test("Button에 텍스트 제어가 가능합니다.", () => {
  const buttonText = "Hello Wire-System!";
  render(<Button text={buttonText} />);
  const buttonElement = screen.getByText(buttonText);
  expect(buttonElement).toBeInTheDocument();
});
