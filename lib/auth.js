import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import clientPromise from "./mongodb";

let authInstance = null;

export async function getAuth() {
  if (authInstance === null) {
    const client = await clientPromise;
    const db = client.db();

    authInstance = betterAuth({
      database: mongodbAdapter(db),
      emailAndPassword: {
        enabled: true,
      },
      socialProviders: {
        google: {
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
      },
    });
  }

  return authInstance;
}