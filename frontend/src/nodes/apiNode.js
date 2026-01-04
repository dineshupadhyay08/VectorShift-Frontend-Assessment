// frontend/src/nodes/ApiNode.js

import BaseNode from "./base/BaseNode";

export const ApiNode = ({ id }) => {
  return (
    <BaseNode
      title="API"
      inputs={[{ id: `${id}-input` }]}
      outputs={[{ id: `${id}-output` }]}
    >
      <span>Call External API</span>
    </BaseNode>
  );
};
