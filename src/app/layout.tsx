import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Fahim Portfolio",
	description: "Fahim Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`antialiased bg-custom`}>{children}</body>
		</html>
	);
}
