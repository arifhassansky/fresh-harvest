"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "@/redux/features/authApi";
import { setAuth } from "@/redux/features/authSlice";
import { toast } from "react-toastify";

export default function LoginModal({ onClose, onSwitch }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loginUser, { isLoading, error }] = useLoginUserMutation();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleLogin = async () => {
    try {
      const res = await loginUser(formData).unwrap();
      dispatch(setAuth({ user: res.user, token: res.token }));
      toast.success("Login successful!");
      onClose();
    } catch (err) {
      // Error already handled by RTK Query
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
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

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
          onClick={handleLogin}
          className="bg-orange-500 text-white w-full py-2 rounded-md mt-4"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <button onClick={onSwitch} className="text-orange-500 font-semibold">
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
