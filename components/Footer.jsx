export default function Footer() {
  const links1 = [];
  links1.push("Facebook");
  links1.push("Instagram");
  links1.push("Contact Us");

  const list1 = [];
  for (let i = 0; i < links1.length; i++) {
    const item1 = links1[i];
    list1.push(
      <a key={i} className="link link-hover">
        {item1}
      </a>
    );
  }

  return (
    <footer className="footer footer-center bg-base-200 text-base-content p-10 mt-16">
      <nav className="grid grid-flow-col gap-4">{list1}</nav>
      <aside>
        <p>© 2026 TileHive — All rights reserved</p>
      </aside>
    </footer>
  );
}
