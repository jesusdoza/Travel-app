import React from "react";
import { SearchBar } from "../components/SearchBar";
import { FlatList } from "react-native";

const SearchBarContainer = ({ setCurrentMapLocation }) => {
    return (
        <FlatList
            ListHeaderComponent={() => (
                <SearchBar setMapLoc={setCurrentMapLocation} />
            )}
            keyboardShouldPersistTaps={"handled"}
        />
    );
};

export default SearchBarContainer;
