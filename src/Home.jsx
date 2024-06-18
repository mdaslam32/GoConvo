import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [value, setValue] = useState();
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(
    (event) => {
      if (value != null) {
        navigate(`/room/${value}`);
      } else {
        alert("Room code cannot be empty");
      }
    },
    [navigate, value]
  );
  const handleKeyDown = (event) => {
    if (value != null && event.key === "Enter") {
      navigate(`/room/${value}`);
    }
  };
  return (
    <div>
      <h1>GoConvo</h1>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Enter Room Code"
      />
      <button onClick={handleJoinRoom}>Join</button>
    </div>
  );
}

export default Home;
