import { model, models, Schema, Document } from "mongoose";
import { title } from "process";

//define interface for document
interface ITask extends Document {
  title: string;
  description: string;
}

//creating the scheman arch.
const TaskSchema: Schema = new Schema(
  {
    title: { type: String, required: true, trim: true, unique: false },
    description: { type: String, required: true, trim: true, unique: false },
  },
  {
    timestamps: true,
  }
);

///export schema (add || for dev)
export default models.Task || model<ITask>("Task", TaskSchema);
