import { X, Phone, User, GraduationCap, BookOpen } from "lucide-react";

function StudentSummaryModal({ student, onClose }) {
  if (!student) return null;

  const percentage = Math.round(
    (student.papersEvaluated / student.totalPapers) * 100
  );

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">

        {/* Header */}

        <div className="flex justify-between items-center border-b p-6">

          <div>

            <h2 className="text-3xl font-bold text-gray-800">
              {student.name}
            </h2>

            <p className="text-gray-500 mt-1">
              Student Summary
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

          {/* Student Information */}

          <h3 className="text-xl font-semibold mb-5">
            Student Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

            <div className="bg-gray-50 rounded-xl p-5">

              <div className="flex items-center gap-2 text-purple-600 mb-2">

                <User size={18} />

                <span className="text-sm font-medium">
                  Roll Number
                </span>

              </div>

              <p className="font-bold text-lg">
                {student.rollNo}
              </p>

            </div>

            <div className="bg-gray-50 rounded-xl p-5">

              <div className="flex items-center gap-2 text-purple-600 mb-2">

                <Phone size={18} />

                <span className="text-sm font-medium">
                  Phone Number
                </span>

              </div>

              <p className="font-bold text-lg">
                {student.phone}
              </p>

            </div>

            <div className="bg-gray-50 rounded-xl p-5">

              <div className="flex items-center gap-2 text-purple-600 mb-2">

                <GraduationCap size={18} />

                <span className="text-sm font-medium">
                  Batch
                </span>

              </div>

              <p className="font-bold text-lg">
                {student.batch}
              </p>

            </div>

            <div className="bg-gray-50 rounded-xl p-5">

              <div className="flex items-center gap-2 text-purple-600 mb-2">

                <BookOpen size={18} />

                <span className="text-sm font-medium">
                  Program
                </span>

              </div>

              <p className="font-bold text-lg">
                {student.program}
              </p>

            </div>

          </div>

          {/* Progress Overview */}

          <h3 className="text-xl font-semibold mb-5">
            Progress Overview
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">

            <div className="bg-purple-50 rounded-xl p-5">

              <p className="text-gray-600">
                Papers Evaluated
              </p>

              <h2 className="text-3xl font-bold text-purple-700 mt-2">
                {student.papersEvaluated}
              </h2>

              <p className="text-gray-500">
                Out of {student.totalPapers}
              </p>

            </div>

            <div className="bg-green-50 rounded-xl p-5">

              <p className="text-gray-600">
                One-on-One Sessions
              </p>

              <h2 className="text-3xl font-bold text-green-700 mt-2">
                {student.oneOnOneCount}
              </h2>

              <p className="text-gray-500">
                Sessions Completed
              </p>

            </div>

            <div className="bg-orange-50 rounded-xl p-5">

              <p className="text-gray-600">
                Completion
              </p>

              <h2 className="text-3xl font-bold text-orange-600 mt-2">
                {percentage}%
              </h2>

              <p className="text-gray-500">
                Overall Progress
              </p>

            </div>

          </div>

          {/* Progress Bar */}

          <div className="mb-10">

            <div className="flex justify-between mb-2">

              <span className="font-medium">
                Paper Progress
              </span>

              <span className="text-gray-500">
                {student.papersEvaluated}/{student.totalPapers}
              </span>

            </div>

            <div className="h-3 bg-gray-200 rounded-full">

              <div
                className="h-3 bg-purple-600 rounded-full"
                style={{ width: `${percentage}%` }}
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default StudentSummaryModal;