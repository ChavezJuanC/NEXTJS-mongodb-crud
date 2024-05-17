import { connectDB } from "@/utils/mongoose";
import { NextRequest } from "next/server";
import Task from "@/models/Task";

///GET by id
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const taskId = params.id;
    const taskDocument = await Task.findById(taskId);

    if (!taskDocument) {
      return Response.json({ message: "Task Id not found" });
    }

    return Response.json(taskDocument);
  } catch (error) {
    return Response.json(
      {
        message: error,
      },
      { status: 400 }
    );
  }
}

//DELETE by id
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const taskId = params.id;
    const documentToDelete = await Task.findByIdAndDelete(taskId);

    if (!documentToDelete) {
      return Response.json({ message: "Task Id not found" }, { status: 404 });
    }
    return Response.json({
      message: `Deleting by id#${params.id}`,
      documentToDelete,
    });
  } catch (error) {
    return Response.json(
      {
        message: error,
      },
      { status: 400 }
    );
  }
}

//UPDATE by id
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const taskId = params.id;
    const data = await request.json();
    const documentToUpdate = await Task.findByIdAndUpdate(taskId, data, {
      new: true,
    });

    return Response.json(documentToUpdate);
  } catch (error) {
    return Response.json({ message: error });
  }
}
