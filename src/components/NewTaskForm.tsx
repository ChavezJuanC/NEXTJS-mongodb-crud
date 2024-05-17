"use client";

// Import necessary hooks and functions from react-hook-form and next/navigation
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

// Define the structure of the form inputs
type Inputs = {
  title: string;
  description: string;
};

const NewTaskForm: React.FC = () => {
  const toastIt = (text: string) => {
    toast(text, { duration: 1000 });
  };
  const params = useParams(); // Get URL parameters
  const [fetchedTitle, setFetchedTitle] = useState<string>(""); // State for fetched title
  const [fetchedDescription, setFetchedDescription] = useState<string>(""); // State for fetched description

  // Fetch task data if editing an existing task
  const setTask = async () => {
    const res = await fetch(`/api/tasks/${params.id}`);
    const data = await res.json();
    console.log(data);
    setFetchedTitle(data.title);
    setFetchedDescription(data.description);
  };

  // Delete task function
  const DeleteTask = async () => {
    const res = await fetch(`/api/tasks/${params.id}`, { method: "DELETE" });
    const data = await res.json();
    console.log(data);

    toastIt("Deleting...");

    setTimeout(() => {
      router.push("/"); // Redirect to home page
      router.refresh(); // Refresh the page
    }, 1000);
  };

  // Run effect on mount if params.id is present to set editing state and fetch task data
  useEffect(() => {
    if (params.id) {
      setEditing(true);
      setTask();
    }
  }, []);

  // State to track if form is in editing mode
  const [editing, setEditing] = useState<boolean>(false);

  const router = useRouter(); // Next.js router hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>(); // React Hook Form setup

  // Form submit handler
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      if (!params.id) {
        // Create new task
        const res = await fetch("/api/tasks", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (!res.ok) {
          throw new Error("Failed to post form");
        }
      } else {
        // Update existing task
        const res = await fetch(`/api/tasks/${params.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (!res.ok) {
          throw new Error("Failed to post form");
        }
      }

      toastIt("Saving...");

      setTimeout(() => {
        router.push("/"); // Redirect to home page
        router.refresh(); // Refresh the page
      }, 1000);
    } catch (error) {
      console.log(`Error Posting Task`);
    }
  };

  return (
    <div className='w-5/12 mx-auto bg-white shadow-lg rounded-lg p-8'>
      <h1 className='text-center text-2xl font-bold text-gray-800 mb-6'>
        Task Form
      </h1>
      <div className='text-center'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <div>
            <label className='block text-left text-gray-700 font-medium mb-2'>
              Title:
            </label>
            <input
              type='text'
              defaultValue={fetchedTitle || ""}
              {...register("title", { required: params.id ? false : true })}
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            {errors.title && (
              <span className='text-red-500 text-sm'>
                This field is required
              </span>
            )}
          </div>
          <div>
            <label className='block text-left text-gray-700 font-medium mb-2'>
              Description:
            </label>
            <textarea
              {...register("description", {
                required: params.id ? false : true,
              })}
              defaultValue={fetchedDescription || ""}
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              rows={4}
            />
            {errors.description && (
              <span className='text-red-500 text-sm'>
                This field is required
              </span>
            )}
          </div>
          <div>
            <input
              defaultValue={editing ? "Save" : "Submit"}
              type='submit'
              className='w-full py-2 px-4 bg-gray-900 text-white font-semibold rounded-md hover:bg-gray-950 duration-300 hover:cursor-pointer
              active:-translate-y-0.5 transition-transform'
            />
          </div>
        </form>
        {editing && (
          <button
            className='w-full py-2 px-4 bg-red-900 text-white font-semibold rounded-md hover:bg-red-950 duration-300 hover:cursor-pointer
              active:-translate-y-0.5 transition-transform mt-4'
            onClick={DeleteTask}
          >
            Delete
          </button>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default NewTaskForm; // Export the component as default
