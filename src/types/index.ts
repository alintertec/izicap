export type Colors = "primary" | "secondary" | "tertiary" | "grey";

export type Sizes = "large" | "medium" | "small";

export type Levels = 1 | 2 | 3 | 4 | 5 | 6;

export type ResponseType<T> = {
    success: boolean,
    result: T,
    message: string
}

export type DetailsType<T> = {
    onClose: () => void,
    item: T
}

export type { PlaceType, PlacePhoto } from "./place"