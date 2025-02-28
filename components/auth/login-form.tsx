"use client"; // Ensure client-side rendering for useRouter()

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      return;
    }

    console.log("User logged in:", data);

    // Redirect to dashboard after login
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      {error && <p className="text-red-500">{error}</p>}
      
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        Login
      </button>
    </form>
  );
}