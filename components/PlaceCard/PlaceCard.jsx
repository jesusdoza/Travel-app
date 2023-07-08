import { View, Image, StyleSheet } from "react-native";
import React from "react";
import { Button, Card, Text } from "react-native-paper";

export function PlaceCard({ placeData }) {
    return (
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

const styles = StyleSheet.create({
    padding: {
        padding: "1%",
        height: "40%",
    },
});
