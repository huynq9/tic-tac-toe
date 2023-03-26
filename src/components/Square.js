import { useState } from "react";

export const Square = ({ value, onSquareClick }) => {
  return (
    <button
      className="h-[50px] w-[50px] border  m-2 text-white bg-gray-600"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};
