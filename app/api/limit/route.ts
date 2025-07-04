import { connectDb } from "@/lib/mongoose";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDb();
    const users = await User.aggregate([
      { $match: { status: "approved" } },
      { $limit: 5 },
    ]);
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    console.log((error as Error).message);
    return NextResponse.json(
      { message: "Intgernal server issue" },
      { status: 500 }
    );
  }
}
