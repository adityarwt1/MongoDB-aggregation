import { connectDb } from "@/lib/mongoose";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDb();
    const age = Number(req.nextUrl.searchParams.get("age"));
    const user = await User.aggregate([
      {
        $match: {
          age,
        },
      },
    ]);
    if (!user) {
      return NextResponse.json({ user: [] }, { status: 404 });
    }
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.log((error as Error).message);
    return NextResponse.json(
      { message: "Internal server issue" },
      { status: 500 }
    );
  }
}
