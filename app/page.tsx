"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const portfolio = [
  {
    title: "Jupiter 3 Satellite Program Leadership",
    tag: "Mission-Critical Systems",
    desc: "Supported systems integration, launch readiness, automation, and post-launch operational execution for large-scale satellite communications infrastructure.",
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
];

const story = [
  {
    kicker: "01 / Satellite Systems",
    title: "Mission-critical execution before cloud.",
    body: "At Hughes Network Systems, I contributed to the Jupiter 3 GEO satellite initiative, working across systems integration, automation, launch readiness, and operational support.",
  },
  {
    kicker: "02 / AWS Infrastructure",
    title: "Enterprise cloud environments under pressure.",
    body: "At AWS, I support complex infrastructure investigations involving Linux systems, networking, storage, customer impact, and operational recovery.",
  },
  {
    kicker: "03 / TPM Direction",
    title: "Technical depth translated into program leadership.",
    body: "My focus is Technical Program Management for infrastructure, platform, and cloud organizations where execution clarity matters as much as technical accuracy.",
  },
];

const timeline = [
  {
    year: "2018-2021",
    title: "Penn State",
    body: "Built a computer science foundation while developing leadership through student organizations, tutoring, and international student engagement.",
  },
  {
    year: "2022-2025",
    title: "Hughes Network Systems",
    body: "Worked on systems, automation, network management, and contributed to Jupiter 3 satellite program execution.",
  },
  {
    year: "Jupiter 3",
    title: "Mission-Critical Satellite Systems",
    body: "Supported systems integration, launch readiness, automation, and post-launch operational support for large-scale connectivity infrastructure.",
  },
  {
    year: "2025-Present",
    title: "Amazon Web Services",
    body: "Supporting enterprise AWS customers through complex infrastructure investigations across Linux, EC2, networking, storage, and operational incidents.",
  },
  {
    year: "Next",
    title: "Technical Program Management",
    body: "Focused on infrastructure TPM roles where technical depth, execution clarity, stakeholder alignment, and operational judgment intersect.",
  },
];

