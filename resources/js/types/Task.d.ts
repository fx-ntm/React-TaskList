/**
 * A task object
 * @interface Task
 * 
 * @param {number} Task.id ID of the task
 * @param {string} Task.taskTitle Title of the task
 * @param {string} Task.taskDescription A descriptive text for the task
 * @param {boolean} Task.taskComplete A completion status for the task
 * 
 * @example
 * const newTask: task = {
 *      id: Math.floor(Math.random() * 99),
        taskTitle: 'My Task!',
        taskDescription: 'I have to do a lot of things :(',
        taskComplete: false
 * }
 */
export interface Task {
    id: number,
    taskTitle: string,
    taskDescription: string,
    taskComplete: boolean
}