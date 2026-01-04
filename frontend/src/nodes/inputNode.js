// frontend/src/nodes/inputNode.js

import { useState } from "react";
import BaseNode from "./base/BaseNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data?.inputType || "Text");

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
    <BaseNode title="Input" outputs={[{ id: `${id}-value` }]}>
      {/* Name Field */}
      <div>
        <label style={labelStyle}>Name</label>
        <input
          style={fieldStyle}
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
        />
      </div>

      {/* Type Field */}
      <div>
        <label style={labelStyle}>Type</label>
        <select
          style={fieldStyle}
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </div>
    </BaseNode>
  );
};
