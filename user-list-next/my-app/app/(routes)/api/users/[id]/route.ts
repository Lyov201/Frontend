'use server'

import { UserDB } from "@/app/(lib)/model";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const user = await UserDB.findByPk(id);

    if (!user) {
        return NextResponse.json(
            { message: 'Not Found' },
            { status: 404 }
        )
    }

    return NextResponse.json(user);
}

export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
     console.log("PATCH WORKING, ID:", id);
    const data = await request.json();

    await UserDB.update(data, {
        where: {id:id}
    });

    return Response.json({
        message: "user updated"
    });

}