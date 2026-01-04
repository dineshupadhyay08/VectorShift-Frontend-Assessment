import { DraggableNode } from "./draggableNode";

export const Navbar = () => {
  return (
    <div className="navbar">
      <DraggableNode type="customInput" label="Input" />
      <DraggableNode type="text" label="Text" />
      <DraggableNode type="llm" label="LLM" />
      <DraggableNode type="customOutput" label="Output" />
      <DraggableNode type="api" label="API" />
      <DraggableNode type="condition" label="Condition" />
      <DraggableNode type="delay" label="Delay" />
      <DraggableNode type="logger" label="Logger" />
      <DraggableNode type="transform" label="Transform" />
    </div>
  );
};
