"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <main id="top" className="bg-white text-slate-900">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50">
        <nav className="flex items-center justify-between px-6 md:px-16 py-5 text-white backdrop-blur-md bg-black/50 border-b border-white/10">
          {/* Logo */}
          <a href="#top">
            <h2 className="text-slate-100 text-lg md:text-xl tracking-[0.25em] uppercase font-light hover:text-white transition">
              J.W. Holliday & Associates
            </h2>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10 text-base uppercase tracking-widest">
            <a
              href="#practice-areas"
              className="text-slate-300 hover:text-white transition"
            >
              Practice Areas
            </a>

            <a
              href="#experience"
              className="text-slate-300 hover:text-white transition"
            >
              Experience
            </a>

            <a
              href="#credentials"
              className="text-slate-300 hover:text-white transition"
            >
              Credentials
            </a>

            <a
              href="#insights"
              className="text-slate-300 hover:text-white transition"
            >
              Insights
            </a>

            <a
              href="#contact"
              className="text-slate-300 hover:text-white transition"
            >
              Contact
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-3xl text-slate-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </nav>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md text-white px-6 py-8 space-y-6 uppercase tracking-widest text-base">
            <a
              href="#practice-areas"
              className="block text-slate-300 hover:text-white transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Practice Areas
            </a>

            <a
              href="#experience"
              className="block text-slate-300 hover:text-white transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Experience
            </a>

            <a
              href="#credentials"
              className="block text-slate-300 hover:text-white transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Credentials
            </a>

            <a
              href="#insights"
              className="block text-slate-300 hover:text-white transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Insights
            </a>

            <a
              href="#contact"
              className="block text-slate-300 hover:text-white transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end bg-slate-950 text-white pb-12 md:pb-16">
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-[center_top] md:bg-center"
          style={{
            backgroundImage: "url('/images/hero-dallas-1.jpg')",
          }}
        ></div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-4xl px-6 text-center mx-auto">
          {/* <p className="uppercase tracking-[0.3em] text-sm text-slate-300 mb-6">
            Dallas, Texas
          </p> */}

          <h1 className="text-2xl sm:text-5xl md:text-5xl font-extralight leading-tight tracking-wide mb-6">
            J.W. Holliday & Associates P.C.
          </h1>

          <p className="uppercase tracking-[0.3em] text-lg text-slate-300 mb-6">
            Dallas, Texas
          </p>

          <p className="text-base sm:text-lg md:text-2xl text-slate-300 mb-10 font-light">
            Creditors’ Rights & Bankruptcy Counsel Since 1997
          </p>

          {/* <a
            href="#practice-areas"
            className="inline-block border border-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-slate-950 transition"
          >
            Explore Practice Areas
          </a> */}
        </div>
      </section>

      {/* Practice Areas */}
      <motion.section
        id="practice-areas"
        // className="py-24 px-6 bg-white"
        className="bg-slate-100 py-28 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <p className="uppercase tracking-[0.3em] text-lg text-slate-600 mb-4">
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

                <p className="text-lg text-slate-600 leading-relaxed">
                  Strategic representation for financial institutions, lenders,
                  and commercial creditors throughout Texas.
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="bg-slate-950 text-white py-28 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div>
            <p className="uppercase tracking-[0.3em] text-lg text-slate-400 mb-6">
              About The Firm
            </p>

            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
              Representing Creditors and Commercial Interests Since 1997
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6 text-xl">
              {/* J.W. Holliday & Associates is a Dallas-based law firm 
              representing creditors, financial institutions, and commercial 
              clients in bankruptcy, restructuring, and financial recovery 
              matters nationwide. */}
              J.W. Holliday & Associates is a Dallas-based law firm representing
              creditors, lenders, and commercial clients in bankruptcy,
              restructuring, and creditors’ rights matters across jurisdictions
              nationwide.
            </p>

            <p className="text-slate-400 leading-relaxed mb-6 text-xl">
              The firm represents financial institutions, lenders, commercial
              creditors, and businesses in matters involving Chapter 11
              proceedings, loan enforcement, collections, restructuring, and
              related litigation.
            </p>
          </div>

          {/* Right Side */}
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="border border-slate-800 p-8">
              <h3 className="text-3xl xl:text-4xl font-light mb-4 leading-tight">
                1997
              </h3>

              <p className="text-slate-400 uppercase tracking-widest text-base">
                Established
              </p>
            </div>

            <div className="border border-slate-800 p-8">
              <h3 className="text-3xl xl:text-4xl font-light mb-4 leading-tight">
                Dallas
              </h3>

              <p className="text-slate-400 uppercase tracking-widest text-base">
                Texas Based
              </p>
            </div>

            <div className="border border-slate-800 p-8">
              <h3 className="text-3xl xl:text-4xl font-light mb-4 leading-tight">
                Creditor
              </h3>

              <p className="text-slate-400 uppercase tracking-widest text-base">
                Representation
              </p>
            </div>

            <div className="border border-slate-800 p-8">
              <h3 className="text-3xl xl:text-4xl font-light mb-4 leading-tight">
                Commercial
              </h3>

              <p className="text-slate-400 uppercase tracking-widest text-base">
                Litigation
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Industries Section */}
      <motion.section
        id="industries"
        className="bg-white py-28 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <p className="uppercase tracking-[0.3em] text-lg text-slate-500 mb-4">
              Industries Served
            </p>

            <h2 className="text-4xl md:text-5xl font-light text-slate-900">
              Representation Across Commercial Sectors
            </h2>
          </div>

          {/* <div className="grid md:grid-cols-3 gap-6"> */}
          <div className="grid md:grid-cols-3 gap-4">
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
                className="border border-slate-200 p-6 flex items-center justify-center text-center hover:border-slate-900 hover:-translate-y-1 transition duration-300"
              >
                {/* <h3 className="text-2xl font-light text-slate-900"> */}
                <h3 className="text-lg xl:text-xl font-light text-slate-900">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Experience Section */}
      <motion.section
        id="experience"
        className="bg-slate-950 text-white py-28 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center">
            <p className="uppercase tracking-[0.3em] text-lg text-slate-400 mb-4">
              Experience
            </p>

            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              National Bankruptcy & Creditors’ Rights Representation
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-slate-800 p-8">
              <h3 className="text-3xl font-light mb-6">Since 1997</h3>

              <p className="text-lg text-slate-400 leading-relaxed">
                Representing creditors, lenders, and commercial clients in
                bankruptcy, restructuring, and recovery matters for more than
                two decades.
              </p>
            </div>

            <div className="border border-slate-800 p-8">
              <h3 className="text-3xl font-light mb-6">Nationwide Matters</h3>

              <p className="text-lg text-slate-400 leading-relaxed">
                Coordinating bankruptcy and commercial recovery matters across
                jurisdictions nationwide through established local counsel
                relationships.
              </p>
            </div>

            <div className="border border-slate-800 p-8">
              <h3 className="text-3xl font-light mb-6">Commercial Focus</h3>

              <p className="text-lg text-slate-400 leading-relaxed">
                Focused on creditors’ rights, restructuring, Chapter 11 matters,
                financial recovery, and commercial litigation representation.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Credentials Section */}
      <motion.section
        id="credentials"
        className="bg-white py-28 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-20 text-center">
            <p className="uppercase tracking-[0.3em] text-lg text-slate-500 mb-4">
              Credentials
            </p>

            <h2 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight">
              Admissions, Education & Practice Focus
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Column */}
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-light text-slate-900 mb-4">
                  Education
                </h3>

                <ul className="space-y-3 text-lg text-slate-600 leading-relaxed">
                  <li>SMU Dedman School of Law</li>

                  <li>Juris Doctor</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-light text-slate-900 mb-4">
                  Admissions
                </h3>

                <ul className="space-y-3 text-lg text-slate-600 leading-relaxed">
                  <li>State Bar of Texas</li>

                  <li>U.S. District Court — Northern District of Texas</li>

                  <li>U.S. Bankruptcy Court — Northern District of Texas</li>

                  <li>Additional federal and bankruptcy court admissions</li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-2xl font-light text-slate-900 mb-4">
                Practice Focus
              </h3>

              <ul className="space-y-3 text-lg text-slate-600 leading-relaxed">
                <li>Creditors’ Rights Representation</li>

                <li>Bankruptcy & Restructuring Matters</li>

                <li>Chapter 11 Proceedings</li>

                <li>Commercial Recovery Litigation</li>

                <li>Financial Institution Representation</li>

                <li>Multi-Jurisdiction Bankruptcy Coordination</li>

                <li>Commercial Collections & Enforcement</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Insights Section */}
      <motion.section
        id="insights"
        className="bg-slate-100 py-28 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center">
            <p className="uppercase tracking-[0.3em] text-lg text-slate-500 mb-4">
              Insights
            </p>

            <h2 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight">
              Industry Perspectives & Legal Developments
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Bankruptcy & Restructuring",
                title: "Commercial Restructuring Trends",
                text: "Analysis of restructuring developments, creditor recovery considerations, and Chapter 11 proceedings affecting commercial lenders and institutional creditors.",
              },

              {
                category: "Creditors’ Rights",
                title: "Multi-Jurisdiction Recovery",
                text: "Perspectives on coordinating recovery efforts, bankruptcy litigation, and creditor enforcement matters across jurisdictions nationwide.",
              },

              {
                category: "Financial Recovery",
                title: "Commercial Recovery Strategies",
                text: "Insights regarding bankruptcy litigation, restructuring matters, and financial recovery considerations impacting commercial creditors.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-slate-200 p-8 hover:border-slate-900 hover:-translate-y-1 transition duration-300 bg-white"
              >
                <p className="uppercase tracking-widest text-sm text-slate-500 mb-4">
                  {item.category}
                </p>

                <h3 className="text-2xl font-light mb-4 text-slate-900 leading-tight">
                  {item.title}
                </h3>

                <p className="text-lg text-slate-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="bg-slate-950 text-white py-28 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <div>
            <p className="uppercase tracking-[0.3em] text-lg text-slate-400 mb-6">
              Contact
            </p>

            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
              Contact J.W. Holliday & Associates
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-xl">
              For inquiries regarding bankruptcy matters, creditors’ rights,
              commercial litigation, restructuring, and nationwide
              representation, contact the firm directly.
            </p>

            <div className="space-y-6 text-slate-300">
              <div>
                <p className="uppercase tracking-widest text-lg text-slate-500 mb-1">
                  Office
                </p>

                <p className="text-lg">Dallas, Texas</p>
              </div>

              <div>
                <p className="uppercase tracking-widest text-lg text-slate-500 mb-1">
                  Phone
                </p>

                {/* <p>(214) 555-5555</p> */}
                <p className="text-lg">(214) 555-5555</p>
              </div>

              <div>
                <p className="uppercase tracking-widest text-lg text-slate-500 mb-1">
                  Email
                </p>

                {/* <p>info@jwhlaw.com</p> */}
                <p className="text-lg">info@jwhlaw.com</p>
              </div>
            </div>

            <div className="pt-8">
              <a
                href="/jwh.vcf"
                download
                className="inline-block border border-white px-6 py-4 uppercase tracking-widest text-base hover:bg-white hover:text-slate-950 transition"
              >
                Save Contact
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-slate-900 border border-slate-800 p-8 md:p-10">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-transparent border border-slate-700 px-4 py-4 text-lg text-white placeholder-slate-500 focus:outline-none focus:border-white transition"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border border-slate-700 px-4 py-4 text-lg text-white placeholder-slate-500 focus:outline-none focus:border-white transition"
                />
              </div>

              <div>
                <textarea
                  rows="5"
                  placeholder="Message"
                  className="w-full bg-transparent border border-slate-700 px-4 py-4 text-lg text-white placeholder-slate-500 focus:outline-none focus:border-white transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="border border-white px-8 py-4 uppercase tracking-widest text-base hover:bg-white hover:text-slate-950 transition"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
<footer className="bg-black text-slate-500 py-10 px-6 border-t border-slate-900">

  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

    {/* Left Side */}
    <div className="text-center md:text-left">

      <p className="uppercase tracking-[0.25em] text-lg text-slate-200">
        J.W. Holliday & Associates
      </p>

      <p className="text-lg text-slate-400 mt-2">
        Dallas, Texas · National Bankruptcy & Creditors’ Rights Representation
      </p>

    </div>

    {/* Right Side */}
    <div className="text-center md:text-center">

      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg uppercase tracking-widest text-slate-300 hover:text-white transition"
      >
        LinkedIn
      </a>

      <p className="text-lg text-slate-400 mt-2">
        © 2026 J.W. Holliday & Associates
      </p>

    </div>

  </div>

</footer>
    </main>
  );
}
