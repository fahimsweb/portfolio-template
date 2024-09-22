import type { Metadata } from "next";
import packageJson from "../../package.json";
import "./globals.css";

export const metadata: Metadata = {
  title: packageJson.title,
  description: packageJson.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-custom antialiased`}>{children}</body>
    </html>
  );
}
