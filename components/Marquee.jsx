export default function Marquee() {
  var text1 = "New Arrivals: Ceramic Blue Tile";
  var text2 = "Weekly Feature: Modern Geometric Patterns";
  var text3 = "Join the Community...";
  var space = " \u00A0|\u00A0 ";

  var fullText = text1 + space + text2 + space + text3;

  return (
    <div className="overflow-hidden whitespace-nowrap bg-primary text-primary-content py-2">
      <div className="inline-block animate-marquee">{fullText}</div>
    </div>
  );
}