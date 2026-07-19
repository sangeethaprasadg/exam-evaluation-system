import { useEffect, useState } from "react";
import StudentManagementTable from "../../components/students/StudentManagementTable";
import StudentModal from "../../components/students/StudentModal";
import ImportStudentModal from "../../components/students/ImportStudentModal";


//test
import { apiFetch } from "../../utils/api";




function StudentManagement() {
  const [students, setStudents] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [openImportModal, setOpenImportModal] = useState(false); 


  const loadStudents = () => {
    fetch("http://localhost:3000/api/students")
      .then((res) => res.json())
      .then((data) => setStudents(data.students))
      .catch((err) => console.log(err));
  };



  useEffect(() => {
  const test = async () => {
    try {
      const response = await apiFetch(
        "http://localhost:3000/api/students/test"
      );

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  test();
}, []);


  useEffect(() => {
    loadStudents();
  }, []);

  const handleEdit = (student) => {
    setSelectedStudent(student);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setSelectedStudent(null);
    loadStudents();
  };

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold">
            Student Management
          </h1>

          <p className="text-gray-500">
            Manage all Bounce Back students.
          </p>
        </div>
<div className="flex gap-3">

 <button
  onClick={() => setOpenImportModal(true)}
  className="bg-green-600 text-white px-5 py-3 rounded-xl hover:bg-green-700"
>
  ⬆ Import Students
</button>

  <button
    onClick={() => setOpenModal(true)}
    className="bg-purple-600 text-white px-5 py-3 rounded-xl hover:bg-purple-700"
  >
    + Add Student
  </button>

</div>

      </div>


      <StudentManagementTable
        students={students}
        onEdit={handleEdit}
      />

      <StudentModal
        isOpen={openModal}
        onClose={handleClose}
        student={selectedStudent}
      />
  
      <ImportStudentModal
      open={openImportModal}
      onClose={() => setOpenImportModal(false)}
      onImportSuccess={loadStudents}
      />

    </div>
  );
}








export default StudentManagement;