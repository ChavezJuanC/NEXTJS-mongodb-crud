import Task from "@/models/Task";
import { connectDB } from "@/utils/mongoose";
import { NextRequest, NextResponse } from "next/server";

///FETCH ALL TASKS
export async function GET() {
  try {
    await connectDB();
    const tasks = await Task.find();
    return Response.json(tasks);
  } catch (error) {
    return Response.json({ message: error }, { status: 400 });
  }
}

///POST A NEW TASKS
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    //create new task from req body//;
    const data = await request.json();
    const newTask = new Task(data);
    //post the new task//
    const savedTask = await newTask.save();

    return Response.json({ message: "New Task Posted", savedTask });
  } catch (error) {
    return Response.json({ message: error }, { status: 400 });
  }
}
