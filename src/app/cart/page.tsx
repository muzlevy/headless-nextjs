import { getCartItems } from "@/data/cart";
import { CartItem, CartSummary } from "@/features/cart/components";

export default function CartPage() {
  const items = getCartItems();

  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-8 text-3xl font-bold tracking-tight">购物车</h1>
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="space-y-4">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <CartSummary items={items} />
      </div>
    </main>
  );
}
