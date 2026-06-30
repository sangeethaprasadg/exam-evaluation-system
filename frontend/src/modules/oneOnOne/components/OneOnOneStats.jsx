import {
  Users,
  CalendarDays,
  Clock3,
  ClipboardCheck,
} from "lucide-react";

function OneOnOneStats() {
  const stats = [
    {
      title: "Total Students",
      value: "60",
      icon: Users,
      bg: "bg-blue-100",
      color: "text-blue-600",
    },
    {
      title: "Sessions This Month",
      value: "34",
      icon: CalendarDays,
      bg: "bg-purple-100",
      color: "text-purple-600",
    },
    {
      title: "Average Duration",
      value: "32 mins",
      icon: Clock3,
      bg: "bg-green-100",
      color: "text-green-600",
    },
    {
      title: "Pending Follow-ups",
      value: "8",
      icon: ClipboardCheck,
      bg: "bg-orange-100",
      color: "text-orange-600",
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

export default OneOnOneStats;
