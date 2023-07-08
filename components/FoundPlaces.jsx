import React from "react";
import { Button } from "react-native-paper";
import { StyleSheet } from "react-native";
import { OpenTrip as PlacesService } from "../services/openTrip";
import { View, Text, FlatList } from "react-native";
import { PlaceCard } from "./PlaceCard/PlaceCard";
import Carousel from "react-native-snap-carousel";
// const coordinates= []
//     const id = ''
//     const name=''
//     const type="Feature"
//     const kinds = "kinds": "historic,monuments_and_memorials,urban_environment,cultural,interesting_places,sculptures,monuments",
const FakeData = [
    {
        id: "12334",
        name: "cool place",
        type: "Feature",
        kind: "historic,monuments_and_memorials,urban_environment,cultural,interesting_places,sculptures,monuments",
    },
    {
        id: "1233455534",
        name: "cool place2",
        type: "Feature",
        kind: "historic,monuments_and_memorials,urban_environment,cultural,interesting_places,sculptures,monuments",
    },
    {
        id: "12343434",
        name: "cool place3",
        type: "Feature",
        kind: "historic,monuments_and_memorials,urban_environment,cultural,interesting_places,sculptures,monuments",
    },
];

export default function FoundPlaces({ location, setAttractions }) {
    async function getPlaces() {
        try {
            const listOfPlaces = await PlacesService.getPlacesByRadius(
                location.lat,
                location.lng,
                1000,
                20
            );
            // console.log("listOfPlaces", listOfPlaces);
        } catch (error) {
            console.log("error using places service from foundplacesButton");
        }

        // setAttractions(listOfPlaces);
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
                    data={FakeData}
                    renderItem={(data, index) => {
                        return <PlaceCard placeData={data.item} />;
                    }}></Carousel>
                {/* <FlatList
                    data={FakeData}
                    keyExtraction={(data) => data.id}
                    renderItem={(data) => (
                        <PlaceCard placeData={data.item} />
                    )}></FlatList> */}
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
