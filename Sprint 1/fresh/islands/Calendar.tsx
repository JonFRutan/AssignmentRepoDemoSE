import { h } from "preact";
import { useState } from "preact/hooks";

export default function Calendar () {
	const [currentDate, setCurrentDate] = useState(new Date());
	
	const daysInMonth = new Date (
		currentDate.getFullYear(),
		currentDate.getMonth() + 1,
		0
	).getDate();

	const handleDateClick = (day: number) => {
		const selectedDate = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth(),
			day
		);

		window.location.href = '/loggingform?date=${selectedDate.toISOString()}';
	};

	return (
		<div className="calendar">
			{[...Array(daysInMonth)].map((_, i) => (
			<button key={i} onClick={() => handleDateClick(i+1)}>
				{i + 1}
			</button>
		))}
		</div>
	);
}
