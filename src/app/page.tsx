import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0E15] text-[#e3e1ec] flex font-inter">
      {/* Parameters */}
      <aside className="w-80 border-r border-[#3b494b]/30 bg-[#1a1b22] p-8">
        <h1 className="font-space-grotesk text-2xl font-bold text-[#FF003C] mb-8">LLM_SANDBOX</h1>
        
        <div className="space-y-8">
          <div>
            <div className="flex justify-between text-xs font-space-grotesk uppercase tracking-widest mb-4">
              <span className="text-[#b9cacb]">Temperature</span>
              <span className="text-[#FF003C]">0.7</span>
            </div>
            <input type="range" className="w-full accent-[#FF003C]" />
          </div>
          <div>
            <div className="flex justify-between text-xs font-space-grotesk uppercase tracking-widest mb-4">
              <span className="text-[#b9cacb]">Max Tokens</span>
              <span className="text-[#00F0FF]">2048</span>
            </div>
            <input type="range" className="w-full accent-[#00F0FF]" />
          </div>
          <div>
            <div className="text-xs font-space-grotesk uppercase tracking-widest mb-4 text-[#b9cacb]">System Prompt</div>
            <textarea className="w-full h-32 bg-[#0d0e15] border border-[#3b494b]/30 p-3 text-xs font-mono outline-none focus:border-[#FF003C] transition-colors" defaultValue="You are an expert AI auditor designed to analyze smart contracts for vulnerabilities." />
          </div>
        </div>
      </aside>

      {/* Chat Output */}
      <section className="flex-1 flex flex-col bg-[#0d0e15]">
        <div className="flex-1 p-8 overflow-y-auto space-y-6">
          <div className="bg-[#1a1b22] p-6 max-w-3xl ml-auto border border-[#3b494b]/30 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl">
            <p className="text-sm font-mono leading-relaxed">Analyze the following withdraw function for any potential reentrancy attacks.</p>
          </div>
          <div className="bg-[#1e1f27] p-6 max-w-3xl mr-auto border-l-2 border-[#FF003C] rounded-tr-2xl rounded-br-2xl rounded-bl-2xl shadow-[0_0_20px_rgba(255,0,60,0.05)]">
            <p className="text-sm leading-relaxed mb-4">I have analyzed the provided code. A critical <strong className="text-[#FF003C]">Reentrancy Vulnerability</strong> exists on line 14.</p>
            <pre className="bg-[#0d0e15] p-4 text-xs font-mono text-[#00F0FF]">
              14: msg.sender.call{'{value: amount}'}("");
            </pre>
            <p className="text-sm leading-relaxed mt-4">The state variable  is updated after the external call, allowing a malicious contract to re-enter the function and drain funds before the balance is deduced.</p>
          </div>
        </div>
        
        <div className="p-6 border-t border-[#3b494b]/30 bg-[#1a1b22]">
          <div className="relative">
            <input type="text" className="w-full bg-[#0d0e15] border border-[#3b494b]/30 px-4 py-4 text-sm outline-none focus:border-[#FF003C]" placeholder="Enter prompt..." />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FF003C] text-white px-6 py-2 text-xs font-space-grotesk tracking-widest uppercase hover:bg-[#ff525c] transition-colors">Submit</button>
          </div>
        </div>
      </section>
    </main>
  );
}
