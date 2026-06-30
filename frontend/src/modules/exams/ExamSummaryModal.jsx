import { X, ClipboardList, Users, CheckCircle } from "lucide-react";

function ExamSummaryModal({ exam, onClose }) {
  if (!exam) return null;

  const percentage = Math.round(
    (exam.submittedStudents / exam.totalStudents) * 100
  );

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">

        {/* Header */}

        <div className="flex justify-between items-center border-b p-6">

          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              {exam.examName}
            </h2>

            <p className="text-gray-500 mt-1">
              Exam Submission Summary
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <X size={24} />
          </button>

        </div>

        <div className="p-6">

          {/* Information Cards */}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">

            <div className="bg-gray-50 rounded-xl p-5">

              <div className="flex items-center gap-2 text-purple-600 mb-2">
                <ClipboardList size={18} />
                <span className="text-sm font-medium">
                  Batch
                </span>
              </div>

              <p className="font-bold text-lg">
                {exam.batch}
              </p>

            </div>

            <div className="bg-gray-50 rounded-xl p-5">

              <div className="flex items-center gap-2 text-purple-600 mb-2">
                <ClipboardList size={18} />
                <span className="text-sm font-medium">
                  Program
                </span>
              </div>

              <p className="font-bold text-lg">
                {exam.program}
              </p>

            </div>

            <div className="bg-gray-50 rounded-xl p-5">

              <div className="flex items-center gap-2 text-purple-600 mb-2">
                <Users size={18} />
                <span className="text-sm font-medium">
                  Students Submitted
                </span>
              </div>

              <p className="font-bold text-lg">
                {exam.submittedStudents} / {exam.totalStudents}
              </p>

            </div>

            <div className="bg-gray-50 rounded-xl p-5">

              <div className="flex items-center gap-2 text-purple-600 mb-2">
                <CheckCircle size={18} />
                <span className="text-sm font-medium">
                  Submission
                </span>
              </div>

              <p className="font-bold text-lg">
                {percentage}%
              </p>

            </div>

          </div>

          {/* Progress */}

          <div className="mb-8">

            <div className="flex justify-between mb-2">

              <span className="font-medium">
                Submission Progress
              </span>

              <span className="text-gray-500">
                {exam.submittedStudents}/{exam.totalStudents}
              </span>

            </div>

            <div className="h-3 bg-gray-200 rounded-full">

              <div
                className="h-3 bg-purple-600 rounded-full"
                style={{ width: `${percentage}%` }}
              />

            </div>

          </div>

          {/* Student List */}

          <h3 className="text-xl font-semibold mb-4">
            Student Submission List
          </h3>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="px-5 py-3 text-left">
                    Roll No
                  </th>

                  <th className="px-5 py-3 text-left">
                    Student Name
                  </th>

                  <th className="px-5 py-3 text-center">
                    Submission Type
                  </th>

                  <th className="px-5 py-3 text-center">
                    Submitted
                  </th>

                </tr>

              </thead>

              <tbody>

                {exam.submissions.map((student, index) => (

                  <tr
                    key={index}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="px-5 py-4">
                      {student.rollNo}
                    </td>

                    <td className="px-5 py-4 font-medium">
                      {student.studentName}
                    </td>

                    <td className="px-5 py-4 text-center">

                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          student.submissionType === "Online"
                            ? "bg-green-100 text-green-700"
                            : student.submissionType === "Offline"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {student.submissionType}
                      </span>

                    </td>

                    <td className="px-5 py-4 text-center">

                      {student.submitted ? (
                        <span className="text-green-600 font-semibold">
                          Submitted
                        </span>
                      ) : (
                        <span className="text-red-600 font-semibold">
                          Pending
                        </span>
                      )}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ExamSummaryModal;