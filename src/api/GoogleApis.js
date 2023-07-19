import axios from "axios";
import { GOOG_PLACES_KEY } from "react-native-dotenv";
const API_KEY = GOOG_PLACES_KEY;

const PLACES_PHOTOS_API = `https://maps.googleapis.com/maps/api/place/photo`;

export const getPlacePhotos = async (photo_reference) => {
    if (photo_reference === "") return "";
    try {
        const imageData = await axios.get(`${PLACES_PHOTOS_API}`, {
            params: {
                maxwidth: 400,
                photo_reference: photo_reference,
                maxheight: 400,
                key: API_KEY,
            },
            responseType: "blob",
        });

        const imageUrl = imageData.request.responseURL;

        return imageUrl;
    } catch (error) {
        console.log("photo ref is ", photo_reference);
        console.log("error at places photos ", error);
    }
};

export const getAddressForCords = async (lat, lng) => {
    const GOOG_GEOCODE_API = `https://maps.googleapis.com/maps/api/geocode/json`;

    const result = await axios.get(`${GOOG_GEOCODE_API}`, {
        params: { latlng: `${lat},${lng}`, key: API_KEY },
    });

    return result.data.results[0].formatted_address;
};

export const getPlaceDetails = async (place_id) => {
    if (place_id === "") return;

    try {
        const detailsData = await axios.get(
            "https://maps.googleapis.com/maps/api/place/details/json",
            {
                params: {
                    place_id,
                    output: "json",
                    key: API_KEY,
                },
            }
        );

        return detailsData.data.result;
    } catch (error) {
        console.log("error getPlaceDetails");
        return "";
    }
};
export const getPhotoRefs = async (place_id) => {
    if (place_id === "") return;

    try {
        const detailsData = await axios.get(
            "https://maps.googleapis.com/maps/api/place/details/json",
            {
                params: {
                    place_id,
                    output: "json",
                    key: API_KEY,
                },
            }
        );
        return detailsData.data.result.photos;
    } catch (error) {
        console.log("error getPhotoRefs", error);
        return "";
    }
};
