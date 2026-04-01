export type CharStatus = 'correct' | 'wrong' | 'pending';
export interface GameStats {
    wpm: number;
    accuracy: number;
    correctChars: number;
    errorChars: number;
}