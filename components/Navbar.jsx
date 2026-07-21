import Link from "next/link";

export default function Navbar() {
  const x = [];
  x.push({ a: "/", b: "Home" });
  x.push({ a: "/all-tiles", b: "All Tiles" });
  x.push({ a: "/my-profile", b: "My Profile" });

  const list1 = [];
  for (let i = 0; i < x.length; i++) {
    const item1 = x[i];
    list1.push(
      <li key={i}>
        <Link href={item1.a}>{item1.b}</Link>
      </li>
    );
  }

  const list2 = [];
  for (let j = 0; j < x.length; j++) {
    const item2 = x[j];
    list2.push(
      <Link key={j} href={item2.a}>
        {item2.b}
      </Link>
    );
  }

  return (
    <div className="navbar bg-base-100 shadow-md px-4 md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            ☰
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box shadow mt-3 w-40 z-10"
          >
            {list1}
          </ul>
        </div>
        <Link href="/" className="text-xl font-bold ml-2">
          TileHive
        </Link>
      </div>

      <div className="navbar-center hidden md:flex gap-6">{list2}</div>

      <div className="navbar-end">
        <Link href="/login" className="btn btn-primary btn-sm">
          Login
        </Link>
      </div>
    </div>
  );
}
