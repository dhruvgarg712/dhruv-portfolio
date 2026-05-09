"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Jupiter 3 Satellite Program Leadership",
    tag: "Mission-Critical Systems",
    desc: "Supported systems integration, automation, launch readiness, and post-launch operational execution for large-scale satellite communications infrastructure.",
  },
  {
    title: "AWS Critical Infrastructure Leadership",
    tag: "Cloud Infrastructure",
    desc: "Owned complex customer-facing investigations across Linux, networking, storage, and production AWS environments.",
  },
  {
    title: "Operational Automation & Reliability",
    tag: "97% Failure Reduction",
    desc: "Designed automation improvements that reduced operational failure rates by over 97%, improving commissioning accuracy and execution reliability.",
  },
  {
    title: "Cross-Functional Program Execution",
    tag: "TPM Signal",
    desc: "Coordinated across engineering, operations, business, and customer-facing stakeholders to drive clarity, execution, and measurable outcomes.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-blue-600/25 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-purple-600/20 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[130px]" />
      </div>

      <nav className="relative z-10 mx-auto flex max-w-7xl justify-between px-6 py-6 text-sm">
        <div className="tracking-[0.3em] text-white/70">DHRUV GARG</div>
        <div className="hidden gap-8 text-white/60 md:flex">
          <a className="hover:text-white" href="#portfolio">Portfolio</a>
          <a className="hover:text-white" href="#about">About</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </div>
      </nav>

      <section className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-100 backdrop-blur">
            Cloud Infrastructure • Mission-Critical Systems • TPM Leadership
          </div>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl lg:text-8xl">
            Technical Program Leadership for systems that cannot fail.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/65 md:text-xl">
            I’m Dhruv Garg, a technical operator with experience across AWS
            cloud infrastructure, enterprise customer environments, and
            mission-critical satellite communications systems.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-blue-100"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-white/[0.03] px-6 py-10 backdrop-blur">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div>
            <div className="text-5xl font-semibold">97%</div>
            <div className="mt-2 text-white/55">
              Operational failure reduction through automation
            </div>
          </div>
          <div>
            <div className="text-5xl font-semibold">AWS</div>
            <div className="mt-2 text-white/55">
              Enterprise cloud infrastructure experience
            </div>
          </div>
          <div>
            <div className="text-5xl font-semibold">Jupiter 3</div>
            <div className="mt-2 text-white/55">
              Satellite systems integration contribution
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <p className="text-sm uppercase tracking-[0.35em] text-blue-300">
          Program Portfolio
        </p>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          Proof of execution, not just experience.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.08 }}
              className="group rounded-3xl border border-white/10 bg-white/[0.045] p-8 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.075]"
            >
              <div className="mb-8 inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">
                {p.tag}
              </div>
              <h3 className="text-2xl font-semibold">{p.title}</h3>
              <p className="mt-5 leading-7 text-white/60">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <p className="text-sm uppercase tracking-[0.35em] text-blue-300">
              Case Study Pattern
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              How I frame technical execution.
            </h2>
          </div>

          <div className="space-y-5">
            {[
              ["Challenge", "Ambiguous technical problem impacting infrastructure, reliability, customer experience, or program delivery."],
              ["Stakeholders", "Engineering, operations, business owners, customers, and leadership need a shared execution path."],
              ["Execution", "Clarify scope, identify risks, drive investigation, align owners, communicate status, and push toward measurable outcomes."],
              ["Impact", "Reduced operational risk, improved reliability, accelerated recovery, or increased execution confidence."],
            ].map(([title, text]) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
                className="rounded-3xl border border-white/10 bg-white/[0.045] p-8 backdrop-blur"
              >
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-4 leading-7 text-white/60">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <p className="text-sm uppercase tracking-[0.35em] text-blue-300">
          About
        </p>
        <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
          Built at the intersection of cloud, systems, and execution.
        </h2>
        <p className="mt-8 max-w-4xl text-lg leading-8 text-white/65">
          At Amazon Web Services, I support enterprise customers through complex
          cloud infrastructure challenges involving Linux systems, networking,
          storage, operational troubleshooting, and production-impacting
          incidents. Previously, at Hughes Network Systems, I contributed to the
          Jupiter 3 GEO satellite initiative, supporting systems integration,
          automation, and launch readiness. My long-term focus is Technical
          Program Management within infrastructure, platform, and cloud
          engineering organizations.
        </p>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-10 backdrop-blur md:p-16">
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Let’s build scalable systems.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Open to Technical Program Management, infrastructure program
            leadership, and cloud platform opportunities.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:dhruvgarg712@gmail.com"
              className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-blue-100"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/YOUR-LINKEDIN-HERE"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}