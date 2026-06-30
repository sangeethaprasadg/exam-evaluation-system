import { X } from "lucide-react";
import { useState } from "react";

function FollowUpModal({ followUp, onClose }) {
  if (!followUp) return null;

  const [method, setMethod] = useState(
    followUp.followUpMethod || ""
  );

  const [response, setResponse] = useState(
    followUp.response || ""
  );

  const [remark, setRemark] = useState(
    followUp.remark || ""
  );

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-6">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[95vh] overflow-y-auto">

        {/* Header */}

        <div className="flex justify-between items-center border-b p-6">

          <div>

            <h2 className="text-3xl font-bold">

              Student Follow-up

            </h2>

            <p className="text-gray-500 mt-1">

              Record today's follow-up activity.

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

          {/* Left Side */}

          <div className="space-y-5">

            {/* Student */}

            <div className="bg-gray-50 rounded-xl p-5">

              <h3 className="font-bold text-lg mb-4">

                Student Summary

              </h3>

              <div className="space-y-3">

                <div className="flex justify-between">

                  <span>Name</span>

                  <span className="font-medium">

                    {followUp.studentName}

                  </span>

                </div>

                <div className="flex justify-between">

                  <span>Roll No</span>

                  <span className="font-medium">

                    {followUp.rollNo}

                  </span>

                </div>

                <div className="flex justify-between">

                  <span>Batch</span>

                  <span className="font-medium">

                    {followUp.batch}

                  </span>

                </div>

                <div className="flex justify-between">

                  <span>Program</span>

                  <span className="font-medium">

                    {followUp.program}

                  </span>

                </div>

              </div>

            </div>

            {/* Trigger */}

            <div className="bg-red-50 border border-red-200 rounded-xl p-5">

              <h3 className="font-bold text-red-700 mb-3">

                Trigger Reason

              </h3>

              <p className="font-semibold">

                {followUp.triggerType}

              </p>

              <p className="text-gray-600 mt-2">

                {followUp.triggerReason}

              </p>

            </div>

            {/* Academic Summary */}

            <div className="bg-white border rounded-xl p-5">

              <h3 className="font-bold mb-4">

                Academic Summary

              </h3>

              <div className="space-y-3">

                <div className="flex justify-between">

                  <span>Latest Evaluation</span>

                  <span>

                    {followUp.latestEvaluation}

                  </span>

                </div>

                <div className="flex justify-between">

                  <span>Last One-on-One</span>

                  <span>

                    {followUp.lastOneOnOne}

                  </span>

                </div>

                <div className="flex justify-between">

                  <span>Inactive</span>

                  <span>

                    {followUp.inactiveDays} Days

                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="lg:col-span-2"></div>


          {/* Follow-up Method */}

<div className="bg-white border rounded-xl p-6 mb-6">

  <label className="block text-lg font-semibold mb-3">
    Follow-up Method
  </label>

  <select
    value={method}
    onChange={(e) => setMethod(e.target.value)}
    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
  >
    <option value="">Select Follow-up Method</option>
    <option>Phone Call</option>
    <option>WhatsApp Message</option>
    <option>Telegram</option>
    <option>Direct Meeting</option>
    <option>Email</option>
  </select>

</div>

{/* Response */}

<div className="bg-white border rounded-xl p-6 mb-6">

  <label className="block text-lg font-semibold mb-3">
    Student Response
  </label>

  <select
    value={response}
    onChange={(e) => setResponse(e.target.value)}
    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
  >
    <option value="">Select Response</option>

    <option>Responded</option>

    <option>Already Told Reason</option>

    <option>Parent Contacted</option>

    <option>Wrong Number</option>

    <option>Non Responsive</option>

  </select>

  {response === "Non Responsive" && (

    <div className="mt-4 bg-red-50 border border-red-300 rounded-lg p-4">

      <p className="font-semibold text-red-700">
        ⚠ Critical Follow-up
      </p>

      <p className="text-red-600 text-sm mt-1">
        This student will automatically appear in the
        <strong> Critical Follow-up </strong>
        list for Admin review.
      </p>

    </div>

  )}

</div>

{/* Mentor Remark */}

<div className="bg-white border rounded-xl p-6 mb-6">

  <label className="block text-lg font-semibold mb-3">
    Mentor Remark
  </label>

  <textarea
    rows="6"
    value={remark}
    onChange={(e) => setRemark(e.target.value)}
    placeholder="Enter follow-up details, student's explanation, commitments, next action, etc."
    className="w-full border rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
  />

</div>

{/* Next Suggested Action */}

<div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-6">

  <h3 className="font-semibold text-purple-700 mb-4">
    Suggested Next Action
  </h3>

  {response === "" && (
    <p className="text-gray-600">
      Select a student response to see the suggested next action.
    </p>
  )}

  {response === "Responded" && (
    <p className="text-green-700">
      ✅ Follow-up can be marked as completed.
    </p>
  )}

  {response === "Already Told Reason" && (
    <p className="text-blue-700">
      ℹ Update the remark and schedule the next review if required.
    </p>
  )}

  {response === "Parent Contacted" && (
    <p className="text-indigo-700">
      👨‍👩‍👧 Record the parent's feedback and continue monitoring.
    </p>
  )}

  {response === "Wrong Number" && (
    <p className="text-orange-700">
      📞 Update the student's contact information before the next follow-up.
    </p>
  )}

  {response === "Non Responsive" && (
    <p className="text-red-700 font-semibold">
      🚨 Escalate this student to the Critical Follow-up queue.
    </p>
  )}

</div>


          {/* Previous Follow-up Information */}

          <div className="bg-white border rounded-xl p-6 mb-6">

            <h3 className="text-xl font-semibold mb-5">
              Previous Follow-up Information
            </h3>

            <div className="space-y-4">

              <div className="flex justify-between border-b pb-3">

                <span className="text-gray-500">
                  Last Follow-up
                </span>

                <span className="font-medium">
                  {followUp.lastFollowUp}
                </span>

              </div>

              <div className="flex justify-between border-b pb-3">

                <span className="text-gray-500">
                  Previous Method
                </span>

                <span className="font-medium">
                  {followUp.followUpMethod || "Not Available"}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Previous Response
                </span>

                <span className="font-medium">
                  {followUp.response || "No Previous Response"}
                </span>

              </div>

            </div>

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
              Save Follow-up
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}

export default FollowUpModal;

