export default function Home() {
  return (
    <main className="bg-white text-slate-900">

      {/* Hero Section */}
      <section className="relative h-screen flex items-end bg-slate-950 text-white pb-12 md:pb-16">

        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
               "url('/images/hero-dallas-1.jpg')",
          }}
        ></div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-4xl px-6 text-center mx-auto">

          <p className="uppercase tracking-[0.3em] text-sm text-slate-300 mb-6">
            Dallas, Texas
          </p>

          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-6">
            J.W. Holliday & Associates P.C.
          </h1>

          {/* <p className="text-xl md:text-2xl text-slate-200 mb-10">
            Creditors’ Rights & Bankruptcy Counsel Since 1997
          </p> */}

          <a
            href="#practice-areas"
            className="inline-block border border-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-slate-950 transition"
          >
            Explore Practice Areas
          </a>

        </div>
      </section>

      {/* Practice Areas */}
      <section
        id="practice-areas"
        className="py-24 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">

          <div className="mb-16 text-center">
            <p className="uppercase tracking-[0.3em] text-sm text-slate-500 mb-4">
              Practice Areas
            </p>

            <h2 className="text-4xl md:text-5xl font-light">
              Bankruptcy & Creditors’ Rights
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Bankruptcy Litigation",
              "Chapter 11 Representation",
              "Commercial Collections",
              "Loan Enforcement",
              "Receiverships",
              "Workout & Restructuring",
            ].map((item) => (
              <div
                key={item}
                className="border border-slate-200 p-8 hover:border-slate-900 transition"
              >
                <h3 className="text-2xl font-light mb-4">
                  {item}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  Strategic representation for financial institutions,
                  lenders, and commercial creditors throughout Texas.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
}