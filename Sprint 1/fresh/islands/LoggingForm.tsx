import { h } from "preact";
import { useState } from "preact/hooks";

export default function LoggingForm() {
	const [painLevel, setPainLevel] = useState(0);
	const [qualityOfLife, setQualityOfLife] = useState(0);
	const [satisfaction, setSatisfaction] = useState(0);
	const [socialQuality, setSocialQuality] = useState(0);
	const [additionalObservations, setAdditionalObservations] = useState("");
	const [weight, setWeight] = useState(0);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const errors: string[] = [];

		// Form values
		const log = {
			pain_level: painLevel,
			quality_of_life: qualityOfLife,
			satisfaction: satisfaction,
			social_quality: socialQuality,
			additional_observations: additionalObservations,
			weight: weight,
		};
		if (log.pain_level == 0) {
			errors.push("Please select a pain level.");
		}
		if (log.quality_of_life == 0) {
			errors.push("Please select a quality of life level.");
		}
		if (log.satisfaction == 0) {
			errors.push("Please select a satisfaction level.");
		}
		if (log.social_quality == 0) {
			errors.push("Please select a social quality level.");
		}
		if (weight != 0 && weight < 50) {
			errors.push("Invalid weight: must be between 50-1000 lbs");
		}
		if (errors.length > 0) {
			alert(errors.join("\n"));
		}
		else {
			try {
				const response = await fetch('http://localhost:8000/api/logs/submit-form', {
					method: 'POST',
					headers: {
						'Content-Type': "application/json",
					},
					body: JSON.stringify(log),
				});

            if (response.ok) {
                console.log(JSON.stringify(log));
                console.log("Successful submission");
                alert("Successfully submitted log!");

                // Mark the date as completed in localStorage
                const urlParams = new URLSearchParams(window.location.search);
                const date = urlParams.get('date');
                if (date) {
                    const storedCompletedDays = JSON.parse(localStorage.getItem("completedDays") || "[]");
                    storedCompletedDays.push(date);
                    localStorage.setItem("completedDays", JSON.stringify(storedCompletedDays));
                }

                window.location.href = "/logCalendar";
				} else {
					console.error('Failed to submit', response.statusText);
				}
			} catch (error) {
				console.error('Error occured: ', error);
			}
		};
}
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
				fontFamily: "Arial"
			}}
		>
			<h2 style={{ textAlign: "center", fontSize: "1.7rem" }}>Logging Form</h2>

			<label style={{ fontSize: "1.2rem", textAlign: "center" }}>
				*Pain Level:
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

			<label style={{ fontSize: "1.2rem", textAlign: "center" }}>
				*Quality of Life:
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

			<label style={{ fontSize: "1.2rem", textAlign: "center" }}>
				*Regimen Satisfaction:
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

			<label style={{ fontSize: "1.2rem", textAlign: "center" }}>
				*Social Quality:
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
				How much do you weigh:
				<input
					type="number"
					name="weight"
					max="1000"
					min="0"
					value={weight}
					onInput={(e) => setWeight(e.target.value)}
					style={{
						width: "100%",
						marginTop: "0.5rem",
						padding: "0.5rem",
						borderRadius: "0.4rem",
						fontSize: "1rem",
					}}
				/>
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
