import Link from "next/link";
import React from "react";

//define task prop interface
interface Task {
  title: string;
  description: string;
  id: string;
}

//interface for all props
interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <Link href={`task/${task.id}`}>
      <div className='bg-slate-300 border-2 rounded-md shadow-lg inline-block w-full my-1 md:my-0 p-2'>
        <h1 className='text-lg font-semibold text-slate-950'>{task.title}</h1>
        <div>{task.description}</div>
      </div>
    </Link>
  );
};

export default TaskCard;
