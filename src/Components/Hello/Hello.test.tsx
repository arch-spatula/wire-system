import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

test("Hello 예시 컴포넌트가 정상동작하는지 확인합니다.", () => {
  render(<Hello />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});
