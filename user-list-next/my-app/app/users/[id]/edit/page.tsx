'use client'

import { User } from "@/app/(lib)/types"
import axios from "axios";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react"
import { useForm } from "react-hook-form";

type EditUserForm = Omit<User, 'id'>

export default function Edit() {

    const router = useRouter();
    const params = useParams();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<EditUserForm>();

    useEffect(() => {
        axios
            .get(`/api/users/${params.id}`)
            .then(response => {
                reset(response.data);
            })
    }, [params.id, reset]);

    const handleEdit = async (data: EditUserForm) => {
        await axios.patch(`/api/users/${params.id}`, data);
        router.push('/users');
    }



    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-pink-100 px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-xl">
                <div className="rounded-[28px] border border-slate-200/80 bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-8">
                    <div className="mb-8 text-center">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-500">
                            User Profile
                        </p>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Edit User
                        </h1>
                        <p className="mt-3 text-sm text-slate-600 sm:text-base">
                            Update the user information below and save your changes.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(handleEdit)} className="space-y-5">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                                Name
                            </label>
                            <input
                                {...register('name', { required: true })}
                                id="name"
                                type="text"
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm transition duration-200 placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-violet-100"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="surname" className="block text-sm font-medium text-slate-700">
                                Surname
                            </label>
                            <input
                                {...register('surname', { required: true })}
                                id="surname"
                                type="text"
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm transition duration-200 placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-violet-100"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="gender" className="block text-sm font-medium text-slate-700">
                                Gender
                            </label>
                            <select
                                {...register('gender', { required: true })}
                                id="gender"
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm transition duration-200 focus:border-violet-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-violet-100"
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="salary" className="block text-sm font-medium text-slate-700">
                                Salary
                            </label>
                            <input
                                {...register('salary', { valueAsNumber: true, required: true })}
                                id="salary"
                                type="number"
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm transition duration-200 placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-violet-100"
                            />
                        </div>

                        <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                            <Link
                                href="/users"
                                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition duration-200 hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200"
                            >
                                Back to Users
                            </Link>

                            <button

                                type="submit"
                                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition duration-200 hover:brightness-105 focus:outline-none focus:ring-4 focus:ring-violet-200"
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}