import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0E15] text-[#e3e1ec] flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4 tracking-widest text-[#00F0FF] uppercase">prompt-engineering-sandbox</h1>
      <p className="text-[#b9cacb] max-w-xl text-center">Build an LLM testing environment. Use a split-screen layout: parameter sliders (temperature, tokens) on the left, chat output on the right.</p>
    </main>
  );
}
