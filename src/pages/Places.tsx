
import Button from "common/button";
import Message from "common/message";
import PlaceItem from "features/places/PlaceItem";
import Loading from "common/loading";
import Error from "common/error";
import { PlacesContext } from "context/PlacesContext";
import { Container, Row, Col } from 'react-grid-system';
import { useState, useMemo, useCallback, useEffect, useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getPlaces } from 'features/places/placeApi';

export default function Places() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [query] = useState(searchParams.get("query") || "");
    const [lat] = useState(searchParams.get("lat") || "");
    const [lon] = useState(searchParams.get("lon") || "");
    const { places, setPlaces } = useContext(PlacesContext);
    const ifPlaces = useMemo(() => places.length > 0, [places]);

    const searchPlaces = useCallback(async () => {
        setIsLoading(true)
        const { success, result, message } = await getPlaces({ query, lat, lon })
        if (success) setPlaces(result)
        if (!success) setError(message)
        setIsLoading(false)
    }, [query, lat, lon])

    const searchAgain = useCallback(() => {
        setPlaces([])
        navigate("/")
    }, [])

    useEffect(() => { searchPlaces(); }, [searchParams])

    if (isLoading) return <Loading />
    if (error) return <Error message={error} />

    return <Container>
        <Row wrap="wrap">
            {ifPlaces && places.map(place =>
                <Col data-cy="places" sm={12} md={6} lg={4} className="pa-xsm" key={place.fsq_id} >
                    <PlaceItem place={place} />
                </Col>)}
            {!ifPlaces && !isLoading && <Col data-cy="noPlaces" sm={12} className="text-center">
                <Message size="large" message={`We couldn't find any result for "${query}".`} />
            </Col>}
            <Col sm={12} className="text-center">
                <Button data-cy="searchAgain" color="primary" onClick={searchAgain}>Search Again</Button>
            </Col>
        </Row>
    </Container>
}