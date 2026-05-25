"use client";

import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export function Navbar() {
  const handleClick = () => {
    console.log("点击了");
  };
  return (
    <nav className="border-b">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Headless NextJS
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/cart"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            购物车
          </Link>

          <Menu as="div" className="relative">
            <MenuButton className="flex size-10 items-center justify-center overflow-hidden rounded-full bg-gray-200 text-sm font-medium transition-colors hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2">
              U
            </MenuButton>
            <MenuItems
              anchor="bottom end"
              className="mt-2 w-44 origin-top-right rounded-lg border bg-white p-1 shadow-lg"
            >
              <MenuItem>
                <button
                  className="flex w-full rounded-md px-3 py-2 text-left text-sm transition-colors data-focus:bg-gray-100"
                  onClick={handleClick}
                >
                  个人信息
                  <kbd className="ml-auto rounded bg-gray-100 px-1 text-xs font-medium text-gray-500">⌘K</kbd>
                </button>
              </MenuItem>
              <MenuItem>
                <button className="flex w-full rounded-md px-3 py-2 text-left text-sm transition-colors data-focus:bg-gray-100">
                  隐私协议
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </nav>
  );
}
