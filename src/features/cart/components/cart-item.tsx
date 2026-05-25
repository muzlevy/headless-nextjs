import type { CartItem as CartItemType } from "@/types";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-4">
      <div>
        <h3 className="font-medium">{item.name}</h3>
        <p className="mt-1 text-sm text-gray-500">
          数量: {item.quantity}
        </p>
      </div>
      <div className="text-right">
        <p className="font-semibold">¥{item.price}</p>
        <p className="text-sm text-gray-500">
          小计: ¥{item.price * item.quantity}
        </p>
      </div>
    </div>
  );
}
