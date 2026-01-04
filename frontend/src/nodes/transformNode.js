import BaseNode from "./base/BaseNode";

export const TransformNode = ({ id }) => {
  return (
    <BaseNode
      title="Transform"
      inputs={[{ id: `${id}-in` }]}
      outputs={[{ id: `${id}-out` }]}
    >
      <span>Transform Data</span>
    </BaseNode>
  );
};
