import MetricsBox from "@components/MetricsBox"

/**
 * Props interface for the Metrics component
 * @interface MetricProps
 * @description Props containing information for the metrics component
 */
type MetricProps = {
    /** @description Total number of tasks in the system */
    totalTasks: number,
    /** @description Number of tasks marked as completed */
    completedTasks: number,
    /** @description Number of tasks still pending completion */
    pendingTasks: number,
    /** @description Completion percentage */
    completionPercentage: string
};

/**
 * Metrics Dashboard Component
 * 
 * @component
 * @description A component that displays 4 MetricBox components with custom information
 * 
 * @param {MetricProps} props - The metrics data object
 * @param {number} props.totalTasks - Total number of tasks in the system
 * @param {number} props.completedTasks - Number of completed tasks
 * @param {number} props.pendingTasks - Number of pending tasks  
 * @param {string} props.completionPercentage - Completion percentage as formatted string
 * 
 * @returns {JSX.Element}
 * 
 * @example
 * ```tsx
 * // Basic usage with props
 * <Metrics 
 *   totalTasks={10}
 *   completedTasks={8}
 *   pendingTasks={2}
 *   completionPercentage="80%"
 * />
 * ```
 */
export default function Metrics({totalTasks, completedTasks, pendingTasks, completionPercentage}: MetricProps){
    return(
        <>
            <div className="bg-gray-100 p-3">
                <div className="metrics-holder flex flex-row lg:gap-x-2 md:gap-x-32 sm:gap-x-8 sm:gap-y-2 gap-x-2 gap-y-4 flex-wrap justify-center">
                    <MetricsBox
                        numValue={totalTasks}
                        label="Current Tasks"
                        color="yellow"
                    />
                    <MetricsBox
                        numValue={completedTasks}
                        label="Completed Tasks"
                        color="green"
                    />
                    <MetricsBox
                        numValue={pendingTasks}
                        label="Pending Tasks"
                        color="red"
                    />
                    <MetricsBox
                        numValue={completionPercentage}
                        label="Completion Percentage"
                        color="blue"
                    />
                </div>
            </div>
        </>
    )
}