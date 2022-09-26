import { createContext } from "react";
import { PlaceType } from "types";

interface IPlacesContext {
    places: PlaceType[]
    setPlaces: any
}

export const PlacesContext = createContext<IPlacesContext>({
    places: [],
    setPlaces: () => { }
}); 
