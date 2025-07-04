import { connectDb } from "@/lib/mongoose";
import User from "@/models/user";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDb();

    const id = req.nextUrl.searchParams.get("id");

    // Create match stage conditionally
    const matchStage = id
      ? [{ $match: { _id: new mongoose.Types.ObjectId(id) } }]
      : [];

    const users = await User.aggregate([
      ...matchStage,
      {
        $project: {
          _id: 1,
          fullname: { $concat: ["$firstname", " ", "$lastname"] },
        },
      },
    ]);

    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    console.log((error as Error).message);
    return NextResponse.json(
      { message: "Internal server issue" },
      { status: 500 }
    );
  }
}
