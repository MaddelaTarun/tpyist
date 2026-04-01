import React from 'react'

interface TextDisplayProps {
    targetText: string;
    userInput: string;
}

const TextDisplay: React.FC<TextDisplayProps> = ({ targetText, userInput }) => {
  return (
    <div
      style={{
        fontSize: "24px",
        letterSpacing: "2px",
        fontFamily: "monospace",
        lineHeight: "1.6",
        backgroundColor: "#1e1e1e", // Professional dark theme look
        color: "#d4d4d4",
        padding: "20px",
        borderRadius: "8px",
        userSelect: "none", // Prevents user from highlighting text during the test
      }}
    >
        {targetText.split("").map((char, index)=> {
            const typedChar = userInput[index];
            let color = '#666';

            if(typedChar!==undefined){
                color=typedChar===char?"#4ade80": "#f87171"
            }
            return (
                <span key={index} style={{ color, borderBottom: typedChar === undefined && index === userInput.length ? '2px solid #4ade80' : 'none' }}>{char}</span>
            )
        })}
    </div>
  );
};

export default TextDisplay;