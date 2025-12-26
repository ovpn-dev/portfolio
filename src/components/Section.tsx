import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

export default function Section({ title, children, id }: SectionProps) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-16 animate-fade-in">
      <h2 className="text-3xl font-bold mb-8 gradient-text">{title}</h2>
      {children}
    </section>
  );
}
