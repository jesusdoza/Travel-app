import { StatusBar } from "expo-status-bar";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SearchPlaces } from "./components/SearchPlaces";
import { Map } from "./components/Map";
import { useState } from "react";


export default function App() {
    const [loc, setLoc] = useState({ lat: 0, lng: 0 });
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
