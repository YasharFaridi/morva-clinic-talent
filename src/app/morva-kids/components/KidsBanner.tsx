"use client";

import Link from "next/link";
import { FaRocket, FaCloud, FaSmileBeam, FaLightbulb } from "react-icons/fa";

export default function KidsBanner() {
  return (
    <section
      className="relative shadow-xl h-[70vh] overflow-hidden rounded-3xl flex flex-col items-center justify-center px-4 md:px-12 text-center"
      style={{
        background: `linear-gradient(135deg, var(--color-base-100), var(--color-base-200), var(--color-base-300), var(--color-accent))`,
      }}
    >
      <FaCloud className="absolute top-10 left-6 text-[2.5rem] md:text-[3rem] text-info" />
      <FaCloud className="absolute top-16 right-6 text-[2rem] md:text-[2.5rem] text-info" />
      <FaLightbulb className="absolute top-24 left-1/3 text-[2.5rem] md:text-[3rem] text-secondary" />
      <FaRocket className="absolute bottom-16 right-1/3 text-[2.5rem] md:text-[3rem] text-primary" />

      <h1 className="font-extrabold text-3xl md:text-5xl drop-shadow-lg mb-4 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-primary">
        {/* <FaSmileBeam className="text-[var(--color-warning)]" /> */}
        <span>به دنیای جادویی استعدادها در</span>
        <span className="text-secondary">مروا کودک</span>
        <span>خوش اومدی</span>
        <FaSmileBeam className="text-warning" />
      </h1>

      <p className="text-base md:text-lg font-light mb-6 leading-relaxed max-w-3xl mx-auto text-[var(--color-base-content)]">
        جایی که{" "}
        <span className="font-semibold text-[var(--color-secondary)]">
          خلاقیت، بازی و یادگیری
        </span>{" "}
        با هم ترکیب می‌شوند تا{" "}
        <span className="font-semibold text-[var(--color-primary)]">
          استعدادهای کودکان کشف و پرورش پیدا کنند
        </span>
        . بیایید با هم{" "}
        <span className="font-semibold text-[var(--color-warning)]">
          کشف کنیم، تجربه کنیم و رشد کنیم
        </span>
        ! 🚀
      </p>

     <Link href='dashboard/kids-dashboard'>
        <button
          className="btn border-0 font-bold px-6 md:px-8 py-2 md:py-3 rounded-full shadow-lg flex items-center justify-center gap-2 text-[var(--color-base-content)]"
          style={{
            background: `linear-gradient(90deg, var(--color-base-100), var(--color-base-2 00), var(--color-base-300), var(--color-accent))`,
          }}
        >
          <FaRocket className="text-[var(--color-base-content)] text-lg md:text-xl" />
          نمایش داشبورد
        </button>
     </Link>
    </section>
  );
}
