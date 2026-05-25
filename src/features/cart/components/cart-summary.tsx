import type { CartItem } from "@/types";

interface CartSummaryProps {
  items: CartItem[];
}

export function CartSummary({ items }: CartSummaryProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="rounded-lg border bg-gray-50 p-6">
      <h2 className="mb-4 text-lg font-semibold">订单摘要</h2>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">商品数量</span>
          <span>{itemCount} 件</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">运费</span>
          <span>免运费</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between text-base font-semibold">
          <span>合计</span>
          <span>¥{total}</span>
        </div>
      </div>
    </div>
  );
}
