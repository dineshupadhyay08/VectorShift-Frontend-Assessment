import BaseNode from "./base/BaseNode";

export const DelayNode = ({ id }) => {
  return (
    <BaseNode
      title="Delay"
      inputs={[{ id: `${id}-in` }]}
      outputs={[{ id: `${id}-out` }]}
    >
      <span>Delay (ms)</span>
    </BaseNode>
  );
};
