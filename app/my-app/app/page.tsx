export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-6 py-16">

        <header className="mb-12 text-center">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-lg font-bold">
            TS
          </div>

          <h1 className="text-4xl font-semibold tracking-tight">
            TextSignal
          </h1>

          <p className="mt-3 text-sm text-zinc-500">
            Check whether your content is useful.
          </p>
        </header>

        <section className="rounded-3xl border border-white/10 bg-zinc-950 p-5 shadow-2xl shadow-black/50">

          <div className="rounded-2xl border border-white/10 bg-black p-1">
            <textarea
              placeholder="Paste your content here..."
              className="h-72 w-full resize-none rounded-xl bg-transparent px-5 py-4 text-[15px] leading-7 text-zinc-200 outline-none placeholder:text-zinc-700"
            />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-zinc-600">
              Paste a sentence, paragraph, or article.
            </span>

            <button
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200 active:scale-95"
            >
              Check content
            </button>
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-white/10 bg-zinc-950 p-6">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-600">
                Result
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                —
              </h2>
            </div>

            <div className="text-right">
              <p className="text-xs text-zinc-600">
                Confidence
              </p>

              <p className="mt-1 text-xl font-medium text-zinc-400">
                —%
              </p>
            </div>

          </div>
        </section>

        <footer className="mt-auto pt-12 text-center">
          <p className="text-xs text-zinc-700">
            TextSignal · Content usefulness classifier
          </p>
        </footer>

      </div>
    </main>
  );
}