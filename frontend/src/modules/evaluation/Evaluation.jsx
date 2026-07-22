import { useEffect, useState } from "react";
import axios from "axios";

import EvaluationStats from "./components/EvaluationStats";
import EvaluationFilters from "./components/EvaluationFilters";
import EvaluationTable from "./components/EvaluationTable";
import EvaluationModal from "./EvaluationModal";

import { useAuth } from "../../auth/AuthContext";

function Evaluation() {
  const { mentor } = useAuth();

  const [selectedEvaluation, setSelectedEvaluation] = useState(null);
  const [evaluations, setEvaluations] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [batch, setBatch] = useState("All Batches");
  const [program, setProgram] = useState("All Programs");
  const [status, setStatus] = useState("All Status");
  const [submissionType, setSubmissionType] = useState("All");

  useEffect(() => {
    if (mentor?._id) {
      fetchSubmissions();
    }
  }, [mentor]);

  const fetchSubmissions = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/submissions/my/${mentor._id}`
      );

      console.log("Logged in Mentor:", mentor);
      console.log("API Response:", response.data);

      const mappedData = response.data.data.map((item) => ({
        id: item._id,

        studentName: item.studentId.studentName,

        rollNo: item.studentId.rollNumber,

        batch: item.studentId.course || "",

        program: item.studentId.course || "",

        examName: item.examName,

        submissionType: item.examMode,

        submittedOn: new Date(item.submittedAt).toLocaleDateString(),

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

      setEvaluations(mappedData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredEvaluations = evaluations.filter((item) => {
    const matchesSearch =
      item.studentName
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.rollNo.includes(search);

    const matchesBatch =
      batch === "All Batches" ||
      item.batch === batch;

    const matchesProgram =
      program === "All Programs" ||
      item.program === program;

    const matchesStatus =
      status === "All Status" ||
      item.status === status;

    const matchesSubmission =
      submissionType === "All" ||
      item.submissionType === submissionType;

    return (
      matchesSearch &&
      matchesBatch &&
      matchesProgram &&
      matchesStatus &&
      matchesSubmission
    );
  });

  if (loading) {
    return (
      <div className="p-8 text-lg font-medium">
        Loading Evaluations...
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Evaluation
        </h1>

        <p className="text-gray-500 mt-2">
          Evaluate submitted answer sheets and provide feedback.
        </p>
      </div>

      {/* Statistics */}
      <EvaluationStats />

      {/* Filters */}
      <EvaluationFilters
        search={search}
        setSearch={setSearch}
        batch={batch}
        setBatch={setBatch}
        program={program}
        setProgram={setProgram}
        status={status}
        setStatus={setStatus}
        submissionType={submissionType}
        setSubmissionType={setSubmissionType}
      />

      {/* Table */}
      <EvaluationTable
        evaluations={filteredEvaluations}
        onSelectEvaluation={setSelectedEvaluation}
      />

      {/* Modal */}
      <EvaluationModal
        evaluation={selectedEvaluation}
        onClose={() => setSelectedEvaluation(null)}
      />
    </div>
  );
}

export default Evaluation;