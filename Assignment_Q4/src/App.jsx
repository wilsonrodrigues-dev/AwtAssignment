import React, { useState } from "react";
import { iplTeams } from "./data";

function App() {

  const [selectedTeam, setSelectedTeam] = useState(null);

  return (
    <div>
      <h1>IPL Teams</h1>

      {/* Team Buttons */}
      {iplTeams.map((item) => (
        <button
          key={item.id}
          onClick={() => setSelectedTeam(item)}
          style={{
            margin: "10px",
            padding: "10px 20px",
            cursor: "pointer"
          }}
        >
          {item.team}
        </button>
      ))}

      {/* Display Selected Team Details */}
      {selectedTeam && (
        <div>
          <h2>{selectedTeam.team}</h2>

          <h3>Captain: {selectedTeam.captain}</h3>

          <h3>IPL Starting Year: {selectedTeam.year}</h3>
        </div>
      )}

    </div>
  );
}

export default App;