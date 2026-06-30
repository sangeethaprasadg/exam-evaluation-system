import { Eye } from "lucide-react";

function ExamTable({ exams, onSelectExam }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="px-6 py-4 text-left">
              Exam Name
            </th>

            <th className="px-6 py-4 text-center">
              Batch
            </th>

            <th className="px-6 py-4 text-center">
              Program
            </th>

            <th className="px-6 py-4 text-center">
              Submission Progress
            </th>

            <th className="px-6 py-4 text-center">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {exams.map((exam) => {

            const percentage = Math.round(
              (exam.submittedStudents /
                exam.totalStudents) *
                100
            );

            return (

              <tr
                key={exam.id}
                className="border-t hover:bg-purple-50 transition"
              >

                {/* Exam */}

                <td className="px-6 py-5">

                  <p className="font-semibold text-gray-800">

                    {exam.examName}

                  </p>

                </td>

                {/* Batch */}

                <td className="px-6 py-5 text-center">

                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">

                    {exam.batch}

                  </span>

                </td>

                {/* Program */}

                <td className="px-6 py-5 text-center">

                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">

                    {exam.program}

                  </span>

                </td>

                {/* Progress */}

                <td className="px-6 py-5">

                  <div className="w-44 mx-auto">

                    <div className="flex justify-between text-xs text-gray-500 mb-1">

                      <span>

                        {exam.submittedStudents}/
                        {exam.totalStudents}

                      </span>

                      <span>

                        {percentage}%

                      </span>

                    </div>

                    <div className="h-2 bg-gray-200 rounded-full">

                      <div
                        className="h-2 bg-purple-600 rounded-full"
                        style={{
                          width: `${percentage}%`,
                        }}
                      />

                    </div>

                  </div>

                </td>

                {/* Action */}

                <td className="px-6 py-5 text-center">

                  <button
                    onClick={() =>
                      onSelectExam(exam)
                    }
                    className="flex items-center gap-2 mx-auto bg-purple-100 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-200 transition"
                  >

                    <Eye size={18} />

                    View Details

                  </button>

                </td>

              </tr>

            );

          })}

        </tbody>

      </table>

      {exams.length === 0 && (

        <div className="text-center py-10 text-gray-500">

          No Exams Found

        </div>

      )}

    </div>
  );
}

export default ExamTable;