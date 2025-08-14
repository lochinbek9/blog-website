import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.id]: e.target.value.trim() }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields");
    }

    try {
      setLoading(true);
      setErrorMessage(null);

      // Agar Vite proxy yo'q bo'lsa, to'liq URL dan foydalaning:
      // const res = await fetch("http://localhost:3000/api/auth/signup", {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Server HTML qaytarmaganini tekshirish uchun:
      const contentType = res.headers.get("content-type") || "";
      if (!contentType.includes("application/json")) {
        throw new Error("Server JSON emas, HTML javob qaytaryapti. Proxy yoki URL-ni tekshiring.");
      }

      const data = await res.json();

      if (!res.ok) {

        throw new Error(data?.message || "Sign up failed");
      }

      setLoading(false);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setErrorMessage(error.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto text-black flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              LODE-X'
            </span>
            BLOG
          </Link>
          <p className="mt-5 text-sm">
            Join our community and start sharing your thoughts today. Sign up to
            create, explore, and connect with others!
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="username" className="block text-sm/6 font-medium">
                Your username
              </Label>
              <TextInput
                id="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="block text-sm/6 font-medium">
                Your Email
              </Label>
              <TextInput
                id="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="password" className="block text-sm/6 font-medium">
                Your password
              </Label>
              <TextInput
                id="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "SIGN UP"
              )}
            </Button>
          </form>

          <div className="flex gap-2 my-2">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-600 ml-2">
              Sign In
            </Link>
          </div>

          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
