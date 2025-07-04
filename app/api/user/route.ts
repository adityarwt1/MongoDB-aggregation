import { connectDb } from "@/lib/mongoose";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDb();
    const { firstname, lastname, email, age, username } = await req.json();
    if (!firstname || !email || !age) {
      return NextResponse.json({ message: "Bad request" }, { status: 400 });
    }
    const user = new User({
      firstname,
      lastname,
      email,
      age,
      username,
    });
    await user.save();

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
