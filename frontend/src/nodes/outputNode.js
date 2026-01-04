// frontend/src/nodes/outputNode.js

import { useState } from "react";
import BaseNode from "./base/BaseNode";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data?.outputType || "Text");

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
  };

  return (
    <BaseNode title="Output" inputs={[{ id: `${id}-value` }]}>
      <label style={labelStyle}>
        Name:
        <input
          type="text"
          style={fieldStyle}
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
        />
      </label>

      <br />

      <label style={labelStyle}>
        Type:
        <select
          style={fieldStyle}
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
        >
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </BaseNode>
  );
};
