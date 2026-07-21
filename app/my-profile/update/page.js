"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function UpdateProfilePage() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(
    function () {
      if (session) {
        setName(session.user.name);
        setImageUrl(session.user.image || "");
      }
    },
    [session]
  );

  async function handleUpdate(e) {
    e.preventDefault();
    setErrorMessage("");

    const result = await authClient.updateUser({
      name: name,
      image: imageUrl,
    });

    if (result.error) {
      setErrorMessage(result.error.message);
      return;
    }

    router.push("/my-profile");
  }

  return (
    <div className="flex justify-center items-center py-16 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Update Information</h1>

        {errorMessage ? (
          <div className="toast toast-top toast-center z-50">
            <div className="alert alert-error">
              <span>{errorMessage}</span>
            </div>
          </div>
        ) : null}

        <form onSubmit={handleUpdate} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full"
            value={name}
            onChange={function (e) {
              setName(e.target.value);
            }}
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            className="input input-bordered w-full"
            value={imageUrl}
            onChange={function (e) {
              setImageUrl(e.target.value);
            }}
          />
          <button type="submit" className="btn btn-primary w-full">
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
}
