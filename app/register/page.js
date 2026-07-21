"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    setErrorMessage("");

    const result = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photoUrl,
    });

    if (result.error) {
      setErrorMessage(result.error.message);
      return;
    }

    router.push("/login");
  }

  async function handleGoogleSignIn() {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  }

  return (
    <div className="flex justify-center items-center py-16 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>

        {errorMessage ? (
          <div className="toast toast-top toast-center z-50">
            <div className="alert alert-error">
              <span>{errorMessage}</span>
            </div>
          </div>
        ) : null}

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full"
            value={name}
            onChange={function (e) { setName(e.target.value); }}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            value={email}
            onChange={function (e) { setEmail(e.target.value); }}
            required
          />
          <input
            type="text"
            placeholder="Photo URL"
            className="input input-bordered w-full"
            value={photoUrl}
            onChange={function (e) { setPhotoUrl(e.target.value); }}
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            value={password}
            onChange={function (e) { setPassword(e.target.value); }}
            required
          />
          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>

        <div className="divider">OR</div>

        <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
          Continue with Google
        </button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link href="/login" className="link link-primary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
