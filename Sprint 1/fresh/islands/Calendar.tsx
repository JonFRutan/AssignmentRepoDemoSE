import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [completedDays, setCompletedDays] = useState<{ [key: string]: any }>({});
  const [selectedDates, setSelectedDates] = useState<string[]>([]);

  // Fetch completed days from local storage
  useEffect(() => {
    const storedCompletedDays = localStorage.getItem("completedDays");
    if (storedCompletedDays) {
      const parsedData = JSON.parse(storedCompletedDays);
      console.log("Loaded completedDays:", parsedData); //logs completed days in console
      setCompletedDays(parsedData);
    } else {
      console.log("No completedDays found in localStorage.");
    }
  }, []);

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const today = new Date();
  const isSameMonthAndYear =
    today.getMonth() === currentDate.getMonth() &&
    today.getFullYear() === currentDate.getFullYear();
  const todayDate = today.getDate();

  // Handles date selection
  const handleDateClick = (day: number, isCompleted: boolean) => {
    const selectedDate = new Date(
      Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), day)
    ).toISOString();
  
    if (isCompleted) {
      setSelectedDates((prev) => {
        // Toggle selection
        if (prev.includes(selectedDate)) {
          console.log(`Date ${selectedDate} removed from selectedDates.`);
          return prev.filter((date) => date !== selectedDate);
        } else {
          console.log(`Date ${selectedDate} added to selectedDates.`);
          return [...prev, selectedDate];
        }
      });
    } else {
      // Navigate to the logging form for the current date
      window.location.href = `/loggingform?date=${selectedDate}`;
    }
  };
  
  useEffect(() => {
    window.handleInaccessibleClick = handleInaccessibleClick;
  }, []);

  const handleInaccessibleClick = (day: number) => {
    if (day < today.getDate()) {
      alert(
        `${today.getMonth() + 1}/${day} has already passed and has no log.`
      );
    } else {
      alert(
        `${today.getMonth() + 1}/${day} is a future date. Please select the current date or wait.`
      );
    }
  };

  const handleRetrieve = () => {
    if (selectedDates.length === 0) {
      alert("Please select at least one completed date.");
      return;
    }
  
    const completedDaysInfo = completedDays; // Fetch completedDays from localStorage or state
  
    // Fetch and filter the logs based on selected dates
    const detailedLogs = selectedDates.map((date) => completedDaysInfo[date]?.formData);
    const filteredDetailedLogs = detailedLogs.filter((log) => log != null);
  
    // Update the localStorage with the new detailedLogs
    localStorage.setItem("detailedLogs", JSON.stringify(filteredDetailedLogs));
  
    // Recalculate the composite data
    const compositeData = filteredDetailedLogs.reduce(
      (acc, log) => {
        acc.painLevel += log.pain_level || 0;
        acc.qualityOfLife += log.quality_of_life || 0;
        acc.satisfaction += log.satisfaction || 0;
        acc.socialQuality += log.social_quality || 0;
        acc.weight += log.weight || 0;
        acc.count += 1;
        return acc;
      },
      { painLevel: 0, qualityOfLife: 0, satisfaction: 0, socialQuality: 0, weight: 0, count: 0 }
    );
  
    // Calculate averages
    const normalizedCompositeData = {
      painLevel: compositeData.painLevel / compositeData.count,
      qualityOfLife: compositeData.qualityOfLife / compositeData.count,
      satisfaction: compositeData.satisfaction / compositeData.count,
      socialQuality: compositeData.socialQuality / compositeData.count,
      weight: compositeData.weight / compositeData.count,
    };
  
    // Update the localStorage with the new compositeData
    localStorage.setItem("compositeData", JSON.stringify(normalizedCompositeData));
  
    // Now navigate to the RetrievePage
    window.location.href = "/retrieve";
  };
  
  
  
  return (
    <div className="calendar-container">
      <h2 className="month-name">{monthName}</h2>
      <div className="calendar">
        {[...Array(daysInMonth)].map((_, i) => {
          const day = i + 1;
          const selectedDate = new Date(
            Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), day)
          ).toISOString();
          const isCompleted = Object.keys(completedDays).some(
            (date) => new Date(date).toISOString() === selectedDate
          );
  
          const isPastDate = isSameMonthAndYear && day < todayDate && !isCompleted;
          const isCurrentDate = isSameMonthAndYear && day === todayDate;
  
          // Debugging logs
          //console.log(`Rendering Date: ${selectedDate}`);
          //console.log(`Is Completed: ${isCompleted}`);
          //console.log(`Is Past Date: ${isPastDate}`);
          //console.log(`Is Current Date: ${isCurrentDate}`);
  
          return (
            <button
              key={i}
                onClick={() => {
                  if (isCurrentDate) {
                    handleDateClick(day, false); // Current date, open form
                  } else if (isCompleted) {
                    handleDateClick(day, true); // Completed past date, allow retrieval
                  } else if (isPastDate) {
                    handleInaccessibleClick(day); // Past and not completed
                  } else {
                    handleInaccessibleClick(day); // Future date
                  }
                }}
                className={`calendar-day
                  ${isCompleted ? "completed-date" : ""}
                  ${!isCompleted && isPastDate ? "past-date" : ""}
                  ${isCurrentDate ? "current-date" : ""}
                  ${selectedDates.includes(selectedDate) ? "selected-date" : ""}`}
              >
                {day}
                {isCompleted ? (
                  <img
                    src="/images/checkmark.png"
                    alt="checkmark"
                    className="completed-day-image"
                  />
                ) : isCurrentDate ? (
                  <img
                    src="/images/jonpencil.png"
                    alt="pencil"
                    className="current-day-image"
                  />
                ) : null}
              </button>
          );
        })}
      </div>
      <button className="submit-button" onClick={handleRetrieve}>
        Retrieve
      </button>
    </div>
  );
  
  
  
}
