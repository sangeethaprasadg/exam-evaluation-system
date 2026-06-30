import {
  CalendarClock,
  Clock3,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

function FollowUpStats() {
  const stats = [
    {
      title: "Today's Follow-ups",
      value: "18",
      icon: CalendarClock,
      bg: "bg-blue-100",
      color: "text-blue-600",
    },
    {
      title: "Upcoming",
      value: "12",
      icon: Clock3,
      bg: "bg-yellow-100",
      color: "text-yellow-600",
    },
    {
      title: "Completed",
      value: "145",
      icon: CheckCircle2,
      bg: "bg-green-100",
      color: "text-green-600",
    },
    {
      title: "Critical",
      value: "6",
      icon: AlertTriangle,
      bg: "bg-red-100",
      color: "text-red-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold mt-2 text-gray-800">
                  {item.value}
                </h2>
              </div>

              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.bg}`}
              >
                <Icon
                  size={28}
                  className={item.color}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FollowUpStats;
