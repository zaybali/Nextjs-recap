import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Todo App",
  description: "Created  by Zaib Ali",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
