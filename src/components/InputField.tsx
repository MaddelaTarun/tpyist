import React from "react";
interface InputFieldProps {
    value: string;
    onChange: (val: string) => void;
    disabled: boolean;
}

const InputField: React.FC<InputFieldProps> = ({value, onChange, disabled}) => {
    return (
        <input
            type="text"
            value={value}
            disabled={disabled}
            onChange={(e)=>onChange(e.target.value)}
            placeholder={disabled?"Time is up!": "Start Typing..."}
            autoFocus
            style={{
                width: '100%',
                marginTop: '20px',
                padding: '15px',
                fontSize: '18px',
                backgroundColor: '#2d2d2d',
                color: '#fff',
                border: '1px solid #444',
                borderRadius: '4px',
                outline: 'none'
            }}
        />
    )
}

export default InputField;