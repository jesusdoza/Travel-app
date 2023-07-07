import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOG_PLACES_KEY } from "react-native-dotenv";

export function SearchPlaces({ setMapLoc }) {
    const [cords, setCords] = useState({ lat: 0, lng: 0 });

    return (
        <View>
            <Text>SearchPlaces</Text>
            <View keyboardShouldPersistTaps={"handled"}>
                <GooglePlacesAutocomplete
                    placeholder="Search"
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        const cords = details.geometry.location;
                        // console.log("cords", cords);
                        const { lat, lng } = cords;
                        // console.log(lat, lng);
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
            </View>
            <Text>
                Search coords {cords.lat} {cords.lng}
            </Text>
        </View>
    );
}
