import { useState, useMemo } from 'react';
import InputText from '@components/Inputs/InputText';
import DefaultButton from '@components/Inputs/DefaultButton';
import TaskCard from '@components/TaskCard';
import Metrics from '@components/Metrics';
import { useTaskContext } from '@contexts/TaskContext';
import InputTextArea from '@components/Inputs/InputTextArea';

/**
 * Task Manager page
 * @returns {JSX.Element}
 */
export default function TaskManager() {
    /** UI Input Field */
    const [taskTitle, setTaskTitle] = useState('');
    /** UI Input Field */
    const [taskDescription, setTaskDescription] = useState('');
    /** Task Context: Global task management via Context API */
    const context = useTaskContext();

    if (!context) {
        throw new Error('TaskManager must be used within a TaskProvider');
    }
    const { taskObjects, addTask, updateTask, deleteTask } = context;

    /** Insert new tasks into the task array and clean the UI inputs */
    const handleAddTask = () => {
        // Adding the task into the array of tasks
        addTask(taskTitle, taskDescription);
        // Removing user input from the UI input tags
        setTaskTitle('');
        setTaskDescription('');
    }

    /** Statistics counter */
    const metrics = useMemo(() => {
        let completionValue = taskObjects.length == 0 ? "0%" : Math.trunc((taskObjects.filter(t => t.taskComplete !== false).length / taskObjects.length) * 100) + "%";
        return{
            totalTasks: taskObjects.length,
            completedTasks: taskObjects.filter(t => t.taskComplete !== false).length,
            pendingTasks: taskObjects.filter(t => t.taskComplete !== true).length,
            completionPercentage: completionValue,
        }
    }, [taskObjects])

    return (
        <>
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">
                    React Task Manager
                </h1>
                
                <div className="bg-white rounded-lg shadow p-6">
                    <h1 className="text-gray-600 text-2xl">
                        Welcome to the React Task Manager!
                    </h1>
                    <p className="text-xl text-gray-500 mt-2">
                        Powered by 🍪 and 🥛
                    </p>
                    <hr />
                    <div className="task-metrics mt-6">
                        <Metrics 
                            totalTasks={metrics.totalTasks}
                            completedTasks={metrics.completedTasks}
                            pendingTasks={metrics.pendingTasks}
                            completionPercentage={metrics.completionPercentage}
                        />
                    </div>
                    <div className="task-creation-area mt-6">
                        <p className="text-lg">
                            Please fill out your task form to create one!
                        </p>
                         <InputText 
                            name="taskTitle" 
                            id="taskTitle" 
                            label="Task Title" 
                            value={taskTitle} 
                            onChange={e => setTaskTitle(e.target.value)}  
                        />
                        <InputTextArea 
                            name="taskDescription" 
                            id="taskDescription" 
                            label="Task Description" 
                            value={taskDescription} 
                            onChange={e => setTaskDescription(e.target.value)}  
                        />
                        <DefaultButton 
                            label='Add Task!' 
                            functionDestination={handleAddTask}
                        />
                    </div>
                </div>

                <div className="mt-6 pl-4 gap-y-4 gap-x-4 flex sm:flex-row flex-col items-start flex-wrap">
                    {taskObjects.map((task, idx) => (
                        <TaskCard 
                            key={task.id} 
                            task={task} 
                            number={idx+1}
                            onTaskUpdate={(updatedTask) => updateTask(idx, updatedTask)}
                            onTaskDelete={() => deleteTask(task)}
                        />
                    ))}
                </div>
            </div>
        </div>
        <div className="w-full bg-gray-100 p-5">
            <p className='text-center text-xs'>
                This is a React portfolio project utilizing Vite, Tailwind and TypeScript.
                <br />
                ©fx-ntm
            </p>
            <a className='text-center text-xs' href="https://github.com/fx-ntm"><p className='underline text-gray-700 hover:text-gray-500'>Check my GitHub for more!</p></a>
        </div>
        </>
    );
}