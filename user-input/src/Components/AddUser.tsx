import { useForm } from "react-hook-form";
import type { User } from "../type";

type AddUserProps = {
    onAddUser: (user: Omit<User, "id">) => void;
};

type FormValues = {
    name: string;
    surname: string;
    gender: string;
    salary?: number;
};

export function AddUser({ onAddUser }: AddUserProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: {
            name: "",
            surname: "",
            gender: "male",
        },
    });

    const onSubmit = (data: FormValues) => {
        const newUser: Omit<User, "id"> = {
            name: data.name,
            surname: data.surname,
            gender: data.gender,
            salary: typeof data.salary === "number" && Number.isFinite(data.salary)
                ? data.salary
                : 0,
        };

        onAddUser(newUser);
    };

    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <div className="mb-6">
                <h2 className="text-xl font-semibold tracking-tight text-slate-900">Add User</h2>
                <p className="mt-1 text-sm text-slate-500">Create a new employee record.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-slate-700">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Name"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && (
                            <p className="text-sm text-rose-600">{errors.name.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="surname" className="text-sm font-medium text-slate-700">
                            Surname
                        </label>
                        <input
                            id="surname"
                            type="text"
                            placeholder="Surname"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                            {...register("surname", { required: "Surname is required" })}
                        />
                        {errors.surname && (
                            <p className="text-sm text-rose-600">{errors.surname.message}</p>
                        )}
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <label htmlFor="gender" className="text-sm font-medium text-slate-700">
                            Gender
                        </label>
                        <select
                            id="gender"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                            {...register("gender", { required: "Gender is required" })}
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        {errors.gender && (
                            <p className="text-sm text-rose-600">{errors.gender.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="salary" className="text-sm font-medium text-slate-700">
                            Salary
                        </label>
                        <input
                            id="salary"
                            type="number"
                            step="5000"
                            inputMode="numeric"
                            placeholder="Salary"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                            {...register("salary", {
                                required: "Salary is required",
                                valueAsNumber: true,
                                validate: (value) =>
                                    (typeof value === "number" && Number.isFinite(value) && value >= 0)
                                    || "Salary must be a valid number",
                            })}
                        />
                        {errors.salary && (
                            <p className="text-sm text-rose-600">{errors.salary.message}</p>
                        )}
                    </div>
                </div>

                <div className="pt-2">
                    <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-200"
                    >
                        Add User
                    </button>
                </div>
            </form>
        </section>
    );
}