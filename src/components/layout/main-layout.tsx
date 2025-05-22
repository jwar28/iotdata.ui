import { Sidebar } from "./sidebar";

interface MainLayoutProps {
	children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
	return (
		<div className="flex h-screen">
			<Sidebar />
			<div className="bg-accent flex-1 p-3">
				<main className="flex-1 overflow-y-auto p-8 bg-white h-full rounded-lg">
					{children}
				</main>
			</div>
		</div>
	);
}
