import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Network,
	Database,
	Server,
	Router,
	Shield,
	Activity,
} from "lucide-react";
import Link from "next/link";

const deviceStatus = [
	{
		name: "Firewall Principal",
		status: "Operativo",
		icon: Shield,
		category: "Tráfico de Red",
		href: "/devices/firewall",
		metrics: {
			traffic: "1.2 Gbps",
			threats: "3",
		},
	},
	{
		name: "Switch Red",
		status: "Operativo",
		icon: Network,
		category: "Tráfico de Red",
		href: "/devices/switch",
		metrics: {
			traffic: "2.5 Gbps",
			temperature: "32°C",
		},
	},
	{
		name: "Router Principal 1",
		status: "Operativo",
		icon: Router,
		category: "Tráfico de Red",
		href: "/devices/router1",
		metrics: {
			traffic: "800 Mbps",
			uptime: "99.9%",
		},
	},
	{
		name: "Router Principal 2",
		status: "Operativo",
		icon: Router,
		category: "Tráfico de Red",
		href: "/devices/router2",
		metrics: {
			traffic: "750 Mbps",
			uptime: "99.9%",
		},
	},
	{
		name: "Servidor Base de Datos",
		status: "Operativo",
		icon: Database,
		category: "Tráfico de Red",
		href: "/devices/db-server",
		metrics: {
			cpu: "45%",
			ram: "65%",
			temperature: "42°C",
		},
	},
	{
		name: "Servidor Web",
		status: "Operativo",
		icon: Server,
		category: "Tráfico de Red",
		href: "/devices/web-server",
		metrics: {
			cpu: "38%",
			ram: "55%",
			temperature: "39°C",
		},
	},
];

export default function Home() {
	return (
		<div className="space-y-8">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">
						Dashboard IoT Data Center
					</h1>
					<p className="text-muted-foreground">
						Visión general del estado de todos los dispositivos
					</p>
				</div>
				<div className="flex items-center gap-2 text-sm text-muted-foreground">
					<Activity className="h-4 w-4" />
					<span>Última actualización: {new Date().toLocaleTimeString()}</span>
				</div>
			</div>

			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{deviceStatus.map((device) => (
					<Link key={device.name} href={device.href}>
						<Card className="hover:shadow-lg transition-all duration-200 hover:scale-[1.02] cursor-pointer">
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">
									{device.name}
								</CardTitle>
								<device.icon className="h-4 w-4 text-muted-foreground" />
							</CardHeader>
							<CardContent>
								<div className="flex items-center gap-2 mb-2">
									<div className="h-2 w-2 rounded-full bg-green-500" />
									<div className="text-2xl font-bold">{device.status}</div>
								</div>
								<div className="text-xs text-muted-foreground space-y-1">
									<p>{device.category}</p>
									<div className="flex flex-wrap gap-2 mt-2">
										{Object.entries(device.metrics).map(([key, value]) => (
											<span
												key={key}
												className="px-2 py-1 rounded-full bg-muted text-xs"
											>
												{value}
											</span>
										))}
									</div>
								</div>
							</CardContent>
						</Card>
					</Link>
				))}
			</div>
		</div>
	);
}
