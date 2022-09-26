import axios from 'config/axiosConfig';
import { ResponseType } from 'types';

interface IPlaceProps {
    query: string
    lat: string
    lon: string
    limit?: number
}

interface IPhotoProps extends Pick<IPlaceProps, "limit"> {
    fsq_id: string
}

export const getPlaces = async ({ query, lat, lon, limit = 10 }: IPlaceProps): Promise<ResponseType<any>> => {
    try {
        const { data } = await axios.get<any>(`/search?query=${query}&ll=${lat},${lon}&limit=${limit}`);
        return { success: true, result: data.results, message: "" };
    } catch (error) {
        return { success: false, result: [], message: "Something went wrong, please try again later." };
    }
}

export const getPlacePhotosById = async ({ fsq_id, limit = 6 }: IPhotoProps): Promise<ResponseType<any>> => {
    try {
        const { data } = await axios.get<any>(`/${fsq_id}/photos?limit=${limit}`);
        return { success: true, result: data, message: "" };
    } catch (error) {
        return { success: false, result: [], message: "Something went wrong, please try again later." };
    }
}

export const getPlaceById = async (fsq_id: string): Promise<any> => {
    try {
        const { data } = await axios.get<any>(`/${fsq_id}`);
        return data;
    } catch (error) {
        console.log("Error", error)
    }
}