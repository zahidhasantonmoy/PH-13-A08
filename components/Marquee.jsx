export default function Marquee() {
  const text1 = "New Arrivals: Ceramic Blue Tile";
  const text2 = "Weekly Feature: Modern Geometric Patterns";
  const text3 = "Join the Community...";
  const space = " \u00A0|\u00A0 ";

  const fullText = text1 + space + text2 + space + text3;

  return (
    <div className="overflow-hidden whitespace-nowrap bg-primary text-primary-content py-2">
      <div className="inline-block animate-marquee">{fullText}</div>
    </div>
  );
}
