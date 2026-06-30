import { X } from "lucide-react";
import { useState } from "react";

function OneOnOneModal({ student, onClose }) {
  if (!student) return null;

  const today = new Date().toISOString().split("T")[0];

  const [sessionDate, setSessionDate] = useState(today);
  const [duration, setDuration] = useState("");
  const [studentConcerns, setStudentConcerns] = useState("");
  const [discussionSummary, setDiscussionSummary] = useState("");
  const [mentorObservation, setMentorObservation] = useState("");
  const [actionItems, setActionItems] = useState("");

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-6">

      <div className="bg-white rounded-2xl w-full max-w-7xl max-h-[95vh] overflow-y-auto shadow-2xl">

        {/* Header */}

        <div className="flex justify-between items-center border-b p-6">

          <div>

            <h2 className="text-3xl font-bold">

              Record One-on-One Session

            </h2>

            <p className="text-gray-500 mt-1">

              Record mentoring consultation details.

            </p>

          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <X size={24} />
          </button>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">

          {/* Left Panel */}

          <div className="space-y-5">

            <div className="bg-gray-50 rounded-xl p-5">

              <h3 className="font-bold text-lg mb-4">

                Student Summary

              </h3>

              <div className="space-y-3">

                <div className="flex justify-between">

                  <span>Name</span>

                  <span className="font-medium">

                    {student.studentName}

                  </span>

                </div>

                <div className="flex justify-between">

                  <span>Roll No</span>

                  <span className="font-medium">

                    {student.rollNo}

                  </span>

                </div>

                <div className="flex justify-between">

                  <span>Batch</span>

                  <span className="font-medium">

                    {student.batch}

                  </span>

                </div>

                <div className="flex justify-between">

                  <span>Program</span>

                  <span className="font-medium">

                    {student.program}

                  </span>

                </div>

              </div>

            </div>

            <div className="bg-white border rounded-xl p-5">

              <h3 className="font-bold mb-4">

                Quick Summary

              </h3>

              <div className="space-y-4">

                <div className="flex justify-between">

                  <span>Total Sessions</span>

                  <span className="font-semibold">

                    {student.totalSessions}

                  </span>

                </div>

                <div className="flex justify-between">

                  <span>Latest Evaluation</span>

                  <span className="font-semibold">

                    {student.latestEvaluation}

                  </span>

                </div>

                <div className="flex justify-between">

                  <span>Pending Follow-up</span>

                  <span
                    className={`font-semibold ${
                      student.pendingFollowUp
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {student.pendingFollowUp ? "Yes" : "No"}
                  </span>

                </div>

              </div>

            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">

              <h3 className="font-bold mb-3">

                Recent Mentor Remark

              </h3>

              <p className="text-gray-700">

                {student.recentRemark}

              </p>

            </div>

          </div>

          {/* Right Panel */}

          <div className="lg:col-span-2"></div>


          {/* Session Information */}

<div className="bg-white border rounded-xl p-6 mb-6">

  <h3 className="text-xl font-semibold mb-5">
    Session Information
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

    <div>

      <label className="block text-sm font-medium mb-2">
        Session Date
      </label>

      <input
        type="date"
        value={sessionDate}
        onChange={(e) => setSessionDate(e.target.value)}
        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

    </div>

    <div>

      <label className="block text-sm font-medium mb-2">
        Duration (Minutes)
      </label>

      <input
        type="number"
        placeholder="30"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

    </div>

  </div>

</div>

{/* Student Concerns */}

<div className="bg-white border rounded-xl p-6 mb-6">

  <label className="block text-lg font-semibold mb-3">
    Student Concerns / Doubts
  </label>

  <textarea
    rows="4"
    value={studentConcerns}
    onChange={(e) =>
      setStudentConcerns(e.target.value)
    }
    placeholder="Enter the student's concerns, doubts, or challenges..."
    className="w-full border rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
  />

</div>

{/* Discussion Summary */}

<div className="bg-white border rounded-xl p-6 mb-6">

  <label className="block text-lg font-semibold mb-3">
    Discussion Summary
  </label>

  <textarea
    rows="4"
    value={discussionSummary}
    onChange={(e) =>
      setDiscussionSummary(e.target.value)
    }
    placeholder="Summarize the discussion during the session..."
    className="w-full border rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
  />

</div>

{/* Mentor Observation */}

<div className="bg-white border rounded-xl p-6 mb-6">

  <label className="block text-lg font-semibold mb-3">
    Mentor Observation
  </label>

  <textarea
    rows="4"
    value={mentorObservation}
    onChange={(e) =>
      setMentorObservation(e.target.value)
    }
    placeholder="Record your observations about the student's progress..."
    className="w-full border rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
  />

</div>

{/* Action Items */}

<div className="bg-white border rounded-xl p-6 mb-6">

  <label className="block text-lg font-semibold mb-3">
    Action Items
  </label>

  <textarea
    rows="4"
    value={actionItems}
    onChange={(e) =>
      setActionItems(e.target.value)
    }
    placeholder="Tasks or goals assigned to the student..."
    className="w-full border rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
  />

</div>


          {/* Previous Session History */}

          <div className="bg-white border rounded-xl p-6 mb-6">

            <h3 className="text-xl font-semibold mb-6">
              Previous Session History
            </h3>

            {student.history.length === 0 ? (

              <div className="text-center py-8 text-gray-500">
                No previous sessions found.
              </div>

            ) : (

              <div className="space-y-6">

                {student.history.map((session, index) => (

                  <div
                    key={index}
                    className="relative border-l-4 border-purple-500 pl-6 pb-6"
                  >

                    <div className="absolute -left-[10px] top-0 w-4 h-4 bg-purple-600 rounded-full"></div>

                    <div className="flex justify-between items-center flex-wrap gap-2 mb-3">

                      <h4 className="font-semibold text-lg">

                        {session.sessionDate}

                      </h4>

                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">

                        {session.duration} mins

                      </span>

                    </div>

                    <div className="space-y-3 text-sm">

                      <div>

                        <span className="font-semibold">
                          Student Concerns:
                        </span>

                        <p className="text-gray-600 mt-1">
                          {session.studentConcerns}
                        </p>

                      </div>

                      <div>

                        <span className="font-semibold">
                          Discussion Summary:
                        </span>

                        <p className="text-gray-600 mt-1">
                          {session.discussionSummary}
                        </p>

                      </div>

                      <div>

                        <span className="font-semibold">
                          Mentor Observation:
                        </span>

                        <p className="text-gray-600 mt-1">
                          {session.mentorObservation}
                        </p>

                      </div>

                      <div>

                        <span className="font-semibold">
                          Action Items:
                        </span>

                        <p className="text-gray-600 mt-1">
                          {session.actionItems}
                        </p>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </div>

          {/* Footer */}

          <div className="flex justify-end gap-4 border-t pt-6">

            <button
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              Save Session
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}

export default OneOnOneModal;
