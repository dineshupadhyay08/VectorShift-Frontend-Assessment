import { Navbar } from "./navbar";
import { PipelineUI } from "./ui";
import SubmitButton from "./submit";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#0F172A",
      }}
    >
      {/* 🔔 Toast container (global) */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover={false}
        theme="dark"
      />

      {/* Top Navbar */}
      <Navbar />

      {/* Canvas Area */}
      <div
        style={{
          flex: 1,
          padding: "8px 12px",
        }}
      >
        <PipelineUI />
        <div style={{ padding: "12px", textAlign: "right" }}>
          <SubmitButton />
        </div>
      </div>
    </div>
  );
}

export default App;
