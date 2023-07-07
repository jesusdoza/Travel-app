import axios from "axios";
import { OPEN_TRIP_KEY } from "react-native-dotenv";
const LANG = "en";
const API_URL = `http://api.opentripmap.com/0.1/${LANG}/places`;

export const OpenTrip = {
    //radius in meters
    getPlacesByRadius: (place, radius, lat, lon) => {
        console.log("get places by radius called", OPEN_TRIP_KEY);

        // axios.get(`${API_URL}/radius`, { params: { radius: 10000, lang:'en',lon:lon, lat:lat ,apikey:} });
    },
};
