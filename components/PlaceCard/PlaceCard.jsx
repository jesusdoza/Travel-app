import { View, Image, StyleSheet } from "react-native";
import React from "react";
import { Button, Card, Text } from "react-native-paper";

export function PlaceCard({ placeData }) {
    // console.log("placeData", placeData);
    return (
        // <View style={styles.padding}>
        //     <Text>{placeData.id}</Text>
        //     <Text>{placeData.name}</Text>
        //     <Text>{placeData.type}</Text>
        // </View>
        <Card>
            {/* <Card.Title title={placeData.name} subtitle={placeData.name} /> */}
            <Card.Content>
                <Text variant="titleLarge">{placeData.name}</Text>
                <Text variant="bodyMedium">{placeData.type}</Text>
            </Card.Content>
            <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
            <Card.Actions>
                <Button>Back To City</Button>
                <Button>Go To</Button>
            </Card.Actions>
        </Card>
    );
}

/* 
sample object
{
        "geometry": {
            "coordinates": [Array
            ],
            "type": "Point"
        },
        "id": "11619590",
        "properties": {
            "dist": 22.88909558,
            "kinds": "historic,monuments_and_memorials,urban_environment,cultural,interesting_places,sculptures,monuments",
            "name": "Three Forms Vertebrae",
            "osm": "node/6990912652",
            "rate": 1,
            "wikidata": "Q19759425",
            "xid": "N6990912652"
        },
        "type": "Feature"
    },
*/

const styles = StyleSheet.create({
    padding: {
        padding: "1%",
        height: "40%",
    },
});
