import { DeviceChart } from "@/components/charts/device-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Thermometer } from "lucide-react";

// Mock data - In a real application, this would come from an API
const temperatureData = {
	labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00"],
	datasets: [
		{
			label: "Temperatura CPU (°C)",
			data: [45, 48, 46, 47, 49, 45],
			borderColor: "rgb(255, 99, 132)",
			tension: 0.1,
		},
		{
			label: "Temperatura Ambiente (°C)",
			data: [22, 23, 22, 23, 24, 22],
			borderColor: "rgb(75, 192, 192)",
			tension: 0.1,
		},
	],
};

export default function DatabaseServerTemperature() {
	const currentTemp = 49; // This would come from real-time data
	const isHighTemp = currentTemp > 45;

	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-3xl font-bold">Servidor Base de Datos</h1>
				<p className="text-muted-foreground">Monitoreo de temperatura</p>
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

			<Card>
				<CardHeader>
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
		</div>
	);
}
