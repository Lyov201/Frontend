import type { User } from "../type";

type UserListProps = {
    users: User[];
};

export function UserList({ users }: UserListProps) {
    return (
        <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-100">
            <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
                <h2 className="text-xl font-semibold tracking-tight text-slate-900">User List</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200 text-left">
                    <thead className="bg-slate-50">
                        <tr>
                            {/* <th className="px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">ID</th> */}
                            <th className="px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">Name</th>
                            <th className="px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">Surname</th>
                            <th className="px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">Gender</th>
                            <th className="px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">Salary</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200 bg-white">
                        {users.map((user) => (
                            <tr key={user.id} className="transition hover:bg-slate-50">
                                {/* <td className="px-6 py-4 text-sm text-slate-600">{user.id}</td> */}
                                <td className="px-6 py-4 text-sm font-medium text-slate-900">{user.name}</td>
                                <td className="px-6 py-4 text-sm text-slate-700">{user.surname}</td>
                                <td className="px-6 py-4 text-sm text-slate-700">
                                    <span className="inline-flex rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700">
                                        {user.gender}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-slate-900">{user.salary}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}