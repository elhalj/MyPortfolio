import { cvData, CvPdfDownload } from "@/utils/cv";

export default function PortfolioPage() {
    return (
        <div className="flex h-screen items-center justify-center">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 p-12 bg-white rounded-lg shadow-lg">
                {cvData.map(item => (
                    <li key={item.title} className="bg-gray-100 p-4 rounded-lg">
                        <h3 className="text-lg font-bold">{item.title}</h3>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Voir</a>
                        {item.title === "Curriculum Vitae en PDF" && <CvPdfDownload />}
                    </li>
                ))}
            </ul>
        </div>
    )
}