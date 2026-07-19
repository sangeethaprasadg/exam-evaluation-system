import { useEffect, useState } from "react";

import StudentStats from "./components/StudentStats";
import StudentFilters from "./components/StudentFilters";
import StudentTable from "./components/MentorStudentTable";
import StudentSummaryModal from "./StudentSummaryModal";

import { useAuth } from "../../auth/AuthContext";

function Students() {

const { mentor } = useAuth();

const [students, setStudents] = useState([]);

  const [selectedStudent, setSelectedStudent] = useState(null);

  const [search, setSearch] = useState("");
  const [batch, setBatch] = useState("All Batches");
  const [program, setProgram] = useState("All Programs");


useEffect(() => {

  if (!mentor) return;

  
    console.log("Mentor ID:", mentor._id);
  

  fetch(
    `http://localhost:3000/api/students/mentor/${mentor._id}`
  )
    .then((res) => res.json())
    .then((data) => {
      setStudents(data.students);
    })
    .catch((err) => console.log(err));

}, [mentor]);


console.log("Students State:", students);


  const filteredStudents = students.filter((student) => {
    const matchesSearch =
    student.studentName.toLowerCase().includes(search.toLowerCase()) ||
    student.rollNumber.includes(search);

   const matchesBatch = true;
const matchesProgram = true;

    return (
      matchesSearch &&
      matchesBatch &&
      matchesProgram
    );
  });


  console.log("Filtered:", filteredStudents);
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

      {/* <StudentStats /> */}

      {/* Filters */}

      {/* <StudentFilters
        search={search}
        setSearch={setSearch}
        batch={batch}
        setBatch={setBatch}
        program={program}
        setProgram={setProgram}
      /> */}

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