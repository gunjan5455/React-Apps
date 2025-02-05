import { render, screen } from "@testing-library/react";
import Greetings from "../component/Greetings/Greetings";

// test("Test when name prop is not provided", () => {
//   render(<Greetings />);
//   const greetingElement = screen.getByText("Hello, How are you ?");
//   expect(greetingElement).toBeInTheDocument();
// });

test("Test when name prop is not provided", () => {
  //render a greeting component
  render(<Greetings />);

  const greetingElement = screen.getByText("Hello World ! How are you doing ?");

  expect(greetingElement).toBeInTheDocument();
});
