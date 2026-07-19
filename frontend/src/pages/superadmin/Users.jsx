import { useEffect, useState } from "react";
import UserTable from "../../components/users/UserTable";
import UserModal from "../../components/users/UserModal";

function Users() {

  const [users, setUsers] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {

    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      })
      .catch((err) => console.error(err));

  }, []);


const handleToggleStatus = async (user) => {
  try {

    const response = await fetch(
      `http://localhost:3000/api/users/${user._id}/status`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isActive: !user.isActive,
        }),
      }
    );

    const data = await response.json();

    if (data.success) {

      setUsers((prevUsers) =>
        prevUsers.map((u) =>
          u._id === user._id ? data.mentor : u
        )
      );

    } else {

      alert(data.message);

    }

  } catch (error) {

    console.error(error);

  }
};



  return (

    <div className="space-y-6">

      <div className="flex items-center justify-between">

  <div>

    <h1 className="text-3xl font-bold text-gray-800">
      Users Management
    </h1>

    <p className="text-gray-500 mt-1">
      Manage mentors, admins and super admins.
    </p>

  </div>

<button
  onClick={() => setOpenModal(true)}
  className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl font-medium transition"
>
  + Add User
</button>

</div>


<div className="bg-white rounded-xl shadow p-4">

  <input

    type="text"

    placeholder="Search users..."

    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"

  />

</div>



<UserTable
  users={users}
  onEdit={(user) => {
    setSelectedUser(user);
    setOpenModal(true);
  }}
  onToggleStatus={handleToggleStatus}
/>




<UserModal
  isOpen={openModal}
  onClose={() => {
    setOpenModal(false);
    setSelectedUser(null);
  }}
  user={selectedUser}
/>




    </div>

  );

}

export default Users;