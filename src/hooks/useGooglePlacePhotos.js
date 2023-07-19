import { useQuery, QueryClient } from "react-query";
import { getPlacePhotos } from "../api/GoogleApis.js";

const useGooglePlacePhotos = (photoReference) => {
    return useQuery({
        queryKey: [`${photoReference}`],
        queryFn: () => getPlacePhotos(photoReference),
        retry: 1,
        enabled: Boolean(photoReference),
    });
};

export default useGooglePlacePhotos;
