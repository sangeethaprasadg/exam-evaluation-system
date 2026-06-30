import { useState } from "react";

import StudentStats from "./components/StudentStats";
import StudentFilters from "./components/StudentFilters";
import StudentTable from "./components/StudentTable";
import StudentSummaryModal from "./StudentSummaryModal";

import { students } from "./studentData";

function Students() {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const [search, setSearch] = useState("");
  const [batch, setBatch] = useState("All Batches");
  const [program, setProgram] = useState("All Programs");

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.rollNo.includes(search);

    const matchesBatch =
      batch === "All Batches" || student.batch === batch;

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

      {/* Page Heading */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-gray-800">
          Students
        </h1>

        <p className="text-gray-500 mt-2">
          Manage and monitor assigned students.
        </p>

      </div>

      {/* Statistics */}

      <StudentStats />

      {/* Filters */}

      <StudentFilters
        search={search}
        setSearch={setSearch}
        batch={batch}
        setBatch={setBatch}
        program={program}
        setProgram={setProgram}
      />

      {/* Table */}

      <StudentTable
        students={filteredStudents}
        onSelectStudent={setSelectedStudent}
      />

      {/* Modal */}

      <StudentSummaryModal
        student={selectedStudent}
        onClose={() => setSelectedStudent(null)}
      />

    </div>
  );
}

export default Students;