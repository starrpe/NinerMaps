/**
 * NinerMaps
 * Main body of the NinerMaps app set-up
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps'

                /**
                 * Region: initial position of the map is on UNCC lat/long
                 *
                */
export default class App extends React.Component {
    render() {
        return (
            <View style = { styles.container } >
                <MapView style={styles.map}
                    region={{
                    latitude: 35.303555,
                    longitude: -80.73238,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1
                    }}
                >
                </MapView>
            </View>
        );
     }
}


const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    map: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }

});