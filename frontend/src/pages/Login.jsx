import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost/DEMO/login.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ username, password }),
    });

    const text = await res.text();

    if (text.trim() === "success") {
      navigate("/dashboard");
    } else {
      alert("Invalid login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#C7FF24]">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-[#E3EEF9] space-y-5"
      >
        <h2 className="text-2xl font-bold text-[#1A1A1A]">Login to Your Account</h2>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full p-3 rounded-lg bg-[#F0F4F8] border border-[#C4DAEE] text-[#1A1A1A] placeholder-[#AAB7C4]"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-3 rounded-lg bg-[#F0F4F8] border border-[#C4DAEE] text-[#1A1A1A] placeholder-[#AAB7C4]"
        />
        <button
          type="submit"
          className="w-full py-3 bg-[#C7FF24] text-black font-semibold rounded-lg hover:bg-[#B4E100] transition"
        >
          Login
        </button>
        <button
          type="button"
          onClick={() => navigate("/signup")}
          className="w-full py-3 text-[#1A1A1A] border border-[#C4DAEE] rounded-lg hover:bg-[#E3EEF9] transition"
        >
          Go to Signup
        </button>
      </form>
    </div>
  );
}
