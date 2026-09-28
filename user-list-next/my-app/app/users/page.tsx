'use client'

import axios from "axios"
import { useEffect, useState } from "react"
import { User } from "../(lib)/types"
import Link from "next/link";



export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>('/api/users')
      .then(response => {
        setUsers(response.data);
      })
  }, [])

  const handleDelete = async (id: number) => {
    setUsers(users.filter(user => user.id !== id));

    await axios.delete(`/api/users/${id}`);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-pink-100 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.28em] text-pink-500">
            Team
          </p>
          <h1 className="text-4xl font-black tracking-tight text-slate-800 sm:text-5xl">
            Users List
          </h1>

          <Link href='/users/add' className="text-blue-400 hover:underline text-2xl">Add User</Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {users.map(user => (
            <div
              key={user.id}
              className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-lg shadow-slate-200/70 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-violet-500 text-lg font-bold text-white shadow-md shadow-pink-200">
                  {user.name.charAt(0)}
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600 ring-1 ring-emerald-200">
                  {user.gender}
                </span>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-bold text-slate-800">
                  {user.name} {user.surname}
                </h2>
                <p className="text-sm text-slate-500">Employee profile</p>
              </div>

              <div className="mt-5 border-t border-slate-200 pt-4">
                <p className="text-sm text-slate-500">Salary</p>
                <strong className="text-2xl font-black text-slate-800">
                  ${user.salary}
                </strong>


                <Link

                  href={`/users/${user.id}/edit`}
                  className="text-blue-400 hover:underline ml-4"
                >
                  Edit User
                </Link>

                <button className="ml-4 text-red-500 hover:underline"
                onClick={() => handleDelete(user.id)}> Delete
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}