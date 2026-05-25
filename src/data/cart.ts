import type { CartItem } from "@/types";

const items: CartItem[] = [
  { id: "1", name: "无线蓝牙耳机", price: 299, quantity: 1 },
  { id: "2", name: "机械键盘", price: 599, quantity: 2 },
  { id: "3", name: "USB-C 扩展坞", price: 189, quantity: 1 },
  { id: "4", name: "27寸 4K 显示器", price: 2499, quantity: 1 },
];

export function getCartItems(): CartItem[] {
  return items;
}