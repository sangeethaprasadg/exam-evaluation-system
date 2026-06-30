import {
  ClipboardList,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
} from "lucide-react";

function ExamStats() {
  const stats = [
    {
      title: "Total Exams",
      value: "16",
      icon: ClipboardList,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Average Submission",
      value: "82%",
      icon: BarChart3,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Completed Submissions",
      value: "10",
      icon: CheckCircle2,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Low Submission",
      value: "3",
      icon: AlertTriangle,
      color: "bg-orange-100 text-orange-600",
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
                className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.color}`}
              >
                <Icon size={28} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ExamStats;