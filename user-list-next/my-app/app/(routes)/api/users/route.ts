'use server'
import { db } from "@/app/(lib)/db";
import { UserDB} from "@/app/(lib)/model";

export async function GET() {
    const users = await UserDB.findAll();

    return Response.json(users);
}

export async function POST(req: Request) {
    const data = await req.json();

    const newUser = await UserDB.create(data);

    return Response.json(newUser,{
        status: 201,
    });
}