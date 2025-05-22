import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	Title,
	Tooltip,
	Legend,
	type ChartData,
	type ChartOptions,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	Title,
	Tooltip,
	Legend,
);

interface DeviceChartProps {
	title: string;
	data: ChartData<"line" | "bar">;
	type?: "line" | "bar";
	options?: ChartOptions<"line" | "bar">;
}

export function DeviceChart({
	title,
	data,
	type = "line",
	options = {},
}: DeviceChartProps) {
	const defaultOptions: ChartOptions<"line" | "bar"> = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: true,
				text: title,
			},
		},
		...options,
	};

	return (
		<div className="w-full h-[400px] p-4 bg-card rounded-lg border">
			{type === "line" ? (
				<Line data={data as ChartData<"line">} options={defaultOptions} />
			) : (
				<Bar data={data as ChartData<"bar">} options={defaultOptions} />
			)}
		</div>
	);
}
