import './Loader.css'

const DOT_COUNT = 5

export default function Loader() {
  return (
    <div
      className="loader"
      role="status"
      aria-live="polite"
      aria-label="Chargement en cours"
    >
      {[...Array(DOT_COUNT)].map((_, index) => (
        <span key={index} className="loader-dot" aria-hidden="true" />
      ))}
    </div>
  )
}
