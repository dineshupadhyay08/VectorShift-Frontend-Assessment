export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify({ nodeType })
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className="nav-item"
      draggable
      onDragStart={(e) => onDragStart(e, type)}
    >
      {label}
      <span className="nav-underline" />
    </div>
  );
};
