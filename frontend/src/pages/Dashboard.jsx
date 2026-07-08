import { useAuth } from "../auth/AuthContext";



function MentorDashboard() {


  const { mentor } = useAuth();

console.log(mentor);
  const stats = [
    {
      title: "Assigned Students",
      value: "42",
      color: "bg-blue-100",
      text: "text-blue-700",
      icon: "👨‍🎓",
    },
    {
      title: "Pending Evaluations",
      value: "18",
      color: "bg-red-100",
      text: "text-red-700",
      icon: "📝",
    },
    {
      title: "One-on-One Sessions",
      value: "3",
      color: "bg-green-100",
      text: "text-green-700",
      icon: "🤝",
    },
    {
      title: "Notifications",
      value: "5",
      color: "bg-yellow-100",
      text: "text-yellow-700",
      icon: "🔔",
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back! Here's an overview of your mentorship activities.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-4 gap-6">

        {stats.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition"
          >

            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl ${card.color}`}
            >
              {card.icon}
            </div>

            <h2 className="mt-5 text-3xl font-bold text-gray-800">
              {card.value}
            </h2>

            <p className={`mt-2 font-medium ${card.text}`}>
              {card.title}
            </p>

          </div>
        ))}

      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-6 mt-8">

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-sm p-6">

          <h2 className="text-xl font-semibold mb-5">
            Recent Activity
          </h2>

          <ul className="space-y-4 text-gray-600">

            <li>📄 Rahul submitted UPSC Test Paper</li>

            <li>✅ Sneha completed Assignment</li>

            <li>👨‍🎓 Admin assigned 5 new students</li>

            <li>📢 Physics Exam scheduled</li>

          </ul>

        </div>

        {/* Quick Actions */}

        <div className="bg-white rounded-2xl shadow-sm p-6">

          <h2 className="text-xl font-semibold mb-5">
            Quick Actions
          </h2>

          <div className="grid grid-cols-2 gap-4">

            <button className="bg-purple-600 text-white rounded-xl py-3 hover:bg-purple-700">
              Evaluate Papers
            </button>

            <button className="bg-indigo-600 text-white rounded-xl py-3 hover:bg-indigo-700">
              View Students
            </button>

            <button className="bg-green-600 text-white rounded-xl py-3 hover:bg-green-700">
              Schedule Session
            </button>

            <button className="bg-orange-500 text-white rounded-xl py-3 hover:bg-orange-600">
              Send Notification
            </button>

          </div>

        </div>

      </div>

      {/* Announcements */}

      <div className="bg-white rounded-2xl shadow-sm p-6 mt-8">

        <h2 className="text-xl font-semibold mb-5">
          Announcements
        </h2>

        <div className="space-y-3">

          <div className="bg-blue-50 p-4 rounded-xl">
            📢 Weekly mentor meeting on Friday at 6 PM.
          </div>

          <div className="bg-yellow-50 p-4 rounded-xl">
            📢 Evaluation deadline extended till tomorrow.
          </div>

          <div className="bg-green-50 p-4 rounded-xl">
            📢 New Batch 5308 assigned.
          </div>

        </div>

      </div>

    </div>
  );
}

export default MentorDashboard;