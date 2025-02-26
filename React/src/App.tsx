import React, { useState } from "react";
import SecondEffect from "./components/SecondEffect";
import FirstEffect from "./components/FirstEffect";

const App: React.FC = () => {
  const [effect, setEffect] = useState<"spiral" | "circle">("spiral");

  return (
    <div style={{ ...styles.container, backgroundColor: effect === "circle" ? "blue" : "black" }}>
      <div style={styles.effectWrapper}>
        {effect === "spiral" ? <SecondEffect /> : <FirstEffect />}
      </div>

      <div style={styles.buttonWrapper}>
        <button onClick={() => setEffect("spiral")} style={styles.button}>
          Hình Xoắn
        </button>
        <button onClick={() => setEffect("circle")} style={styles.button}>
          Hình Tròn
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  effectWrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
  },
  buttonWrapper: {
    position: "absolute",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 10,
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
} as const;

export default App;
