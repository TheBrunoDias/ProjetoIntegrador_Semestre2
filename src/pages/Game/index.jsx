import React from "react";
import "./game.css";

export default function GamePage() {
  return (
    <div className="gamepage_container">
      <iframe
        title="game iframe"
        src="https://i.simmer.io/@BrunoDias/uniamericon"
        style={{ width: "60vw", height: "600px" }}
      />
    </div>
  );
}
