// src/components/SectionShell.tsx
import React from "react";

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
};

export default function SectionShell({
  id,
  title,
  subtitle,
  children,
  className = "",
}: Props) {
  return (
    <section id={id} className={`py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-3 text-base md:text-lg text-slate-300">{subtitle}</p>
        )}

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-7 md:p-10 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur">
          {children}
        </div>
      </div>
    </section>
  );
}