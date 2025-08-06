type InputProps = {
    name: string;
    id: string;
    label: string;
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};


/**
 * A text-area input element
 * 
 * @param {InputProps} props - Component props
 * @param {string} props.name - HTML Name of the input text
 * @param {string} props.id - HTML ID of the input text
 * @param {string} props.label - HTML Label of the input text
 * @param {?string} props.value - (nullable) The value this input text is attached to
 * @param {?function()} onChange - (nullable) HTML Input Change event
 * 
 * @returns {JSX.Element} HTML Input Field + Label
 * 
 * @example
 * <InputTextArea
 *   name='descriptionField'
 *   id='titleField'
 *   value='description'
 *   label='Please enter a description'
 *   onChange={e => setTaskTitle(e.target.value)}
 * />
 */
export default function InputTextArea({name, id, label, value, onChange}: InputProps) {
    return (
        <>
            <div className="my-2 flex flex-col gap-1-2">
                <label htmlFor="{name}">
                    <p className="text-blue-600 font-bold">{label}:</p>
                </label>
                <textarea 
                    className="bg-gray-100 min-h-20 border-slate-600 focus:border-blue-600 border-2" 
                    name={name} 
                    id={id} 
                    value={value}
                    onChange={onChange}
                />
            </div>
        </>
    );
}
