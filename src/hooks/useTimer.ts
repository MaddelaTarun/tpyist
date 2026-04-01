import { useCallback, useEffect, useState } from "react";

export const useTimer = (initialTime: number) => {
    // Stores the current countdown value (e.g., 30, 29, 28...)
    const [timeLeft, setTimeLeft] = useState(initialTime); 
    // A boolean flag to track if the clock is currently ticking
    const [isActive, setIsActive] = useState(false); 

    // Memoized function to flip isActive to true; useCallback prevents unnecessary re-renders
    const startTimer = useCallback(() => setIsActive(true), []); 
    
    // Resets the game state to original values; [initialTime] is the dependency for updates
    const resetTimer = useCallback(() => {
        setIsActive(false); // Stop the clock
        setTimeLeft(initialTime); // Put the time back to the starting value (e.g., 30)
    }, [initialTime]);

    // The Side Effect: This "Observer" reacts whenever isActive or timeLeft changes
    useEffect(() => {
        let interval: number; // Placeholder for the browser's timer ID

        // Check: We only tick if the game is active AND there is time remaining
        if (isActive && timeLeft > 0) {
            // Create a 1-second interval and store its ID in the interval variable
            interval = setInterval(() => {
                // Functional update: uses the current state to safely subtract 1
                setTimeLeft((prev) => prev - 1); 
            }, 1000);
        } else if (timeLeft === 0) {
            // Safety check: If the clock hits 0, force the isActive state to false
            setIsActive(false); 
        }
        
        // Cleanup function: Kills the interval when the component unmounts or states change
        return () => clearInterval(interval); 
    }, [isActive, timeLeft]); // Re-run this logic only when these two values change

    // Return an object containing the data and the functions to control it
    return { timeLeft, isActive, startTimer, resetTimer }; 
}