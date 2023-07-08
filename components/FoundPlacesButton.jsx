import React from "react";
import { Button } from "react-native-paper";
import { StyleSheet } from "react-native";
import { OpenTrip as PlacesService } from "../services/openTrip";

export default function FoundPlaces({ location, setAttractions }) {
    async function getPlaces() {
        const listOfPlaces = await PlacesService.getPlacesByRadius(
            location.lat,
            location.lng,
            1000,
            20
        );

        setAttractions(listOfPlaces);
    }
    return (
        <Button onPress={getPlaces} mode="contained" style={styles.button}>
            get places
        </Button>
    );
}

const styles = StyleSheet.create({
    button: {
        bottom: 1,
        position: "absolute",
        width: "100%",
    },
});
