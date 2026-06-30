import { FilePenLine } from "lucide-react";

function OneOnOneTable({ students, onSelectStudent }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="px-6 py-4 text-left">
              Roll No
            </th>

            <th className="px-6 py-4 text-left">
              Student
            </th>

            <th className="px-6 py-4 text-center">
              Batch
            </th>

            <th className="px-6 py-4 text-center">
              Program
            </th>

            <th className="px-6 py-4 text-center">
              Sessions
            </th>

            <th className="px-6 py-4 text-center">
              Last Session
            </th>

            <th className="px-6 py-4 text-center">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {students.map((student) => {

            const latestSession =
              student.history[0];

            return (

              <tr
                key={student.id}
                className="border-t hover:bg-purple-50 transition"
              >

                {/* Roll No */}

                <td className="px-6 py-5">

                  {student.rollNo}

                </td>

                {/* Student */}

                <td className="px-6 py-5">

                  <div>

                    <p className="font-semibold text-gray-800">

                      {student.studentName}

                    </p>

                    <p className="text-sm text-gray-500">

                      {student.recentRemark}

                    </p>

                  </div>

                </td>

                {/* Batch */}

                <td className="px-6 py-5 text-center">

                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">

                    {student.batch}

                  </span>

                </td>

                {/* Program */}

                <td className="px-6 py-5 text-center">

                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">

                    {student.program}

                  </span>

                </td>

                {/* Sessions */}

                <td className="px-6 py-5 text-center">

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">

                    {student.totalSessions} Sessions

                  </span>

                </td>

                {/* Last Session */}

                <td className="px-6 py-5 text-center">

                  <div>

                    <p>

                      {student.lastSession}

                    </p>

                    <p className="text-sm text-gray-500">

                      {latestSession.duration} mins

                    </p>

                  </div>

                </td>

                {/* Action */}

                <td className="px-6 py-5 text-center">

                  <button
                    onClick={() =>
                      onSelectStudent(student)
                    }
                    className="flex items-center gap-2 mx-auto bg-purple-100 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-200 transition"
                  >

                    <FilePenLine size={18} />

                    Record Session

                  </button>

                </td>

              </tr>

            );

          })}

        </tbody>

      </table>

      {students.length === 0 && (

        <div className="text-center py-10 text-gray-500">

          No Students Found

        </div>

      )}

    </div>
  );
}

export default OneOnOneTable;