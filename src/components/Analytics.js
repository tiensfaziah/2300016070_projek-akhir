import { useEffect, useState } from "react";
import data from "../data.json";

function Analytics() {
  const [moodCounts, setMoodCounts] = useState({});

  useEffect(() => {
    const counts = {};
    data.journals.forEach((journal) => {
      counts[journal.mood] = (counts[journal.mood] || 0) + 1;
    });
    setMoodCounts(counts);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Mood Analytics</h1>
      <ul>
        {Object.entries(moodCounts).map(([mood, count]) => (
          <li key={mood}>
            {mood}: {count} times
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Analytics;
