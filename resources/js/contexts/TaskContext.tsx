import { createContext, useContext } from "react";
import { Task } from "@/types/Task";

/**
 * Context Type for Tasks
 * @var taskObjects Array of task objects
 * @function addTask Callback for addTask Method
 */
interface TaskContextType {
    taskObjects: Task[];
    addTask: (title: string, description: string) => void;
    updateTask: (index: number, task: Task) => void;
    deleteTask: (task: Task) => void;
}

/**
 * TaskContext using the TaskContextType
 */
export const TaskContext = createContext<TaskContextType | null>(null);

export const useTaskContext = () => {
    const context = useContext(TaskContext);
    return context;
}