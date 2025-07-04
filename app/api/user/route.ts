import { connectDb } from "@/lib/mongoose";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req: NextResponse) {
  try {
    await connectDb();
    const { name, email, age } = await req.json();
    if (!name || !email || !age) {
      return NextResponse.json({ message: "Bad request" }, { status: 400 });
    }

    new User({ name, email, age }).save();

    return NextResponse.json(
      { message: "user created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log((error as Error).message);
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 }
    );
  }
}
