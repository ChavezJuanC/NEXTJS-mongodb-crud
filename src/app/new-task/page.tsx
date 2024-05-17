
import React from "react";
import NewTaskForm from "@/components/NewTaskForm";

const NewTaskPage = () => {
  return (
    <div>
      <h1 className='font-extrabold text-2xl text-center my-3'>New Task</h1>
      <div>
        <NewTaskForm />
      </div>
    </div>
  );
};

export default NewTaskPage;
