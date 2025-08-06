/**
 * Props interface for the MetricsBox component
 * @interface MetricDisplayProps
 * @description Props containing information for the metrics box component
 */
type MetricDisplayProps = {
    /** @description The numeric or string value to display in the metrics box */
    numValue: number|string,
    /** @description The label text to display below the value */
    label: string,
    /** @description Optional color theme for the text (blue, red, green, yellow, purple, pink, gray) */
    color?: string|null
};

/**
 * MetricsBox Component
 * 
 * @component
 * @description A reusable component that displays a single metric value with a label in a styled box
 * 
 * @param {MetricDisplayProps} props - The metrics box data object
 * @param {number|string} props.numValue - The numeric or string value to display
 * @param {string} props.label - The label text to display below the value
 * @param {string|null} [props.color] - Optional color theme for the text
 * 
 * @returns {JSX.Element}
 * 
 * @example
 * ```tsx
 * <MetricsBox 
 *   numValue={42}
 *   label="Total Users"
 *   color="blue"
 * />
 * ```
 */
export default function MetricsBox({numValue, label, color}: MetricDisplayProps){

    /**
     * @param {string} key - Color - Key pairs for Tailwind
     */
    const colorClasses: { [key: string]: string } = {
        blue: 'text-blue-600',
        red: 'text-red-600',
        green: 'text-green-700',
        yellow: 'text-yellow-700',
        purple: 'text-purple-700',
        pink: 'text-pink-700',
        gray: 'text-gray-700',
    };
    /** @var {string} buttonColor A string containing colors from the colorClasses object */
    const textColor = color && colorClasses[color] ? colorClasses[color] : colorClasses.blue;

    return(
        <div className="sm:h-32 sm:w-48 w-4/10 bg-gray-200 border border-gray-600 rounded-lg flex flex-col">
            <div className="sm:h-3/4 sm:w-full h-16 flex justify-center items-center border-b border-gray-600">
                <p className={`text-center text-xl ${color ? textColor :'text-black'}`}>{numValue}</p>
            </div>
            <div className={`h-1/4 w-full text-center ${color ? textColor : 'text-black'}`}>
                {label}
            </div>
        </div>
    )
}