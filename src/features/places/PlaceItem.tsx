
import styles from "./PlaceItem.module.css";
import Button from "common/button";
import Card from "common/card";
import Header from "common/header";
import PlacePhotos from "./PlacePhotos"
import useComponent from 'hooks/useComponent';
import { PlaceType } from 'types';

interface IProps {
    place: PlaceType;
}

export default function PlaceItem({ place }: IProps) {
    const [component, handleComponent] = useComponent("");

    return <>
        {component === "PlacePhotos" && <PlacePhotos item={place} onClose={() => handleComponent("")} />}
        <Card>
            <div className={styles.place_content} >
                <Header level={4}>{place.name} </Header>
                <hr />
                <div data-cy="placeAddress">{`Address: ${place.location.formatted_address}`}</div>
                <div>{`Region: ${place.location.region}`}</div>
                <div>{`Country: ${place.location.country}`}</div>
                <div>{`Distance: ${place.distance}m`}</div>
                <div>{`Timezone: ${place.timezone}`}</div>
                <Button data-cy="viewPhotos" color="secondary" form="block" size="small" onClick={() => handleComponent("PlacePhotos")}>View Photos</Button>
            </div>
        </Card>
    </>
}