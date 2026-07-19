import { useEffect, useState } from "react";

function StudentModal({ isOpen, onClose, student }) {
  const emptyForm = {
    rollNumber: "",
    studentName: "",
    phoneNumber: "",
    email: "",
    mentorId: "",
    course: "Bounce Back",
    sessionMode: "Online",
  };

  const [formData, setFormData] = useState(emptyForm);
  const [mentors, setMentors] = useState([]);

  // Load mentors
 
useEffect(() => {
  fetch("http://localhost:3000/api/users/mentors")
    .then((res) => res.json())
    .then((data) => {
      setMentors(data.mentors);
    })
    .catch((err) => console.log(err));
}, []);



  // Edit Student
  useEffect(() => {
    if (student) {
      setFormData({
        rollNumber: student.rollNumber || "",
        studentName: student.studentName || "",
        phoneNumber: student.phoneNumber || "",
        email: student.email || "",
        mentorId: student.mentorId?._id || student.mentorId || "",
        course: student.course || "Bounce Back",
        sessionMode: student.sessionMode || "Online",
      });
    } else {
      setFormData(emptyForm);
    }
  }, [student]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const url = student
        ? `http://localhost:3000/api/students/${student._id}`
        : "http://localhost:3000/api/students";

      const method = student ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert(
          student
            ? "Student updated successfully!"
            : "Student created successfully!"
        );

        onClose();
        window.location.reload();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[650px] rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-6">
          {student ? "Edit Student" : "Add Student"}
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {/* Student Name */}
          <div>
            <label className="block mb-2 font-medium">
              Student Name
            </label>

            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* Roll Number */}
          <div>
            <label className="block mb-2 font-medium">
              Roll Number
            </label>

            <input
              type="text"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 font-medium">
              Phone Number
            </label>

            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* Course */}
          <div>
            <label className="block mb-2 font-medium">
              Course
            </label>

            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="Bounce Back">Bounce Back</option>
            </select>
          </div>

          {/* Session Mode */}
          <div>
            <label className="block mb-2 font-medium">
              Session Mode
            </label>

            <select
              name="sessionMode"
              value={formData.sessionMode}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>
        </div>

        {/* Mentor */}
        <div className="mt-4">
          <label className="block mb-2 font-medium">
            Assigned Mentor
          </label>

          <select
            name="mentorId"
            value={formData.mentorId}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="">Select Mentor</option>

            {mentors.map((mentor) => (
              <option
                key={mentor._id}
                value={mentor._id}
              >
                {mentor.mentorName}
              </option>
            ))}
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-5 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
          >
            Save Student
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentModal;
