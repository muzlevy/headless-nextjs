export interface Post {
  id: string;
  title: string;
  body: string;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
