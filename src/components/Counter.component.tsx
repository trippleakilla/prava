import React, { FC, useEffect, useState } from "react";

interface Props {
  value: number;
  title: string;
}

export const Counter: FC<Props> = (props) => {
  const { title, value = 1000 } = props;
  const [number, setNumber] = useState(0);

  return (
    <div className="bg-white text-black rounded-xl px-10 py-20 max-w-max text-center shadow-xl">
      <h1 className="text-4xl text-[#24AB66] font-bold">{value}</h1>
      <h1 className="text-2xl mt-4">{title}</h1>
    </div>
  );
};
