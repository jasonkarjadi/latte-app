"use client";

import { ChakraProvider } from "@chakra-ui/react";
import NextLink from "next/link";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <header>
            <NextLink href="/">Login</NextLink>
            <NextLink href="/dashboard/admin/products">Admin Products</NextLink>
            <NextLink href="/dashboard/admin/users">Admin Users</NextLink>
            <NextLink href="/dashboard/admin/sales">Admin Sales</NextLink>
            <NextLink href="/dashboard/cashier">Cashier Dashboard</NextLink>
          </header>
          {children}
          <footer>
            <small>© Purwadhika WD Latte Team 2023. All rights reserved</small>
          </footer>
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
