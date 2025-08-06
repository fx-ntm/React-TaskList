import { ReactNode, useState, useEffect } from "react";
import { TaskContext } from "@/contexts/TaskContext";
import { Task } from "@/types/Task";

interface TaskProviderProps{
    children: ReactNode;
}

export default function TaskProvider({children}: TaskProviderProps){
    /** */
    const [taskObjects, setTaskObjects] = useState<Task[]>([]);

    /**
     * Create a new task object
     * @param {string} title Title of the task
     * @param {string} description Description of the task
     * 
     * @example
     * addTask('Boring task', 'Watch "It\'s Raining Tacos" for a hunderth time');
     */
    const addTask = (title: string, description: string) => {
        if (title.trim() !== '' && description.trim() !== '') {
            const newTask: Task = {
                id: Math.floor(Math.random() * 99999),
                taskTitle: title,
                taskDescription: description,
                taskComplete: false,
            }
            const updatedTasks = [...taskObjects, newTask];
            setTaskObjects(updatedTasks);
            saveInStorage(updatedTasks);
        }
    }

    /**
     * Update a task object with new data
     * @param {number} index Index/ID of the task 
     * @param {task} task The task object
     * 
     * @example
     * updateTask(5, updatedTask)
     */
    const updateTask = (index: number, task: Task) => {
        const newTasks = [...taskObjects];
        newTasks[index] = task;
        setTaskObjects(newTasks);
        saveInStorage(newTasks);
    }    

    /**
     * Delete a task object from the task array
     * @param {task} task The task object
     * 
     * @example
     * deleteTask(task)
     */
    const deleteTask = (task: Task) => {
        const id = task.id;
        const filteredTasks = taskObjects.filter(t => t.id !== id);
        setTaskObjects(filteredTasks);
        saveInStorage(filteredTasks);
    }

    /**
     * Load all the tasks from an array of JSONs with the key 'taskObjects'
     * @returns {[]} Array containing 1 key with JSON value and multiple objects
     */
    const loadFromStorage = () => {
        const storedTasks = localStorage.getItem('taskObjects');
        if(storedTasks !== null){
            return JSON.parse(storedTasks) as Task[];
        }
        return []; 
    }

    useEffect(() => {
        const storedTasks = loadFromStorage();
        setTaskObjects(storedTasks);
    }, [])



    /**
     * Save the tasks array into the localStorage
     * @param {[]} tasks An array of task objects
     * 
     * @example
     * // Do your stuff, change and delete or anything
     * // Then call this at the end to persist changes in localStorage
     * saveInStorage(tasks)
     */
    const saveInStorage = (tasks: Task[]) => {
        localStorage.setItem("taskObjects", JSON.stringify(tasks));
    }

    const value = {taskObjects, addTask, updateTask, deleteTask};

    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    )
}