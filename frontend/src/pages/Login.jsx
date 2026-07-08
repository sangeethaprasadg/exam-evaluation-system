import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import logo from "../assets/logo.svg";
import { loginWithGoogle } from "../auth/authService";




function Login() {

  const navigate = useNavigate();
  const { setMentor } = useAuth();

  const handleGoogleLogin = async () => {
  const response = await loginWithGoogle();

 if (response.success) {

  setMentor(response.mentor);

  navigate("/dashboard");

} else {

  alert(response.error);

}
};

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white w-[420px] rounded-2xl shadow-xl p-10">

        <div className="flex justify-center mb-8">
          <img
            src={logo}
            alt="Lead IAS"
            className="h-10"
          />
        </div>

        <h1 className="text-3xl font-bold text-center text-gray-800">
          Mentor Portal
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Sign in with your Google account
        </p>

        <button
        //   onClick={() => navigate("/dashboard")}
             onClick={handleGoogleLogin}
          className="w-full border rounded-xl py-4 flex items-center justify-center gap-3 hover:bg-gray-100 transition"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-6 h-6"
          />

          Continue with Google
        </button>

        <p className="text-center text-gray-400 text-sm mt-8">
          Authorized mentors only
        </p>

      </div>

    </div>
  );
}

export default Login;