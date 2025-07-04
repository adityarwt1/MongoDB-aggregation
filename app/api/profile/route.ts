import { connectDb } from "@/lib/mongoose";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await connectDb()
        
    } catch (error) {
        
    }
    
}