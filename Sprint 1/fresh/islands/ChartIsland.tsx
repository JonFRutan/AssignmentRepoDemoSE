import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    Title, 
    Tooltip, 
    Legend,
    LineController // Import the LineController
} from 'chart.js';

// Register required components including the LineController
ChartJS.register(
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    Title, 
    Tooltip, 
    Legend, 
    LineController // Register the LineController here
);

export default function ChartIsland({ detailedLogs, selectedField }) {
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    // Log detailedLogs and selectedField to inspect their contents
    console.log("Detailed Logs:", detailedLogs);
    console.log("Selected Field:", selectedField);

    // Ensure detailedLogs is not undefined and has at least one item
    if (!detailedLogs || detailedLogs.length === 0) {
      console.error("No logs to display.");
      return;
    }

    // Sort the logs by date to ensure correct order (ascending)
    const sortedLogs = [...detailedLogs].sort((a, b) => new Date(a.date) - new Date(b.date));

    // Prepare chart data
    const labels = sortedLogs.map((entry) => entry.date);
    const values = sortedLogs.map((entry) => entry[selectedField] || 0);

    console.log("Sorted Chart Data - Labels:", labels);
    console.log("Sorted Chart Data - Values:", values);

    const ctx = document.getElementById("chart").getContext("2d");

    if (chartInstance) {
      chartInstance.destroy(); // Clean up existing chart instance if needed
    }

    const newChart = new ChartJS(ctx, {
      type: "line", // Ensure type is "line"
      data: {
        labels,
        datasets: [
          {
            label: `Changes in ${selectedField}`,
            data: values,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
        },
        scales: {
          x: { 
            type: 'category', // Specifies the type of scale for x-axis
            title: { display: true, text: "Date" }
          },
          y: { 
            title: { display: true, text: "Value" } 
          },
        },
      },
    });

    setChartInstance(newChart); // Set new chart instance

  }, [detailedLogs, selectedField]); // Re-run effect when these values change

  return (
    <div>
      <canvas id="chart" width="400" height="200"></canvas>
    </div>
  );
}
