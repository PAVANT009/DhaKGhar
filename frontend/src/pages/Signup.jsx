import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BACK from '../../src/DakGhar.png'

export default function Signup() {
  const [form, setForm] = useState({
    username: "",
    phone: "",
    password: "",
    place: "",
    photo: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([key, val]) => formData.append(key, val));

    await fetch("http://localhost/DEMO/signup.php", {
      method: "POST",
      body: formData,
      credentials: "include",
    });

    navigate("/login");
  };

  return (
    <div
      className="flex min-h-screen items-center h-[100%] justify-center bg-[#C7FF24]"
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-[#E3EEF9] space-y-5"
      >
        <h2 className="text-2xl font-bold text-[#1A1A1A]">Create Account</h2>
        <input
        required
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-[#F0F4F8] border border-[#C4DAEE] text-[#1A1A1A] placeholder-[#AAB7C4]"
        />
        <input
          required
          name="phone"
          placeholder="Phone No"
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-[#F0F4F8] border border-[#C4DAEE] text-[#1A1A1A] placeholder-[#AAB7C4]"
        />
        <input
          required
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-[#F0F4F8] border border-[#C4DAEE] text-[#1A1A1A] placeholder-[#AAB7C4]"
        />
        <input
          required
          name="place"
          placeholder="Place"
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-[#F0F4F8] border border-[#C4DAEE] text-[#1A1A1A] placeholder-[#AAB7C4]"
        />
        <input
          required
          type="file"
          name="photo"
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-[#F0F4F8] border border-[#C4DAEE] text-[#1A1A1A]"
        />
        <button
          type="submit"
          className="w-full py-3 bg-[#C7FF24] text-white font-semibold rounded-lg hover:bg-[#A5C4E0] transition"
        >
          Sign Up
        </button>
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="w-full py-3 text-[#1A1A1A] border border-[#C4DAEE] rounded-lg hover:bg-[#E3EEF9] transition"
        >
          Go to Login
        </button>
      </form>
    </div>
  );
}
