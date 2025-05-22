"use client";

import { DeviceChart } from "@/components/charts/device-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Shield } from "lucide-react";

// Mock data - In a real application, this would come from an API
const trafficData = {
	labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00"],
	datasets: [
		{
			label: "Tráfico Entrante (Mbps)",
			data: [120, 150, 180, 140, 160, 130],
			borderColor: "rgb(75, 192, 192)",
			tension: 0.1,
		},
		{
			label: "Tráfico Saliente (Mbps)",
			data: [80, 100, 120, 90, 110, 85],
			borderColor: "rgb(255, 99, 132)",
			tension: 0.1,
		},
	],
};

const threatsData = {
	labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00"],
	datasets: [
		{
			label: "Intentos de Acceso Bloqueados",
			data: [5, 8, 3, 6, 4, 7],
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
	],
};

export default function FirewallMonitoring() {
	const currentThreats = 7; // This would come from real-time data
	const isHighThreats = currentThreats > 5;

	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-3xl font-bold">Firewall Principal</h1>
				<p className="text-muted-foreground">
					Monitoreo de tráfico y seguridad
				</p>
			</div>

			{isHighThreats && (
				<Alert variant="destructive">
					<Shield className="h-4 w-4" />
					<AlertTitle>¡Alerta de Seguridad!</AlertTitle>
					<AlertDescription>
						Se han detectado {currentThreats} intentos de acceso no autorizado
						en la última hora.
					</AlertDescription>
				</Alert>
			)}

			<div className="grid gap-6 md:grid-cols-2">
				<Card>
					<CardHeader>
						<CardTitle>Tráfico de Red</CardTitle>
					</CardHeader>
					<CardContent>
						<DeviceChart
							title="Tráfico en tiempo real"
							data={trafficData}
							type="line"
						/>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Intentos de Acceso Bloqueados</CardTitle>
					</CardHeader>
					<CardContent>
						<DeviceChart
							title="Actividad Sospechosa"
							data={threatsData}
							type="bar"
						/>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
