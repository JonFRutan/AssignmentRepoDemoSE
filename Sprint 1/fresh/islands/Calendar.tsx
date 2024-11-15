import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  // This will use browser storage to hold the completed dates.
  const [completedDays, setCompletedDays] = useState<string[]>([]);

  // This gets completed dates from our local storage
  useEffect(() => {
    const storedCompletedDays = localStorage.getItem("completedDays");
    if (storedCompletedDays) {
      setCompletedDays(JSON.parse(storedCompletedDays));
    }
  }, []);

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  // Month name
  const monthName = currentDate.toLocaleString('default', { month: 'long' });

  // Today's date
  const today = new Date();
  const isSameMonthAndYear =
    today.getMonth() === currentDate.getMonth() &&
    today.getFullYear() === currentDate.getFullYear();
  const todayDate = today.getDate();

  // Handles clicking only on the current date
  const handleDateClick = (day: number) => {
    const selectedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );

    // Navigate to the logging form
    window.location.href = `/loggingform?date=${selectedDate.toISOString()}`;
    // Takes the user to the loggingform window with the date as a parameter.
  };

  // Handles clicking on inaccessible dates (past or future dates)
  const handleInaccessibleClick = (day: number) => {
    if (day < today.getDate()) {
      alert(`${today.getMonth() + 1}/${day} has already passed. Please select the current date.`);
    } else {
      alert(`${today.getMonth() + 1}/${day} is a future date. Please select the current date.`);
    }
  };

  return (
    <div className="calendar-container">
      <h2 className="month-name">{monthName}</h2>
      <div className="calendar">
        {[...Array(daysInMonth)].map((_, i) => {
          const day = i + 1;

          const isPastDate = isSameMonthAndYear && day < todayDate;
          const isCurrentDate = isSameMonthAndYear && day === todayDate;
          const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toISOString();
          const isCompleted = completedDays.includes(selectedDate);

          return (
            <button
              key={i}
              onClick={() => {
                if (isCurrentDate) {
                  handleDateClick(day);
                } else {
                  handleInaccessibleClick(day);
                }
              }}
              // Assigns an html class name depending on the state of the calendar object.
              className={`calendar-day
                ${isCompleted ? "completed-date" : ""}
                ${isPastDate ? "past-date" : ""} 
                ${isCurrentDate ? "current-date" : ""}`}>
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
    </div>
  );
}
