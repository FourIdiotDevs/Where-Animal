import React, { useState, useEffect } from 'react';

function App() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    // This fetches data from your backend
    fetch('http://localhost:5001/api/status')
      .then(res => res.json())
      .then(data => setStatus(data.message))
      .catch(err => setStatus("Error: " + err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>MVP Dashboard</h1>
      <div style={{ padding: "20px", border: "2px solid #0070f3", display: "inline-block" }}>
        <h3>Server Says:</h3>
        <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>{status}</p>
      </div>
    </div>
  );
}

export default App;
