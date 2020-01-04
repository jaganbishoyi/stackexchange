export interface Subject {
    id: number;
    name: String;
    sub_heading: string;
    icon: string;
    description: string;
}

export interface Question {
    id: number;
    type: string;
    question: string;
    answer: string;
}