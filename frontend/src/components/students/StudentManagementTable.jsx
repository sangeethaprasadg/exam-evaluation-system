function StudentManagementTable({ students, onEdit }) {
  return (
    <table className="w-full bg-white rounded-xl shadow">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-4 text-left">Roll No</th>
          <th className="p-4 text-left">Student</th>
          <th className="p-4 text-left">Mentor</th>
          <th className="p-4 text-left">Course</th>
          <th className="p-4 text-left">Mode</th>
          <th className="p-4 text-left">Status</th>
          <th className="p-4 text-center">Actions</th>
        </tr>
      </thead>

      <tbody>
        {students.map((student) => (
          <tr
            key={student._id}
            className="border-b hover:bg-gray-50"
          >
            <td className="p-4">
              {student.rollNumber}
            </td>

            <td className="p-4">
              {student.studentName}
            </td>

            <td className="p-4">
              {student.mentorId?.mentorName}
            </td>

            <td className="p-4">
              {student.course}
            </td>

            <td className="p-4">
              {student.sessionMode}
            </td>

            <td className="p-4">
              {student.isActive ? "🟢 Active" : "🔴 Inactive"}
            </td>

            <td className="text-center p-4">
              <button
                onClick={() => onEdit(student)}
                className="text-blue-600 hover:text-blue-800"
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentManagementTable;