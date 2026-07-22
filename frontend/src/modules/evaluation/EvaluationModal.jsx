import { X, ExternalLink } from "lucide-react";
import { useState } from "react";
import axios from "axios";

function EvaluationModal({ evaluation, onClose }) {
  if (!evaluation) return null;

  const [marks, setMarks] = useState(
    evaluation.obtainedMarks || ""
  );

  const [mentorRemark, setMentorRemark] = useState(
    evaluation.mentorRemark || ""
  );

  const [correctedPaper, setCorrectedPaper] = useState(null);



  const [ratings, setRatings] = useState({
    contentCompetency:
      evaluation.ratings.contentCompetency.score,

    introductionConclusion:
      evaluation.ratings.introductionConclusion.score,

    addressingDemand:
      evaluation.ratings.addressingDemand.score,

    structurePresentation:
      evaluation.ratings.structurePresentation.score,
  });

  const handleRating = (field, value) => {
    setRatings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };




const handleSubmit = async () => {
  try {
    const formData = new FormData();

    formData.append("submissionId", evaluation.id);
    formData.append("marks", marks);
    formData.append("mentorRemark", mentorRemark);
    formData.append("ratings", JSON.stringify(ratings));

    if (correctedPaper) {
      formData.append("correctedPaper", correctedPaper);
    }

    const response = await axios.post(
      "http://localhost:3000/api/submissions/evaluate",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log(response.data);

    alert("Evaluation submitted successfully!");
    onClose();

  } catch (error) {
    console.error(error);
    alert("Failed to submit evaluation.");
  }
};




  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl max-h-[95vh] overflow-y-auto">

        {/* Header */}

        <div className="flex justify-between items-center border-b p-6">

          <div>

            <h2 className="text-3xl font-bold text-gray-800">

              Evaluation

            </h2>

            <p className="text-gray-500 mt-1">

              Evaluate Student Answer Sheet

            </p>

          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <X size={24} />
          </button>

        </div>

        {/* Body */}

        <div className="p-6">

          {/* Student Details */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

            <div className="bg-gray-50 rounded-xl p-5">

              <h3 className="font-bold text-lg mb-4">

                Student Details

              </h3>

              <div className="space-y-3">

                <div className="flex justify-between">

                  <span className="text-gray-500">

                    Name

                  </span>

                  <span className="font-medium">

                    {evaluation.studentName}

                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-500">

                    Roll No

                  </span>

                  <span className="font-medium">

                    {evaluation.rollNo}

                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-500">

                    Batch

                  </span>

                  <span className="font-medium">

                    {evaluation.batch}

                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-500">

                    Program

                  </span>

                  <span className="font-medium">

                    {evaluation.program}

                  </span>

                </div>

              </div>

            </div>

            {/* Exam Details */}

            <div className="bg-gray-50 rounded-xl p-5">

              <h3 className="font-bold text-lg mb-4">

                Exam Details

              </h3>

              <div className="space-y-3">

                <div className="flex justify-between">

                  <span className="text-gray-500">

                    Exam

                  </span>

                  <span className="font-medium">

                    {evaluation.examName}

                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-500">

                    Submission

                  </span>

                  <span className="font-medium">

                    {evaluation.submissionType}

                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-500">

                    Submitted On

                  </span>

                  <span className="font-medium">

                    {evaluation.submittedOn}

                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-500">

                    Status

                  </span>

                  <span className="font-medium">

                    {evaluation.status}

                  </span>

                </div>

              </div>

            </div>

          </div>


                    {/* Submitted Answer Sheet */}

          <div className="bg-white border rounded-xl p-5 mb-8">

            <h3 className="text-xl font-semibold mb-4">
              Submitted Answer Sheet
            </h3>

            {evaluation.submissionType === "Online" ? (
              <button
                onClick={() =>
                  window.open(
                    evaluation.answerSheetLink,
                    "_blank"
                  )
                }
                className="flex items-center gap-2 bg-purple-600 text-white px-5 py-3 rounded-lg hover:bg-purple-700 transition"
              >
                <ExternalLink size={18} />
                View Submitted Paper
              </button>
            ) : (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">

                <h4 className="font-semibold text-orange-700">
                  Offline Submission
                </h4>

                <p className="text-orange-600 mt-1">
                  This answer sheet was submitted offline.
                  Please evaluate the physical paper.
                </p>

              </div>
            )}

          </div>

          {/* Marks */}

          <div className="bg-white border rounded-xl p-5 mb-8">

            <h3 className="text-xl font-semibold mb-4">
              Marks
            </h3>

            <div className="flex items-center gap-3">

              <input
                type="number"
                value={marks}
                onChange={(e) =>
                  setMarks(e.target.value)
                }
                placeholder="Enter Marks"
                className="w-40 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <span className="text-gray-500 font-medium">
                / {evaluation.totalMarks}
              </span>

            </div>

          </div>

          {/* Rating Section */}

          <div className="bg-white border rounded-xl p-6 mb-8">

            <h3 className="text-xl font-semibold mb-6">

              Evaluation Rating

            </h3>

            {[
              {
                key: "contentCompetency",
                label: "Content Competency",
              },
              {
                key: "introductionConclusion",
                label: "Introduction & Conclusion",
              },
              {
                key: "addressingDemand",
                label: "Addressing the Demand",
              },
              {
                key: "structurePresentation",
                label: "Structure & Presentation",
              },
            ].map((item) => (

              <div
                key={item.key}
                className="flex justify-between items-center mb-6"
              >

                <h4 className="font-medium text-gray-700">

                  {item.label}

                </h4>

                <div className="flex gap-3">

                  {[1, 2, 3, 4, 5].map((num) => (

                    <button
                      key={num}
                      onClick={() =>
                        handleRating(item.key, num)
                      }
                      className={`w-10 h-10 rounded-full font-semibold transition ${
                        ratings[item.key] === num
                          ? "bg-purple-600 text-white"
                          : "bg-gray-100 hover:bg-purple-100"
                      }`}
                    >
                      {num}
                    </button>

                  ))}

                </div>

              </div>

            ))}

          </div>

          {/* Mentor Remark */}

          <div className="bg-white border rounded-xl p-6 mb-8">

            <h3 className="text-xl font-semibold mb-4">

              Mentor Remarks

            </h3>

            <textarea
              rows="5"
              value={mentorRemark}
              onChange={(e) =>
                setMentorRemark(e.target.value)
              }
              placeholder="Enter additional remarks for the student..."
              className="w-full border rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

          </div>


         

          {/* Corrected Paper Upload */}

{evaluation.submissionType === "Online" && (
  <div className="bg-white border rounded-xl p-6 mb-8">
    <h3 className="text-xl font-semibold mb-4">
      Upload Corrected Paper
    </h3>

    <input
      type="file"
      accept=".pdf"
      onChange={(e) => setCorrectedPaper(e.target.files[0])}
      className="w-full border rounded-lg p-3"
    />
  </div>
)}

         


         

          {/* Footer Buttons */}

          <div className="flex justify-end gap-4 border-t pt-6">

            <button
              className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
            >
              Save Draft
            </button>

        

<button
  onClick={handleSubmit}
  className="px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
>
  Submit Evaluation
</button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EvaluationModal;