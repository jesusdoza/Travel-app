// import { StatusBar } from "expo-status-bar";
import { PaperProvider, Button } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import { FlatList, StyleSheet, Text, View } from "react-native";
// import { SearchPlaces } from "./src/components/SearchCities";
// import { Map } from "./src/components/Map";
// import { useEffect, useState } from "react";
// import * as Location from "expo-location";
// import FoundPlaces from "./src/components/FoundPlaces";

import Main from "./src";

// const DEFAULT_ZOOM = 10;
// export default function App() {
//     //location map is targeted at

//     const [currentMapLocation, setCurrentMapLocation] = useState({
//         lat: 0,
//         lng: 0,
//     });
//     const [mapZoom, setMapZoom] = useState(DEFAULT_ZOOM);

//     const [userLocation, setUserLocation] = useState(undefined);
//     const [attractions, setAttractions] = useState([]);

//     //load user location when app starts
//     useEffect(() => {
//         //definition of get permissions
//         const getPermissions = async () => {
//             //ask for permissions when in use
//             let { status } = await Location.requestForegroundPermissionsAsync();

//             if (status !== "granted") {
//                 console.log("Please grant permissions");
//                 return;
//             }

//             //get user location if user allowed permissions and set state
//             let currentLocation = await Location.getCurrentPositionAsync({});
//             setUserLocation(currentLocation);
//             const { latitude, longitude } = currentLocation.coords;
//         };

//         getPermissions();
//     }, []);

//     return (
//         <PaperProvider>
//             <SafeAreaProvider>
//                 <FlatList
//                     style={styles.search}
//                     ListHeaderComponent={() => (
//                         <SearchPlaces
//                             setMapLoc={setCurrentMapLocation}
//                             style={styles.search}></SearchPlaces>
//                     )}
//                     keyboardShouldPersistTaps={"handled"}></FlatList>
//                 <View style={styles.map}>
//                     <Map
//                         mapZoom={mapZoom}
//                         currentMapLocation={currentMapLocation}></Map>
//                 </View>

//                 <View style={styles.placesControls}>
//                     <FoundPlaces
//                         setMapZoom={setMapZoom}
//                         setAttractions={setAttractions}
//                         location={currentMapLocation}
//                         setLocation={setCurrentMapLocation}></FoundPlaces>
//                 </View>
//             </SafeAreaProvider>
//         </PaperProvider>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center",
//         // position: "relative",
//     },
//     search: {
//         top: 20,
//         zIndex: 30,
//         position: "absolute",
//         width: "100%",
//     },
//     map: {
//         height: "100%",
//     },
//     placesControls: {
//         bottom: 10,
//         position: "absolute",
//         width: "100%",
//         // height: "30%",
//         // backgroundColor: "gray",
//     },
//     placeCard: {
//         zIndex: 10,
//     },
// });
const App = () => (
    <PaperProvider>
        {/* <QueryClientProvider client={queryClient}> */}
        <SafeAreaProvider>
            <Main />
        </SafeAreaProvider>
        {/* </QueryClientProvider> */}
    </PaperProvider>
);

export default App;
