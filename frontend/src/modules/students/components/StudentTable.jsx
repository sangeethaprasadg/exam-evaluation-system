function StudentTable({ students, onSelectStudent }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr className="text-gray-700">

            <th className="px-6 py-4 text-left">Roll No</th>

            <th className="px-6 py-4 text-left">
              Student Name
            </th>

            <th className="px-6 py-4 text-center">
              Batch
            </th>

            <th className="px-6 py-4 text-center">
              Program
            </th>

            <th className="px-6 py-4 text-center">
              Paper Progress
            </th>

            <th className="px-6 py-4 text-center">
              One-on-One
            </th>

          </tr>

        </thead>

        <tbody>

          {students.map((student) => {

            const percentage =
              (student.papersEvaluated /
                student.totalPapers) *
              100;

            return (

              <tr
                key={student.id}
                className="border-t hover:bg-purple-50 transition"
              >

                {/* Roll Number */}

                <td className="px-6 py-5 font-medium">
                  {student.rollNo}
                </td>

                {/* Student Name */}

                <td className="px-6 py-5">

                  <button
                    onClick={() =>
                      onSelectStudent(student)
                    }
                    className="text-purple-600 font-semibold hover:underline"
                  >
                    {student.name}
                  </button>

                </td>

                {/* Batch */}

                <td className="px-6 py-5 text-center">

                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">

                    {student.batch}

                  </span>

                </td>

                {/* Program */}

                <td className="px-6 py-5 text-center">

                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">

                    {student.program}

                  </span>

                </td>

                {/* Progress */}

                <td className="px-6 py-5">

                  <div className="w-40 mx-auto">

                    <div className="flex justify-between text-xs text-gray-500 mb-1">

                      <span>
                        {student.papersEvaluated}/
                        {student.totalPapers}
                      </span>

                      <span>
                        {Math.round(percentage)}%
                      </span>

                    </div>

                    <div className="h-2 bg-gray-200 rounded-full">

                      <div
                        className="h-2 bg-purple-600 rounded-full"
                        style={{
                          width: `${percentage}%`,
                        }}
                      ></div>

                    </div>

                  </div>

                </td>

                {/* One on One */}

                <td className="px-6 py-5 text-center">

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">

                    {student.oneOnOneCount} Sessions

                  </span>

                </td>

              </tr>

            );

          })}

        </tbody>

      </table>

      {/* Empty State */}

      {students.length === 0 && (

        <div className="text-center py-12 text-gray-500">

          No students found.

        </div>

      )}

    </div>
  );
}

export default StudentTable;