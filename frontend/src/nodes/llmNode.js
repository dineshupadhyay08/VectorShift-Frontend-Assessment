// frontend/src/nodes/llmNode.js

import BaseNode from "./base/BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="LLM"
      inputs={[{ id: `${id}-system` }, { id: `${id}-prompt` }]}
      outputs={[{ id: `${id}-response` }]}
    >
      <span>This is a LLM.</span>
    </BaseNode>
  );
};
