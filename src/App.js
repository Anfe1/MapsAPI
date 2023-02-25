import "./App.css";
import React from "react";
import SearchBar from "./SearchBar";
import Maps from "./Maps";

function App() {
  return (
    <div
      className="App"
      style={{
        border: "2px solid red",
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div style={{ border: "2px solid red", width: "50vw", height: "100%" }}>
        <Maps />
      </div>
      <div style={{ border: "2px solid red", width: "50vw" }}>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
