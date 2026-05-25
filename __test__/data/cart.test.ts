import { getCartItems } from "@/data/cart";

describe("getCartItems", () => {
  it("returns an array of cart items", () => {
    const items = getCartItems();
    expect(Array.isArray(items)).toBe(true);
    expect(items.length).toBeGreaterThan(0);
  });

  it("each item has required fields", () => {
    const items = getCartItems();
    for (const item of items) {
      expect(item).toHaveProperty("id");
      expect(item).toHaveProperty("name");
      expect(item).toHaveProperty("price");
      expect(item).toHaveProperty("quantity");
    }
  });
});
