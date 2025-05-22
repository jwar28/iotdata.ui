"use client";

import { DeviceChart } from "@/components/charts/device-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Server, Thermometer, Cpu } from "lucide-react";

// Mock data - In a real application, this would come from an API
const temperatureData = {
	labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00"],
	datasets: [
		{
			label: "Temperatura CPU (°C)",
			data: [42, 45, 43, 44, 46, 42],
			borderColor: "rgb(255, 99, 132)",
			tension: 0.1,
		},
		{
			label: "Temperatura Ambiente (°C)",
			data: [23, 24, 23, 24, 25, 23],
			borderColor: "rgb(75, 192, 192)",
			tension: 0.1,
		},
	],
};

const resourceData = {
	labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00"],
	datasets: [
		{
			label: "CPU Usage %",
			data: [35, 42, 38, 45, 48, 40],
			borderColor: "rgb(75, 192, 192)",
			tension: 0.1,
		},
		{
			label: "RAM Usage %",
			data: [55, 59, 60, 61, 56, 58],
			borderColor: "rgb(255, 99, 132)",
			tension: 0.1,
		},
	],
};

export default function WebServer() {
	const currentTemp = 46;
	const isHighTemp = currentTemp > 45;

	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-3xl font-bold">Servidor Web</h1>
				<p className="text-muted-foreground">Monitoreo completo del sistema</p>
			</div>

			{isHighTemp && (
				<Alert variant="destructive">
					<Thermometer className="h-4 w-4" />
					<AlertTitle>¡Advertencia!</AlertTitle>
					<AlertDescription>
						La temperatura actual ({currentTemp}°C) está por encima del umbral
						recomendado.
					</AlertDescription>
				</Alert>
			)}

			<div className="grid gap-6 md:grid-cols-2">
				<Card>
					<CardHeader className="flex flex-row items-center gap-2">
						<Thermometer className="h-5 w-5" />
						<CardTitle>Temperatura del Sistema</CardTitle>
					</CardHeader>
					<CardContent>
						<DeviceChart
							title="Temperatura en tiempo real"
							data={temperatureData}
							type="line"
							options={{
								scales: {
									y: {
										beginAtZero: false,
										suggestedMin: 20,
										suggestedMax: 60,
									},
								},
							}}
						/>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center gap-2">
						<Cpu className="h-5 w-5" />
						<CardTitle>Uso de Recursos</CardTitle>
					</CardHeader>
					<CardContent>
						<DeviceChart
							title="Uso de recursos en tiempo real"
							data={resourceData}
							type="line"
						/>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
