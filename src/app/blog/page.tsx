"use client"

import { useTask } from "@/hooks/useTask";

export default function BlogPage() {
    const { tasks } = useTask();
    return (
        <div className="relative h-screen flex flex-col items-center justify-start bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
            <h1 className="text-5xl font-bold mt-20 mb-10">Blog</h1>
            <ul className="max-w-4xl w-full mx-auto bg-gray-800 p-4 rounded-lg shadow-lg">
                {tasks?.map((task) => (
                    <li
                        key={task._id}
                        className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg mb-4 hover:bg-gray-600"
                    >
                        <p className="text-xl font-bold">{task.text}</p>
                        <p className="text-gray-400">{task._id}</p>
                        <p className="text-white px-2 py-1 rounded-full bg-amber-600">{task.isCompleted ? "Completed" : "Not Completed"}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}