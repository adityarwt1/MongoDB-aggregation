import { connectDb } from "@/lib/mongoose";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectDb();
    const totaluser = await User.countDocuments();
    return NextResponse.json({ totaluser }, { status: 200 });
  } catch (error) {
    console.log((error as Error).message);
    return NextResponse.json(
      { message: "Internal server issue" },
      { status: 500 }
    );
  }
}
