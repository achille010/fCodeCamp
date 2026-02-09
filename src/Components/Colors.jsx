import { useState } from "react";

const Colors = () => {
  const [color, setColor] = useState("#ffffff");

  return (
    <div
      id="color-picker-container"
      style={{
        backgroundColor: color,
        padding: "20px",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        id="color-input"
        type="color"
        style={{
          height: "px",
          border: "3px solid white",
          borderRadius: "10px",
        }}
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
};

export default Colors;
