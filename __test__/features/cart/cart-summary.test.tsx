import { render, screen } from "@testing-library/react";
import { CartSummary } from "@/features/cart/components/cart-summary";

describe("CartSummary", () => {
  it("displays correct total price", () => {
    const items = [
      { id: "1", name: "A", price: 100, quantity: 2 },
      { id: "2", name: "B", price: 50, quantity: 3 },
    ];
    render(<CartSummary items={items} />);
    // 100*2 + 50*3 = 350
    expect(screen.getByText("¥350")).toBeInTheDocument();
  });

  it("displays correct item count", () => {
    const items = [
      { id: "1", name: "A", price: 100, quantity: 2 },
      { id: "2", name: "B", price: 50, quantity: 3 },
    ];
    render(<CartSummary items={items} />);
    expect(screen.getByText("5 件")).toBeInTheDocument();
  });
});
