import { createAuthClient } from "better-auth/react"; // make sure to import from better-auth/react

export const authClient = createAuthClient({
  // Prevent infinite redirects and session loops
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  // Add proper error handling
  onError: (error) => {
    console.error("Auth error:", error);
  },
});
