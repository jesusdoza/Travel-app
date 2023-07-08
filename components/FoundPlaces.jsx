import React, { useState } from "react";
import { Button } from "react-native-paper";
import { StyleSheet } from "react-native";
import { OpenTrip as PlacesService } from "../services/openTrip";
import { View, Text, FlatList } from "react-native";
import { PlaceCard } from "./PlaceCard/PlaceCard";
import Carousel from "react-native-snap-carousel";

// const FakeData = [
//     {
//         id: "12334",
//         name: "cool place",
//         type: "Feature",
//         kind: "historic,monuments_and_memorials,urban_environment,cultural,interesting_places,sculptures,monuments",
//     },
//     {
//         id: "1233455534",
//         name: "cool place2",
//         type: "Feature",
//         kind: "historic,monuments_and_memorials,urban_environment,cultural,interesting_places,sculptures,monuments",
//     },
//     {
//         id: "12343434",
//         name: "cool place3",
//         type: "Feature",
//         kind: "historic,monuments_and_memorials,urban_environment,cultural,interesting_places,sculptures,monuments",
//     },
// ];

export default function FoundPlaces({ location, setAttractions }) {
    //get list of places  form places service

    const [listOfPlaces, setListOfPlaces] = useState([]);

    async function getPlaces() {
        try {
            const listOfPlaces = await PlacesService.getPlacesByRadius(
                location.lat,
                location.lng,
                1000,
                20
            );

            //format data to fit the placeCard component
            const placeCardFormat = listOfPlaces.map((data) => {
                return {
                    id: data.id,
                    name: data.properties.name
                        ? data.properties.name
                        : "Nearby",
                    type: data.type,
                    cords: data.geometry,
                    wikidata: data.properties.wikidata,
                };
            });
            setListOfPlaces(placeCardFormat);
        } catch (error) {
            console.log("error using places service from foundplacesButton");
        }
    }
    return (
        <View>
            <View style={styles.carouselContainer}>
                <Text>places list here</Text>
                <Carousel
                    sliderWidth={400}
                    // sliderHeight={200}
                    itemWidth={250}
                    // itemHeight={200}
                    data={listOfPlaces}
                    renderItem={(data, index) => {
                        return <PlaceCard placeData={data.item} />;
                    }}></Carousel>
            </View>
            <Button onPress={getPlaces} mode="contained" style={styles.button}>
                get places
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        bottom: 1,
        // position: "absolute",
        width: "100%",
    },
    carouselContainer: {
        borderBottomColor: "green",
        width: "100%",
        zIndex: 20,
    },
});
