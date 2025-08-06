type ButtonProps = {
    functionDestination: ()=> void;
};

/**
 * A small-sized React button with a checkmark SVG
 * @param {Function} functionDestination - The function the button should trigger
 * @returns {JSX.Element}
 * 
 * @example
 * <CheckmarkButton 
 *   functionDestination={completeButtonTask}
 * />
 */
export default function CheckmarkButton({functionDestination}: ButtonProps) {
    return(
        <button 
            onClick={functionDestination}
            className="hover:bg-gray-200 px-1 py-1"
        >
            <svg 
                viewBox="0 0 2000 1700" 
                fill="#000000" 
                height="16px" 
                width="16px" 
                version="1.1" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlSpace="preserve" 
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <g>
                    <path 
                        fillRule="evenodd" 
                        clipRule="evenodd" 
                        d="M1827.701 303.065 698.835 1431.801 92.299 825.266 0 917.564 698.835 1616.4 1919.869 395.234z"
                    />
                </g>
            </svg>
        </button>
    );
}