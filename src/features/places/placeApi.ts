import axios from 'config/axiosConfig';
import { ResponseType, PlaceType, PlacePhotoType } from 'types';

interface IPlacesResponse {
    context: any
    results: PlaceType[]
}

interface IPlacesProps {
    query: string
    lat: string
    lon: string
    limit?: number
}

interface IPhotoProps extends Pick<IPlacesProps, "limit"> {
    fsq_id: string
}

export const getPlaces = async ({ query, lat, lon, limit = 10 }: IPlacesProps): Promise<ResponseType<PlaceType[]>> => {
    try {
        const { data } = await axios.get<IPlacesResponse>(`/search?query=${query}&ll=${lat},${lon}&limit=${limit}`);
        return { success: true, result: data.results, message: "" };
    } catch (error) {
        return { success: false, result: [], message: "Something went wrong, please try again later." };
    }
}

export const getPlacePhotosById = async ({ fsq_id, limit = 6 }: IPhotoProps): Promise<ResponseType<PlacePhotoType[]>> => {
    try {
        const { data } = await axios.get<PlacePhotoType[]>(`/${fsq_id}/photos?limit=${limit}`);
        return { success: true, result: data, message: "" };
    } catch (error) {
        return { success: false, result: [], message: "Something went wrong, please try again later." };
    }
}

export const getPlaceById = async ({ fsq_id }: IPhotoProps): Promise<ResponseType<PlaceType | null>> => {
    try {
        const { data } = await axios.get<PlaceType>(`/${fsq_id}`);
        return { success: true, result: data, message: "" };
    } catch (error) {
        return { success: false, result: null, message: "Something went wrong, please try again later." };
    }
}