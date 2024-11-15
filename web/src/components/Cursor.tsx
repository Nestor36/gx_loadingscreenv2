import React, { useEffect, useState } from "react";
import "./style/Cursor.css";

type Props = {
  available: boolean;
  type?: 1;
};

function Cursor({ available, type }: Props) {
  if (!available == true) {
    return;
  }
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ top: e.pageY, left: e.pageX });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <img
      id="cursor"
      src="https://static-00.iconduck.com/assets.00/cursor-icon-2048x2048-7mjsp9p1.png"
      style={{ position: "absolute", top: position.top, left: position.left }}
      alt="custom cursor"
    />
  );
}

export default Cursor;
