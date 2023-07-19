import { useQuery, QueryClient } from "react-query";
import { getPhotoRefs } from "../api/GoogleApis";

//get a photo reference frome api from an place_id
const useGoogleGetPhotoRef = (place_id = null) => {
    return useQuery({
        queryKey: [`${place_id}`],
        queryFn: () => getPhotoRefs(place_id),
        retry: 1,
        enabled: Boolean(place_id),
    });
};

export default useGoogleGetPhotoRef;
