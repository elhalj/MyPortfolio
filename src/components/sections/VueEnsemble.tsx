const VueEnsemble = () => {
  return (
    <section
      aria-label="Quelques chiffres"
      className="border-b border-white/10 bg-[#080d13]"
    >
      <dl className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-white/10 px-3 py-8 md:px-8 md:py-10">
        <div className="flex flex-col items-center gap-1 px-2 text-center">
          <dt className="order-2 max-w-36 text-[9px] font-medium uppercase leading-tight text-[#aab7bd] sm:text-[10px]">
            Ans d'expérience professionnelle
          </dt>
          <dd className="font-mono text-3xl font-bold leading-none text-[#88eaf2] md:text-4xl">
            2
          </dd>
        </div>
        <div className="flex flex-col items-center gap-1 px-2 text-center">
          <dt className="order-2 max-w-36 text-[9px] font-medium uppercase leading-tight text-[#aab7bd] sm:text-[10px]">
            Année d'études post-secondaires
          </dt>
          <dd className="font-mono text-3xl font-bold leading-none text-[#88eaf2] md:text-4xl">
            1
          </dd>
        </div>
        <div className="flex flex-col items-center gap-1 px-2 text-center">
          <dt className="order-2 max-w-36 text-[9px] font-medium uppercase leading-tight text-[#aab7bd] sm:text-[10px]">
            Certification
          </dt>
          <dd className="font-mono text-3xl font-bold leading-none text-[#88eaf2] md:text-4xl">
            1
          </dd>
        </div>
      </dl>
    </section>
  );
};

export default VueEnsemble;
