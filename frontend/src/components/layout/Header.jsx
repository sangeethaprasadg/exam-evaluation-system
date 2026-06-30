import logo from "../assets/logo.svg";

function Header() {
  return (
    <div className="bg-white shadow-sm flex justify-between items-center px-10 py-4">

      <div className="flex items-center gap-4">
        <img src={logo} alt="Lead IAS" className="h-10" />

        <h1 className="text-xl font-semibold text-gray-700">
          Mentor Portal
        </h1>
      </div>

      <div className="flex items-center gap-4">

        <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold">
          S
        </div>

        <span className="font-medium text-gray-700">
          Sangeetha Prasad
        </span>

        <button className="text-gray-500 hover:text-red-500">
          Logout
        </button>

      </div>

    </div>
  );
}

export default Header;