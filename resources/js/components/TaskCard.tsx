import { Task } from '@/types/Task';
import EditButton from '@components/Inputs/EditButton';
import CheckmarkButton from '@components/Inputs/CheckmarkButton'
import { useState, memo, useCallback } from 'react';
import SmallButton from '@components/Inputs/SmallButton';

/**
 * Props interface for TaskCard component
 */
type CardProps = {
    task: Task;
    number: number;
    onTaskUpdate?: (updatedTask: Task) => void;
    onTaskDelete?: (task: Task) => void;
};


/**
 * TaskCard component
 * 
 * @param {CardProps} props - Component props
 * @returns {JSX.Element} Rendered task card with interactive functionality
 * 
 * @example
 * <TaskCard 
 *   task={taskObj} 
 *   number={1} 
 *   onTaskUpdate={handleTaskUpdate} 
 * />
 */

const TaskCard = ({task, number, onTaskUpdate, onTaskDelete}: CardProps) => {
    const [editState, setEditState] = useState(false);
    const [editTitle, setEditTitle] = useState(task.taskTitle);
    const [editDescription, setEditDescription] = useState(task.taskDescription);

    /** Enable edit field */
    const editButton = useCallback(() => {
        setEditState(true);
    }, []);
    /**
     * Update state of component with new data
     */
    const saveChanges = useCallback(() => {
        const updatedTask = {
            ...task,
            taskTitle: editTitle,
            taskDescription: editDescription
        };
        if(onTaskUpdate){
            onTaskUpdate(updatedTask);
        }
        setEditState(false);
    }, [task, editTitle, editDescription, onTaskUpdate]); 

    /**
     * Update state of component with old data, discard previous changes
     */
    const cancelChanges = useCallback(() => {
        setEditTitle(task.taskTitle);
        setEditDescription(task.taskDescription);
        setEditState(false);
    }, [task.taskTitle, task.taskDescription]);

    /**
     * Update state of component, mark it as "complete"
     */
    const completeButton = useCallback(() => {
        const updatedTask = {
            ...task,
            taskComplete: !task.taskComplete
        };
        if(onTaskUpdate){
            onTaskUpdate(updatedTask);
        }
    }, [task, onTaskUpdate]);

    /**
     * Update state of component, remove it from render view
     */
    const deleteButton = useCallback(() => {
        if(onTaskDelete){
            onTaskDelete(task);
        }
    }, [task, onTaskDelete]);

    const titleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setEditTitle(e.target.value)
    }, []);

    const descriptionChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEditDescription(e.target.value);
    }, []);

    return (
        <div className="border-xl flex flex-col sm:max-h-128 sm:min-h-28 sm:max-w-9/20 min-w-full sm:min-w-32 rounded border-1 bg-gray-50 p-2 shadow">
            <div className="header-area h-1/4 flex justify-between border-b-2 border-blue-200">
                {editState ? (
                    <input 
                        type="text"
                        value={editTitle}
                        onChange={titleChange}
                        className="text-lg font-bold text-blue-700 bg-transparent border-b border-blue-500 focus:outline-none"
                    />
                ) : (
                    <h4 className={`text-lg font-bold text-blue-700 ${task.taskComplete ? 'line-through opacity-60 text-green-700' : ''}`}>
                        {task.taskTitle}
                    </h4>
                )}
                <h4 className={`text-lg font-bold text-blue-700 ${task.taskComplete ? 'text-green-700 opacity-60' : ''}`}>
                    #{number}
                </h4>
            </div>
            <div className="content-area h-2/4">
                {editState ? (
                    <textarea 
                        value={editDescription}
                        onChange={descriptionChange}
                        className="text-md text-wrap text-black bg-transparent border border-blue-500 focus:outline-none resize-none w-full h-full"
                    />
                ) : (
                    <p className={`text-md text-wrap text-black ${task.taskComplete ? 'line-through opacity-60 text-green-700' : ''}`}>
                        {task.taskDescription}
                    </p>
                )}
            </div>
            <div className="edit-area h-1/4 gap-2 flex justify-end items-center border-t-1 mt-4 pt-2 border-blue-200">
                {editState ? (
                    <>
                        <button onClick={saveChanges} className="mr-2 px-2 py-1 bg-green-500 text-white rounded text-sm">
                            Save
                        </button>
                        <button onClick={cancelChanges} className="px-2 py-1 bg-gray-500 text-white rounded text-sm">
                            Cancel
                        </button>
                    </>
                ) : (
                    <>
                        <EditButton 
                            functionDestination={editButton} 
                        />
                        <CheckmarkButton
                            functionDestination={completeButton}
                        />
                    </>
                )}
                {task.taskComplete ? (
                    <>
                    <div className="text-center">
                        <SmallButton
                            label='Delete Task'
                            color='red'
                            functionDestination={deleteButton}
                        />
                    </div>
                        
                    </>
                ) : (
                    <>
                    </>
                )}
                
            </div>
        </div>
    );
}

export default memo(TaskCard);