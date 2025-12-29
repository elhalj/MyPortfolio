import { cvData, CvPdfDownload } from "@/utils/cv";

export const metadata = {
    title: "Portfolio - Mon CV et Projets",
    description: "Découvrez mon portfolio avec mon CV téléchargeable et mes projets réalisés.",
}

export default function PortfolioPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-6">
            <ul className="grid grid-cols-1 md:grid-cols-2 max-w-4xl w-full mx-auto gap-6">
                {cvData.map(item => (
                    <li key={item.title} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-lg font-bold">{item.title}</h3>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Voir</a>
                        {item.title === "Curriculum Vitae en PDF" && <CvPdfDownload />}
                    </li>
                ))}
            </ul>
        </div>
    )
}