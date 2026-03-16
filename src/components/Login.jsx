import { useState } from "react";
import axios from "axios";

function Login() {

  const [page, setPage] = useState("login");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const res = await axios.post("http://localhost:5000/signup", {
        name,
        email,
        password
      });

      alert(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password
      });

      alert(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">

      <div className="bg-white p-6 rounded-lg shadow-md w-80">

        <h2 className="text-2xl font-bold text-center mb-4">
          {page === "login" ? "Login" : "Signup"}
        </h2>

        {page === "login" ? (
          <>
            <input
              type="text"
              placeholder="Email"
              className="w-full p-2 mb-3 border rounded"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-3 border rounded"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={handleLogin}
              className="w-full bg-blue-500 text-white p-2 rounded"
            >
              Login
            </button>

            <p className="text-sm mt-3 text-center">
              Don't have account?
              <span
                className="text-blue-500 cursor-pointer ml-1"
                onClick={() => setPage("signup")}
              >
                Signup
              </span>
            </p>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 mb-3 border rounded"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Email"
              className="w-full p-2 mb-3 border rounded"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-3 border rounded"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={handleSignup}
              className="w-full bg-green-500 text-white p-2 rounded"
            >
              Signup
            </button>

            <p className="text-sm mt-3 text-center">
              Already have account?
              <span
                className="text-blue-500 cursor-pointer ml-1"
                onClick={() => setPage("login")}
              >
                Login
              </span>
            </p>
          </>
        )}

      </div>
    </div>
  );
}

export default Login;