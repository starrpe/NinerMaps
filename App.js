/**
 * NinerMaps
 * Main body of the NinerMaps app set-up
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps'

export default class App extends React.Component {
    render() {
        return (
            <View style = { styles.container } >
                /**
                 * Region: initial position of the map is on UNCC lat/long
                 *
                */
                <MapView style={styles.map}
                    region={{
                    latitude: 35.3061950367024,
                    longitude: 80.7344913482666,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1
                    }}
                >
                </MapView>
            </View>
        );//end return
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