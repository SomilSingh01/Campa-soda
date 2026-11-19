// import React from "react"; // UNUSED - Modern React doesn't require this import

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <img src="/logo/campalogo.png" alt="Campa" className="z-10 h-20 cursor-pointer" />
    </header>
  );
}
