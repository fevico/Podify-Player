import { categoriesTypes } from "@utils/category";

export interface AudioData {
    audios: {
        id: string;
        title: string;
        about: string;
        category: categoriesTypes;
        file: string;
        poster?: string;
        owner: {
            name: string;
            id: string;
        };
    }[]
}