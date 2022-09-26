import Router from 'components/Router';
import { PlacesContext } from "context/PlacesContext";
import { PlaceType } from "types";
import { useState, useMemo } from "react"


export default function App() {
  const [places, setPlaces] = useState<PlaceType[]>([]);
  const placesStore = useMemo(() => ({ places, setPlaces }), [places]);
  return <PlacesContext.Provider value={placesStore}><Router /></PlacesContext.Provider>
}