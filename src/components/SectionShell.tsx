// src/components/SectionShell.tsx
import React from "react";

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string; // ✅ add this
};

export default function SectionShell({
  id,
  title,
  subtitle,
  children,
  className = "",
}: Props) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-50">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-lg text-slate-300 max-w-3xl">{subtitle}</p>
          )}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur">
          <div className="p-6 md:p-10">{children}</div>
        </div>
      </div>
    </section>
  );
}