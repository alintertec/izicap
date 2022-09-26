import { ResponseType } from 'types';

export const getLocationByIp = async (): Promise<ResponseType<any>> => {
    try {
        const response = await fetch('http://ip-api.com/json?fields=lat,lon');
        const data = await response.json()
        return { success: true, result: data, message: "" }
    }
    catch (error) {
        return { success: true, result: null, message: "Something went wrong, please try again later." }
    }
}


