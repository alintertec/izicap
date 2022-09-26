
import Header from "common/header";
import Input from "common/input";
import Button from "common/button";
import Error from "common/error";
import LocationCoordsModel from 'models/Location';
import { useNavigate } from 'react-router-dom';
import { getLocationByIp } from 'services/locationCoords';
import { Container, Row, Col } from 'react-grid-system';
import { useEffect, useState, useCallback } from 'react';

export default function Home() {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [coords, setCoords] = useState(new LocationCoordsModel());
    const [error, setError] = useState("");

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value)
    }

    const onKeyEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") searchPlaces()
    }

    const searchPlaces = useCallback(async () => {
        if (query !== "") navigate(`/places?query=${query}&lat=${coords.lat}&lon=${coords.lon}`)
    }, [query])

    const getLocation = useCallback(async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position: any) => {
                    const { latitude, longitude } = position.coords;
                    setCoords({ lat: latitude, lon: longitude })
                },
                (error: any) => {
                    setError(error.message)
                });
        }
        else {
            const { success, result, message } = await getLocationByIp()
            if (success) setCoords({ lat: result.lat, lon: result.lon })
            if (!success) setError(message)
        }
    }, [])

    useEffect(() => {
        getLocation();
    }, [])

    if (error) return <Error message={error} />

    return <Container>
        <Row wrap="wrap" align="center" justify="center" style={{ height: "80vh" }}>
            <Col sm={12} md={8}>
                <Header level={2}>PLACES NEAR ME</Header>
                <p>Find the best places to eat, drink, shop or visit near your current location. Access over 75 million tips from local experts.</p>
                <Row wrap="wrap" align="center" >
                    <Col sm={12} md={8} lg={10} >
                        <Input id="query" data-cy="query" name="query" type="text" placeholder="Search for: coffe, bakery, breakfast ..." required value={query} onKeyDown={onKeyEnter} onChange={onChange} />
                    </Col>
                    <Col sm={12} md={4} lg={2}>
                        <Button data-cy="search" form="block" disabled={!query} onClick={searchPlaces}>Search</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container >
}