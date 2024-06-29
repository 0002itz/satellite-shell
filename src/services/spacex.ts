import { type APISpaceXResponse } from '../types/api'

export const getLatesLauches = async () => {
    const res = await fetch('https://api.spacexdata.com/v5/Launches/query',{
        method:'POST',
        headers: {
            "Content-Type": "application/jsno",
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix:'asc',
                },
                limit:12,
            },
        })
    })
    const { docs: lauches } = await res.json() as APISpaceXResponse
    return lauches
}