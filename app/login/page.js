"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setErrorMessage("");

    const result = await authClient.signIn.email({
      email: email,
      password: password,
    });

    if (result.error) {
      setErrorMessage(result.error.message);
      return;
    }

    router.push("/");
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
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        {errorMessage ? (
          <div className="toast toast-top toast-center z-50">
            <div className="alert alert-error">
              <span>{errorMessage}</span>
            </div>
          </div>
        ) : null}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            value={email}
            onChange={function (e) { setEmail(e.target.value); }}
            required
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
            Login
          </button>
        </form>

        <div className="divider">OR</div>

        <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
          Continue with Google
        </button>

        <p className="text-center mt-4">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="link link-primary">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
