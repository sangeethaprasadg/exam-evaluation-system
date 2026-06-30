import { useState } from "react";

import ExamStats from "./components/ExamStats";
import ExamFilters from "./components/ExamFilters";
import ExamTable from "./components/ExamTable";
import ExamSummaryModal from "./ExamSummaryModal";

import { exams } from "./examData";

function Exams() {
  const [selectedExam, setSelectedExam] = useState(null);

  const [search, setSearch] = useState("");
  const [batch, setBatch] = useState("All Batches");
  const [program, setProgram] = useState("All Programs");

  const filteredExams = exams.filter((exam) => {
    const matchesSearch = exam.examName
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesBatch =
      batch === "All Batches" ||
      exam.batch === batch;

    const matchesProgram =
      program === "All Programs" ||
      exam.program === program;

    return (
      matchesSearch &&
      matchesBatch &&
      matchesProgram
    );
  });

  return (
    <div className="p-8 bg-gray-50 min-h-screen">

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-gray-800">
          Exams
        </h1>

        <p className="text-gray-500 mt-2">
          Track exam submissions across assigned batches.
        </p>

      </div>

      <ExamStats />

      <ExamFilters
        search={search}
        setSearch={setSearch}
        batch={batch}
        setBatch={setBatch}
        program={program}
        setProgram={setProgram}
      />

      <ExamTable
        exams={filteredExams}
        onSelectExam={setSelectedExam}
      />

      <ExamSummaryModal
        exam={selectedExam}
        onClose={() => setSelectedExam(null)}
      />

    </div>
  );
}

export default Exams;