import Header from "common/header";
import Button from "common/button";
import Image from "common/image";
import Modal from "common/modal";
import Loading from "common/loading";
import Message from "common/message";
import useToggle from "hooks/useToggle";
import { DetailsType, PlaceType, PlacePhoto } from "types";
import { Row, Col } from 'react-grid-system';
import { useEffect, useCallback, useState } from "react";
import { getPlacePhotosById } from 'features/places/placeApi';

export default function PlacePhotos({ item, onClose }: DetailsType<PlaceType>) {
    const [toggle, handleToggle] = useToggle(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [photos, setPhotos] = useState<PlacePhoto[]>([]);

    const getPhotos = useCallback(async () => {
        setIsLoading(true)
        const { success, result, message } = await getPlacePhotosById({ fsq_id: item.fsq_id })
        if (success) setPhotos(result)
        if (!success) setError(message)
        setIsLoading(false)
    }, [item])

    useEffect(() => {
        getPhotos();
    }, [item])

    useEffect(() => {
        if (!toggle) onClose();
    }, [toggle])

    return <Modal open={toggle}>
        <Row wrap="wrap">
            <Col sm={12} >
                <Header level={3}>{item.name}</Header>
                <hr />
            </Col>
            {isLoading && <Col sm={12}><Loading /></Col>}
            {error && <Col sm={12}> <Message message={error} /></Col>}
            {photos.map(photo => <Col sm={12} md={6} lg={4} key={photo.id}>
                <Image height={300} src={`${photo.prefix}300x300${photo.suffix}`} alt="Place image" />
            </Col>)}
            <Col sm={12} className="text-right">
                <Button data-cy="closeModal" color="grey" size="small" onClick={handleToggle}>Close</Button>
            </Col>
        </Row>
    </Modal>
}