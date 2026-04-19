import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0e15] text-[#eeedf7] font-['Manrope'] selection:bg-[#00F0FF] selection:text-black">
      <nav className="fixed w-full z-50 bg-[#0d0e15]/90 backdrop-blur-xl border-b border-[#3b494b]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter text-[#00F0FF] font-['Space_Grotesk']">NEON_NOIR_LLM</div>
          <button className="px-6 py-2 border-b-2 border-[#00F0FF] text-[#00F0FF] text-sm uppercase font-bold tracking-widest hover:shadow-[0_20px_20px_-10px_rgba(0,240,255,0.4)] transition-all font-['Space_Grotesk']">
            Enter Terminal
          </button>
        </div>
      </nav>

      <section className="pt-40 pb-20 px-6 relative flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 font-['Space_Grotesk'] uppercase leading-none">
          THE VOID IS <br/><span className="text-[#FF51FA]">LISTENING.</span>
        </h1>
        <p className="text-xl text-[#b9cacb] mb-12 max-w-2xl mx-auto font-light">
          An advanced prompt engineering sandbox. Tweak neural parameters, inject system logic, and optimize output in a high-fidelity test environment.
        </p>
      </section>

      {/* Dashboard App */}
      <section className="px-6 pb-32 max-w-7xl mx-auto">
        <div className="bg-[#12131b] flex flex-col md:flex-row h-[600px] border border-[#3b494b] shadow-[0_0_50px_rgba(0,0,0,0.8)]">
           {/* Sidebar Controls */}
           <div className="w-full md:w-80 bg-[#1a1b22] border-r border-[#3b494b] p-6 flex flex-col">
             <h3 className="text-xs uppercase tracking-widest font-['Space_Grotesk'] text-[#00F0FF] mb-8">Model Parameters</h3>
             
             <div className="space-y-8 flex-1">
               <div>
                 <div className="flex justify-between text-xs font-['Space_Grotesk'] text-[#b9cacb] mb-2 uppercase"><span>Temperature</span><span className="text-[#00F0FF]">0.7</span></div>
                 <div className="h-1 w-full bg-[#0d0e15]"><div className="h-full bg-[#00F0FF]" style={{width: '70%'}}></div></div>
               </div>
               <div>
                 <div className="flex justify-between text-xs font-['Space_Grotesk'] text-[#b9cacb] mb-2 uppercase"><span>Top-P</span><span className="text-[#FF51FA]">0.9</span></div>
                 <div className="h-1 w-full bg-[#0d0e15]"><div className="h-full bg-[#FF51FA]" style={{width: '90%'}}></div></div>
               </div>
               <div>
                 <div className="flex justify-between text-xs font-['Space_Grotesk'] text-[#b9cacb] mb-2 uppercase"><span>Max Tokens</span><span className="text-[#e3e1ec]">2048</span></div>
                 <div className="h-1 w-full bg-[#0d0e15]"><div className="h-full bg-[#e3e1ec]" style={{width: '50%'}}></div></div>
               </div>
             </div>
             
             <button className="w-full py-4 bg-[#00F0FF] text-black font-['Space_Grotesk'] font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">Run Prompt</button>
           </div>
           
           {/* Chat Window */}
           <div className="flex-1 bg-[#0d0e15] flex flex-col">
             <div className="flex-1 p-6 overflow-y-auto space-y-6">
               <div className="bg-[#1a1b22] p-4 text-sm max-w-xl ml-auto border-r-2 border-[#00F0FF]">
                 <span className="text-xs text-[#00F0FF] font-['Space_Grotesk'] uppercase block mb-1">User</span>
                 Explain the concept of quantum superposition using a cyberpunk metaphor.
               </div>
               <div className="bg-[#12131b] p-4 text-sm max-w-xl mr-auto border-l-2 border-[#FF51FA] shadow-[0_0_20px_rgba(255,81,250,0.05)]">
                 <span className="text-xs text-[#FF51FA] font-['Space_Grotesk'] uppercase block mb-1">System</span>
                 Imagine a neon sign flickering between \"OPEN\" and \"CLOSED\". Until you look directly at it, the sign is simultaneously in both states, existing as a superposition of neon gas and dead glass...
               </div>
             </div>
             <div className="p-6 border-t border-[#3b494b] bg-[#1a1b22]">
               <input type="text" className="w-full bg-[#0d0e15] border-b border-[#3b494b] px-4 py-3 text-sm outline-none focus:border-[#00F0FF] transition-colors" placeholder="> Type instruction..." />
             </div>
           </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-[#3b494b]/30">
        <h2 className="text-3xl font-bold uppercase tracking-widest mb-16 font-['Space_Grotesk'] text-center">Neural Optimization</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {t: "Advanced Logic", d: "Bypass standard model constraints with granular parameter control.", c: "#00F0FF"},
            {t: "System Injection", d: "Override baseline behaviors with powerful, persistent system prompts.", c: "#FF51FA"},
            {t: "Data Export", d: "Export optimized prompts directly to API-ready JSON formats.", c: "#00F0FF"}
          ].map((f, i) => (
            <div key={i} className="bg-[#1a1b22] p-8 border-t-2" style={{borderTopColor: f.c}}>
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4 font-['Space_Grotesk']" style={{color: f.c}}>{f.t}</h3>
              <p className="text-[#b9cacb] text-sm leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 px-6 bg-[#000000]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-[#12131b] p-8 border border-[#3b494b]">
             <h3 className="text-xl uppercase tracking-widest text-[#b9cacb] font-['Space_Grotesk'] mb-2">Base</h3>
             <div className="text-4xl font-bold font-['Space_Grotesk'] mb-8">Free</div>
             <button className="w-full py-3 border border-[#b9cacb] text-[#b9cacb] font-['Space_Grotesk'] uppercase tracking-widest text-sm hover:bg-[#b9cacb] hover:text-black transition-colors">Select</button>
           </div>
           <div className="bg-[#1a1b22] p-10 border border-[#00F0FF] shadow-[0_0_30px_rgba(0,240,255,0.1)] relative transform md:-translate-y-4">
             <div className="absolute top-0 right-0 bg-[#00F0FF] text-black text-xs font-bold font-['Space_Grotesk'] uppercase tracking-widest px-3 py-1">Pro Tier</div>
             <h3 className="text-xl uppercase tracking-widest text-[#00F0FF] font-['Space_Grotesk'] mb-2">Architect</h3>
             <div className="text-4xl font-bold font-['Space_Grotesk'] mb-8">9<span className="text-lg text-[#b9cacb]">/mo</span></div>
             <button className="w-full py-4 bg-[#00F0FF] text-black font-['Space_Grotesk'] uppercase font-bold tracking-widest text-sm hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">Go Architect</button>
           </div>
           <div className="bg-[#12131b] p-8 border border-[#3b494b]">
             <h3 className="text-xl uppercase tracking-widest text-[#b9cacb] font-['Space_Grotesk'] mb-2">Enterprise</h3>
             <div className="text-4xl font-bold font-['Space_Grotesk'] mb-8">Custom</div>
             <button className="w-full py-3 border border-[#b9cacb] text-[#b9cacb] font-['Space_Grotesk'] uppercase tracking-widest text-sm hover:bg-[#b9cacb] hover:text-black transition-colors">Contact</button>
           </div>
        </div>
      </section>

      <footer className="py-10 text-center bg-[#0d0e15] border-t border-[#3b494b]/30">
         <p className="text-xs text-[#b9cacb] font-['Space_Grotesk'] uppercase tracking-widest">NEON_NOIR_LLM © 2024</p>
      </footer>
    </main>
  );
}
