import { DeviceChart } from "@/components/charts/device-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data - In a real application, this would come from an API
const cpuData = {
	labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00"],
	datasets: [
		{
			label: "CPU Usage %",
			data: [45, 52, 38, 45, 58, 42],
			borderColor: "rgb(75, 192, 192)",
			tension: 0.1,
		},
	],
};

const ramData = {
	labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00"],
	datasets: [
		{
			label: "RAM Usage %",
			data: [65, 59, 80, 81, 56, 55],
			borderColor: "rgb(255, 99, 132)",
			tension: 0.1,
		},
	],
};

export default function DatabaseServerResources() {
	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-3xl font-bold">Servidor Base de Datos</h1>
				<p className="text-muted-foreground">
					Monitoreo de recursos del sistema
				</p>
			</div>

			<div className="grid gap-6 md:grid-cols-2">
				<Card>
					<CardHeader>
						<CardTitle>Uso de CPU</CardTitle>
					</CardHeader>
					<CardContent>
						<DeviceChart
							title="Uso de CPU en tiempo real"
							data={cpuData}
							type="line"
						/>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Uso de RAM</CardTitle>
					</CardHeader>
					<CardContent>
						<DeviceChart
							title="Uso de RAM en tiempo real"
							data={ramData}
							type="line"
						/>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
