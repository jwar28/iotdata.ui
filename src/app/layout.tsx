import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/components/layout/main-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "IoT Data Center Monitor",
	description: "Sistema de monitoreo para dispositivos IoT en el data center",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es">
			<body className={inter.className}>
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	);
}
