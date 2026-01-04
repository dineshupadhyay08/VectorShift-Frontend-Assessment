import { toast } from "react-toastify";
import { useStore } from "./store";

const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nodes, edges }),
      });

      const data = await res.json();

      toast.success(
        `Nodes: ${data.num_nodes} | Edges: ${data.num_edges} | DAG: ${
          data.is_dag ? "Yes" : "No"
        }`,
        {
          style: {
            background: "#020617", // dark navy
            color: "#FFFFFF", // 👈 white text
            fontSize: "13px",
            border: "1px solid #1F2937",
          },
          progressStyle: {
            background: "linear-gradient(to right, #22C55E, #3B82F6)",
          },
        }
      );
    } catch (error) {
      toast.error("Submission failed. Please try again.", {
        style: {
          background: "#020617",
          color: "#FFFFFF",
          fontSize: "13px",
          border: "1px solid #991B1B",
        },
        progressStyle: {
          background: "linear-gradient(to right, #EF4444, #F59E0B)",
        },
      });
    }
  };

  return (
    <button
      onClick={handleSubmit}
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        padding: "12px 28px",
        background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
        color: "#white",
        border: "1px solid #1E40AF",
        borderRadius: "999px",
        cursor: "pointer",
        zIndex: 1000,
      }}
    >
      Submit
    </button>
  );
};

export default SubmitButton;
