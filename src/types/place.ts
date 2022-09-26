export type PlaceType = {
    fsq_id: string
    name: string
    description: string
    email: string
    website: string
    distance: number
    rating: number
    location: {
        address: string
        cross_street: string
        country: string
        formatted_address: string
        region: string
    }
    timezone: string
}

export type PlacePhotoType = {
    id: string
    height: number
    width: number
    prefix: string
    suffix: string
}