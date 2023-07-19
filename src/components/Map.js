import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

//Loc where map should poin to
export const Map = ({ currentMapLocation, mapZoom = 13 }) => {
    let mapRef = null;

    //update location when location state changes
    useEffect(() => {
        const newView = {
            center: {
                latitude: currentMapLocation.lat,
                longitude: currentMapLocation.lng,
            },

            zoom: mapZoom,
        };

        if (this.mapRef) {
            this.mapRef.animateCamera(newView, { duration: 1000 });
        }
    }, [currentMapLocation]);

    return (
        <View>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -96.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                ref={(ref) => (this.mapRef = ref)}
                showsPointsOfInterest={true}>
                <Marker
                    // currentMapLocation
                    key={"dd"}
                    coordinate={{
                        latitude: currentMapLocation.lat,
                        longitude: currentMapLocation.lng,
                    }}
                    title={"test title"}
                    description={"marker.description"}
                />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    map: {
        width: "100%",
        height: "100%",
    },
});
