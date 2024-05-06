import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, View, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const TopBarHome = ({ handlePress }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.proName}>Auction</Text>
            <View style={styles.iconsTopView}>
                <TouchableOpacity onPress={handlePress}>
                    <MaterialCommunityIcons
                        name="magnify"
                        color={"#00000050"}
                        size={32}
                    />
                </TouchableOpacity>

                <MaterialCommunityIcons
                    name="bell"
                    color={"#00000070"}
                    size={31}
                    style={styles.materialIcon}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingTop: 37,
        paddingBottom: 8,
        paddingHorizontal: 20,
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
    },
    proName: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#FF5500",
        borderRadius: 15,
    },
    iconsTopView: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
    },
    materialIcon: {
        marginLeft: 10,
    },
});

export default TopBarHome;
