import TaskManager from "@/components/TaskManager";
import TaskProvider from "@/contexts/TasksContextProvider";

export default function App(){
    return(
        <TaskProvider>
            <TaskManager />
        </TaskProvider>
    )
}