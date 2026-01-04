import { useState, useEffect, useMemo, useRef } from "react";
import { useUpdateNodeInternals, useReactFlow } from "reactflow";
import BaseNode from "./base/BaseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "");

  const updateNodeInternals = useUpdateNodeInternals();
  const { setEdges } = useReactFlow();
  const prevVariablesRef = useRef([]);

  /* ---------- AUTO RESIZE ---------- */
  const rows = Math.max(2, currText.split("\n").length);

  /* ---------- VARIABLE DETECTION ---------- */
  const variables = useMemo(() => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const found = new Set();
    let match;

    while ((match = regex.exec(currText)) !== null) {
      found.add(match[1]);
    }

    return Array.from(found);
  }, [currText]);

  const inputHandles = variables.map((v) => ({
    id: `${id}-${v}`,
  }));

  /* ---------- UPDATE HANDLES ---------- */
  useEffect(() => {
    updateNodeInternals(id);
  }, [variables, id, updateNodeInternals]);

  /* ---------- REMOVE EDGES ONLY FOR DELETED VARIABLES ---------- */
  useEffect(() => {
    const prevVars = prevVariablesRef.current;
    const removedVars = prevVars.filter((v) => !variables.includes(v));

    if (removedVars.length > 0) {
      setEdges((eds) =>
        eds.filter(
          (e) =>
            !(
              e.target === id &&
              removedVars.some((v) => e.targetHandle === `${id}-${v}`)
            )
        )
      );
    }

    prevVariablesRef.current = variables;
  }, [variables, id, setEdges]);

  /* ---------- STYLES ---------- */
  const labelStyle = {
    fontSize: "12px",
    color: "#9CA3AF",
  };

  const fieldStyle = {
    width: "100%",
    padding: "8px 10px",
    background: "#020617",
    border: "1px solid #1F2937",
    borderRadius: "6px",
    color: "#E5E7EB",
    fontSize: "13px",
    boxSizing: "border-box",
    resize: "none",
  };

  return (
    <BaseNode
      title="Text"
      inputs={inputHandles}
      outputs={[{ id: `${id}-output` }]}
    >
      <label style={labelStyle}>Text</label>

      <textarea
        style={fieldStyle}
        rows={rows}
        value={currText}
        onChange={(e) => setCurrText(e.target.value)}
        placeholder="Type text with {{variables}}"
        onDrop={(e) => e.preventDefault()}
        onDragOver={(e) => e.preventDefault()}
      />
    </BaseNode>
  );
};
