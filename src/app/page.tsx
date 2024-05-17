import TaskCard from "@/components/TaskCard";
import React from "react";
import { connectDB } from "@/utils/mongoose";
import Task from "@/models/Task";

const Home: React.FC = async () => {
  connectDB();
  const allTask = await Task.find();

  return (
    <div>
      <div>
        <h1 className='font-extrabold text-2xl text-center my-3'>
          Tasks Home Page
        </h1>
      </div>
      <div className='md:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2  mx-auto w-11/12'>
        {allTask.map((element) => (
          <TaskCard task={element} key={element.id}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
