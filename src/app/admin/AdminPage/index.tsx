import React from "react";

type Props = {
  users: { name: string; phone: string }[];
};

const AdminPage = ({ users }: Props) => {
  return (
    <div className="p-6 flex flex-col gap-6">
      <h3>Ro'yxatga olinganlar</h3>
      <table className="min-w-full table-auto text-sm xl:text-base">
        <thead>
          <tr className="bg-white border-b border-gray-300 text-gray-400">
            <th className="w-20 py-4">T/r</th>
            <th className="text-left py-4 pl-3">F.I.Sh</th>
            <th className="py-4 pl-3 text-left">Telefon raqam</th>
          </tr>
        </thead>
        <tbody>
          {users.map((n, i: number) => (
            <tr
              key={i}
              className="text-gray-800 odd:bg-white even:bg-grayPrimary !hover:bg-gray-200"
            >
              <td className="w-20 py-4">
                <div className="text-center">{i + 1}</div>
              </td>
              <td className="py-4 overflow-hidden overflow-ellipsis ">
                <div className="flex items-center">{n.name}</div>
              </td>
              <td className="py-4 overflow-hidden overflow-ellipsis ">
                <div className="flex items-center">{n.phone}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
