import React, { useEffect, useState } from "react";
import Button from "./Button.component";

export default () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIndex((prev) => prev++);
    }, 1000);
  }, []);

  const handleIncrement = () => {
    console.log("Pressed");
    setIndex((prev) => prev++);
  };

  return <div>{index}</div>;
};
