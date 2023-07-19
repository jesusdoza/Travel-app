import { useQuery, QueryClient } from "react-query";
import { getAddressForCords } from "../api/GoogleApis";

const useGoogleReverseGeocode = (lat, lng) => {
    //when lat and lng are both 0
    // console.log("lat at usegoogleReverseGeo", lat, lng);
    return useQuery({
        queryKey: [`${lat}`, `${lng}`],
        queryFn: () => getAddressForCords(lat, lng),
        enabled: Boolean(lat) && Boolean(lng),
        retry: 1,
    });
};

export default useGoogleReverseGeocode;
