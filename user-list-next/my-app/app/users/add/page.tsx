'use client'

import { User } from "@/app/(lib)/types";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

type UserForm = Omit<User, 'id'>

export default function AddUser() {
    const router = useRouter();
    const {register, handleSubmit, formState:{errors}} = useForm<UserForm>()
    const handleAdd:SubmitHandler<UserForm> = async (data) => {
        try{
            const response = await axios.post('/api/users', data);
            router.push("/users");
        }
        catch(err) {
            console.error(err);
        }
    }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-violet-100 px-4 py-10">
      <div className="mx-auto max-w-2xl rounded-[30px] border border-violet-100 bg-white/80 p-6 shadow-[0_20px_60px_rgba(168,85,247,0.12)] backdrop-blur-sm sm:p-8">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.32em] text-violet-500">
            User
          </p>
          <h1 className="text-3xl font-black tracking-tight text-slate-800 sm:text-4xl">
            Add New User
          </h1>
        </div>

        <form onSubmit={handleSubmit(handleAdd)}
        className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Name</span>
              <input
              {...register('name')}
                type="text"
                placeholder="Enter name"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder:text-slate-400 shadow-sm outline-none transition duration-200 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Surname</span>
              <input
                {...register('surname')}
                type="text"
                placeholder="Enter surname"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder:text-slate-400 shadow-sm outline-none transition duration-200 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100"
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Gender</span>
            <select
            {...register('gender')}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 shadow-sm outline-none transition duration-200 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100"
              defaultValue=""
            >
              <option value="" disabled>
                Select gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Salary</span>
            <input
            {...register('salary', {valueAsNumber: true})}
              type="number"
              placeholder="Enter salary"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder:text-slate-400 shadow-sm outline-none transition duration-200 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-pink-500 px-4 py-3.5 text-base font-semibold text-white shadow-lg shadow-violet-200 transition duration-200 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-violet-100"
          >
            Add User
          </button>
        </form>
      </div>
    </main>
  );
}