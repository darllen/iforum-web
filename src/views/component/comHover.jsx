import React, { useState } from "react";

function ComHover(Componente) {
  return function ComponenteComHover(props) {
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <Componente isHovered={isHovered} isFocused={isFocused} {...props} />
      </div>
    );
  };
}

export default ComHover;