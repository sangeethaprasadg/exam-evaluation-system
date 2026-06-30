import { useState } from "react";

import EvaluationStats from "./components/EvaluationStats";
import EvaluationFilters from "./components/EvaluationFilters";
import EvaluationTable from "./components/EvaluationTable";
import EvaluationModal from "./EvaluationModal";

import { evaluations } from "./evaluationData";

function Evaluation() {
  const [selectedEvaluation, setSelectedEvaluation] = useState(null);

  const [search, setSearch] = useState("");
  const [batch, setBatch] = useState("All Batches");
  const [program, setProgram] = useState("All Programs");
  const [status, setStatus] = useState("All Status");
  const [submissionType, setSubmissionType] = useState("All");

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
