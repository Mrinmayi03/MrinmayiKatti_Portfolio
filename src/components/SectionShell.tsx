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
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-lg text-slate-600 max-w-3xl">
              {subtitle}
            </p>
          )}
        </div>

        <div className="mx-6 rounded-3xl bg-white border border-slate-200 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.25)]">
          <div className="p-8 md:p-12">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}