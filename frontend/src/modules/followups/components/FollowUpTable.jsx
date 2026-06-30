import { PhoneCall } from "lucide-react";

function FollowUpTable({ followUps, onSelectFollowUp }) {
  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "Critical":
        return "bg-red-100 text-red-700";

      case "High":
        return "bg-orange-100 text-orange-700";

      case "Medium":
        return "bg-yellow-100 text-yellow-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Completed":
        return "bg-green-100 text-green-700";

      case "Critical":
        return "bg-red-100 text-red-700";

      case "Upcoming":
        return "bg-blue-100 text-blue-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="px-6 py-4 text-left">
              Student
            </th>

            <th className="px-6 py-4 text-center">
              Trigger
            </th>

            <th className="px-6 py-4 text-center">
              Inactive
            </th>

            <th className="px-6 py-4 text-center">
              Priority
            </th>

            <th className="px-6 py-4 text-center">
              Last Follow-up
            </th>

            <th className="px-6 py-4 text-center">
              Status
            </th>

            <th className="px-6 py-4 text-center">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {followUps.map((item) => (

            <tr
              key={item.id}
              className="border-t hover:bg-purple-50 transition"
            >

              {/* Student */}

              <td className="px-6 py-5">

                <div>

                  <p className="font-semibold text-gray-800">
                    {item.studentName}
                  </p>

                  <p className="text-sm text-gray-500">
                    {item.rollNo}
                  </p>

                </div>

              </td>

              {/* Trigger */}

              <td className="px-6 py-5 text-center">

                <span className="text-sm">

                  {item.triggerType}

                </span>

              </td>

              {/* Inactive */}

              <td className="px-6 py-5 text-center">

                {item.inactiveDays} Days

              </td>

              {/* Priority */}

              <td className="px-6 py-5 text-center">

                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityBadge(
                    item.priority
                  )}`}
                >
                  {item.priority}
                </span>

              </td>

              {/* Last Follow-up */}

              <td className="px-6 py-5 text-center">

                {item.lastFollowUp}

              </td>

              {/* Status */}

              <td className="px-6 py-5 text-center">

                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(
                    item.status
                  )}`}
                >
                  {item.status}
                </span>

              </td>

              {/* Action */}

              <td className="px-6 py-5 text-center">

                <button
                  onClick={() => onSelectFollowUp(item)}
                  className="flex items-center gap-2 mx-auto bg-purple-100 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-200 transition"
                >

                  <PhoneCall size={18} />

                  Follow-up

                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      {followUps.length === 0 && (

        <div className="text-center py-10 text-gray-500">

          No Follow-ups Found

        </div>

      )}

    </div>
  );
}

export default FollowUpTable;

