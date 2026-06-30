import { useState } from "react";

import OneOnOneStats from "./components/OneOnOneStats";
import OneOnOneFilters from "./components/OneOnOneFilters";
import OneOnOneTable from "./components/OneOnOneTable";
import OneOnOneModal from "./OneOnOneModal";

import { oneOnOneSessions } from "./oneOnOneData";

function OneOnOne() {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const [search, setSearch] = useState("");
  const [batch, setBatch] = useState("All Batches");
  const [program, setProgram] = useState("All Programs");

  const filteredStudents = oneOnOneSessions.filter((student) => {
    const matchesSearch =
      student.studentName
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      student.rollNo.includes(search);

    const matchesBatch =
      batch === "All Batches" ||
      student.batch === batch;

    const matchesProgram =
      program === "All Programs" ||
      student.program === program;

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
          One-on-One Sessions
        </h1>

        <p className="text-gray-500 mt-2">
          Record and review student mentoring sessions.
        </p>

      </div>

      {/* Statistics */}

      <OneOnOneStats />

      {/* Filters */}

      <OneOnOneFilters
        search={search}
        setSearch={setSearch}
        batch={batch}
        setBatch={setBatch}
        program={program}
        setProgram={setProgram}
      />

      {/* Table */}

      <OneOnOneTable
        students={filteredStudents}
        onSelectStudent={setSelectedStudent}
      />

      {/* Modal */}

      <OneOnOneModal
        student={selectedStudent}
        onClose={() => setSelectedStudent(null)}
      />

    </div>
  );
}

export default OneOnOne;

