function UserTable({ users,onEdit,onToggleStatus }) {

  return (

    <table className="w-full bg-white rounded-xl shadow">

      <thead className="bg-gray-100">

        <tr>

          <th className="text-left p-4">Name</th>

          <th className="text-left p-4">Email</th>

          <th className="text-left p-4">Role</th>

          <th className="text-left p-4">Status</th>

          <th className="text-center p-4">Actions</th>

        </tr>

      </thead>

      <tbody>

        {users.map((user) => (

          <tr
            key={user._id}
            className="border-b hover:bg-gray-50"
          >

            <td className="p-4">
              {user.mentorName}
            </td>

            <td className="p-4">
              {user.email}
            </td>

            <td className="p-4 capitalize">
              {user.role}
            </td>

            <td className="p-4">

              {user.isActive ? "🟢 Active" : "🔴 Inactive"}

            </td>

            <td className="text-center p-4">

             <button
  onClick={() => onEdit(user)}
  className="text-blue-600 hover:text-blue-800 mr-4"
>
  Edit
</button>



            <button
  onClick={() => onToggleStatus(user)}
  className={`${
    user.isActive
      ? "text-red-600 hover:text-red-800"
      : "text-green-600 hover:text-green-800"
  }`}
>
  {user.isActive ? "Deactivate" : "Activate"}
</button>


            </td>

          </tr>

        ))}

      </tbody>

    </table>

  );

}

export default UserTable;