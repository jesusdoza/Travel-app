import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOG_PLACES_KEY } from "react-native-dotenv";

export function SearchBar({ setMapLoc }) {
    const [cords, setCords] = useState({ lat: 0, lng: 0 });

    return (
        <View>
            <FlatList
                style={styles.search}
                keyboardShouldPersistTaps={"handled"}
                ListHeaderComponent={() => (
                    <GooglePlacesAutocomplete
                        placeholder="Search"
                        fetchDetails={true}
                        onPress={(data, details = null) => {
                            const cords = details.geometry.location;
                            console.log("details", details);
                            console.log("data", data);
                            const { lat, lng } = cords;

                            setCords(() => {
                                setMapLoc({ lat, lng });
                                return { lat, lng };
                            });
                        }}
                        query={{
                            key: GOOG_PLACES_KEY,
                            language: "en",
                        }}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    search: {
        backgroundColor: "gray",
    },
});
