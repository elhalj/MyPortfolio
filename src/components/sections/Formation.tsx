import { FaGraduationCap } from "react-icons/fa";

const Formation = () => {
  return (
    <section aria-labelledby="education-title">
      <div className="mb-4 flex items-center gap-2 text-[#8d9ba3]">
        <FaGraduationCap
          aria-hidden="true"
          className="h-4 w-4 text-[#27d3e5]"
        />
        <h3
          id="education-title"
          className="font-mono text-[10px] uppercase tracking-wide"
        >
          Formation
        </h3>
      </div>
      <div className="grid gap-3">
        <article className="rounded-md border border-white/10 bg-white/2.5 p-5">
          <h4 className="font-semibold leading-snug text-[#e3eaed]">
            Certificat en développement logiciel · Développement web et mobile
          </h4>
          <p className="mt-2 text-sm text-[#aab7bd]">GoMyCode · Abidjan</p>
          <p className="mt-2 font-mono text-[10px] text-[#74838b]">
            2024 — 2025
          </p>
        </article>
        <article className="rounded-md border border-white/10 bg-white/2.5 p-5">
          <h4 className="font-semibold leading-snug text-[#e3eaed]">
            Informatique · Développement d'applications
          </h4>
          <p className="mt-2 text-sm text-[#aab7bd]">
            Legacy Institute · Abidjan
          </p>
          <p className="mt-2 font-mono text-[10px] text-[#74838b]">
            2020 — 2021
          </p>
        </article>
      </div>
    </section>
  );
};

export default Formation;