const caseStudies = [
  {
    title: "Jupiter 3 Satellite Program Execution",
    challenge:
      "Large-scale satellite systems require tight coordination across technical, business, and operational stakeholders.",
    role: "Supported systems integration, automation, launch readiness, and post-production operations.",
    impact:
      "Contributed to mission-critical infrastructure supporting connectivity services across remote and underserved regions.",
  },
  {
    title: "Operational Automation Reliability Improvement",
    challenge:
      "Configuration and execution inconsistencies were creating operational friction and failure risk.",
    role: "Designed automation improvements and troubleshooting logic to improve execution accuracy.",
    impact:
      "Reduced operational failure rates by over 97%, improving reliability and commissioning confidence.",
  },
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1100;
    const step = Math.ceil(value / 40);

    const interval = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, duration / 40);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.22], [1, 0.96]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0.35]);
  const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#030711] text-white">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute left-[-12%] top-[-20%] h-[620px] w-[620px] rounded-full bg-blue-600/25 blur-[140px]" />
        <div className="absolute right-[-10%] top-[20%] h-[560px] w-[560px] rounded-full bg-purple-600/20 blur-[150px]" />
        <div className="absolute bottom-[-20%] left-[30%] h-[560px] w-[560px] rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
      </div>

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#030711]/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-sm">
          <div className="tracking-[0.32em] text-white/70">DHRUV GARG</div>
          <div className="hidden gap-6 text-white/60 md:flex">
            <a className="hover:text-white" href="#story">Story</a>
            <a className="hover:text-white" href="#portfolio">Portfolio</a>
            <a className="hover:text-white" href="#case-studies">Case Studies</a>
            <a className="hover:text-white" href="#timeline">Timeline</a>
            <a className="hover:text-white" href="#recognition">Recognition</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pt-28 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="mb-8 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-100 backdrop-blur"
          >
            Cloud Infrastructure • Satellite Systems • Program Leadership
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-5xl font-semibold tracking-[-0.06em] md:text-6xl lg:text-7xl"
          >
            Building resilient infrastructure for systems that cannot fail.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-white/65 md:text-xl"
          >
            I’m Dhruv Garg, a technical operator with experience across AWS cloud infrastructure,
            enterprise customer environments, and mission-critical satellite communications systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#story" className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-blue-100">
              Explore Story
            </a>
            <a href="/Dhruv-Garg-Resume.pdf" download className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10">
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        <div className="relative hidden justify-center lg:flex">
          <div className="relative h-[420px] w-[420px]">
            <div className="absolute inset-12 rounded-full bg-blue-500/20 blur-[80px]" />

            <motion.div
              style={{ rotate: orbitRotate }}
              className="absolute inset-0 rounded-full border border-blue-300/20"
            >
              <div className="absolute left-1/2 top-[-6px] h-3 w-3 rounded-full bg-blue-300 shadow-[0_0_35px_rgba(147,197,253,0.9)]" />
              <div className="absolute bottom-[70px] right-[42px] h-2 w-2 rounded-full bg-purple-300 shadow-[0_0_30px_rgba(216,180,254,0.9)]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35 }}
              className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-white/15 bg-white/5 shadow-[0_0_80px_rgba(59,130,246,0.22)] backdrop-blur"
            >
              <Image
                src="/profile.jpg"
                alt="Dhruv Garg"
                width={720}
                height={720}
                priority
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 text-xs uppercase tracking-[0.35em] text-white/35 md:block">
          Scroll
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-white/[0.035] px-6 py-12 backdrop-blur">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          <div>
            <div className="text-5xl font-semibold"><Counter value={97} suffix="%" /></div>
            <div className="mt-2 text-white/55">Operational failure reduction</div>
          </div>
          <div>
            <div className="text-5xl font-semibold">AWS</div>
            <div className="mt-2 text-white/55">Cloud infrastructure experience</div>
          </div>
          <div>
            <div className="text-5xl font-semibold">J3</div>
            <div className="mt-2 text-white/55">Jupiter 3 satellite contribution</div>
          </div>
          <div>
            <div className="text-5xl font-semibold"><Counter value={4} suffix="+" /></div>
            <div className="mt-2 text-white/55">Years infrastructure leadership</div>
          </div>
        </div>
      </section>

      <section id="story" className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <p className="text-sm uppercase tracking-[0.35em] text-blue-300">Scroll Story</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              From satellite systems to cloud infrastructure.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/55">
              A technical journey built around reliability, ambiguity, customer impact, and execution.
            </p>
          </div>

          <div className="space-y-8">
            {story.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 45, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.75 }}
                className="min-h-[360px] rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl"
              >
                <div className="text-sm uppercase tracking-[0.32em] text-blue-300">{item.kicker}</div>
                <h3 className="mt-8 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">{item.title}</h3>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">{item.body}</p>
                <div className="mt-10 h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(index + 1) * 33}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="h-full rounded-full bg-blue-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <p className="text-sm uppercase tracking-[0.35em] text-blue-300">Program Portfolio</p>
        <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
          Proof of execution, not just experience.
        </h2>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {portfolio.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group min-h-[360px] rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/[0.075]"
            >
              <div className="mb-10 inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">
                {p.tag}
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.03em]">{p.title}</h3>
              <p className="mt-6 leading-7 text-white/58">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="case-studies" className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <p className="text-sm uppercase tracking-[0.35em] text-blue-300">Case Studies</p>
        <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
          Selected execution stories.
        </h2>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, delay: index * 0.1 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl"
            >
              <h3 className="text-3xl font-semibold tracking-[-0.03em]">{study.title}</h3>

              <div className="mt-8 space-y-6">
                <div>
                  <div className="text-sm uppercase tracking-[0.28em] text-blue-300">Challenge</div>
                  <p className="mt-3 leading-7 text-white/60">{study.challenge}</p>
                </div>

                <div>
                  <div className="text-sm uppercase tracking-[0.28em] text-blue-300">Role</div>
                  <p className="mt-3 leading-7 text-white/60">{study.role}</p>
                </div>

                <div>
                  <div className="text-sm uppercase tracking-[0.28em] text-blue-300">Impact</div>
                  <p className="mt-3 leading-7 text-white/60">{study.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="timeline" className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <p className="text-sm uppercase tracking-[0.35em] text-blue-300">Timeline</p>
        <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
          A path built through systems, scale, and execution.
        </h2>

        <div className="mt-16 space-y-8">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7 }}
              className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-xl md:grid-cols-[0.35fr_1fr]"
            >
              <div className="text-2xl font-semibold text-blue-200">{item.year}</div>
              <div>
                <h3 className="text-3xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-4 max-w-3xl leading-7 text-white/60">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="recognition" className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-10 backdrop-blur-xl md:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-300">Featured Work</p>

          <h2 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Public recognition for mission-critical satellite program work.
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-white/65">
            I was featured by Connectivity Business News in connection with my work and contributions around
            the Jupiter 3 GEO satellite program at Hughes Network Systems.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-white/65">
            Jupiter 3 is a high-capacity communications satellite designed to expand broadband connectivity
            across the Americas, including remote and underserved regions. My experience on this program shaped
            how I think about large-scale systems, cross-functional execution, operational readiness, and
            technical program leadership.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/posts/dhruv-garg22_hughes-jupiter-3-finally-makes-its-way-towards-share-7158679064625528834-ZCpp?utm_source=share&utm_medium=member_desktop&rcm=ACoAACl7W6sBEb0XjqTZBLJKxQIxEqqlZ9DZymo"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-blue-100"
            >
              View Connectivity Business Feature
            </a>

            <a
              href="https://www.linkedin.com/posts/dhruv-garg22_immigrantjourney-h1b-aws-activity-7359779535552139264-G72_?utm_source=share&utm_medium=member_desktop&rcm=ACoAACl7W6sBEb0XjqTZBLJKxQIxEqqlZ9DZymo"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              View LinkedIn Highlight
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-10 backdrop-blur-xl md:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-300">About</p>
          <h2 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Built at the intersection of cloud, systems, and execution.
          </h2>
          <p className="mt-8 max-w-4xl text-lg leading-8 text-white/65">
            At Amazon Web Services, I support enterprise customers through complex cloud infrastructure
            challenges involving Linux systems, networking, storage, operational troubleshooting, and
            production-impacting incidents. Previously, at Hughes Network Systems, I contributed to the
            Jupiter 3 GEO satellite initiative, supporting systems integration, automation, and launch readiness.
            My long-term focus is Technical Program Management within infrastructure, platform, and cloud
            engineering organizations.
          </p>
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-10 backdrop-blur-xl md:p-16">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Let’s build scalable systems.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Open to Technical Program Management, infrastructure program leadership, and cloud platform opportunities.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/Dhruv-Garg-Resume.pdf"
              download
              className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-blue-100"
            >
              Download Resume
            </a>

            <a
              href="mailto:dhruvgarg712@gmail.com"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/dhruv-garg22"
              target="_blank"
              rel="noreferrer"
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