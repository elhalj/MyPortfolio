const cvData = [
  {
    title: "Curriculum Vitae en ligne",
    link: "https://mon-cv-one-phi.vercel.app",
  },
  { title: "Curriculum Vitae en PDF", link: "/assets/cv/blob/main/ATS_CV.pdf" },
];

export const cvPdfUrl = "/assets/cv/blob/main/ATS_CV.pdf";

export function CvPdfDownload() {
  return (
    <a href={cvPdfUrl} download>
      <h1>Télécharger le CV en PDF</h1>
    </a>
  );
}

export { cvData };
