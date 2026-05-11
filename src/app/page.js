"use client";

import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <main id="top" className="bg-white text-slate-900">

      {/* Navbar */}
<header className="fixed top-0 left-0 w-full z-50">

  <nav className="flex items-center justify-between px-6 md:px-16 py-5 text-white backdrop-blur-sm bg-black/20 border-b border-white/10">

    {/* Logo */}
    <a href="#top">
      <h2 className="text-lg md:text-xl tracking-[0.2em] uppercase font-light hover:text-slate-300 transition">
        J.W. Holliday & Associates
      </h2>
    </a>

    {/* Desktop Menu */}
    <div className="hidden md:flex gap-10 text-sm uppercase tracking-widest">

      <a href="#practice-areas" className="hover:text-slate-300 transition">
        Practice Areas
      </a>

      <a href="#about" className="hover:text-slate-300 transition">
        About
      </a>

      <a href="#industries" className="hover:text-slate-300 transition">
        Industries
      </a>

      <a href="#contact" className="hover:text-slate-300 transition">
        Contact
      </a>

    </div>

    {/* Mobile Hamburger */}
    <button
      className="md:hidden text-3xl"
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    >
      ☰
    </button>

  </nav>

  {/* Mobile Dropdown */}
  {mobileMenuOpen && (
    <div className="md:hidden bg-black/95 backdrop-blur-md text-white px-6 py-8 space-y-6 uppercase tracking-widest text-sm">

      <a
        href="#practice-areas"
        className="block"
        onClick={() => setMobileMenuOpen(false)}
      >
        Practice Areas
      </a>

      <a
        href="#about"
        className="block"
        onClick={() => setMobileMenuOpen(false)}
      >
        About
      </a>

      <a
        href="#industries"
        className="block"
        onClick={() => setMobileMenuOpen(false)}
      >
        Industries
      </a>

      <a
        href="#contact"
        className="block"
        onClick={() => setMobileMenuOpen(false)}
      >
        Contact
      </a>

    </div>
  )}

</header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-end bg-slate-950 text-white pb-12 md:pb-16">
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-dallas-1.jpg')",
          }}
        ></div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-4xl px-6 text-center mx-auto">
          <p className="uppercase tracking-[0.3em] text-sm text-slate-300 mb-6">
            Dallas, Texas
          </p>

          <h1 className="text-5xl md:text-7xl font-extralight leading-tight tracking-wide mb-6">
            J.W. Holliday & Associates P.C.
          </h1>

          <p className="text-lg md:text-2xl text-slate-300 mb-10 font-light">
            Creditors’ Rights & Bankruptcy Counsel Since 1997
          </p>

          <a
            href="#practice-areas"
            className="inline-block border border-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-slate-950 transition"
          >
            Explore Practice Areas
          </a>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice-areas" className="py-24 px-6 bg-white">
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
                className="border border-slate-200 p-8 hover:border-slate-900 hover:-translate-y-1 transition duration-300"
              >
                <h3 className="text-2xl font-light mb-4">{item}</h3>

                <p className="text-slate-600 leading-relaxed">
                  Strategic representation for financial institutions, lenders,
                  and commercial creditors throughout Texas.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-slate-950 text-white py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-slate-400 mb-6">
              About The Firm
            </p>

            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
              Representing Creditors and Commercial Interests Since 1997
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6 text-lg">
              J.W. Holliday & Associates is a Dallas-based law firm focused on
              bankruptcy, creditors’ rights, commercial litigation, and
              financial recovery matters throughout Texas.
            </p>

            <p className="text-slate-400 leading-relaxed">
              The firm represents financial institutions, lenders, commercial
              creditors, and businesses in matters involving Chapter 11
              proceedings, loan enforcement, collections, restructuring, and
              related litigation.
            </p>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-8">
            <div className="border border-slate-800 p-8">
              <h3 className="text-5xl font-light mb-4">1997</h3>

              <p className="text-slate-400 uppercase tracking-widest text-sm">
                Established
              </p>
            </div>

            <div className="border border-slate-800 p-8">
              <h3 className="text-5xl font-light mb-4">Dallas</h3>

              <p className="text-slate-400 uppercase tracking-widest text-sm">
                Texas Based
              </p>
            </div>

            <div className="border border-slate-800 p-8">
              <h3 className="text-5xl font-light mb-4">Creditor</h3>

              <p className="text-slate-400 uppercase tracking-widest text-sm">
                Representation
              </p>
            </div>

            <div className="border border-slate-800 p-8">
              <h3 className="text-5xl font-light mb-4">Commercial</h3>

              <p className="text-slate-400 uppercase tracking-widest text-sm">
                Litigation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="bg-white py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="uppercase tracking-[0.3em] text-sm text-slate-500 mb-4">
              Industries Served
            </p>

            <h2 className="text-4xl md:text-5xl font-light text-slate-900">
              Representation Across Commercial Sectors
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Financial Institutions",
              "Commercial Lenders",
              "Real Estate Creditors",
              "Equipment Financing",
              "Healthcare Providers",
              "Automotive Finance",
              "Trade Creditors",
              "Private Lending",
              "Commercial Services",
            ].map((industry) => (
              <div
                key={industry}
                className="border border-slate-200 p-8 hover:border-slate-900 transition"
              >
                <h3 className="text-2xl font-light text-slate-900">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-slate-950 text-white py-28 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-slate-400 mb-6">
              Contact
            </p>

            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
              Contact J.W. Holliday & Associates
            </h2>

            <p className="text-slate-300 leading-relaxed mb-10 max-w-xl">
              For inquiries regarding bankruptcy matters, creditors’ rights,
              commercial litigation, or restructuring representation, contact
              the firm directly.
            </p>

            <div className="space-y-6 text-slate-300">
              <div>
                <p className="uppercase tracking-widest text-sm text-slate-500 mb-1">
                  Office
                </p>

                <p>Dallas, Texas</p>
              </div>

              <div>
                <p className="uppercase tracking-widest text-sm text-slate-500 mb-1">
                  Phone
                </p>

                <p>(214) 555-5555</p>
              </div>

              <div>
                <p className="uppercase tracking-widest text-sm text-slate-500 mb-1">
                  Email
                </p>

                <p>info@jwhlaw.com</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-slate-900 border border-slate-800 p-8 md:p-10">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-transparent border border-slate-700 px-4 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-white transition"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border border-slate-700 px-4 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-white transition"
                />
              </div>

              <div>
                <textarea
                  rows="5"
                  placeholder="Message"
                  className="w-full bg-transparent border border-slate-700 px-4 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-white transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="border border-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-slate-950 transition"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-slate-500 py-10 px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="uppercase tracking-[0.25em] text-sm">
              J.W. Holliday & Associates
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-600 text-center md:text-right">
              © 2026 J.W. Holliday & Associates. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
