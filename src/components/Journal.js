// src/components/journal.js
import React, { useState } from 'react';

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [mood, setMood] = useState('');
  const [entryText, setEntryText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date || !mood || !entryText) {
      alert('Please fill in all fields.');
      return;
    }

    const newEntry = {
      title,
      date,
      mood,
      entryText,
    };

    setEntries([newEntry, ...entries]);
    setTitle('');
    setDate('');
    setMood('');
    setEntryText('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Journal Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <select
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          required
        >
          <option value="">Select Mood</option>
          <option value="Happy">Happy</option>
          <option value="Sad">Sad</option>
          <option value="Angry">Angry</option>
        </select>
        <textarea
          placeholder="Write your journal..."
          value={entryText}
          onChange={(e) => setEntryText(e.target.value)}
          required
        ></textarea>
        <button type="submit">Save Entry</button>
      </form>

      <div>
        {entries.map((entry, index) => (
          <div key={index} className="journal-entry">
            <h3>{entry.title}</h3>
            <p><strong>Date:</strong> {entry.date}</p>
            <p><strong>Mood:</strong> {entry.mood}</p>
            <p><strong>Entry:</strong> {entry.entryText}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journal;
