import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  GraduationCap,
  BookOpen,
  FileText,
  Users,
  ClipboardList,
  BarChart3,
  Bell,
  LogOut,
} from "lucide-react";

import logo from "../assets/logo.svg";
import { useAuth } from "../auth/AuthContext";


const mentorMenus = [
  { name: "Dashboard", path: "/mentor/dashboard", icon: LayoutDashboard },
  { name: "Students", path: "/students", icon: GraduationCap },
  { name: "Exams", path: "/exams", icon: BookOpen },
  { name: "Evaluations", path: "/evaluations", icon: FileText },
  { name: "One-on-One", path: "/one-on-one", icon: Users },
  { name: "Follow Ups", path: "/followups", icon: ClipboardList },
  { name: "Reports", path: "/reports", icon: BarChart3 },
  { name: "Notifications", path: "/notifications", icon: Bell },
];


const adminMenus = [
  { name: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Students", path: "/students", icon: GraduationCap },
  { name: "Exams", path: "/exams", icon: BookOpen },
  { name: "Reports", path: "/reports", icon: BarChart3 },
  { name: "Notifications", path: "/notifications", icon: Bell },
];



const superAdminMenus = [
  { name: "Dashboard", path: "/superadmin/dashboard", icon: LayoutDashboard },
  { name: "Users", path: "/users", icon: Users },
  { name: "Courses", path: "/courses", icon: BookOpen },
  { name: "Reports", path: "/reports", icon: BarChart3 },
];



function Sidebar() {

  const { mentor } = useAuth();
  let menus = mentorMenus;

if (mentor?.role === "admin") {
  menus = adminMenus;
}

if (mentor?.role === "superadmin") {
  menus = superAdminMenus;
}


  
  return (
    <aside className="w-64 min-h-screen bg-white shadow-lg flex flex-col">

      {/* Logo */}
      <div className="px-6 pt-6 pb-4 text-center">
        <img
          src={logo}
          alt="Lead IAS"
          className="h-8 mx-auto"
        />

        <h2 className="text-lg font-bold text-gray-800 mt-3">
          Mentor Portal
        </h2>

        {/* <p className="text-sm text-gray-500">
          Lead IAS
        </p> */}
      </div>

      {/* Menu */}
      <nav className="px-4 mt-5">

        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all ${
                  isActive
                    ? "bg-purple-100 text-purple-700 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              <Icon size={20} />
              {menu.name}
            </NavLink>
          );
        })}
      </nav>

      {/* Profile */}
      <div className="px-5 mt-8">

      
          <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-3 w-full">

          <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
          {mentor?.mentorName?.charAt(0) || "U"}
          </div>

          <div>

  <h3 className="text-sm font-semibold text-gray-800">
    {mentor?.mentorName}
  </h3>

  <p className="text-sm text-gray-500 capitalize">
    {mentor?.role}
  </p>

</div>


        </div>

      </div>

      {/* Logout */}
      <div className="px-5 mt-4">

        <button className="flex items-center gap-2 text-red-500 hover:text-red-700 font-medium">

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;