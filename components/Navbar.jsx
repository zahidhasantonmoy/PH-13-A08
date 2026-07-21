"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const navLinks = [];
  navLinks.push({ a: "/", b: "Home" });
  navLinks.push({ a: "/all-tiles", b: "All Tiles" });
  navLinks.push({ a: "/my-profile", b: "My Profile" });

  const mobileList = [];
  for (let i = 0; i < navLinks.length; i++) {
    const item = navLinks[i];
    mobileList.push(
      <li key={i}>
        <Link href={item.a}>{item.b}</Link>
      </li>
    );
  }

  const desktopList = [];
  for (let j = 0; j < navLinks.length; j++) {
    const item2 = navLinks[j];
    desktopList.push(
      <Link key={j} href={item2.a}>
        {item2.b}
      </Link>
    );
  }

  async function handleLogout() {
    await authClient.signOut();
    router.push("/");
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
            {mobileList}
          </ul>
        </div>
        <Link href="/" className="text-xl font-bold ml-2">
          TileHive
        </Link>
      </div>

      <div className="navbar-center hidden md:flex gap-6">{desktopList}</div>

      <div className="navbar-end gap-2">
        {session ? (
          <>
            <Link href="/my-profile" className="btn btn-ghost btn-circle avatar">
              <div className="w-8 rounded-full">
                <img
                  src={session.user.image || "https://placehold.co/100x100?text=U"}
                  alt="profile"
                />
              </div>
            </Link>
            <button onClick={handleLogout} className="btn btn-outline btn-sm">
              Logout
            </button>
          </>
        ) : (
          <Link href="/login" className="btn btn-primary btn-sm">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}