import React from "react";
import { View, StyleSheet } from "react-native";
import { PlaceCard } from "../components/PlaceCard/PlaceCard";

const PlaceCardContainer = ({ placeData }) => {
    const { name, type } = placeData;
    return <PlaceCard name={name} type={placeData.type}></PlaceCard>;
};

const styles = StyleSheet.create({});

export default PlaceCardContainer;
