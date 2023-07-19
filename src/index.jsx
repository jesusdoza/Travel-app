// import { StatusBar } from "expo-status-bar";
import { PaperProvider, Button } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import { Map } from "./components/Map";
import { useEffect, useState } from "react";
import * as Location from "expo-location";

import SearchBarContainer from "./container/SearchBarContainer";
import FindPlaces from "./components/FoundPlaces";

const DEFAULT_ZOOM = 10;
export default function App() {
    //location map is targeted at

    const [currentMapLocation, setCurrentMapLocation] = useState({
        lat: 0,
        lng: 0,
    });
    const [mapZoom, setMapZoom] = useState(DEFAULT_ZOOM);

    const [userLocation, setUserLocation] = useState(undefined);
    const [attractions, setAttractions] = useState([]);

    //load user location when app starts
    useEffect(() => {
        //definition of get permissions
        const getPermissions = async () => {
            //ask for permissions when in use
            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== "granted") {
                console.log("Please grant permissions");
                return;
            }

            //get user location if user allowed permissions and set state
            let currentLocation = await Location.getCurrentPositionAsync({});
            const { latitude, longitude } = currentLocation.coords;
            setUserLocation({ lat: latitude, lng: longitude });
            setCurrentMapLocation({ lat: latitude, lng: longitude });
        };

        getPermissions();
    }, []);

    return (
        <PaperProvider>
            <SafeAreaProvider>
                <View style={styles.search}>
                    <SearchBarContainer
                        setCurrentMapLocation={setCurrentMapLocation}
                    />
                </View>

                <View style={styles.map}>
                    <Map
                        mapZoom={mapZoom}
                        currentMapLocation={currentMapLocation}></Map>
                </View>

                <View style={styles.placesControls}>
                    <FindPlaces
                        setMapZoom={setMapZoom}
                        setAttractions={setAttractions}
                        location={currentMapLocation}
                        setMapLocation={setCurrentMapLocation}></FindPlaces>
                </View>
            </SafeAreaProvider>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        // position: "relative",
    },
    search: {
        top: 20,
        zIndex: 30,
        position: "absolute",
        width: "100%",
    },
    map: {
        height: "100%",
    },
    placesControls: {
        bottom: 10,
        position: "absolute",
        width: "100%",
        // height: "30%",
        // backgroundColor: "gray",
    },
    placeCard: {
        zIndex: 10,
    },
});
