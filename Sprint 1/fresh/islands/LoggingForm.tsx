import { h } from "preact";
import { useState } from "preact/hooks";

export default function LoggingForm() {
	const [painLevel, setPainLevel] = useState(1);
	const [qualityOfLife, setQualityOfLife] = useState(5);
	const [satisfaction, setSatisfaction] = useState(5);
	const [socialQuality, setSocialQuality] = useState(5);
	const [additionalObservations, setAdditionalObservations] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();

		// Form values
		const log = {
			pain_level: painLevel,
			quality_of_life: qualityOfLife,
			satisfaction: satisfaction,
			social_quality: socialQuality,
			additional_observations: additionalObservations,
		};
		try {
		//FIXME - replace "log-submit" with the actual endpoint defined by @RequestMapping
			const response = await fetch('http://localhost:8000/api/logs/submit-form', {
				method: 'POST',
				headers: {
					'Content-Type': "application/json",
				},
				body: JSON.stringify(log),
			});

			if (response.ok) {
				console.log("Successful submission");
			} else {
				console.error('Failed to submit', response.statusText);
			}
		} catch (error) {
			console.error('Error occured: ', error);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			style={{
				marginTop: "2rem",
				display: "flex",
				flexDirection: "column",
				gap: "1.3rem",
				width: "20rem",
				backgroundColor: "#ffccff",
				padding: "20px",
				borderRadius: "10px",
			}}
		>
			<h2 style={{ textAlign: "center" }}>Logging Form</h2>

			<label style={{ fontSize: "1.2rem" }}>
				Pain Level:
				<input
					type="range"
					name="painLevel"
					min="1"
					max="10"
					value={painLevel}
					onInput={(e) => setPainLevel(e.target.value)}
					style={{ width: "100%" }}
				/>
				<span>{painLevel}</span>
			</label>

			<label style={{ fontSize: "1.2rem" }}>
				Quality of Life:
				<input
					type="range"
					name="qualityOfLife"
					min="1"
					max="10"
					value={qualityOfLife}
					onInput={(e) => setQualityOfLife(e.target.value)}
					style={{ width: "100%" }}
				/>
				<span>{qualityOfLife}</span>
			</label>

			<label style={{ fontSize: "1.2rem" }}>
				Regimen Satisfaction:
				<input
					type="range"
					name="satisfaction"
					min="1"
					max="10"
					value={satisfaction}
					onInput={(e) => setSatisfaction(e.target.value)}
					style={{ width: "100%" }}
				/>
				<span>{satisfaction}</span>
			</label>

			<label style={{ fontSize: "1.2rem" }}>
				Social Quality:
				<input
					type="range"
					name="socialQuality"
					min="1"
					max="10"
					value={socialQuality}
					onInput={(e) => setSocialQuality(e.target.value)}
					style={{ width: "100%" }}
				/>
				<span>{socialQuality}</span>
			</label>

			<label style={{ fontSize: "1.2rem" }}>
				Additional Observations:
				<textarea
					name="additionalObservations"
					value={additionalObservations}
					onInput={(e) => setAdditionalObservations(e.target.value)}
					style={{
						width: "100%",
						marginTop: "0.5rem",
						padding: "0.5rem",
						borderRadius: "0.4rem",
						fontSize: "1rem",
					}}
				/>
			</label>

			<button
				type="submit"
				style={{
					backgroundColor: "#48bb78",
					color: "white",
					padding: "1rem",
					borderRadius: "0.4rem",
					fontSize: "1.5rem",
					border: "none",
					cursor: "pointer",
				}}
			>
				Submit
			</button>
		</form>
	);
}
