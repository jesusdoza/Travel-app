import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";

//Loc where map should poin to
export const Map = ({ loc }) => {
    let mapRef = null;

    //TODO change view with coords change
    useEffect(() => {
        // console.log("curren loc changed");
        const newView = {
            center: {
                latitude: loc.lat,
                longitude: loc.lng,
            },

            zoom: 10,
        };

        if (this.mapRef) {
            // const point = this.mapRef.pointForCoordinate({Loc.lat,Loc.lng})
            // console.log("camera will update", loc.lat, loc.lng);

            this.mapRef.animateCamera(newView, { duration: 1000 });
        }
    }, [loc]);

    return (
        <View>
            <MapView
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -96.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                ref={(ref) => (this.mapRef = ref)}
                showsPointsOfInterest={true}
                style={styles.map}></MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    map: {
        width: "100%",
        height: "100%",
    },
});
