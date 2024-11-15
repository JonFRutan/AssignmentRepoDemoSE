import { h } from "preact";
import { Head } from "$fresh/runtime.ts";
import Calendar from "../islands/Calendar.tsx";

export default function logCalendar() {
	return (
		<div style="height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: top; background-color: #313146;">
			<Head>
				<title>Calendar</title>
				<link rel="stylesheet" href="../styles/global.css" />
			</Head>
			<div style="width: 100%; height: 8rem; background-color: #6d76ff; display: flex; align-items: center; justify-content: center;">
				<h1 style="color: white; font-size: 2.5rem; font-weight: bold;">Calendar</h1>
			</div>
			<Calendar />
		</div>
	);
} 
