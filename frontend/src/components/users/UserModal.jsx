
import { useEffect, useState } from "react";


function UserModal({ isOpen, onClose ,user}) {


const emptyForm = {
  mentorName: "",
  email: "",
  role: "mentor",
  course: "",
  mentorCode: "",
  contactNumber: "",
  telegramChatId: "",
};

const [formData, setFormData] = useState(emptyForm);

useEffect(() => {

  if (user) {

    setFormData({
      mentorName: user.mentorName || "",
      email: user.email || "",
      role: user.role || "mentor",
      course: user.course || "",
      mentorCode: user.mentorCode || "",
      contactNumber: user.contactNumber || "",
      telegramChatId: user.telegramChatId || "",
    });

  } else {

    setFormData(emptyForm);

  }

}, [user]);




const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async () => {

  try {

    const url = user
      ? `http://localhost:3000/api/users/${user._id}`
      : "http://localhost:3000/api/users";

    const method = user ? "PUT" : "POST";

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {

      alert(user ? "User updated successfully!" : "User created successfully!");

      onClose();

      window.location.reload();

    } else {

      alert(data.message);

    }

  } catch (error) {

    console.error(error);

    alert("Something went wrong");

  }

};






  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white w-[550px] rounded-2xl shadow-xl p-8">

       <h2 className="text-2xl font-bold mb-6">
  {user ? "Edit User" : "Add User"}
</h2>

        <div className="grid grid-cols-2 gap-4">

          <div>
            <label className="block mb-2 font-medium">
              Name
            </label>

            <input
  type="text"
  name="mentorName"
  value={formData.mentorName}
  onChange={handleChange}
  className="w-full border rounded-lg px-3 py-2"
/>
          </div>

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

          <div>
            <label className="block mb-2 font-medium">
              Role
            </label>

            <select
  name="role"
  value={formData.role}
  onChange={handleChange}
  className="w-full border rounded-lg px-3 py-2"
>
  <option value="mentor">Mentor</option>
  <option value="admin">Admin</option>
  <option value="superadmin">Superadmin</option>
</select>
          </div>

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
  <option value="">Select Course</option>
  <option value="Prime">Prime</option>
  <option value="Bounce Back">Bounce Back</option>
</select>
</div>

          <div>
            <label className="block mb-2 font-medium">
              Mentor Code
            </label>

           <input
  type="number"
  name="mentorCode"
  value={formData.mentorCode}
  onChange={handleChange}
  className="w-full border rounded-lg px-3 py-2"
/>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Contact Number
            </label>

          <input
  type="text"
  name="contactNumber"
  value={formData.contactNumber}
  onChange={handleChange}
  className="w-full border rounded-lg px-3 py-2"
/>
          </div>

        </div>

        <div className="mt-4">

          <label className="block mb-2 font-medium">
            Telegram Chat ID
          </label>

         <input
  type="text"
  name="telegramChatId"
  value={formData.telegramChatId}
  onChange={handleChange}
  className="w-full border rounded-lg px-3 py-2"
/>

        </div>

        <div className="flex justify-end gap-3 mt-8">

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border"
          >
            Cancel
          </button>

        <button
  onClick={handleSubmit}
  className="px-5 py-2 rounded-lg bg-purple-600 text-white"
>
  Save User
</button>

        </div>

      </div>

    </div>

  );

}

export default UserModal;