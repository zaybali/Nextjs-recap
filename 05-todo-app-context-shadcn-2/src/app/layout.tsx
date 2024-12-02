import type { Metadata } from "next";
import "./globals.css";
import { TodoProvider } from "./context/todocontext";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TodoProvider>
          {children}
        </TodoProvider>
      </body>
    </html>
  );
}
