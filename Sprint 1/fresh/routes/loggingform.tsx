import { h } from "preact";
import { Head } from "$fresh/runtime.ts";
import LoggingForm from "../islands/LoggingForm.tsx";

export default function loggingform() {
	return (
		<div style="height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: top; background-color: #313146">
			<Head>
				<title>Log Form</title>
			</Head>
			<div style="width: 100%; height: 8rem; background-color: #6d76ff; display: flex; align-items: center; justify-content: center;">
				<h1 style="color: white; font-size: 2.5rem; font-weight: bold;">Log Form</h1>
			</div>
			<LoggingForm />
		</div>
	);
}
