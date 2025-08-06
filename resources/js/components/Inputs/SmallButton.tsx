type ButtonProps = {
    label: string;
    color?: string;
    functionDestination: () => void;
};

/**
 * A small-sized React button
 * @param {string} label - The text that should appear on the button
 * @param {?string} color - The Tailwind color the button should have (nullable)
 * @param {function()} functionDestination - The function the button should trigger
 * @returns {JSX.Element}
 *
 * @example
 * <DefaultButton
 *   label='Click me if you dare!'
 *   color='red'
 *   functionDestination={completeButtonTask}
 * />
 */
export default function SmallButton({ label, functionDestination, color }: ButtonProps) {
    /**
     * @param {string} key - Color - Key pairs for Tailwind
     */
    const colorClasses: { [key: string]: string } = {
        blue: 'bg-blue-600 hover:bg-blue-700',
        red: 'bg-red-600 hover:bg-red-700',
        green: 'bg-green-600 hover:bg-green-700',
        yellow: 'bg-yellow-600 hover:bg-yellow-700',
        purple: 'bg-purple-600 hover:bg-purple-700',
        pink: 'bg-pink-600 hover:bg-pink-700',
        gray: 'bg-gray-600 hover:bg-gray-700',
    };
    /** @var {string} buttonColor A string containing colors from the colorClasses object */
    const buttonColor = color && colorClasses[color] ? colorClasses[color] : colorClasses.blue;

    return (
        <button className={`rounded p-1 text-xs text-white transition-colors ${color ? buttonColor : 'bg-blue-600'} `} onClick={functionDestination}>
            <p>{label}</p>
        </button>
    );
}
