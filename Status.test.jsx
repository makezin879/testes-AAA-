import { render, screen } from "@testing-library/react";
import Status from "../Status";

test("Renderiza status corretamente", () => {
  render(<Status status="entregue" />);
  expect(screen.getByText(/Pago/i)).toBeInTheDocument();
});