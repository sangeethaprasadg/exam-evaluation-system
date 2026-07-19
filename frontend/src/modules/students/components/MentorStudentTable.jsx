function MentorStudentTable({
  students,
  onSelectStudent,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="px-6 py-4 text-left">
              Roll No
            </th>

            <th className="px-6 py-4 text-left">
              Student
            </th>

            <th className="px-6 py-4 text-left">
              Mentor
            </th>

            <th className="px-6 py-4 text-left">
              Course
            </th>

            <th className="px-6 py-4 text-left">
              Mode
            </th>

            <th className="px-6 py-4 text-left">
              Status
            </th>

            <th className="px-6 py-4 text-center">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {students.map((student) => (

            <tr
              key={student._id}
              className="border-t hover:bg-purple-50 transition"
            >

              <td className="px-6 py-4">
                {student.rollNumber}
              </td>

              <td className="px-6 py-4">

                <button
                  onClick={() =>
                    onSelectStudent(student)
                  }
                  className="text-purple-600 font-semibold hover:underline"
                >
                  {student.studentName}
                </button>

              </td>

              <td className="px-6 py-4">
                {student.mentorId?.mentorName}
              </td>

              <td className="px-6 py-4">
                {student.course}
              </td>

              <td className="px-6 py-4">
                {student.sessionMode}
              </td>

              <td className="px-6 py-4">
                {student.isActive
                  ? "🟢 Active"
                  : "🔴 Inactive"}
              </td>

              <td className="px-6 py-4 text-center">

                <button
                  onClick={() =>
                    onSelectStudent(student)
                  }
                  className="text-blue-600 hover:underline"
                >
                  View
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      {students.length === 0 && (

        <div className="text-center py-10 text-gray-500">

          No students assigned.

        </div>

      )}

    </div>
  );
}

export default MentorStudentTable;