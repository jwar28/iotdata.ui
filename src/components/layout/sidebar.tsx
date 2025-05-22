"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Network,
	Database,
	Server,
	Router,
	Shield,
	LayoutDashboard,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const devices = [
	{
		name: "Firewall Principal",
		href: "/devices/firewall",
		icon: Shield,
		categories: ["network"],
	},
	{
		name: "Switch Red",
		href: "/devices/switch",
		icon: Network,
		categories: ["network", "temperature"],
	},
	{
		name: "Router Principal 1",
		href: "/devices/router1",
		icon: Router,
		categories: ["network"],
	},
	{
		name: "Router Principal 2",
		href: "/devices/router2",
		icon: Router,
		categories: ["network"],
	},
	{
		name: "Servidor Base de Datos",
		href: "/devices/db-server",
		icon: Database,
		categories: ["network", "temperature", "resources"],
	},
	{
		name: "Servidor Web",
		href: "/devices/web-server",
		icon: Server,
		categories: ["temperature", "resources"],
	},
];

export function Sidebar() {
	const pathname = usePathname();

	return (
		<div className="flex h-screen w-64 flex-col border-r bg-background">
			<Link href="/" className="p-6 hover:opacity-80 transition-opacity">
				<div className="flex items-center gap-2">
					<LayoutDashboard className="h-6 w-6 text-primary" />
					<h2 className="text-lg font-semibold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
						IoT Data Center
					</h2>
				</div>
			</Link>
			<ScrollArea className="flex-1 px-3">
				<div className="space-y-1">
					{devices.map((device) => (
						<Button
							key={device.href}
							variant={pathname === device.href ? "secondary" : "ghost"}
							className={cn(
								"w-full justify-start gap-2 transition-colors",
								pathname === device.href
									? "bg-secondary hover:bg-secondary/90"
									: "hover:bg-muted/50",
							)}
							asChild
						>
							<Link href={device.href}>
								<device.icon className="h-4 w-4" />
								{device.name}
							</Link>
						</Button>
					))}
				</div>
			</ScrollArea>
		</div>
	);
}
