export interface Book {
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
