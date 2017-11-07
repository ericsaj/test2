export interface Availability {
    M: number;
    T: number;
    W: number;
    Th: number;
    F: number;
    S: number;
    Su: number;
}

export interface Question {
    text: string;
    answer: string;
}

export interface Application {
    id: number;
    name: string;
    position: string;
    applied: string;
    experience: number;
    bookmarked: number;
    availability: Availability;
    questions: Question[];
}