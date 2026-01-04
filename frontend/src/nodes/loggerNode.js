import BaseNode from "./base/BaseNode";

export const LoggerNode = ({ id }) => {
  return (
    <BaseNode
      title="Logger"
      inputs={[{ id: `${id}-in` }]}
      outputs={[{ id: `${id}-out` }]}
    >
      <span>Log Data</span>
    </BaseNode>
  );
};
