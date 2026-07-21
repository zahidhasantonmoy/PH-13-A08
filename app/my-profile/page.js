"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

export default function MyProfilePage() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">You are not logged in</h1>
        <Link href="/login" className="btn btn-primary mt-4">
          Login
        </Link>
      </div>
    );
  }

  const user = session.user;

  return (
    <div className="flex justify-center py-16 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-md p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <img
              src={user.image || "https://placehold.co/200x200?text=User"}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <p className="text-gray-500 mb-6">{user.email}</p>
        <Link href="/my-profile/update" className="btn btn-primary">
          Update Info
        </Link>
      </div>
    </div>
  );
}
