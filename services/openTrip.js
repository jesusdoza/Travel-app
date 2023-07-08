import axios from "axios";
import { OPEN_TRIP_KEY } from "react-native-dotenv";
const LANG = "en";
const API_URL = `http://api.opentripmap.com/0.1/${LANG}/places`;

export const OpenTrip = {
    //radius in meters
    getPlacesByRadius: async (lat, lng, radius, limit = 20) => {
        // console.log("get places by radius called", OPEN_TRIP_KEY);
        // console.log("lat", lat);
        // console.log("lng", lng);
        // console.log("radius", radius);
        try {
            const response = await axios.get(`${API_URL}/radius`, {
                params: {
                    radius,
                    lang: "en",
                    lon: lng,
                    lat: lat,
                    apikey: OPEN_TRIP_KEY,
                    limit: limit,
                },
            });
            const featuresList = response.data.features;
            // console.log(featuresList);
            return featuresList;
        } catch (error) {
            console.log("get places by radius error");
        }
    },
};
