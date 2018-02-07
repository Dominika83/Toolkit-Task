export interface Course {
    id: number;
    category: string;
    title: string;
    author: {
        firstName: string;
        surname: string;
    };
    publishing: string;
    dateRelease: string;
    bestseller: boolean;
}
