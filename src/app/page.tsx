"use client"

import { useState } from "react";

export default function Home() {

  const [pressed, setPressed] = useState(0);

  const handleClick = () => {
    setPressed(pressed + 1);
  };


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col w-full item">
          <button className="btn" onClick={handleClick} >GG</button>
        </div>
        <div className="stats bg-primary text-primary-content">
          <div className="stat">
            <div className="stat-title text-slate-900 w-full text-center">Pressed</div>
            <div className="stat-value text-green-300">{pressed}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
