import { StatusBar } from "expo-status-bar";
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
    VirtualizedList,
} from "react-native";
import { SearchPlaces } from "./components/SearchPlaces";
import { Map } from "./components/Map";
import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default function App() {
    //location map is targeted at
    const [loc, setLoc] = useState({ lat: 0, lng: 0 });
    const [userLocation, setUserLocation] = useState(undefined);

    //load user location when app starts
    useEffect(() => {
        const getPermissions = async () => {
            //ask for permissions when in use
            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== "granted") {
                console.log("Pleas grant permissions");
                return;
            }

            let currentLocation = await Location.getCurrentPositionAsync({});
            setUserLocation(currentLocation);

            //!
            console.log("userLocation", userLocation);
        };
    }, []);

    return (
        <View>
            <ScrollView
                style={styles.search}
                keyboardShouldPersistTaps={"handled"}>
                <SearchPlaces
                    setMapLoc={setLoc}
                    style={styles.search}></SearchPlaces>
            </ScrollView>
            <Text>
                Map coords{loc.lat} {loc.lng}
            </Text>
            <View style={styles.map}>
                <Map loc={loc}></Map>
            </View>
            <View>
                <Pressable>
                    <Text>look up places</Text>
                </Pressable>
            </View>
        </View>
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
        // zIndex: 10,
        // position: "absolute",
        // left: 0,
        height: "20%",
    },
    map: {
        // zIndex: 1,
        height: "70%",
    },
});
