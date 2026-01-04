import BaseNode from "./base/BaseNode";

export const ConditionNode = ({ id }) => {
  return (
    <BaseNode
      title="Condition"
      inputs={[{ id: `${id}-in` }]}
      outputs={[{ id: `${id}-true` }, { id: `${id}-false` }]}
    >
      <span>If / Else Condition</span>
    </BaseNode>
  );
};
