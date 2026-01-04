import { Handle, Position } from "reactflow";

export default function BaseNode({
  title,
  inputs = [],
  outputs = [],
  children,
}) {
  return (
    <div className="base-node">
      {/* LEFT HANDLES */}
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
          className="node-handle"
          style={{
            top: `${((index + 1) * 100) / (inputs.length + 1)}%`,
          }}
        />
      ))}

      {/* TITLE */}
      <div className="node-title">{title}</div>

      {/* BODY */}
      <div className="node-body">{children}</div>

      {/* RIGHT HANDLES */}
      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          className="node-handle"
          style={{
            top: `${((index + 1) * 100) / (outputs.length + 1)}%`,
          }}
        />
      ))}
    </div>
  );
}
