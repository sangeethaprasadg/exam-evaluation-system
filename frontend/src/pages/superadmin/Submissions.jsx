import { useEffect, useState } from "react";
import axios from "axios";

import SubmissionTable from "../../components/submissions/SubmissionTable";

import EvaluationModal from "../../modules/evaluation/EvaluationModal";

function Submissions() {
  const [submissions, setSubmissions] = useState([]);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadSubmissions = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/submissions"
      );

      console.log("API Response:", response.data);

      const mappedData = response.data.data.map((item) => ({
        id: item._id,

        studentName: item.studentId?.studentName || "",

        rollNo: item.studentId?.rollNumber || "",

        mentorName: item.mentorId?.mentorName || "",

        batch: item.studentId?.course || "",

        examName: item.examName,

        submissionType: item.examMode,

        submittedOn: item.submittedAt
          ? new Date(item.submittedAt).toLocaleDateString()
          : "",

        status: item.status,

        answerSheetLink: item.answerSheetUrl,

        obtainedMarks: item.marks || "",

        mentorRemark: item.feedback || "",

        totalMarks: item.totalMarks || 100,

        ratings: {
          contentCompetency: {
            score: 0,
            remark: "",
          },
          introductionConclusion: {
            score: 0,
            remark: "",
          },
          addressingDemand: {
            score: 0,
            remark: "",
          },
          structurePresentation: {
            score: 0,
            remark: "",
          },
        },
      }));

      setSubmissions(mappedData);
    } catch (error) {
      console.error("Error loading submissions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSubmissions();
  }, []);

  if (loading) {
    return (
      <div className="p-8 text-lg font-medium">
        Loading Submissions...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold">
          Student Submissions
        </h1>

        <p className="text-gray-500">
          View all student submissions across mentors.
        </p>
      </div>

      {/* Submission Table */}

      <SubmissionTable
        submissions={submissions}
        onView={setSelectedSubmission}
      />

      {/* View Modal */}

      <EvaluationModal
        evaluation={selectedSubmission}
        onClose={() => setSelectedSubmission(null)}
      />
    </div>
  );
}

export default Submissions;