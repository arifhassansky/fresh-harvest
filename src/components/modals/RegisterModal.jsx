"use client";
import { useRegisterUserMutation } from "@/redux/features/authApi";
import { useState } from "react";

export default function RegisterModal({ onClose, onSwitch }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [registerUser, { isLoading, error }] = useRegisterUserMutation();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleRegister = async () => {
    try {
      const res = await registerUser(formData).unwrap();
      alert("Registration successful!");
      onSwitch(); // Switch to login
    } catch (err) {
      // Error already available from RTK Query
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2123375C]">
      <div className="bg-white rounded-md p-8 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="w-full border px-4 py-2 rounded-md mb-4"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full border px-4 py-2 rounded-md mb-4"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            className="w-full border px-4 py-2 rounded-md"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="button"
            className="absolute right-3 top-2 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            👁️
          </button>
        </div>

        {error && (
          <p className="text-red-500 text-sm mt-2">{error?.data?.message}</p>
        )}

        <button
          onClick={handleRegister}
          className="bg-orange-500 text-white w-full py-2 rounded-md mt-4"
          disabled={isLoading}
        >
          {isLoading ? "Registering..." : "Register"}
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <button onClick={onSwitch} className="text-orange-500 font-semibold">
            Log In
          </button>
        </p>
      </div>
    </div>
  );
}
