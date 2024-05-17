import { connectDB } from "@/utils/mongoose";

///PING PONG TEST FUNCTION
export async function GET() {
  connectDB();
  return Response.json({
    message: "PONG",
  });
}
