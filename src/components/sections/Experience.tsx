import { TfiBag } from "react-icons/tfi";

const Experience = () => {
  return (
    <section aria-labelledby="experience-title">
      <div className="mb-4 flex items-center gap-2 text-[#8d9ba3]">
        <TfiBag aria-hidden="true" className="h-4 w-4 text-[#27d3e5]" />
        <h3
          id="experience-title"
          className="font-mono text-[10px] uppercase tracking-wide"
        >
          Expérience professionnelle
        </h3>
      </div>
      <article className="flex flex-col gap-4 rounded-md border border-white/10 bg-white/2.5 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h4 className="font-semibold text-[#e3eaed]">Stagiaire</h4>
          <p className="mt-1 text-sm text-[#aab7bd]">Asso Vernicci · Abidjan</p>
        </div>
        <p className="font-mono text-[10px] text-[#74838b]">2022 — 2023</p>
      </article>
    </section>
  );
};

export default Experience;
