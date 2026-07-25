/**
 * AIBadge – EU AI Act Kennzeichnung für KI-generierte Bilder
 * Platzierung: absolut rechts unten im übergeordneten `relative`-Container
 */
export default function AIBadge() {
  return (
    <div
      className="absolute bottom-2 right-2 z-10 pointer-events-none w-7 h-7 rounded-full overflow-hidden opacity-60"
      title="KI-generiertes Bild (EU AI Act)"
      aria-label="KI-generiertes Bild"
    >
      <img
        src="/manus-storage/ki-icon_6af368a7.webp"
        alt="KI-generiert"
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
}
