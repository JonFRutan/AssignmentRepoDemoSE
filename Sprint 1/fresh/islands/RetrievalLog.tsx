import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import ChartIsland from "./ChartIsland.tsx";

export default function RetrievalLog({ compositeData, detailedLogs }) {
  const [localCompositeData, setLocalCompositeData] = useState(compositeData);
  const [localDetailedLogs, setLocalDetailedLogs] = useState(detailedLogs);
  const [selectedField, setSelectedField] = useState("pain_level");

  useEffect(() => {
    console.log("RetrievalLog Mounted");

    // Retrieve data from localStorage after component mounts
    const storedCompositeData = JSON.parse(localStorage.getItem("compositeData") || "{}");
    const storedDetailedLogs = JSON.parse(localStorage.getItem("detailedLogs") || "[]");

    console.log("Stored Composite Data:", storedCompositeData);
    console.log("Stored Detailed Logs:", storedDetailedLogs);

    // Set the data into state if available
    if (Object.keys(storedCompositeData).length) {
      setLocalCompositeData(storedCompositeData);
    }
    if (storedDetailedLogs.length > 0) {
      setLocalDetailedLogs(storedDetailedLogs);
    }
  }, []); // Run only once when the component mounts

  // If no data is available, show "No data available."
  if (!localCompositeData && localDetailedLogs.length === 0) {
    return (
      <div style={{ textAlign: "center", fontSize: "1.2rem" }}>
        <p>No data available.</p>
      </div>
    );
  }

  // Handle rendering for single or multiple logs
  if (localDetailedLogs.length === 1) {
    // Render single log with its fields
    const log = localDetailedLogs[0];
    return (
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.3rem",
          width: "40rem",
          backgroundColor: "#f7f7f7",
          padding: "20px",
          borderRadius: "10px",
          fontFamily: "Arial",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold" }}>
          Log Data for {log.date}
        </h2>
        <div style={infoBlockStyle}>
          <strong>Pain Level:</strong> {log.pain_level}
        </div>
        <div style={infoBlockStyle}>
          <strong>Quality of Life:</strong> {log.quality_of_life}
        </div>
        <div style={infoBlockStyle}>
          <strong>Satisfaction:</strong> {log.satisfaction}
        </div>
        <div style={infoBlockStyle}>
          <strong>Social Quality:</strong> {log.social_quality}
        </div>
        <div style={infoBlockStyle}>
          <strong>Weight:</strong> {log.weight} lbs
        </div>
        <div style={infoBlockStyle}>
          <strong>Additional Observations:</strong> {log.additional_observations || "No observations provided."}
        </div>
      </div>
    );
  }

  // Render composite data when multiple logs are selected
  if (localCompositeData && localDetailedLogs.length > 1) {
    return (
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.3rem",
          width: "40rem",
          backgroundColor: "#f7f7f7",
          padding: "20px",
          borderRadius: "10px",
          fontFamily: "Arial",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold" }}>
          Composite Log Data (Averages)
        </h2>

        <div style={infoBlockStyle}>
          <strong>Average Pain Level:</strong> {localCompositeData.painLevel}
        </div>
        <div style={infoBlockStyle}>
          <strong>Average Quality of Life:</strong> {localCompositeData.qualityOfLife}
        </div>
        <div style={infoBlockStyle}>
          <strong>Average Satisfaction:</strong> {localCompositeData.satisfaction}
        </div>
        <div style={infoBlockStyle}>
          <strong>Average Social Quality:</strong> {localCompositeData.socialQuality}
        </div>
        <div style={infoBlockStyle}>
          <strong>Average Weight:</strong> {localCompositeData.weight} lbs
        </div>
        <div style={{ textAlign: "center" }}>
        <label>Graph Field:</label>
        <select
          value={selectedField}
          onChange={(e) => setSelectedField(e.target.value)}
          style={{
            marginLeft: "0.5rem",
            padding: "0.5rem",
            borderRadius: "0.3rem",
            fontSize: "1rem",
          }}
        >
          <option value="pain_level">Pain Level</option>
          <option value="quality_of_life">Quality of Life</option>
          <option value="satisfaction">Satisfaction</option>
          <option value="social_quality">Social Quality</option>
          <option value="weight">Weight</option>
        </select>
      </div>
      <div style={{ textAlign: "center" }}>
      <ChartIsland detailedLogs={localDetailedLogs} selectedField={selectedField} />
      </div>

      </div>
    );
  }

  return null; // Fallback
}

// CSS-in-JS style for info blocks
const infoBlockStyle = {
  marginTop: "1rem",
  padding: "0.8rem",
  backgroundColor: "#fff",
  borderRadius: "0.4rem",
  border: "1px solid #ddd",
  textAlign: "center",
  fontSize: "1.2rem",
  fontWeight: "bold",
};
