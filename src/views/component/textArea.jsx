import React from "react";

function TextArea({ isHovered, isFocused, ...props }) {
  const style = {
    resize: "none",
    overflow: "auto",
    border: isFocused
      ? "2px solid var(--azul-normal)"
      : isHovered
      ? "2px solid var(--azul-normal)"
      : "2px solid var(--cinza-medio)",
  };

  return <textarea style={style} className="text-area" {...props} />;
}

export default TextArea;