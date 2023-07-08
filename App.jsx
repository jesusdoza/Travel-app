import { StatusBar } from "expo-status-bar";
import { PaperProvider, Button } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
    FlatList,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { SearchPlaces } from "./components/SearchCities";
import { Map } from "./components/Map";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import FoundPlaces from "./components/FoundPlaces";
import { PlaceCard } from "./components/PlaceCard/PlaceCard";

export default function App() {
    //location map is targeted at
    const [loc, setLoc] = useState({ lat: 0, lng: 0 });
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

            let currentLocation = await Location.getCurrentPositionAsync({});
            setUserLocation(currentLocation);
            const { latitude, longitude } = currentLocation.coords;
            // setLoc({ lat: latitude, lng: longitude });
        };

        //get permissions call
        getPermissions();
    }, []);

    return (
        <PaperProvider>
            <SafeAreaProvider>
                <FlatList
                    style={styles.search}
                    ListHeaderComponent={() => (
                        <SearchPlaces
                            setMapLoc={setLoc}
                            style={styles.search}></SearchPlaces>
                    )}
                    keyboardShouldPersistTaps={"handled"}></FlatList>
                {/* <FlatList data={attractions}  /> */}
                <View style={styles.map}>
                    <Map loc={loc}></Map>
                </View>

                <View style={styles.placesControls}>
                    <FoundPlaces
                        setAttractions={setAttractions}
                        location={loc}></FoundPlaces>
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
        backgroundColor: "gray",
    },
    placeCard: {
        zIndex: 10,
    },
});
