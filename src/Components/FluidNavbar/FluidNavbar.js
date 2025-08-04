import React from "react";

export default function FluidNavbar() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-100 to-zinc-300 dark:from-zinc-900 dark:to-black">
      <Navbar />
      <main className="pt-24 px-4 max-w-4xl mx-auto space-y-12">
        {[...Array(10)].map((_, i) => (
          <section key={i} className="p-6 bg-white/40 dark:bg-white/10 backdrop-blur rounded-xl shadow-md">
            <h2 className="text-xl font-semibold">Section {i + 1}</h2>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh.
            </p>
          </section>
        ))}
      </main>
    </div>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="backdrop-blur-sm bg-white/40 dark:bg-white/10 border-b border-white/30 dark:border-white/10 shadow-sm transition-all duration-300">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-lg font-bold text-zinc-800 dark:text-zinc-100">🍎 FluidGlassNav</div>
          <ul className="flex gap-6 text-zinc-700 dark:text-zinc-300">
            <li className="hover:text-black dark:hover:text-white transition">Home</li>
            <li className="hover:text-black dark:hover:text-white transition">Features</li>
            <li className="hover:text-black dark:hover:text-white transition">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
