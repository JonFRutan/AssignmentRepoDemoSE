import { h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import RetrievalLog from "../islands/RetrievalLog.tsx";

export default function RetrievePage() {
  console.log("RetrievePage Rendering...");

  // Retrieve data from localStorage
  const selectedLog = JSON.parse(localStorage.getItem("selectedLog") || "{}");
  const compositeData = JSON.parse(localStorage.getItem("compositeData") || "{}");
  const detailedLogs = JSON.parse(localStorage.getItem("detailedLogs") || "[]");

  // Log the data to ensure it's being retrieved
  console.log("1");
  console.log("Selected Log:", selectedLog);
  console.log("2");
  console.log("Composite Data:", compositeData);
  console.log("3");
  console.log("Detailed Logs:", detailedLogs);

  // Render the page
  return (
    <div
      style="height: 120vh; display: flex; flex-direction: column; align-items: center; justify-content: top; background-color: #313146"
    >
      <Head>
        <title>Log Form</title>
      </Head>
      <div
        style="width: 100%; height: 8rem; background-color: #6d76ff; display: flex; align-items: center; justify-content: center;"
      >
        <h1 style="color: white; font-size: 2.5rem; font-weight: bold;">
          Log Form
        </h1>
      </div>
      <RetrievalLog compositeData={compositeData} detailedLogs={detailedLogs} />
    </div>
  );
}
