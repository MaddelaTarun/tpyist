export type CharStatus = 'correct' | 'wrong' | 'pending';
export interface GameStats { // Structures the data related to the user's performance.
    wpm: number;
    accuracy: number;
    correctChars: number;
    errorChars: number;
}