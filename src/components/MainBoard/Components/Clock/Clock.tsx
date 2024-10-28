import { useState, useEffect } from "react";
import "./styles/styles.css";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const formattedTime = `${time.getHours().toString().padStart(2, "0")}:${time.getMinutes().toString().padStart(2, "0")}`;

  return (
    <div className="clock-container">
      <div className="clock">
        <span className="span-clock">{formattedTime}</span>
      </div>
    </div>
  );
}
