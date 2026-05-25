import { render, screen } from "@testing-library/react";
import { CartItem } from "@/features/cart/components/cart-item";

describe("CartItem", () => {
  it("renders item name and price", () => {
    render(<CartItem item={{ id: "1", name: "测试商品", price: 100, quantity: 2 }} />);
    expect(screen.getByText("测试商品")).toBeInTheDocument();
    expect(screen.getByText("¥100")).toBeInTheDocument();
  });
});
